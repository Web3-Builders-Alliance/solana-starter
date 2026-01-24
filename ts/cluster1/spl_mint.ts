import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import wallet from "../wba-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/FQHmKHAxCcEgQOwt3dAwCYdNxKGlWY4q", commitment);

const token_decimals = 1_000_000_000n;

// Mint address
const mint = new PublicKey("RZvyb428vaECNouhkkSfAaVZdNZxESov1cKMxKAsN8v");

(async () => {
    try {
         
         const ata =await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            keypair.publicKey
         )
         console.log(`Your ata is: ${ata.address.toBase58()}`);

                const mintTx = await mintTo(
            connection,
            keypair,
            mint,
            ata.address,
            keypair,
            10n * token_decimals // Minting 10 tokens
        );
        console.log(`Your mint txid: ${mintTx}`);
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()

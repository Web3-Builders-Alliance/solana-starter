import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import wallet from "../wba-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const token_decimals = 1_000_000n;

// Mint address
const mint = new PublicKey("HAjZU5gQWrEoQJWxQGT1JjjQQab3k5Mt9YAQb9moaGsr");

(async () => {
    try {
        // Create an ATA
        const ata = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            keypair.publicKey
          )
        console.log(`Your ata is: ${ata.address.toBase58()}`);
        // 7N1ScVgffNPWEFbiwkMQfwUa2sXKXZfuQdVvUBFiDzPN

        // Mint to ATA
        const mintTx = await mintTo(
            connection,
            keypair,
            mint,
            ata.address,
            keypair.publicKey,
            100n * token_decimals // because decimals for the mint are set to 9 
          )
        console.log(`Your mint txid: ${mintTx}`);
        // 4ZMmeFBxxpCu71diQSXTD3vDWrwYbzqXEfK7hZmMwU3irrse71KXAPVLFwWJwAjg1NiBAHEDHbRVBjmgoefkrghW
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()

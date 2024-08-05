import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import wallet from "../wba-wallet.json"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("J533F8gSLnN94qQsu2TCNk2yvdq9bG26sevk9wPURpiq");

// Recipient address
const to = new PublicKey("HyonB2ydDAT13yYhL21h1xL6xRQwVcoUE3De4BARDam7");

(async () => {
    try {
        // Get the token account of the fromWallet address, and if it does not exist, create it
        const ataFromWallet = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, keypair.publicKey);
        console.log(`ataFromWallet ata is: ${ataFromWallet.address.toBase58()}`);
        // Get the token account of the toWallet address, and if it does not exist, create it
        const ataToWallet = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, to);
        console.log(`ataToWallet ata is: ${ataFromWallet.address.toBase58()}`);
        // Transfer the new token to the "toTokenAccount" we just created
        const signature = await transfer(
            connection,
            keypair,
            ataFromWallet.address,
            ataToWallet.address,
            keypair,
            10
        );

        console.log(`Transfer signature: ${signature}`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();
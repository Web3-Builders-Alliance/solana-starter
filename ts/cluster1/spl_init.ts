import { Keypair, Connection, Commitment, clusterApiUrl } from "@solana/web3.js";
import { createMint } from '@solana/spl-token';
import wallet from "../wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const connection = new Connection (clusterApiUrl("devnet"), "confirmed");
// Optional: Specify commitment level
// const commitment: Commitment = "confirmed";
// const connection = new Connection("https://api.devnet.solana.com", commitment);

(async () => {
    try {
        // Start here
        const mint = await createMint(
            connection,
            keypair,
            keypair.publicKey,
            null,
            6
        );
        console.log(`Successflly created mint: ${mint.toBase58()}`);
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()

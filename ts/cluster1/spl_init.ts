import { Keypair, Connection, Commitment } from "@solana/web3.js";
import { createMint } from '@solana/spl-token';
import wallet from "../wba-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/FQHmKHAxCcEgQOwt3dAwCYdNxKGlWY4q", commitment);

(async () => {
    try {
        const mint = await createMint(
            connection,
            keypair,
            keypair.publicKey,
            keypair.publicKey,
            10
          
        )
        console.log("Mint Address: ", mint.toBase58());
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()

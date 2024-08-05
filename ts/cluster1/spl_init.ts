import { Keypair, Connection, Commitment } from "@solana/web3.js";
import { createMint } from '@solana/spl-token';
import wallet from "../wba-wallet.json"

// my pub Key -> 6EsRadWwgopHPNZvF64zewX8Pgd2svTDUJ3rtStBreKH

// Import our keypair from the wallet file 
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

(async () => {
    try {
        // Start here
        const decimals = 6;
        const mint = await createMint(connection, keypair, keypair.publicKey, null, decimals);
        console.log(mint.toBase58()); // CaM8WkKBh7khK7GfZEX3VjAddAoNqRKV6DhcpTPa8Sx2
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()

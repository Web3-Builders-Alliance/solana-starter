import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import wallet from "../wba-wallet.json"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/FQHmKHAxCcEgQOwt3dAwCYdNxKGlWY4q", commitment);

// Mint address
const mint = new PublicKey("RZvyb428vaECNouhkkSfAaVZdNZxESov1cKMxKAsN8v");

// Recipient address
const to = new PublicKey("6FbDD2W9psmhZFSacbkxWbQzRKRbhWDKG5UB82w1qCtH");

(async () => {
    try {
         // Get the token account of the fromWallet address, and if it does not exist, create it
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey,
    );
    console.log(`Your ata is: ${fromTokenAccount.address.toBase58()}`);
    // Get the token account of the toWallet address, and if it does not exist, create it
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      to,
    );
    console.log(`Your to ata is: ${toTokenAccount.address.toBase58()}`);
    // Transfer the new token to the "toTokenAccount" we just created
    
    const token_decimals = 1_000_000_000n;

    const transferTx = await transfer(
      connection,
      keypair,
      fromTokenAccount.address,
      toTokenAccount.address,
      keypair,
      1n * token_decimals // Transferring 1 token
    );
    console.log(`Your transfer txid: ${transferTx}`);
        
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();
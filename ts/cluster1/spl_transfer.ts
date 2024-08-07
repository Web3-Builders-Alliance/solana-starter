import { Commitment, Connection, Keypair, PublicKey } from "@solana/web3.js";
import wallet from "../wba-wallet.json";
import {
    getOrCreateAssociatedTokenAccount,
    transfer
} from "@solana/spl-token";

// Import the keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address (replace with actual mint address)
const mint = new PublicKey("HAjZU5gQWrEoQJWxQGT1JjjQQab3k5Mt9YAQb9moaGsr");

// Recipient address (replace with actual receiver address)
const to = new PublicKey("Ggf2fAL1TPPeJ4itJFNJ6JHvoy5EVS2jScqNXG2UMKvy");

(async () => {
    try {
        // Get or create the associated token account for the sender
        const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            keypair.publicKey
        );

        // Get or create the associated token account for the recipient
        const toTokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            to
        );

        // Amount to transfer (in smallest unit of the token, e.g., for 1 token with 9 decimals, use 1000000000)
        const amount = 10n * 1_000_000n; // takin 6 decimals here

        // Transfer tokens
        const signature = await transfer(
            connection,
            keypair,
            fromTokenAccount.address,
            toTokenAccount.address,
            keypair.publicKey,
            amount
        );

        console.log(`Transfer successful with signature: ${signature}`);
        // bKixmG7D2wWnw2AHTHbCH4t5MGKSWrPTtmYycZF7ogpdVqar4Bh4w4dar59nZVUvbD76aCjv25MLKsbVXeNLN1i
    } catch (e) {
        console.error(`Oops, something went wrong: ${e}`);
    }
})();

import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import wallet from "./wallet/wallet.json";

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const token_decimals = 1_000_000n;

// Mint address
const mint = new PublicKey("DkDGju2fxzK4CMPTr43wPcAdNjkn1DiiUSizpFiGfuth");

(async () => {
  try {
    // Create an ATA
    const ata = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );
    console.log(`Your ata is: ${ata.address.toBase58()}`);
    // 7XLktKTp94EJfQYCYhENrJiQXsFbdiVTSkTqBS4bFKE1

    // Mint to ATA
    const mintTx = await mintTo(
      connection,
      keypair,
      mint,
      ata.address,
      keypair,
      1000n * token_decimals
    );

    console.log(`Your mint txid: ${mintTx}`);
    //5yXpxv7SRcVoMLhtoXVMA3YZSPrD1VVnThNp9AdJf2o6EGTbAEHefUZRyBdWATBTpChkfSYGBpHvixYksxen4BR3
  } catch (error) {
    console.log(`Oops, something went wrong: ${error}`);
  }
})();

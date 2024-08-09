import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "../cluster1/wallet/wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");

(async () => {
  // Check balance
  const balance = await connection.getBalance(keypair.publicKey);
  console.log("Your balance is: ", balance / LAMPORTS_PER_SOL);
  try {
    // We're going to claim 5 devnet SOL tokens
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      5 * LAMPORTS_PER_SOL
    );
    console.log(`Success! Check out your TX here: 
        https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
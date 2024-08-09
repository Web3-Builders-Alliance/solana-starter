import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import wallet from "../cluster1/wallet/wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com");
const toKeypair = Keypair.generate();

(async () => {
  const balance = await connection.getBalance(keypair.publicKey);
  console.log("Your balance is: ", balance / LAMPORTS_PER_SOL);

  const toBalance = await connection.getBalance(toKeypair.publicKey);
  console.log("To balance is: ", toBalance / LAMPORTS_PER_SOL);

  const transferIx = SystemProgram.transfer({
    fromPubkey: keypair.publicKey,
    toPubkey: toKeypair.publicKey,
    lamports: 1 * LAMPORTS_PER_SOL,
  });

  const tx = new Transaction().add(transferIx);

  const txSignature = await sendAndConfirmTransaction(
    connection,
    tx,
    [keypair],
    { skipPreflight: false, preflightCommitment: "confirmed" }
  );
  console.log("Transaction signature: ", txSignature);
})();

import {
  Commitment,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import wallet from "./wallet/wallet.json";

import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("<DkDGju2fxzK4CMPTr43wPcAdNjkn1DiiUSizpFiGfuth");

// Recipient address
const to = new PublicKey("<receiver address>");

(async () => {
  try {
    // Get the token account of the fromWallet address, and if it does not exist, create it
    let myac = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );
    // Get the token account of the toWallet address, and if it does not exist, create it
    let toac = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      to
    );
    // Transfer the new token to the "toTokenAccount" we just created
    let txid = await transfer(
      connection,
      keypair,
      myac.address,
      toac.address,
      keypair.publicKey,
      1_0000n
    );
    console.log(`Your transfer txid: ${txid}`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();

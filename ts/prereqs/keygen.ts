import { Keypair } from "@solana/web3.js";

let kp = Keypair.generate();
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`Solana Wallet Secret Key:[${kp.secretKey}]`);
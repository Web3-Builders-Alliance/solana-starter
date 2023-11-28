import {
  Connection,
  Keypair,
  SystemProgram,
  PublicKey,
  Commitment,
} from "@solana/web3.js";
import {
  Program,
  Wallet,
  AnchorProvider,
  Address,
  BN,
} from "@coral-xyz/anchor";
import { WbaVault, IDL } from "./programs/wba_vault";
import wallet from "./wallet/wba-wallet.json";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Commitment
const commitment: Commitment = "finalized";

// Create a devnet connection
const connection = new Connection("https://api.devnet.solana.com");

// Create our anchor provider
const provider = new AnchorProvider(connection, new Wallet(keypair), {
  commitment,
});

// Create our program
const program = new Program<WbaVault>(IDL, "<address>" as Address, provider);

// Create a random keypair
const vaultState = new PublicKey("<address>");

// Create the PDA for our enrollment account
// const vaultAuth = ???

// Create the vault key
// const vault = ???

// Mint address
const mint = new PublicKey("<address>");

// Execute our deposit transaction
(async () => {
  try {
    const metadataProgram = new PublicKey(
      "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
    );
    const metadataAccount = PublicKey.findProgramAddressSync(
      [Buffer.from("metadata"), metadataProgram.toBuffer(), mint.toBuffer()],
      metadataProgram,
    )[0];
    const masterEdition = PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata"),
        metadataProgram.toBuffer(),
        mint.toBuffer(),
        Buffer.from("edition"),
      ],
      metadataProgram,
    )[0];

    // b"metadata", MetadataProgramID.key.as_ref(), mint.key.as_ref() "master"
    // Get the token account of the fromWallet address, and if it does not exist, create it
    // const ownerAta = await getOrCreateAssociatedTokenAccount(
    //     ???
    // );

    // // Get the token account of the fromWallet address, and if it does not exist, create it
    // const vaultAta = await getOrCreateAssociatedTokenAccount(
    //     ???
    // );

    // const signature = await program.methods
    // .depositNft()
    // .accounts({
    //     ???
    // })
    // .signers([
    //     keypair
    // ]).rpc();
    // console.log(`Deposit success! Check out your TX here:\n\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();

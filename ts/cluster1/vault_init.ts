import { Connection, Keypair, SystemProgram, PublicKey, Commitment } from "@solana/web3.js"
import { Program, Wallet, AnchorProvider, Address } from "@project-serum/anchor"
import { WbaVault, IDL } from "./programs/wba_vault";
import wallet from "./wallet/wba-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Commitment
const commitment: Commitment = "confirmed";

// Create a devnet connection
const connection = new Connection("https://api.devnet.solana.com");

// Create our anchor provider
const provider = new AnchorProvider(connection, new Wallet(keypair), { commitment });

// Create our program
const program = new Program<WbaVault>(IDL, "<addressIDL>" as Address, provider);

// Create a random keypair
const vaultState = Keypair.generate();
console.log(`Vault public key: ${vaultState.publicKey.toBase58()}`);

// Create the PDA for our enrollment account
// const vaultAuth = ???

// Create the vault key
// const vault = ???

// Execute our enrollment transaction
(async () => {
    
    try {

        // const signature = await program.methods.initialize()
        // .accounts({
        //     owner: 
        //     vaultState: 
        //     vaultAuth: ,
        //     vault: ,
        //     systemProgram: SystemProgram.programId
        // }).signers([keypair, vaultState]).rpc();
        // console.log(`Init success! Check out your TX here:\n\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`);
    
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }

})();
import { Commitment, Connection, Keypair, PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js"
import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createMetadataAccountV3 } from "@metaplex-foundation/mpl-token-metadata";
import { createSignerFromKeypair, publicKey, signerIdentity, PublicKey as umiPublicKey } from "@metaplex-foundation/umi";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Define our Mint address
const mint = new PublicKey("<mint address>")

// Add the Token Metadata Program
const token_metadata_program_id = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s')

// Create PDA for token metadata
const metadata_seeds = [
    Buffer.from('metadata'),
    token_metadata_program_id.toBuffer(),
    mint.toBuffer(),
];
const [metadata_pda, _bump] = PublicKey.findProgramAddressSync(metadata_seeds, token_metadata_program_id);

// Create a UMI connection
const umi = createUmi('https://api.devnet.solana.com');
const umiKeypair = umi.eddsa.createKeypairFromSecretKey(keypair.secretKey);
umi.use(signerIdentity(createSignerFromKeypair(umi, umiKeypair)));

(async () => {
    try {
        // Start here

        // let tx = ???

        // let result = tx.sendAndConfirm(umi);
        // console.log(result);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();
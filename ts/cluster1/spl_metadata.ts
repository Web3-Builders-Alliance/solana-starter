import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { 
    createMetadataAccountV3, 
    CreateMetadataAccountV3InstructionAccounts, 
    CreateMetadataAccountV3InstructionArgs,
    DataV2Args
} from "@metaplex-foundation/mpl-token-metadata";
import { createSignerFromKeypair, signerIdentity, publicKey } from "@metaplex-foundation/umi";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";

// Define our Mint address
const mint = publicKey("RZvyb428vaECNouhkkSfAaVZdNZxESov1cKMxKAsN8v")

// Create a UMI connection
const umi = createUmi('https://solana-devnet.g.alchemy.com/v2/FQHmKHAxCcEgQOwt3dAwCYdNxKGlWY4q');
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

(async () => {
    try {
        
           let accounts: CreateMetadataAccountV3InstructionAccounts = {
              mint,
              mintAuthority:signer  
         }

        let data: DataV2Args = {
             name : "ABHI",
             symbol: "AB",
             uri  : "https://example.com/token-metadata.json",
             sellerFeeBasisPoints:500,
             creators: null,
             collection: null,
             uses: null,
         }

         let args: CreateMetadataAccountV3InstructionArgs = {
         data: data,
         isMutable: true,
         collectionDetails: null,
        };

         let tx = createMetadataAccountV3(
             umi,
            {
                ...accounts,
                ...args
            }
         )

         let result = await tx.sendAndConfirm(umi);
         console.log(bs58.encode(result.signature));
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();

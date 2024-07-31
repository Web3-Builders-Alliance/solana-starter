import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { 
    Collection,
    createMetadataAccountV3, 
    CreateMetadataAccountV3InstructionAccounts, 
    CreateMetadataAccountV3InstructionArgs,
    Creator,
    DataV2Args,
    Uses
} from "@metaplex-foundation/mpl-token-metadata";
import { createSignerFromKeypair, signerIdentity, publicKey, none } from "@metaplex-foundation/umi";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";

// Define our Mint address
const mint = publicKey("HAjZU5gQWrEoQJWxQGT1JjjQQab3k5Mt9YAQb9moaGsr")

// Create a UMI connection
const umi = createUmi('https://api.devnet.solana.com');
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(signer));

(async () => {
    try {
        // Start here
        let accounts: CreateMetadataAccountV3InstructionAccounts = {
            mint: mint,
            mintAuthority: signer
        }

        let data: DataV2Args = {
            name: "TheAybss",
            symbol: "ABYSS",
            uri: "https://raw.githubusercontent.com/A91y/sup-metadata/main/abyss/metadata.json",
            sellerFeeBasisPoints: 0,
            creators: none<Creator[]>(),
            collection: none<Collection>(),
            uses: none<Uses>()
        }

        let args: CreateMetadataAccountV3InstructionArgs = {
            isMutable: true,
            collectionDetails: null,
            data: data
        }

        let tx = createMetadataAccountV3(
            umi,
            {
                ...accounts,
                ...args
            }
        )

        let result = await tx.sendAndConfirm(umi);
        console.log(bs58.encode(result.signature));
        // 52oHb1bHTq7LxgWDHKd4aQVioF8CaWJ5gYMXsKAyD9BtVCb95ECxdaDhukpsWMqH6JcLa4z3BSYmnyVcBTadaza6
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();

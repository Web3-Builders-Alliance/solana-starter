import wallet from "./wallet/turbin3-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys"


// Create a devnet connection
const umi = createUmi('https://api.devnet.solana.com');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

(async () => {
    try {
        // Follow this JSON structure
        // https://docs.metaplex.com/programs/token-metadata/changelog/v1.0#json-structure

        const image = "https://gateway.irys.xyz/AxqEBXe9RxRqMVhHrYt6aiC7oAmB2XuTTsKTYtEJ5HVN"
        const metadata = {
            name: "Turbin3 Thunders",
            symbol: "TBN3",
            description: "TBN3 awesome NFT!",
            image,
            attributes: [
                { "trait_type": "type", "value": "legendary" }
            ],
            properties: {
                files: [
                    {
                        type: "image/jpg",
                        uri: image
                    }
                ]
            },
            creators: []
        };
        const myUri = await umi.uploader.uploadJson(metadata);
        console.log("Metadata URI: ", myUri);
        
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();

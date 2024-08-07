import wallet from "../wba-wallet.json"
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

        const image = "https://arweave.net/E1AkEkxMT8Eieo8anjZwIPVCXtd1gAoVdsaeaqzWv-Q";
        const metadata = {
            name: "Ayu Rug",
            symbol: "AYR",
            description: "Ayush's Rug",
            image: image,
            attributes: [
                {trait_type: "hotness", value: "100"},
                {trait_type: "coolness", value: "99"},
                {trait_type: "awesomeness", value: "100"}
            ],
            properties: {
                files: [
                    {
                        type: "image/png",
                        uri: image
                    },
                ]
            },
            creators: [keypair.publicKey]
        };
        const myUri = await umi.uploader.uploadJson([metadata]);
        console.log("Your image URI: ", myUri);
        // https://arweave.net/a5NL0tkB1QrtLSqUgFesRDKX8ZIYPUkRif8wmJfTtX8
        // https://arweave.net/0Yj6QO-_5Zpdj7ZGgIhGgckUEdOsXXFhTC3tMN-45BY
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();

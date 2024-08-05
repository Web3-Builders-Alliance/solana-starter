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

        const image = "https://arweave.net/Ffac7XZlLiO5G6pBJH79_BV9LA0JZzvytq81VEKBaCI"
        const metadata = {
            name: "praash-nft",
            symbol: "praash-wba-nft",
            description: "This is a nft created using umi for wba",
            image,
            attributes: [
                { trait_type: "Background", value: "Blue" },
                { trait_type: "Rarity", value: "Rare" }
            ],
            properties: {
                files: [
                    {
                        type: "image/png",
                        uri: image
                    },
                ]
            },
            creators: [{
                address:"H7ur1MPVaSGKsEtvQcrcjpXv1YuwL1u4HJimBnmPQwLS",
            }]
        };
        const umiJSOnFile = createGenericFile(JSON.stringify(metadata), "praash-mint-metadata", {
            tags: [{ name: "Content-Type", value: "JSON" }],
          });

        const Uri = await umi.uploader.upload([umiJSOnFile]).catch((err) => {
            throw new Error(err);
          });
        console.log("Your image URI: ", Uri);
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();

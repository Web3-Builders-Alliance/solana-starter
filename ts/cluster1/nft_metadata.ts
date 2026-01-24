import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys"

// Create a devnet connection
const umi = createUmi('https://solana-devnet.g.alchemy.com/v2/FQHmKHAxCcEgQOwt3dAwCYdNxKGlWY4q');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use( irysUploader({ address: "https://devnet.irys.xyz", timeout: 300000,  }) );
umi.use(signerIdentity(signer));

(async () => {
    try {
        // Follow this JSON structure
        // https://docs.metaplex.com/programs/token-metadata/changelog/v1.0#json-structure

        const image = "https://gateway.irys.xyz/A6rdCnn876EzR7HdSuaH44hDXL5fkx52rUUrJSr5xkMq";
         const metadata = {
            name: "ABHI",
             symbol: "AB",
             description: "the rug generated from bergs code",
             image: image,
            attributes: [
                {trait_type: 'iby', value: '15'}
            ],
            properties: {
                files: [
                    {
                        type: "image/png",
                        uri: image
                     },
               ]
            },
             creators: []
         };
         const myUri = await umi.uploader.uploadJson(metadata)
         console.log("Your metadata URI: ", myUri);
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();

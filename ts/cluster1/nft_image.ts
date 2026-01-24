import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys"
import { readFile } from "fs/promises"

// Create a devnet connection
const umi = createUmi('https://solana-devnet.g.alchemy.com/v2/FQHmKHAxCcEgQOwt3dAwCYdNxKGlWY4q');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use( irysUploader({ address: "https://devnet.irys.xyz", timeout: 300000,  }) );
umi.use(signerIdentity(signer));

(async () => {
    try {
        //1. Load image
        const image = await readFile("./generug.png");
        //2. Convert image to generic file.
        const file = createGenericFile(image,"genrug.png",{
            contentType: "image/png"
        });
        //3. Upload image
        const myUri = await umi.uploader.upload([file])
      
        console.log("Your image URI: ", myUri);
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();

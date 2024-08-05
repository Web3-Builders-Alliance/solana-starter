import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys"
import { readFile, writeFile } from "fs/promises"

// Create a devnet connection
const umi = createUmi('https://api.devnet.solana.com');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

(async () => {
    try {
        //1. Load image
        //2. Convert image to generic file.
        //3. Upload image

        const image = await readFile("/home/praash/Desktop/solana-starter/ts/cluster1/image.png");

        const umiImageFile = createGenericFile(image, "praash-image.png", {
            tags: [{ name: "Content-Type", value: "image/png" }],
          });

          const imageUri = await umi.uploader.upload([umiImageFile]).catch((err) => {
            throw new Error(err);
          });

          console.log("Your image URI: ", imageUri[0]);
          
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();

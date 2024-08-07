import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys"
import { readFile } from "fs/promises"

// Create a devnet connection
const umi = createUmi('https://api.devnet.solana.com');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

(async () => {
    try {
        
        //1. Load image
        const image = await readFile("/home/ubuntu/solana-starter/ts/assets/generug.png")
        
        //2. Convert image to generic file.
        const generic = createGenericFile(image, "rug", {
            contentType: "image/png"
        })
        
        //3. Upload image
        const [myUri] = await umi.uploader.upload([generic]);
        console.log("Your image URI: ", myUri);
        // https://arweave.net/fsK6U0oLwsgaPWOC-XUpPKkrHmJFOpNaPShM5ZO7zAs
        // https://arweave.net/E1AkEkxMT8Eieo8anjZwIPVCXtd1gAoVdsaeaqzWv-Q
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();

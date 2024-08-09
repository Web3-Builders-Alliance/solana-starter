import wallet from "./wallet/wallet.json";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createGenericFile,
  createSignerFromKeypair,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";

// Create a devnet connection
const umi = createUmi("https://api.devnet.solana.com");

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

(async () => {
  try {
    // Follow this JSON structure
    // https://docs.metaplex.com/programs/token-metadata/changelog/v1.0#json-structure
    // const image = ???
    // const metadata = {
    //     name: "?",
    //     symbol: "?",
    //     description: "?",
    //     image: "?",
    //     attributes: [
    //         {trait_type: '?', value: '?'}
    //     ],
    //     properties: {
    //         files: [
    //             {
    //                 type: "image/png",
    //                 uri: "?"
    //             },
    //         ]
    //     },
    //     creators: []
    // };
    // const myUri = ???
    // console.log("Your image URI: ", myUri);
  } catch (error) {
    console.log("Oops.. Something went wrong", error);
  }
})();

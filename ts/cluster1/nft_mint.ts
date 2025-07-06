import wallet from "./wallet/turbin3-wallet.json"
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata"
import { createSignerFromKeypair, percentAmount, generateSigner, signerIdentity } from "@metaplex-foundation/umi"
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';

const RPC_ENDPOINT = "https://api.devnet.solana.com"
const umi = createUmi(RPC_ENDPOINT);
     
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet))
const signer = createSignerFromKeypair(umi, keypair)

umi.use(signerIdentity(signer));
umi.use(mplTokenMetadata());

const mint = generateSigner(umi);

(async () => {
    try {
        let tx = createNft(umi, {
            mint,
            name: "Turbin3 Thunders",
            uri: "https://gateway.irys.xyz/GJJiP9ShTFZX9cfj6UtEUUWu3z7TLH6uP9mb51pjPbax",
            sellerFeeBasisPoints: percentAmount(5),
            symbol: "TBN3"
        })
        let signature = await tx.sendAndConfirm(umi)
        console.log("Minted NFT signature", signature)
        console.log("Mint Address:", mint.publicKey.toString())
    } catch (error) {
        console.log("Oops, something went wrong:", error)
    }
})();
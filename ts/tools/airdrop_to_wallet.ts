import prompt from 'prompt'
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"

//Create a Solana devnet connection to claim 2 devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    // Start our prompt
    prompt.start()

    // Take in base58 string
    console.log('Enter your address and how much SOL to airdrop):');
    const { address, sol } = await prompt.get(['address', 'sol']);
    const wallet = new PublicKey(address as string);
    try {
        const txhash = await connection.requestAirdrop(wallet, (LAMPORTS_PER_SOL * parseInt(sol as string)));
        console.log(`Success! Check out your TX here:\nhttps://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})()
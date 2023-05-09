import bs58 from 'bs58'
import prompt from 'prompt'

(async () => {
    // Start our prompt
    prompt.start()

    // Take in base58 string
    console.log('Enter your base58-encoded private key:');
    const { privkey } = await prompt.get(['privkey']);
    // Decode private key
    const wallet = bs58.decode(privkey as string);
    // Print out wallet
    console.log(`Your wallet file is:\n[${wallet}]`);
})()
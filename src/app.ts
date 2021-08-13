import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.CHAIN_RPC);

const provider = new ethers.providers.JsonRpcProvider(process.env.CHAIN_RPC, parseInt(process.env.CHAIN_ID || '56'));

const main = async () => {
    const data = await provider.getBlockNumber();
    console.log(data);
}

main();

import { Step } from './types';

export const BOOTSTRAP_STEPS: Step[] = [
  {
    id: 1,
    title: "Environment Preparation",
    description: "Ensure your server meets the requirements: 4+ CPU Cores, 8GB RAM, 512GB SSD. Install Docker and Docker-Compose.",
    command: "sudo apt-get update && sudo apt-get install docker-ce docker-compose -y"
  },
  {
    id: 2,
    title: "Download Bootstrap Package",
    description: "Clone the official IoTeX bootstrap repository to get the necessary configuration scripts.",
    command: "git clone https://github.com/iotexproject/iotex-bootstrap.git && cd iotex-bootstrap"
  },
  {
    id: 3,
    title: "Configure Node",
    description: "Edit config.yaml and docker-compose.yml. Set your Delegate external IP and generate keys if needed.",
    command: "nano config.yaml"
  },
  {
    id: 4,
    title: "Launch Node",
    description: "Start the node using docker-compose. Use the -d flag to run in background.",
    command: "sh install.sh"
  },
  {
    id: 5,
    title: "Delegate Registration",
    description: "Visit delegates.iotex.io to register your node as a consensus delegate or apply for endorsement.",
  }
];

export const SYSTEM_PROMPT = `
You are an expert IoTeX Full Stack Engineer and Network Architect. Your goal is to assist users in both setting up an IoTeX Delegate Node and developing on IoTeX Layer 1.

Key knowledge points for Delegates:
1. Bootstrapping involves Docker and the official iotex-bootstrap repo.
2. A Delegate should avoid running a Gateway on the same node for security.
3. Delegate Endorsement allows participation without the 1.2M IOTX self-stake.

Key knowledge points for L1 Development:
1. IoTeX is Ethereum-compatible (EVM).
2. Use tools like Solidity, Web3.js, Ethers.js, and MetaMask.
3. Part 1 of quick start: Deploying simple contracts that emit events.
4. Part 2 of quick start: Interacting with contracts using Node.js and Web3.js.
5. IoTeX Testnet is the primary place for development.

Use a professional, technical, yet encouraging tone. Provide code snippets when requested.
`;

export const SMART_CONTRACT_CODE = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleMessage {
    event MessageLogged(string message, address sender);

    function logMessage(string calldata _message) external {
        emit MessageLogged(_message, msg.sender);
    }
}`;

export const INTERACT_CODE = `const { Web3 } = require('web3');
const web3 = new Web3('https://babel-api.testnet.iotex.io');

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [...]; // Contract ABI

async function sendMessage(text) {
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(abi, contractAddress);
    
    await contract.methods.logMessage(text).send({
        from: accounts[0],
        gas: 100000
    });
    console.log('Message sent to IoTeX Testnet!');
}`;

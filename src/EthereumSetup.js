
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
console.log(web3);

let hospital = '0x24d5bb01a07e7ebcd0fb1786b7867c1b7e2055ab';



let hospitalABI = 
[
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_phnnum",
				"type": "uint256"
			}
		],
		"name": "Apply",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_phone",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_password",
				"type": "uint256"
			}
		],
		"name": "labRegister",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "phonenum",
				"type": "uint256"
			}
		],
		"name": "insuranceApplied",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_pass",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_phno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_address",
				"type": "string"
			}
		],
		"name": "Register",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "getStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_password",
				"type": "uint256"
			}
		],
		"name": "labLogin",
		"outputs": [],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "psd",
				"type": "uint256"
			}
		],
		"name": "Login",
		"outputs": [],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "PatDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "password",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "phonenum",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "add",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

const hospitalcon =new web3.eth.Contract(hospitalABI,hospital);


export {
    hospitalcon,
    
    web3 
};
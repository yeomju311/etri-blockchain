var abi =
[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_pw",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			}
		],
		"name": "addInfoStru",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_acc",
				"type": "string"
			}
		],
		"name": "insertAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "killContract",
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
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "pw",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "email",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "flag",
				"type": "bool"
			}
		],
		"name": "eventAccount",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint8"
			}
		],
		"name": "getAccount",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "_index",
				"type": "uint8"
			}
		],
		"name": "getID",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "_index",
				"type": "uint8"
			}
		],
		"name": "getInfoStruct",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumOfAccounts",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "info",
		"outputs": [
			{
				"name": "id",
				"type": "string"
			},
			{
				"name": "pw",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
import React, { Component } from "react";
import SimpleStorageContract from "./build/contracts/SimpleStorage.json";

import getWeb3 from "./getWeb3";
import ipfs from './ipfs'

import "./App.css";

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    buffer:null,
    ipfsHash:''
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set("5").send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

captureFile= (event)=> {
  event.preventDefault()
  console.log('capture file...')
  // 파일 받아오기
  let self = this
  const file = event.target.files[0]
  const reader = new window.FileReader()
  reader.readAsArrayBuffer(file)
  reader.onloadend = () => {
    self.setState({buffer:Buffer(reader.result)})
    console.log('buffer', this.state.buffer);
  }
}

onSubmit=(event)=> {
  event.preventDefault() // 새로고침 막기 위해 써둠
  console.log('on submit...')
  let self = this
  ipfs.add(this.state.buffer, (error, result) => {
    console.log("error,",error)
    console.log('result,', result)
    if(error) {
      console.error(error)
      return
    }

    return self.setState({ipfsHash:result[0].hash}, () => {
      console.log('ipfsHash', this.state.ipfsHash)
    })
  })
  console.log("function end")
}

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Your Image</h1>
        <p>This image is stored on IPFS & The Ethereum Blockchain!</p>
        <h2>Upload Image</h2>
        <form onSubmit={this.onSubmit}>
          <input type='file' onChange={this.captureFile}/>
          <input type='submit' />
        </form>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;

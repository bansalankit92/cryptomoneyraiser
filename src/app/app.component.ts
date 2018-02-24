import { Component, OnInit } from '@angular/core';

//import * as Web3 from 'web3'
import { default as Web3} from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private contractAddr: string = '0x3AeEFE6b60E4b7FC0DE55F1882F9E9263361003B'; // Current address if the user selects a custom
  private defaultNodeIP: string = 'https://eth3.augur.net';  //'http://localhost:8545'                  // Default node
  private nodeIP: string;                                                      // Current nodeIP
  private nodeConnected: boolean = true;                                       // If we've established a connection yet
  private adding: boolean = false;                                             // If we're adding a question
  private web3Instance: any;                                                   // Current instance of web3
  private unlockedAccount: string;                                             // Current unlocked account


  private ABI = [ { "constant": false, "inputs": [ { "name": "newSellPrice", "type": "uint256" }, { "name": "newBuyPrice", "type": "uint256" } ], "name": "setPrices", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "POW coin" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "1e+23" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "difficulty", "outputs": [ { "name": "", "type": "uint256", "value": "6.05042016806722689075630252100842e+32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "18" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_value", "type": "uint256" } ], "name": "burn", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "sellPrice", "outputs": [ { "name": "", "type": "uint256", "value": "1" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currentChallenge", "outputs": [ { "name": "", "type": "bytes32", "value": "0x67a35836d0cf47f433e89ca44eced860636b41a2595417ffc80175487a50189f" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "nonce", "type": "uint256" } ], "name": "proofOfWork", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "target", "type": "address" }, { "name": "mintedAmount", "type": "uint256" } ], "name": "mintToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "burnFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "timeOfLastProof", "outputs": [ { "name": "", "type": "uint256", "value": "1516540283" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "buyPrice", "outputs": [ { "name": "", "type": "uint256", "value": "1" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x9831b22d110d694c0a10651d82d856b453cea00d" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "P" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buy", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "frozenAccount", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "amount", "type": "uint256" } ], "name": "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "target", "type": "address" }, { "name": "freeze", "type": "bool" } ], "name": "freezeAccount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "100000" }, { "name": "tokenName", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "POW coin" }, { "name": "tokenSymbol", "type": "string", "index": 2, "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "P" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "target", "type": "address" }, { "indexed": false, "name": "frozen", "type": "bool" } ], "name": "FrozenFunds", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Burn", "type": "event" } ];
  
  ngOnInit() {
    console.log(window['web3']);
    console.log(Web3);

    if(typeof window['web3'] !== 'undefined' && typeof window['Web3'] !== 'undefined'){
      console.log("Using web3 detected from external source like Metamask")
      this.web3 = new this.Web3(window['web3'].currentProvider)
      const tokenContract = this.web3.eth.contract(this.ABI);
      this.web3Instance = tokenContract.at(this.contractAddr);
      console.log(this.web3Instance)
      this.getBalanceOf('0x9831b22d110D694c0a10651D82D856b453cEA00d');
      console.log(tokenContract);
   }else {
      console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
      console.log(this.web3);
      const tokenContract = new this.web3.eth.Contract(this.ABI,this.contractAddr);
      console.log(this.web3.eth.accounts);

      console.log(tokenContract);
      tokenContract.methods.balanceOf('0x9831b22d110D694c0a10651D82D856b453cEA00d').call((err, res) => {
        console.log(err,res);
     });
     console.log(this.     web3.eth.accounts.wallet.load('ether123#')
    );


    //  this.web3Instance = tokenContract.at(this.contractAddr);
     // console.log(this.web3Instance)
     // this.getBalanceOf('0x9831b22d110D694c0a10651D82D856b453cEA00d');
     // console.log(tokenContract);
   }
  
  // console.log(this. web3.eth    )
  // console.log(tokenContract.eth.accounts )
  }

  getBalanceOf(address){
    console.log("get bal")
    this.web3Instance.balanceOf(address,(err, res) => {
      alert()
      console.log(err,res);
   });
   console.log()
   this.web3Instance.name((err, res) => {
    alert()

    console.log(err,res);
 });
  }





















  intializeWeb3(): void {
    this.nodeIP = localStorage['nodeIP'] || this.defaultNodeIP;
    this.connectToNode(); // Connect to whatever's available
}

  connectToNode(): void { // Don't unlock until you send a transaction
  if (typeof window['web3'] !== 'undefined' && (!localStorage['nodeIP'] || this.nodeIP === 'MetaMask')) {
      localStorage['nodeIP'] = this.nodeIP;
      console.log('Using injected web3');
      this.web3 = new this.Web3(window['web3'].currentProvider);
      this.nodeIP = 'MetaMask';
      this.nodeConnected = true;
      this.unlockedAccount = 'MetaMask';
      //this.update.emit(null);
  } else {
      localStorage['nodeIP'] = this.nodeIP;
      console.log('Using HTTP node');
      this.unlockedAccount = undefined;
      this.web3 = new this.Web3(new this.Web3.providers.HttpProvider(this.nodeIP));
      this.handleConnection(this.web3.isConnected());
  }
}
handleConnection(connect: boolean): void {
  if (connect) {
      this.connected();
  } else {
      this.nodeIP = this.defaultNodeIP;
      this.connectToNode();
  }
  this.nodeConnected = connect;
}
  get isConnected(): boolean {
    return this.nodeConnected;
}

weiToEth(wei: number): number {
  return parseFloat(this.web3.fromWei(wei, 'ether'));
}

connected(): Promise<any> {
  let p = new Promise<any>((resolve, reject) => {
      if (this.nodeIP !== 'MetaMask') {
          this.web3.eth.sendTransaction({from: this.web3.eth.accounts[0], to: this.web3.eth.accounts[0], value: 0, gas: 0, gasPrice: 0 },
              (err, res) => {;
                  if (err.toString() !== 'Error: account is locked') {
                      this.unlockedAccount = this.web3.eth.accounts[0];
                      //this.update.emit(null);
                      console.log('Connected to account: ' + this.unlockedAccount);
                      resolve(true);
                  } else {
                      console.log('Error: Could not find an unlocked account');
                      resolve(false);
                  }
              }
          );
      } else {
          this.unlockedAccount = this.web3.eth.accounts[0];
          console.log('Connected to account: ' + this.unlockedAccount);
          resolve(false);
      }
  });
  return p;
}

get web3(): any {
    if (!this.web3Instance) {
        this.intializeWeb3();
    }
    return this.web3Instance;
}
set web3(web3: any) {
    this.web3Instance = web3;
}

get currentAcc(): string {
    return this.unlockedAccount;
}
get currentAddr(): string {
    return this.contractAddr;
}
set currentAddr(contractAddr: string) {
    if (contractAddr.length === 42 || contractAddr.length === 40) {
        this.contractAddr = contractAddr;
    } else {
        console.log('Invalid address used');
    }
}
get currentNode(): string {
    return this.nodeIP;
}
set currentNode(nodeIP: string) {
    this.nodeIP = nodeIP;
}

get Web3(): any {
    return window['Web3'];
}


}

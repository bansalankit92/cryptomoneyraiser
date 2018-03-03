import { Component, OnInit } from '@angular/core';
import { Campaign } from './model/Campaign';
import { Constants } from './model/constants'
//import * as Web3 from 'web3'
import { default as Web3} from 'web3';
import { FundraiserService } from 'app/service/fundraiser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  private contractAddr = Constants.CONTRACT_ADDRESS;
  private defaultNodeIP = Constants.DEFAULT_NODEIP;
  private nodeIP: string; // Current nodeIP
  private nodeConnected: boolean = true; // If we've established a connection yet
  private adding: boolean = false; // If we're adding a question
  private web3Instance: any; // Current instance of web3
  private unlockedAccount: string; // Current unlocked account
  noOfCampaigns = 0;
  campaigns;
  private ABI = Constants.CONTRACT;
  campaignId: number;
  campaign: Campaign = new Campaign();
  isWeb3Available = false;
  web3;
  contributeValue;

  accountAddress = '0x48A105d092dCD56735CA052EA3c82ebfaB367f9b';
  accountPassword = 'ether123#';


  constructor(private fundraiserService: FundraiserService) {

  }

  ngOnInit() {
   /* console.log(window['web3']);
    console.log(Web3);

    if (typeof window['web3'] !== 'undefined' && typeof window['Web3'] !== 'undefined') {
      console.log("Using web3 detected from external source like Metamask")
      this.web3 = new this.Web3(window['web3'].currentProvider)
      this.isWeb3Available = true;
      const tokenContract = this.web3.eth.contract(this.ABI);
      this.web3Instance = tokenContract.at(this.contractAddr);
      console.log(this.web3Instance)
      console.log(this.web3.eth)
      console.log(this.web3.eth.personal)
      console.log(this.web3.eth.getAccounts())

      //  console.log(this.web3.eth.accounts)
      // this.getBalanceOf('0x9831b22d110D694c0a10651D82D856b453cEA00d');
      this.getCampaigns();


      console.log(tokenContract);
    } else {
      console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
      this.web3 = new Web3(new Web3.providers.HttpProvider(this.defaultNodeIP))
      this.isWeb3Available = false;

      console.log(this.web3);
      console.log(this.web3.eth);
      console.log(this.web3.eth.accounts);
      this.web3Instance = new this.web3.eth.Contract(this.ABI, this.contractAddr);

      console.log(this.web3Instance);
      // console.log(this.     web3.eth.accounts.wallet.load('ether123#') );

      this.web3Instance.methods.numCampaigns().call((err, res) => {
        console.log(err, res);
        this.noOfCampaigns = res;

      });
      this.web3Instance.methods.campaigns(1).call((err, res) => {
        console.log(err, res);
        this.campaigns = res;
      });

    }*/

    this.fundraiserService.numOfCampaign().subscribe(res => {
      console.log(res);
      this.noOfCampaigns = res;
    }, err => this.OnError(err));
  }

  OnError(err){
    console.log(err);
  }

  getCampaigns() {
   /* this.web3Instance.campaigns(1, (err, res) => {
      console.log(err, res);
      this.campaigns = res;
    });
    this.web3Instance.numCampaigns((err, res) => {
      console.log(err, res);
      this.noOfCampaigns = res;
    });*/
  }

  search() {
    console.log(this.campaignId);
    // if (this.isWeb3Available) {
    //   this.web3Instance.campaigns(this.campaignId, (err, res) => {
    //     console.log(err, res);
    //     this.campaigns = res;
    //   });
    // } else {
    //   this.web3Instance.methods.campaigns(this.campaignId).call((err, res) => {
    //     console.log(err, res);
    //     this.campaigns = res;
    //   });
    // }

    this.fundraiserService.search(this.campaignId).subscribe(res => {
      console.log(res);
      this.campaigns = res;
    });
  }
  unLockAccount() {
    // console.log(this.web3.eth.personal)
    //  this.web3.eth.personal.unlock();
    /**@TODO
     * validate, 
     * 
     */
    return this.web3.eth.personal.unlockAccount(this.accountAddress.trim(), this.accountPassword.trim(), 1500);
  }

  lockAccount1() {
    //   console.log("acc ",this.accountAddress);
    //   console.log("pwd ",this.accountPassword);
    //   console.log(this.web3.eth.personal)
    // //  this.web3.eth.personal.unlock();
    //  let lock = this.web3.eth.personal.lockAccount(this.accountAddress,this.accountPassword);
    //  console.log("lock ",lock);
  }
  addNewCampaign() {
    /**@TODO
     * validate, 
     * 
     */

    /*if (this.isWeb3Available) {
      this.web3Instance.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
        this.campaign.durationInMin, this.campaign.detailsUrl, this.campaign.category, (err, res) => {
          console.log(err, res);
          this.campaigns = res;
        });
    } else {
      // console.log(this.web3);
      // console.log(this.web3.eth)
      // console.log(this.web3.eth.accounts)

      // console.log(this.campaign);
      this.unLockAccount().then(res => {
        console.log(res);
        if (res) {
          this.web3Instance.methods.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
              this.campaign.durationInMin, this.campaign.detailsUrl, this.campaign.category).send({
              from: this.accountAddress,
              gas: Constants.GAS_NEW_CAMPAIGN
            }).on('transactionHash', function (hash) {
              console.log("hash ", hash);
              // this.lockAccount();
            })
            .on('receipt', function (receipt) {
              console.log("receipt ", receipt);
            })
            .on('confirmation', function (confirmationNumber, receipt) {
              console.log("confirmation no ", confirmationNumber);
              console.log("receipt ", receipt);
            })
            .on('error', console.error);
        } else {
          alert('invalid password')
        }
      }).catch(err => console.log(err))
    }*/



  }


  contribute() {
    /**@TODO
     * validate is deadline gone , 
     * is available
     */
    if (this.isWeb3Available) {
      this.web3Instance.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
        this.campaign.deadline, this.campaign.detailsUrl, this.campaign.category, (err, res) => {
          console.log(err, res);
          this.campaigns = res;
        });
    } else {
      this.unLockAccount().then(res => {
        console.log(res);
        if (res) {
          this.web3Instance.methods.contribute(this.campaignId).send({
              from: this.accountAddress,
              gas: Constants.GAS_CONTRIBUTE
            })
            .on('transactionHash', function (hash) {
              console.log("hash ", hash);
              //this.lockAccount();
            })
            .on('receipt', function (receipt) {
              console.log("receipt ", receipt);
            })
            .on('confirmation', function (confirmationNumber, receipt) {
              console.log("confirmation no ", confirmationNumber);
              console.log("receipt ", receipt);
            })
            .on('error', console.error);
        } else {
          alert('invalid password')
        }
      }).catch(err => console.log(err))
    }
  }

  withdraw() {
    /**@TODO
     * validate is deadline gone , 
     * is available
     */
    if (this.isWeb3Available) {
      this.web3Instance.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
        this.campaign.deadline, this.campaign.detailsUrl, this.campaign.category, (err, res) => {
          console.log(err, res);
          this.campaigns = res;
        });
    } else {
      this.unLockAccount().then(res => {
        console.log(res);
        if (res) {
          this.web3Instance.methods.safeWithdrawal(this.campaignId).send({
              from: this.accountAddress,
              gas: Constants.GAS_WITHDRAW
            })
            .on('transactionHash', function (hash) {
              console.log("hash ", hash);
              //this.lockAccount1();
            })
            .on('receipt', function (receipt) {
              console.log("receipt ", receipt);
            })
            .on('confirmation', function (confirmationNumber, receipt) {
              console.log("confirmation no ", confirmationNumber);
              console.log("receipt ", receipt);
            })
            .on('error', console.error);

        } else {
          alert('invalid password')
        }
      }).catch(err => console.log(err))
    }
  }










/*
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
*/
get Web3(): any {
    return window['Web3'];
}


}

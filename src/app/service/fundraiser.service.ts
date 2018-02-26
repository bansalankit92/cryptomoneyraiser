import { Injectable } from '@angular/core';
import { Constants } from 'app/model/constants';
import { default as Web3} from 'web3';
import { Campaign } from 'app/model/Campaign';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/bindCallback';

import { UtilService } from './util.service'
@Injectable()
export class FundraiserService {

  private contractAddr = Constants.CONTRACT_ADDRESS;
  private defaultNodeIP = Constants.DEFAULT_NODEIP;
  private nodeIP: string; // Current nodeIP
  private nodeConnected: boolean = true; // If we've established a connection yet
  private web3Instance: any; // Current instance of web3
  private unlockedAccount: string; // Current unlocked account
  noOfCampaigns = 0;
  campaigns;
  private ABI = Constants.CONTRACT;
  campaignId: number;
  campaign: Campaign = new Campaign();
  isWeb3Available = false;
  web3;

  constructor(private utilService: UtilService) { }


  initializeWeb3() {
    if (typeof window['web3'] !== 'undefined' && typeof window['Web3'] !== 'undefined') {
      console.log("Using web3 detected from external source like Metamask")
      this.web3 = new this.Web3(window['web3'].currentProvider)
      this.isWeb3Available = true;
      this.web3Instance = this.web3.eth.contract(this.ABI).at(this.contractAddr);
      // console.log(this.web3Instance)
      // console.log(this.web3.eth)
      // console.log(this.web3.eth.personal)
      // console.log(this.web3.eth.getAccounts())

      //  console.log(this.web3.eth.accounts)
      // this.getBalanceOf('0x9831b22d110D694c0a10651D82D856b453cEA00d');
       // console.log(tokenContract);
    } else {
      console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
      this.web3 = new Web3(new Web3.providers.HttpProvider(this.defaultNodeIP))
      this.isWeb3Available = false;

      // console.log(this.web3);
      // console.log(this.web3.eth);
      // console.log(this.web3.eth.accounts);
      this.web3Instance = new this.web3.eth.Contract(this.ABI, this.contractAddr);

   //   console.log(this.web3Instance);
      // console.log(this.     web3.eth.accounts.wallet.load('ether123#') );

      // this.web3Instance.methods.numCampaigns().call((err, res) => {
      //   console.log(err, res);
      //   this.noOfCampaigns = res;

      // });
      // this.web3Instance.methods.campaigns(1).call((err, res) => {
      //   console.log(err, res);
      //   this.campaigns = res;
      // });

    }

  }

  get Web3(): any {
    return window['Web3'];
  }

  initialize() {
    if (!this.web3 || !this.web3Instance) {
      this.initializeWeb3();
    }
  }

  unlockAccount(accountAddress: string, accountPassword: string, unlockTime ? : number): Observable < any > {
    this.initialize();
    if (this.utilService.isValidAddress(accountAddress) && accountPassword) {
      return Observable.fromPromise(this.web3.eth.personal.unlockAccount(accountAddress.trim(), accountPassword.trim(),
        unlockTime > 100 ? unlockTime : Constants.UNLOCK_TIME));
    } else {
      return this.OnError('Please enter correct account address and password');
    }
  }

  addNewCampaign(accountAddress: string, accountPassword: string, campaign: Campaign): Observable < any > {
    this.initialize();
    if (this.isWeb3Available) {
      return Observable.bindCallback(
        this.web3Instance.newCampaign).call(this.campaign.beneficiary, this.campaign.fundingGoal,
        this.campaign.durationInMin, this.campaign.detailsUrl, this.campaign.category );
    } else {

    this.unlockAccount(accountAddress, accountPassword).subscribe(res => {
      console.log(res);
      if (res) {
       return Observable.fromPromise(this.web3Instance.methods.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
          this.campaign.durationInMin, this.campaign.detailsUrl, this.campaign.category).send({
          from: accountAddress,
          gas: Constants.GAS_NEW_CAMPAIGN
        }));

      } else {
        return this.OnError('Please enter correct account address and password')
      }
    }, err => this.OnError(err));
  }
  }

  OnError(err): Observable < any > {
    return Observable.throw(err);
  }


}

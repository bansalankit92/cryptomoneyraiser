import { Injectable } from '@angular/core';
import { Constants } from 'app/model/constants';
import { default as Web3} from 'web3';
import { Campaign } from 'app/model/Campaign';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/bindCallback';
import "rxjs/add/observable/of";

import { UtilService } from './util.service'
import { Subscriber } from 'rxjs/Subscriber';
@Injectable()
export class FundraiserService {

  private contractAddr = Constants.CONTRACT_ADDRESS;
  private defaultNodeIP = Constants.DEFAULT_NODEIP;
  private nodeIP: string; // Current nodeIP
  private nodeConnected = true; // If we've established a connection yet
  private web3Instance: any; // Current instance of web3
  private unlockedAccount: string; // Current unlocked account

  private ABI = Constants.CONTRACT;
  campaign: Campaign = new Campaign();
  campaigns: Campaign[] = [];
  isWeb3Available = false;
  web3;
  private $accountAddress;
  private $accountPassword;

  constructor(private utilService: UtilService) { }



	public get accountAddress(): string {
		return this.$accountAddress;
	}

	public set accountAddress(value: string) {
		this.$accountAddress = value;
  }
  
  public set accountPassword(value: string) {
		this.$accountPassword = value;
	}

  

  private initializeWeb3() {
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

  private get Web3(): any {
    return window['Web3'];
  }

  private initialize() {
    if (!this.web3 && !this.web3Instance) {
      this.initializeWeb3();
    }
  }

  private unlockAccount(unlockTime ?: number): Observable < any > {
    this.initialize();
    return new Observable < any > (observer => {
      if (UtilService.isValidAddress(this.$accountAddress) && this.$accountPassword) {
        this.web3.eth.personal.unlockAccount(this.$accountAddress.trim(), this.$accountPassword.trim(),
          unlockTime > 100 ? unlockTime : Constants.UNLOCK_TIME, (err, res) => this.handleCallback(err, res, observer));
      } else {
        this.OnError('Please enter correct account address and password', observer);
      }
    });
  }

  addNewCampaign(campaign: Campaign): Observable < any > {
    /**
     * 
     * @get transaction receipt
     */
    console.log('add new ', campaign);
    this.initialize();
    return new Observable < any > ((observer) => {
      if (this.isWeb3Available) {
        this.web3Instance.newCampaign(campaign.beneficiary, campaign.fundingGoal,
          campaign.deadline, campaign.detailsUrl, campaign.category,
          (err, res) => this.handleCallback(err, res, observer));
      } else {
        this.unlockAccount().subscribe(res => {
          console.log(res);
          if (res) {
          // this.web3Instance.methods.newCampaign(this.campaign.beneficiary, this.campaign.fundingGoal,
          //     this.campaign.deadline, this.campaign.detailsUrl, this.campaign.category).send({
          //     from: this.$accountAddress,
          //     gas: Constants.GAS_NEW_CAMPAIGN
          //   }, (err, res1) => this.handleCallback(err, res1, observer));
          this.web3Instance.methods.newCampaign(campaign.beneficiary, campaign.fundingGoal,
                campaign.deadline, campaign.detailsUrl, campaign.category).send({
                from: '0x48A105d092dCD56735CA052EA3c82ebfaB367f9b',
                gas: Constants.GAS_NEW_CAMPAIGN
              })
          .on('transactionHash', function (hash) {
            console.log("hash ", hash);
          observer.next(hash);
          observer.complete();
          })
          .on('receipt', function (receipt) {
            console.log("receipt ", receipt);
           // observer.next(receipt);
          })
          .on('confirmation', function (confirmationNumber, receipt) {
            console.log("confirmation no ", confirmationNumber);
            console.log("receipt ", receipt);
          })
          .on('error', function(error){
            observer.error(error);
          });
          } else {
            this.OnError('Please enter correct account address and password', observer)
          }
        }, err => this.OnError(err, observer));
      }
    });
  }

  private OnError(err, observer?: Subscriber < any >) {
    if (observer) {
      observer.error(err);
    }else {
    return Observable.throw(err);
    }
  }


  search(campaignId: number): Observable < any > {
    this.initialize();
    return new Observable < any > ((observer) => {
      if (this.isWeb3Available) {
        this.web3Instance.campaigns(campaignId, (err, res) => this.handleCallback(err, res, observer));
      } else {
        this.web3Instance.methods.campaigns(campaignId).call((err, res) => {
          if (err) {
            this.handleCallback(err, undefined, observer)
          } else {
            observer.next(Campaign.toCampaign(res, this.isWeb3Available));
            observer.complete();
          }
        })
      }
    });
  }

  getMultiple(from:number, to:number): Observable < any > {
    if(from > to){
      return Observable.throw('From should be less than to');
    }
    this.initialize();
    let o = new Observable < any > ((observer) => {
      this.campaigns = [];
      for (let i = from; i <= to; i++) {
        if (this.isWeb3Available) {
          this.web3Instance.campaigns(i, (err, res) => this.handleCallback(err, res, observer));
        } else {
          this.web3Instance.methods.campaigns(i).call((err, res) => {
            if (err) {
              this.handleCallback(err, undefined, observer)
            } else {
              res.id = i;
              this.campaigns.push(Campaign.toCampaign(res, this.isWeb3Available))
             // observer.next(this.campaigns);
              if (this.campaigns.length >= to - from) {
                observer.next(this.campaigns);
                observer.complete();
              }
            }
          })
        }
    }
    });
    return o;
  }

  numOfCampaign(): Observable < any > {
    this.initialize();
    return new Observable < any > ((observer) => {
      if (this.isWeb3Available) {
        this.web3Instance.numCampaigns((err, res) => this.handleCallback(err, res, observer));
      } else {
        this.web3Instance.methods.numCampaigns().call((err, res) => this.handleCallback(err, res, observer))
      }
    });
  }

  private handleCallback(err, res, observer: Subscriber < any > ) {
    console.log('err: ',err,' res ', res)
    if (observer) {
      if (err) {
        observer.error(err)
      } else {
        observer.next(res);
        observer.complete();
      }
    }else {
      Observable.throw(err);
    }
  }


  withdraw( campaignId: number): Observable < any > {
    /**
     * 
     * @get transaction receipt
     */
    this.initialize();
    return new Observable < any > ((observer) => {
      if (this.isWeb3Available) {
        this.web3Instance.safeWithdrawal(campaignId,
          (err, res) => this.handleCallback(err, res, observer));
      } else {
        this.unlockAccount().subscribe(res => {
          console.log(res);
          if (res) {
            this.web3Instance.methods.safeWithdrawal(campaignId).send({
                from: this.$accountAddress,
                gas: Constants.GAS_WITHDRAW
              }, (err, res1) => this.handleCallback(err, res1, observer));

          } else {
            this.OnError('Please enter correct account address and password', observer)
          }
        }, err => this.OnError(err, observer));
      }
    });
  }

  contribute( campaignId: number, ether: number): Observable < any > {
    /**
     * 
     * @get transaction receipt
     */
    this.initialize();
    return new Observable < any > ((observer) => {
      if (this.isWeb3Available) {
        this.web3Instance.contribute(campaignId,
          (err, res) => this.handleCallback(err, res, observer));
      } else {
        this.unlockAccount().subscribe(res => {
          console.log(res);
          if (res) {
            console.log(this.web3Instance.methods);
            this.web3Instance.methods.contribute(campaignId).send({
                from: this.$accountAddress,
                gas: Constants.GAS_WITHDRAW,
                value: ether
              }, (err, res1) => this.handleCallback(err, res1, observer));

          } else {
            this.OnError('Please enter correct account address and password', observer)
          }
        }, err => this.OnError(err, observer));
      }
    });
  }


}

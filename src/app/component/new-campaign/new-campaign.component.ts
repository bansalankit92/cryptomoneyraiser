import { Component, OnInit } from '@angular/core';
import { Campaign } from 'app/model/Campaign';
import { FundraiserService } from 'app/service/fundraiser.service';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.css']
})
export class NewCampaignComponent implements OnInit {

  campaign: Campaign = new Campaign();
  accountAddress = '0x48A105d092dCD56735CA052EA3c82ebfaB367f9b';
  accountPassword = 'ether123#';


  constructor(private fundraiserService: FundraiserService) {

  }

  ngOnInit() {
  }


  addNewCampaign() {
    /**@TODO
     * validate, 
     * 
     */

     this.fundraiserService.addNewCampaign(this.accountAddress,this.accountPassword,this.campaign)
     .subscribe( res=>{
       console.log('new campaign res ',res)
     }, err=>{
       console.log("err", err);
     }

     );

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

}

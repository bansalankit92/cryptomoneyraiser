import { Component, OnInit } from '@angular/core';
import { Campaign } from 'app/model/Campaign';
import { FundraiserService } from 'app/service/fundraiser.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  noOfCampaigns = 0;
  campaigns = [];
  campaignId: number;
  campaign: Campaign = new Campaign();

  constructor(private fundraiserService: FundraiserService) {

  }

  ngOnInit() {
    this.fundraiserService.numOfCampaign().subscribe(res=>{
      console.log(res);
      this.noOfCampaigns = res;
      this. getCampaigns();




    },err=>{
      console.log('eerr no of camp',err);
    });
  }

  search() {
    /* this.web3Instance.campaigns(1, (err, res) => {
       console.log(err, res);
       this.campaigns = res;
     });
     this.web3Instance.numCampaigns((err, res) => {
       console.log(err, res);
       this.noOfCampaigns = res;
     });*/
     this.fundraiserService.search(this.campaignId).subscribe(res=>{
      console.log(res);
      this.campaigns = [];
      this.campaigns.push(res);
    }, err => {
      console.log('err in search', err);
    });
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
     this.fundraiserService.getMultiple(1,this.noOfCampaigns).subscribe(res=>{
      console.log(res);
      this.campaigns = [];
      this.campaigns = res;
    }, err => {
      console.log('err in getting multiple', err);
    });
   }


}

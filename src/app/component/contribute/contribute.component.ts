import { Component, OnInit } from '@angular/core';
import { Campaign } from 'app/model/Campaign';
import { FundraiserService } from 'app/service/fundraiser.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  campaignId: number;
  contributeValue;

  constructor(private fundraiserService: FundraiserService) {

  }

  ngOnInit() {
  }

  contribute() {
    /**@TODO
     * validate is deadline gone , 
     * is available
     */

     this.fundraiserService.contribute(this.campaignId,this.contributeValue).subscribe(res=>{
       console.log(res)
     },err=>{
       console.log(err);
     });
    
  }
}

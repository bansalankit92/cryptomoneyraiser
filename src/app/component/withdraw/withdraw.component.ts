import { Component, OnInit } from '@angular/core';
import { FundraiserService } from 'app/service/fundraiser.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  campaignId: number;

  constructor(private fundraiserService: FundraiserService) {

  }
  ngOnInit() {

    

  }

  withdraw(){
    this.fundraiserService.withdraw(this.campaignId).subscribe(res=>{
      console.log('withdraw ',res);

    },err => {
      console.log('withdraw ',err);
    });
  }
}

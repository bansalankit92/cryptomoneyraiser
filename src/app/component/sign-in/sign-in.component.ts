import { Component, OnInit } from '@angular/core';
import { FundraiserService } from 'app/service/fundraiser.service';
import { UtilService } from 'app/service/util.service';
import { Constants } from 'app/model/constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  accountAddress = Constants.ACCOUNT_ADDRESS;
  accountPassword = Constants.ACCOUNT_PASSWORD;


  constructor(private fundraiserService: FundraiserService) {

  }
  ngOnInit() {
    this.unLockAccount()
  }

  unLockAccount(){
    if (UtilService.isValidAddress(this.accountAddress) && this.accountPassword) {
      this.fundraiserService.accountAddress = this.accountAddress;
      this.fundraiserService.accountPassword = this.accountPassword;
      this.fundraiserService.unlockAccount().subscribe(res=>{
        console.log(res)

       },err=>{
         console.log(err)
       });
    }else{
      alert('Please add account address and password!');
    }
  }

}

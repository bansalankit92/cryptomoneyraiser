
export class Campaign {
  beneficiary = '';
  fundingGoal: number;
  deadline: number;
  detailsUrl: string;
  category: string;
  numFunders: number;
  amountRaised: number;
  isWithdrawn: boolean;

  public static toCampaign(res, isWeb3Available:boolean): Campaign{
    let campaign = new Campaign();
    if(isWeb3Available){

    }else{
    /*  "beneficiary": "0x48A105d092dCD56735CA052EA3c82ebfaB367f9b",
      "fundingGoal": "150000000000000000000",
       "deadline": "1519765329",
        "detailsUrl": "ankitbansal.co.in", 
        "category": "something",
         "numFunders": "0", 
         "amountRaised": "0",
          "isWithdrawn": false 
         */
        campaign.beneficiary = res.beneficiary;
        campaign.fundingGoal = res.fundingGoal;
        campaign.deadline = res.durationInMin;
        campaign.detailsUrl = res.detailsUrl;
        campaign.category = res.category;
        campaign.numFunders = res.numFunders;
        campaign.amountRaised = res.amountRaised;
        campaign.isWithdrawn = res.isWithdrawn;


    }

    return campaign;
  }

  constructor(option?: {
    beneficiary?: string,
    fundingGoal?: number,
    deadline?: number,
    detailsUrl?: string,
    category?: string,
    numFunders?: number,
    amountRaised?: number,
    isWithdrawn?: boolean
  }) {
    if (option) {
      this.beneficiary = option.beneficiary;
      this.fundingGoal = option.fundingGoal;
      this.deadline = option.deadline;
      this.detailsUrl = option.detailsUrl;
      this.category = option.category;
      this.numFunders = option.numFunders;
      this.amountRaised = option.amountRaised;
      this.isWithdrawn = option.isWithdrawn;
    }

  }

 
}


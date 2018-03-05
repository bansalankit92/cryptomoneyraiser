
export class Campaign {
  id;
  beneficiary;
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
alert('@TODO   Plz check the reposnse and complete the mehtod');
    }else{
      campaign.id = res.id;
        campaign.beneficiary = res.beneficiary;
        campaign.fundingGoal = res.fundingGoal;
        campaign.deadline = res.deadline;
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


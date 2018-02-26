export class Campaign {
  beneficiary = '';
  fundingGoal: number;
  durationInMin: number;
  detailsUrl: string;
  category: string;

  constructor(option?: {
    beneficiary?: string,
    fundingGoal?: number,
    durationInMin?: number,
    detailsUrl?: string,
    category?: string
  }) {
    if (option) {
      this.beneficiary = option.beneficiary;
      this.fundingGoal = option.fundingGoal;
      this.durationInMin = option.durationInMin;
      this.detailsUrl = option.detailsUrl;
      this.category = option.category;
    }

  }
}


pragma solidity ^0.4.16;

contract CF5{
    
	struct Campaign {
	    address  beneficiary;
		uint  fundingGoal;
    	uint  deadline;
		string  detailsUrl;
		string  category;
		uint numFunders;
    	uint  amountRaised;
    	bool isWithdrawn;
        mapping(address => uint256)  balanceOf;
	}
    event FundTransfer(uint campaignID, address backer, uint amount, bool isContribution);
    event GoalReached(uint campaignID, address recipient, uint totalAmountRaised);


	uint public numCampaigns;
	mapping (uint => Campaign) public campaigns;

	
	function newCampaign(address beneficiary, uint goal, uint durationInMinutes, string detailsUrl, string  category) public returns (uint campaignID){
        require(beneficiary != 0x0);
	    require(goal>0);
	    campaignID = ++numCampaigns; 
	    //deadline = now + durationInMinutes * 1 minutes;
        //can also give reward;
        campaigns[campaignID] = Campaign(beneficiary, goal * 1 ether, now + durationInMinutes * 1 minutes,detailsUrl,category,0,0,false);
	}
	
	modifier isCampaignAvailable(uint campaignID){
	    require(campaignID>0 && campaignID<=numCampaigns);
	    _;
	}
	
	function contribute(uint campaignID) isCampaignAvailable(campaignID) public payable {
	    Campaign storage c = campaigns[campaignID];
	    require(now <= c.deadline);
	    c.balanceOf[msg.sender]=msg.value;
        c.amountRaised += msg.value;
        c.numFunders++;
        FundTransfer(campaignID, msg.sender, msg.value, true);
	}
	
    /**
     * Check if goal was reached
     *
     * Checks if the goal or time limit has been reached and ends the campaign
     */
    function checkGoalReached(uint campaignID)isCampaignAvailable(campaignID) public returns(bool reached) {
        Campaign storage c = campaigns[campaignID];
        if (c.amountRaised >= c.fundingGoal){
            reached = true;
            GoalReached(campaignID, c.beneficiary, c.amountRaised);
            return reached;
        }
        reached = false;
    }

    /**
     * Withdraw the funds
     *
     * Checks to see if goal or time limit has been reached, and if so, and the funding goal was reached,
     * sends the entire amount to the beneficiary. If goal was not reached, each contributor can withdraw
     * the amount they contributed.
     */
    function safeWithdrawal(uint campaignID)isCampaignAvailable(campaignID) public {
        Campaign storage c = campaigns[campaignID];
        require(now >= c.deadline);
        bool isGoalReached = checkGoalReached(campaignID);
        if (!isGoalReached && !c.isWithdrawn) {
            uint amount = c.balanceOf[msg.sender];
            c.balanceOf[msg.sender] = 0;
            if (amount > 0) {
                if (msg.sender.send(amount)) {
                    FundTransfer(campaignID, msg.sender, amount, false);
                } else {
                    c.balanceOf[msg.sender] = amount;
                }
            }
        }

        if (isGoalReached && c.beneficiary == msg.sender && !c.isWithdrawn) {
            if (c.beneficiary.send(c.amountRaised)) {
                FundTransfer(campaignID, c.beneficiary, c.amountRaised, false);
                c.isWithdrawn = true;
            } else {
               
            }
        }
    }
    

    function extendDeadLine(uint campaignID,uint durationInMinutes)isCampaignAvailable(campaignID)  public{
        Campaign storage c = campaigns[campaignID];
        require(msg.sender == c.beneficiary);
        c.deadline += durationInMinutes * 1 minutes;
        
    }
}

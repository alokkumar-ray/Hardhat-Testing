// //SPDX-License-Identifier: Unlicensed;
// pragma solidity >=0.8.0 <0.9.0;

// import "@openzeppelin/contracts/interfaces/IERC20.sol";
// import "hardhat/console.sol" ;


// contract Stak {
//     address public admin;
//     IERC20 public token;
//     uint public totalstakedAmount;
//     uint public rewardAmount;


//     struct staker{
//         uint amount;
//         uint timeStamp;
//     }


//     mapping (address => staker) public stakes;
//     mapping (address => uint) public stakedBalance;


//     constructor(address _token){
//         admin = msg.sender;
//         token = IERC20(_token);
//     }

//     function stake(uint256 _amount) public {
//         stakes[msg.sender] = staker(_amount, block.timestamp);
//         totalstakedAmount += _amount;
//         require(_amount > 0, "Amount should be greater than 0");
//         stakedBalance[msg.sender] = _amount;
//         token.transferFrom(msg.sender,address(this),_amount);
//     }

//     function unStake(uint) external {
//         require (stakedBalance[msg.sender] > 0 , "Amount should be greater than 0 ");
//         require (block.timestamp >= stakes[msg.sender].timeStamp + 2629743, "not time yet");
//         uint userShare = (stakedBalance[msg.sender] * 100 * 100 / totalstakedAmount);
//         uint userReward = (userShare * rewardAmount / (100 * 100));
//         uint finalAmount = (stakedBalance[msg.sender] + userReward);
//         token.transfer(msg.sender,finalAmount);

        

//     }
//     function addReward(uint _amount) external {
//         token.transferFrom(msg.sender,address(this),_amount);
//         rewardAmount += _amount;

//     }
//     // function reward() external {

//     //     uint rewardDistributionAmount = token.balanceOf(address(this)) - totalstakedAmount; 
//     //     uint userShare = (( stakedBalance[msg.sender]* 100 * 100) / totalstakedAmount );
//     //     uint userReward = (userShare * rewardAmount) / (100 * 100);
//     //     totalstakedAmount  -=  stakedBalance[msg.sender];
//     //     console.log("Reward Value", rewardAmount);
//     //     token.transfer(msg.sender, userReward);
//     //     console.log("Final Reward Value", rewardDistributionAmount);

//     // }

 
// }
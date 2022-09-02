// //SPDX-License-Identifier: Unlicensed;
// // pragma solidity >=0.8.0 <0.9.0;

// contract StakingPool {
//     mapping (address => uint) public balances;
//     address public admin ;
//     uint public end;    //End date of an investment period 
//     bool public finalized;
//     uint public totalInvested;
//     uint public totalChange;
//     mapping (address => bool) public changeClaimed;

//     constructor(){
//         admin = msg.sender;
//         end = block.timestamp + 7 days ;
//     }
//     function invest() external payable {
//         require(block.timestamp < end , "too late") ;
//         if(balances[msg.sender] ==0){
//             emit NewInvestor(msg.sender);
//         }
//         balances[msg.sender] =+ msg.value;
//     }
//     function finalize() external {
//         require(block.timestamp >= end, "too early");
//         require(finalized == false, "already finalized");
//         finalized = true;
//         totalInvested = address(this).balance ;
//         totalChange = address(this).balance % 32 ether;
//     }

//     function getChange() external {
//         require(finalized == true, "not finalized");
//         require(balances[msg.sender] > 0, "not an investor");
//         require(changeClaimed[msg.sender] == false,"change already claimed");
//         changeClaimed[msg.sender] = true;
//         uint amount = totalChange * balances[msg.sender] / totalInvested;
//         msg.sender.transfer(amount);
//     }
// }
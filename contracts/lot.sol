// // SPDX-License-Identifier: Unlicensed
// import "hardhat/console.sol";

// pragma solidity >=0.8.0 <0.9.0;

// contract lottery {
//     address public manager;
//     address payable[] public players;
//     address  payable public  winner;


//     constructor() {
//         manager = msg.sender;
//     }

//     receive() external payable {
//         require(msg.value >= 1);
//         players.push(payable(msg.sender));
//     }

//     function alreadyEntered() view private returns (bool){
//         for(uint i=0; i<players.length; i++) {
//             if(players[i]==msg.sender)
//             return true;
//         }
//         return false;
//     }


//     function enter() payable public {
//         require(msg.sender != manager,"Manager cannot enter");
//         require(alreadyEntered() == false, "Player Already Entered");
//         console.log("msg.value", msg.value);
//         require(msg.value >=1 ether,"Minimum amount must be paid");
//         players.push(payable(msg.sender));
//     }
//     function balance() public view returns(uint){
//         return address(this).balance ;

//     }

//     function random() view private returns (uint) {
//         return uint (sha256(abi.encodePacked(block.difficulty,block.number,players)));
//     }

//     function pickWinner() public {
//         require(msg.sender == manager, "Only manager can pick a winner");
//          uint r = random();
//          uint index=r%players.length; // winner index 
    
//         winner=players[index];
//         winner.transfer(balance());
//         players = new address payable[](0);
    
//     }

//     function getPlayers() public view  returns (address payable[] memory) {
//         return players;
//     }

//     function managerAddress() public view returns(address){
//         return address(manager);
//     }
    
//     function getWinner() public view returns(address){
//         address Winner=winner;
//         return Winner;



//     }

    
// }
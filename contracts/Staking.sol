// //SPDX-License-Identifier: Unlicensed;
// pragma solidity >=0.8.0 <0.9.0;


// import "@openzeppelin/contracts/interfaces/IERC20.sol";
// import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
// import "hardhat/console.sol";

// contract Staking {
//     address public admin;
//     IERC20 public token;

//     mapping(address => uint) public stakedBalance ;

//     constructor(address _token) {
//         admin = msg.sender;
//         token = IERC20(_token);
//     }

//     function stake(uint256 _amount) public {
//         require(_amount>0, "amount greater than 0");
//         stakedBalance[msg.sender] = _amount;
//         token.transferFrom(msg.sender, address(this), _amount);

//     }

//     function unStake() external {
//         require (stakedBalance[msg.sender] > 0, "amount should be equal to or less than 500");
//         console.log("staked bal", stakedBalance[msg.sender]);
//         token.transfer(msg.sender, [msg.sender]);
//     }
// }

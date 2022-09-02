//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "hardhat/console.sol";

contract Token is Initializable {
    string public constant name = "My Hardhat Token" ;
    string public constant symbol = "MHT" ;
    uint public constant  totalSupply = 1000000;
    address public owner;
    mapping(address => uint) balances;

    function initialize(address _owner)  public initializer{
        balances[_owner] = totalSupply;
        owner = _owner;
    }

    function setBalances(address _user) external {
        balances[_user] = 100;
    }

    function transfer(address to, uint amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns(uint) {
        return balances[account];
    }

}

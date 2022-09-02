//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "hardhat/console.sol";

contract Token22 is Initializable {
    string public constant name = "My Hardhat Token" ;
    string public constant symbol = "MHT" ;
    uint public constant  totalSupply = 1000000;
    address public owner;
    uint public constant num = 20;
    mapping(address => uint) balances;

    function initialize(address _owner)  public initializer{
        balances[_owner] = totalSupply;
        owner = _owner;
    }

    function setBalances(address _user) external {
        balances[_user] = totalSupply;
    }

    function transfer(address to, uint amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns(uint) {
        return balances[account];
    }

    function increaseBalance(address _account, uint256 _amount) external {
        balances[_account] += _amount;
    }

    function readSymbol() external view returns(string memory){
        return symbol;
    }
}

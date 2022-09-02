// //SPDX-License-Identifier:Unlicensed;
// pragma solidity >=0.8.0 <0.9.0;

// import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract MY1155 is ERC1155, Ownable {
//     constructor() ERC1155("") {

//     }

//     function setURI(string memory newuri) public onlyOwner {
//         _setURI(newuri);
//     }

//     function mint(address account, uint256 id, uint256 amount, bytes memory data)
//         public
//         onlyOwner
//     {
//         _mint(account, id, amount, data);
//     }

//     function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
//         public
//         onlyOwner
//     {
//         _mintBatch(to, ids, amounts, data);
//     }
//     function burn(address from,uint256 id,uint256 amount) public onlyOwner 
//     {
//         _burn(from,id,amount);
//     }
//     function burnBatch(address from, uint256[] memory id,uint256[] memory amount) public onlyOwner 
//     {
//         _burnBatch(from,id,amount);
//     }
//     function beforeTokenTransfer(address operator,address from,address to,uint256[] memory ids,uint256[] memory amounts,bytes memory data) public onlyOwner {
//         _beforeTokenTransfer(operator,from,to,ids,amounts,data);
//     }
// }

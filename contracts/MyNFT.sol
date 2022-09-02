// //SPDX-License-Identifier: Unlicensed
// pragma solidity >=0.8.0 <0.9.0;

// import "@openzeppelin/contracts/interfaces/IERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// contract MyNFT is ERC721URIStorage, Ownable {

//     using Counters for Counters.Counter;

//     Counters.Counter private _tokenIds;

//     constructor() ERC721 ("Lenov","LNV"){}

//     function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
//         _tokenIds.increment();

//         uint256 newItemId= _tokenIds.current();
//         _mint(recipient, newItemId);
//         _setTokenURI(newItemId, tokenURI);
//         return newItemId;
//     }

//     function burnNFT(uint256 tokenId) public {
//         _burn (tokenId);

//     }
//     function approveNFT(address to, uint256 tokenId) public {
//         _approve (to,tokenId);
//     }

//     function existsNFT(uint256 tokenId) public view virtual returns(bool) {
//         _exists(tokenId);
//         return true;       
//     }

//     function isApprovedOrOwnerNFT(address spender, uint256 tokenId) public view returns (bool) {
//         address owner = ERC721.ownerOf(tokenId);
//         return (spender == owner || isApprovedForAll(owner, spender) || getApproved(tokenId) == spender);
//     }

//     function safeMintNFT(address to, uint256 tokenId) public  {
//         _safeMint(to, tokenId, "");
//     }

     
// }
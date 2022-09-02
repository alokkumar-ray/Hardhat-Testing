// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('MyNFT', () => {
//     let MyNFT,my,a,b,c;

//     beforeEach(async () => {
//         MyNFT = await ethers.getContractFactory('MyNFT');
//         my= await MyNFT.deploy();
//         [a,b,c] = await ethers.getSigners();
//         // console.log("a address", a.address);
//         await my.mintNFT(a.address,"Green");
//         await my.mintNFT(a.address,"Blue");
//         await my.mintNFT(a.address,"Pink");
//         await my.mintNFT(a.address,"Red");
//         await my.mintNFT(b.address,"Violet");
//         await my.mintNFT(c.address,"Orange");

//         // console.log("my address bbbbb", my.address);

//         // console.log("owner of 5 ---", await my.ownerOf(5));
//         // console.log(await my.ownerOf(6));
        
// })
// describe('Deployment', () => {
//     it('Should Set The Right Owner', async () => {

//     expect(await my.owner()).to.equal(a.address);
//     // console.log(await my.balanceOf(a.address));
//     // console.log(await my.ownerOf(3));
//     // console.log(await my.ownerOf(5));
//     // console.log(await my.ownerOf(6));
//     });
    
// describe("Case 1 Testing",()=>{
//     it ('Should check the mint function', async () => {
//         await my.mintNFT(a.address,"Black");
//         const aBalance = await my.balanceOf(a.address);
//         expect(aBalance).to.equal(5);
//         // expect(await my.connect(a).ownerOf)
//         // console.log(await my.ownerOf(7));
//     })

//     it ('Should check the burn function', async () => {
//         await my.burnNFT(3);
//         const aBalance = await my.balanceOf(a.address);
//         expect(aBalance).to.equal(3);
//     })
//     it ('Should check the approve function & transferFrom function', async() =>{
//         await my.connect(a).approveNFT(b.address,4);
//         await my.transferFrom(a.address,b.address,4);
//         const bBalance = await my.balanceOf(b.address);
//         expect(bBalance).to.equal(2);
//     })
//     it ('Should check the setApprovalForAll & isApprovedForAll function',async() =>{
//         await my.connect(b).setApprovalForAll(a.address,true);
//         await my.connect(b).isApprovedForAll(b.address,a.address);
//         expect (await my.connect(b).isApprovedForAll(b.address,a.address)).to.equal(true);
//     })
//     it ('Should check the approve & getApproved function', async() => {
//         await my.connect(c).approve(a.address,6)
//         await my.connect(c).getApproved(6);
//         expect(await my.getApproved(6)).to.equal(a.address);
//     })
//     it ('Should check the transferFrom function', async()=>{
//         await my.connect(a).transferFrom(a.address,b.address,1);
//         const bBalance = await my.balanceOf(b.address);
//         expect(bBalance).to.equal(2);
//     })
//     it ('Should check the safeTransferFrom function', async() =>{
//         await my.connect(a).approveNFT(b.address,2);
//         // console.log(await my.getApproved(2));
//         // console.log('b addr',b.address);
//         // console.log('a addr',a.address);
//         // console.log("my address", my.address);
//         // await my.safeTransferFrom(a.address,b.address,2,"0x7676");

//         await my['safeTransferFrom(address,address,uint256)'](a.address, b.address, 2);
//         const bBalance = await my.balanceOf(b.address);
//         // console.log(await my.ownerOf(2));
//         expect(bBalance).to.equal(2);
//     })
//     it ('Should check the exists function', async()=>{
//         await my.existsNFT(1);
//         expect(await my.existsNFT(1)).to.equal(true);
//     })
//     it ('Should check the isApprovedOrOwner function', async()=>{
//         await my.isApprovedOrOwnerNFT(a.address,1);
//         expect(await my.isApprovedOrOwnerNFT(a.address,1)).to.equal(true);
//     })
//     it ('Should check the safeMint function', async()=>{
//         await my.safeMintNFT(a.address,7);
//         const aBalance = await my.balanceOf(a.address);
//         expect(aBalance).to.equal(5);

//     })
// })
// })
// })

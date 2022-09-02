// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('MY1155', () => {
//     let MY1155,my,a,b,c;

//     beforeEach(async () => {
//     MY1155 = await ethers.getContractFactory('MY1155');
//         my= await MY1155.deploy();
//         [a,b,c] = await ethers.getSigners();

//         await my.mint(a.address,1,4,0x01);
//         await my.mint(a.address,2,6,0x02);
//         await my.mint(a.address,3,8,0x03);
//         await my.mint(a.address,4,10,0x04);
//         await my.mint(b.address,5,12,0x05);
//         await my.mint(c.address,6,14,0x06);

// })
// describe('Deployment', () => {
//     it('Should Set The Right Owner', async () => {  
//         expect(await my.owner()).to.equal(a.address);
//         console.log(await my.balanceOf(a.address,1));
//         console.log(await my.balanceOfBatch([a.address,b.address],[1,5]));
//     })

//     it('Should check the setApprovalForAll & isApprovedForAll function', async()=>{
//         await my.connect(b).setApprovalForAll(a.address,true);
//         await my.connect(b).isApprovedForAll(b.address,a.address);
//         expect (await my.connect(b).isApprovedForAll(b.address,a.address)).to.equal(true);
//     })
//     it ('Should check the safeTransferFrom function', async()=>{
//         await my.connect(b).setApprovalForAll(a.address,true);
//         await my.connect(b).isApprovedForAll(b.address,a.address);
//         await my.connect(b).safeTransferFrom(b.address,a.address,5,12,0x05);
//         // console.log(await my.balanceOf(a.address,5));
//         expect(await my.balanceOf(a.address,5)).to.equal(12);
//     })
//     it ('Should check the safeBatchTransferFrom function', async()=>{
//         await my.connect(b).setApprovalForAll(a.address,true);
//         await my.connect(b).isApprovedForAll(b.address,a.address);
//         await my.connect(b).safeBatchTransferFrom(b.address,a.address,[5],[12],0x05);
//         // console.log(await my.balanceOf(a.address,5));
//         expect(await my.balanceOf(a.address,5)).to.equal(12);
//     })
//     it ('Should check the mint function', async () => {
//         await my.mint(a.address,7,16,0x07);
//         expect(await my.balanceOf(a.address,7)).to.equal(16);    
//     })
//     it ('Should check the mintBatch function',async()=>{
//         await my.mint(a.address,[8],[18],0x07);
//         expect(await my.balanceOf(a.address,8)).to.equal(18);  
//     })
//     it ('Should check the burn function', async () => {
//         await my.burn(a.address,1,4);
//         expect(await my.balanceOf(a.address,1)).to.equal(0);  
//     })
//     it ('Should check the burnBatch function', async () => {
//         await my.burnBatch(a.address,[2],[6]);
//         expect(await my.balanceOf(a.address,2)).to.equal(0);  
//     })   
//  })
// })
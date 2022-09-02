// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Token contract', () =>{
//     let Token, token, alok, sbi, hdfc;

//     beforeEach(async () => {
//         Token = await ethers.getContractFactory('Token');
//         token = await Token.deploy();
//         [alok, sbi, hdfc] = await ethers.getSigners();
//     });

//     describe('Deployment', () => {
//         it('Should Set The Right Owner', async () => {
//             expect(await token.owner()).to.equal(alok.address);
//         });
//         it('Should Assign The Total Supply Of Tokens To The Owner', async () => {
//             const alokBalance = await token.balanceOf(alok.address) ;
//             expect(await token.totalSupply()).to.equal(alokBalance) ;
//         });
//     });

//     describe('Transactions', () => {
//         it('Should Transfer Tokens Between Accounts', async () => {
//             await token.transfer(sbi.address, 100000);
//             const sbiBalance = await token.balanceOf(sbi.address);
//             expect(sbiBalance).to.equal(100000);

//             await token.connect(sbi).transfer(hdfc.address, 50000);
//             const hdfcBalance = await token.balanceOf(hdfc.address);
//             expect(hdfcBalance).to.equal(50000);

//             console.log("sbiBalance" , Number(await token.balanceOf(sbi.address)));

//         });

//         it('Should Fail If Sender Doesnt Have Enough Tokens', async() => {
//             const initialBalanceAlok = await token.balanceOf(alok.address);
//             console.log("alok bal ", String(initialBalanceAlok));
//             await expect(
//                 token.connect(sbi)
//                 .transfer(alok.address, 1)
//             )
//             .to.be.revertedWith('Not enough tokens');

//             expect(
//                 await token.balanceOf(alok.address)
//             )
//             .to.equal(initialBalanceAlok);
//         });

//         it('Should Update Balances After Transfers', async () => {
//             const initialAlokBalance = await token.balanceOf(alok.address);

//             await token.transfer(sbi.address, 100000);
//             await token.transfer(hdfc.address, 50000);

//             const finalAlokBalance = await token.balanceOf(alok.address);
//             expect(finalAlokBalance).to.equal(initialAlokBalance - (100000 + 50000));

//             const sbiBalance = await token.balanceOf(sbi.address);
//             expect(sbiBalance).to.equal (100000);

//             const hdfcBalance = await token.balanceOf(hdfc.address);
//             expect(hdfcBalance).to.equal (50000);

//             console.log("alokBalance" , Number(await token.balanceOf(alok.address)));
//             console.log("sbiBalance" , Number(await token.balanceOf(sbi.address)));
//             console.log("hdfcBalance" , Number(await token.balanceOf(hdfc.address)));

//     });
// });
// })
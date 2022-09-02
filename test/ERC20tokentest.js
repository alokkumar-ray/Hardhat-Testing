// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('mytoken', () => {
//     let mytoken, token, x, y, z;

//     beforeEach(async () => {
//         mytoken = await ethers.getContractFactory('mytoken');
//         token = await mytoken.deploy(3000000);
//         [x, y, z,a] = await ethers.getSigners();
//     });

//     describe('Deployment', () => {
//         it('Should Set The Right Owner', async () => {
//             expect(await token.owner()).to.equal(x.address);
//         });
//         it('Should Assign The Total Supply Of Tokens To The Owner', async () => {
//             const xBalance = await token.balanceOf(x.address);
//             expect(await token.totalSupply()).to.equal(xBalance);
//         });
//     });

//     describe('Transactions', () => {
//         it('Should Transfer Tokens Between Accounts', async () => {
//             await token.transfer(y.address, 100000);
//             const yBalance = await token.balanceOf(y.address);
//             expect(yBalance).to.equal(100000);

//             await token.connect(y).transfer(z.address, 50000);
//             const zBalance = await token.balanceOf(z.address);
//             expect(zBalance).to.equal(50000);

//             console.log("yBalance", Number(await token.balanceOf(y.address)));

//         });

//         it.only('Should Transfer Tokens To x', async () => {

//             await token.transfer(y.address, 100000);
//             await token.transfer(z.address, 50000);

//             await token.connect(z).transfer(x.address, 500);
//             const xBalance = await token.balanceOf(x.address);
//             console.log("xBalance", Number(await token.balanceOf(x.address)));
//             expect (xBalance).to.equal(2850500);
//             const initialBalanceX = await token.totalSupply();
//             console.log("x bal ", String(initialBalanceX));



//         })

//         it('Should Fail If Sender Doesnt Have Enough Tokens', async () => {
//             const initialBalanceX = await token.balanceOf(x.address);
//             console.log("x bal ", String(initialBalanceX));
//             // await expect(
//             //     token.connect(y)
//             //     .transfer(x.address, 1)
//             // )
//             // .to.be.revertedWith('Not enough tokens');

//             expect(
//                 await token.balanceOf(x.address)
//             )
//                 .to.equal(initialBalanceX);
//         });

//         it('Should Update Balances After Transfers', async () => {
//             const initialXBalance = await token.balanceOf(x.address);

//             await token.transfer(y.address, 100000);
//             await token.transfer(z.address, 50000);

//             const finalXBalance = await token.balanceOf(x.address);
//             expect(finalXBalance).to.equal(initialXBalance - (100000 + 50000));

//             const yBalance = await token.balanceOf(y.address);
//             expect(yBalance).to.equal(100000);

//             const zBalance = await token.balanceOf(z.address);
//             expect(zBalance).to.equal(50000);



//             console.log("xBalance", Number(await token.balanceOf(x.address)));
//             console.log("yBalance", Number(await token.balanceOf(y.address)));
//             console.log("zBalance", Number(await token.balanceOf(z.address)));



//             console.log("Total Supply", Number(await token.totalSupply()));




//         });
//         // it('Burn test', async () => {

//         //     await token.burn(x.address, 1000000);
//         //     const xBalance = await token.balanceOf(x.address);
//         //     expect(xBalance).to.equal(2000000);

//         //     // console.log("Total Supply", Number(await token.totalSupply()));

//             // console.log("yBalance", Number(await token.balanceOf(y.address)));



//         });
//         it('Approve', async () => {

//             await token.transfer(y.address, 100000);
//             await token.transfer(z.address, 50000);

//             // console.log("allowance1", String(await token.allowance(x.address, )))
//             await token.connect(y).approve(x.address,10000);

//             await token.connect(x).transferFrom(y.address, z.address, 10000);
//             const zBalance = await token.balanceOf(z.address);
//             expect(zBalance).to.equal(60000);

//             console.log("yBalance", Number(await token.balanceOf(y.address)));
//             console.log("zBalance", Number(await token.balanceOf(z.address)));
//         });

//         it('Allowance', async () => {
//             await token.connect(x).approve(y.address, 2000);

//             const bal = await token.allowance(x.address, y.address);
           
//             await token.connect(y).transferFrom(x.address, y.address, 500);

            
//             await token.increaseAllowance(y.address, 100);

//             console.log('AllowanceAfterIncrement',Number(await token.allowance(x.address, y.address)));

//             console.log('Initial Allowance' , Number(await token.allowance(x.address, y.address)));

//             await token.decreaseAllowance(y.address, 200);

//             console.log('AllowanceAfterDecrement',Number(await token.allowance(x.address, y.address)));

            
//         })
    
//     });





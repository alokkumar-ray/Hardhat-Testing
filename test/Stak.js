// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Mytoken', () => {
//     let mytoken,token, mystak, stak, a, b,c;

//     beforeEach(async () => {
//         mytoken = await ethers.getContractFactory('Mytoken');
//         mystak = await ethers.getContractFactory('Stak');

//         [a, b,c] = await ethers.getSigners();
//         token = await mytoken.connect(a).deploy(30000);
//         stak = await mystak.connect(a).deploy(token.address);
//         console.log(token.address);

//         await token.connect(a).approve(stak.address,10000000);

//         await token.connect(a).transfer(b.address, 1000);
//         await token.connect(a).transfer(c.address, 1000);
//         // await token.connect(a).transfer(stak.address,3000);
//         await stak.connect(a).addReward(3000);

//         console.log("B Bal", Number(await token.balanceOf(b.address)));
//         console.log("C Bal", Number(await token.balanceOf(c.address)));
//         console.log("Stak Bal", Number(await token.balanceOf(stak.address)));
//     })

//     describe('Deployment', () => {
//         it('Should Set The Right Owner', async () => {
//             expect(await token.owner()).to.equal(a.address);
//             expect(await stak.admin()).to.equal(a.address);
//     });

//     describe("transfer",() => {
//         it('Should stake token',async () => {
        
//             await token.connect(b).approve(stak.address,1000);
//             await stak.connect(b).stake(1000);
            
//             await token.connect(c).approve(stak.address,1000);
//             await stak.connect(c).stake(1000);  
            
//             console.log("bBalance", Number(await token.balanceOf(b.address)));
//             console.log("cBalance", Number(await token.balanceOf(c.address)));
//         })

        
//         it('should unstake token', async () => {

//             await token.connect(b).approve(stak.address,1000);
//             await stak.connect(b).stake(1000);
            
//             await token.connect(c).approve(stak.address,1000);
//             await stak.connect(c).stake(1000);  
            
//             console.log("Balance of B", Number(await token.balanceOf(b.address)));
//             console.log("Balance of C", Number(await token.balanceOf(c.address)));

//             await ethers.provider.send("evm_increaseTime", [2829743]);
//             await ethers.provider.send("evm_mine");


//             await stak.connect(b).unStake(1000);
//             await stak.connect(c).unStake(1000);

//             console.log("bBal", Number(await token.balanceOf(b.address)));
//             console.log("cBal", Number(await token.balanceOf(c.address)));

//             // await stak.connect(b).reward();

//             // await stak.connect(c).reward();

//             console.log("B", Number(await token.balanceOf(b.address)));
//             console.log("C", Number(await token.balanceOf(c.address)));
//         })
//         // it("Should revert error 'not time yet'", async() => {

//         //     await token.connect(b).approve(stak.address,1000);
//         //     await stak.connect(b).stake(1000);
            
//         //     await token.connect(c).approve(stak.address,1000);
//         //     await stak.connect(c).stake(1000);  
            
//         //     await expect(stak.connect(b).unStake()).to.be.revertedWith('not time yet');
            
//         //     await expect (stak.connect(c).unStake()).to.be.revertedWith('not time yet');
//         // })

//         // it("Should revert error 'Amount should be equal to 1000'", async() => {

//         //     await token.connect(b).approve(stak.address,800);
//         //     await expect (stak.connect(b).stake(800)).to.be.revertedWith('Amount should be equal to 1000');
            
//         //     await token.connect(c).approve(stak.address,900);
//         //     await expect (stak.connect(c).stake(900)).to.be.revertedWith('Amount should be equal to 1000');
//         // })
//       })
//     })
// })


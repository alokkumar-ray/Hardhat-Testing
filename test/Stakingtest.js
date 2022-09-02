// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Mytoken', () => {
//     let mytoken,token, mystaking, staking, a, b,c;

//     beforeEach(async () => {
//         mytoken = await ethers.getContractFactory('Mytoken');
//         mystaking = await ethers.getContractFactory('Staking');
        
//         [a, b,c] = await ethers.getSigners();
//         token = await mytoken.connect(a).deploy(20000);
//         staking = await mystaking.connect(a).deploy(token.address);
//         console.log(token.address);

//         await token.connect(a).transfer(b.address, 1000);
//         await token.connect(a).transfer(c.address, 1000);

//         // console.log("bBalance", Number(await token.balanceOf(b.address)));

        
//     });

//     describe('Deployment', () => {
//         it('Should Set The Right Owner', async () => {
//             expect(await token.owner()).to.equal(a.address);
//             expect(await staking.admin()).to.equal(a.address);
//         });
    
//     describe("transfer",() => {
//         it('Should stake token',async () => {

//             await token.connect(b).approve(staking.address,500);
//             await staking.connect(b).stake(500);

//             await token.connect(c).approve(staking.address,400);
//             await staking.connect(c).stake(400);

//             console.log("cBalance", Number(await token.balanceOf(c.address)));

//             await staking.connect(c).unStake();
            


//             console.log("cBalance", Number(await token.balanceOf(c.address)));
        

//         })

    
//     });
// })
// });
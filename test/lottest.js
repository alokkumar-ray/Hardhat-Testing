
// const { messagePrefix } = require('@ethersproject/hash');
// const BN = require('ethers').BigNumber;
// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('lottery', () => {
//     let lottery,a,x,y,z;
    
//     beforeEach(async() =>{
//         lottery = await ethers.getContractFactory('lottery') ;
//         lottery = await lottery.connect(a).deploy();
//         [a,x,y,z] = await ethers.getSigners();
//     });
    
//     describe ('Deployment',async() => {
//         it('Manager is the deployer', async() => {
//             let managerAddress = (await lottery.managerAddress());
//             console.log("manager", managerAddress, a.address);
//             expect( managerAddress).to.be.equal(a.address);
//         });
//         it.only('Transfer  amounts for the lottery', async() =>{
//           await lottery.connect(x).enter ({ value: BN.from("1").mul(BN.from("10").pow("18")) } )
//           await lottery.connect(y).enter ({ value: BN.from("1").mul(BN.from("10").pow("18")) } )
//           await lottery.connect(z).enter ({ value: BN.from("1").mul(BN.from("10").pow("18"))} )

//           console.log("Lottery Balance" , Number(await lottery.balance()));

        
//         })
//         it('Allow manager to select winner', async =>{
//           await lottery.connect(x).enter ({ value: BN.from("1").mul(BN.from("10").pow("18")) } );
//           await lottery.connect(y).enter ({ value: BN.from("1").mul(BN.from("10").pow("18")) } );
//           await lottery.connect(z).enter ({ value: BN.from("1").mul(BN.from("10").pow("18"))} );
//           await lottery.connect(a).pickWinner();
//           console.log(await lottery.getWinner());

            

//         })
//     })
// })
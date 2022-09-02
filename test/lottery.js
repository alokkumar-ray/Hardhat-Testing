// const BN = require('ethers').BigNumber;
// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Lottery', () => {
//     let lottery,staking,a,x,y,z;
//     let addressArray;
//     let userArray;
    
//     beforeEach (async() =>{
//         lottery = await ethers.getContractFactory('Lottery') ;
//         staking = await ethers.getContractFactory('Staking');

//         [a,x,y,z] = await ethers.getSigners();
//         lot = await lottery.connect(a).deploy();
        
//          addressArray = [a.address,x.address,y.address,z.address];
//          userArray = ["a","x", "y", "z"];

        
//     });
    
//     describe ('Deployment',async() => {
//         it('Manager is the deployer', async() => {
//             let managerAddress = (await lot.manager());
//             expect( managerAddress).to.equal(a.address);
//             expect(await lot.manager()).to.equal(a.address);
//         });
//         it('Transfer amount for the Lottery', async() => {

//             await x.sendTransaction({
//                 to: lot.address,
//                 value: ethers.utils.parseEther('2', 'ether')
//             });
//             await y.sendTransaction({
//                 to: lot.address,
//                 value: ethers.utils.parseEther('2', 'ether')
//             });
//             await z.sendTransaction({
//                 to: lot.address,
//                 value: ethers.utils.parseEther('2', 'ether')
//             });

//             console.log("Lottery Balance" , Number(await lot.getBalance()));
//         });
//         it("Contract balance is equal to the total ethers submitted", async() => {
//             expect (await lot.getBalance());
//             expect(await lot.getBalance()).to.be.equal, { value: BN.from("6").mul(BN.from("10").pow("18")) };
//         });
//         it("Revert Check", async() =>{
//             await x.sendTransaction({
//                 to: lot.address,
//                 value: ethers.utils.parseEther('2', 'ether')
//             });
//             await y.sendTransaction({
//                 to: lot.address,
//                 value: ethers.utils.parseEther('2', 'ether')
//             });
//             await z.sendTransaction({
//                 to: lot.address,
//                 value: ethers.utils.parseEther('2', 'ether')
//             });
//             await lot.connect(a).selectWinner();
//             console.log(await lot.getWinner());
//             let winner = (await lot.getWinner());

//             })
            
//         it("Printing the winner with Name and Address",async() =>{

//             await x.sendTransaction({
//                 to: lot.address,
//                 value: ethers.utils.parseEther('2', 'ether')
//             });
//             await y.sendTransaction({
//                 to: lot.address,
//                 value: ethers.utils.parseEther('2', 'ether')
//             });
//             await z.sendTransaction({
//                 to: lot.address,
//                 value: ethers.utils.parseEther('2', 'ether')
//             });
//             await lot.connect(a).selectWinner();
//             console.log(await lot.getWinner());
//             let winner = (await lot.getWinner());

//             for(let i=0; i< addressArray.length; i++){
//                 if(addressArray[i] == winner){
                    
//                     console.log("winner is ", userArray[i])};
                    
//             }
//         })
//     })

// })
    


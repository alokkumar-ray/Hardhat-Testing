const { expect } = require('chai');
const { ethers } = require('hardhat');

describe ("Upgradeability Testing",()=>{
    let owner,add1;
    
    beforeEach(async()=>{
        [owner, add1] = await ethers.getSigners(); 
        console.log("owner aa", owner.address);

        Token = await ethers.getContractFactory('Token');
        tokenContract = await Token.connect(owner).deploy();
        console.log("Token Address",tokenContract.address);
        
        Upgradeability = await ethers.getContractFactory('OwnedUpgradeabilityProxy');
        upgradeability = await Upgradeability.connect(owner).deploy();
        console.log("Upgradable Address",upgradeability.address);
          
        tokenProxy= await Token.attach(upgradeability.address);
        initializeData = Token.interface.encodeFunctionData('initialize',[owner.address]);
        await upgradeability.upgradeToAndCall(tokenContract.address, initializeData);

        console.log("tokenProxy add", tokenProxy.address);
        console.log("owner bal ",Number(await tokenProxy.balanceOf(owner.address)));
        console.log("addd1 bal ",Number(await tokenProxy.balanceOf(add1.address)));

        Token22 = await ethers.getContractFactory('Token22');
        tokenContract22 = await Token22.connect(owner).deploy();
        tokenProxy22= await Token22.attach(upgradeability.address);
        await upgradeability.upgradeTo(tokenContract22.address);

        console.log("Token22 Address",tokenContract22.address);
        console.log("tokenProxy22", tokenProxy22.address);
        console.log("addd1 bal ",Number(await tokenProxy22.balanceOf(add1.address)));  
        
        await tokenProxy22.increaseBalance(add1.address, 100);
        console.log("Token Proxy22",tokenProxy22.address);
        console.log('TokenProxy',tokenProxy.address);
        console.log(await tokenProxy22.balanceOf(add1.address));
    })

    describe('Deployment', () => {

        it('Should set the right owner', async () => {

           console.log("owner Balance",Number(await tokenProxy.balanceOf(tokenProxy.address)));

        })

        it("Should test the transfer function", async ()=>{

            await tokenProxy.setBalances(owner.address);
            console.log(await tokenProxy.balanceOf(owner.address));
            console.log(await tokenProxy.balanceOf(tokenProxy.address));

            await tokenProxy.transfer(add1.address,5000);
            console.log("add1 bal",Number(await tokenProxy.balanceOf(add1.address)));

            let bal1 = Number(await tokenProxy.balanceOf(add1.address));  
            console.log("bal1", bal1);
            expect(await (bal1)).to.equal(5100);    
            console.log("Add1 Balance" , Number(await tokenProxy.balanceOf(add1.address)));

        })

        it("Should test the function balanceOf", async ()=>{
            
            expect (await tokenProxy.balanceOf(owner.address)).to.equal(1000000);
            expect (await tokenProxy.balanceOf(add1.address)).to.equal(100);
            console.log("ProxyOwner", await upgradeability.proxyOwner()); 
            console.log("owner add", owner.address);
            
        })

        it("Should test the function transferProxyOwnership",async()=>{

            await upgradeability.transferProxyOwnership(add1.address);
            console.log("NEW OWNER",await upgradeability.proxyOwner());

        })

        it("Should check the increaseBalance function",async()=>{
            
            await tokenProxy22.increaseBalance(add1.address,500);
            expect (await tokenProxy22.balanceOf(add1.address)).to.equal(600);
            console.log("Add1 Balance",Number(await tokenProxy.balanceOf(add1.address)));

        })   

        it("Should check the readSymbolfunction",async()=>{

            console.log('Symbol',(await tokenProxy22.readSymbol()));

        })
    })      
})             
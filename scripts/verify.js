const hre = require("hardhat");
const BN = require("ethers").BigNumber;
const owner = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

async function main() {

 await hre.run("verify:verify", {
      //Deployed contract address
      address: "0x1FDced8356F302adC383efEF50217FC4e89FFba2",
      //Pass arguments as string and comma seprated values
      constructorArguments: [],
      //Path of your main contract.
      contract: "contracts/Token.sol:Token",
    });
}
    main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command

  // We get the contract to deploy
  const Token22 = await hre.ethers.getContractFactory("Token22");
  const token22 = await Token22.deploy();

  await token22.deployed();

  console.log("Token22 deployed to:", token22.address);

  await token22.initialize(owner.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const hre = require("hardhat");

async function main() {
  
  const Contract = await hre.ethers.getContractFactory("Hospital");
  // const contract = await Contract.deploy("0x3F9D2336897d2ADFBaFf7B8110a5A4ae318D7F40");
  const contract = await Contract.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  
  await contract.deployed();

  console.log("Contract Address : ",contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0x0f483f061C567ff2d72254b1e5bEbb8e6B0bd1bC
// 0x5444655e58702265dcC589B2053d8f30f288eB3A
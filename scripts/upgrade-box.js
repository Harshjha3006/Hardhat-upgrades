const { ethers } = require("hardhat");

async function main() {
    const proxyAdmin = await ethers.getContract("BoxProxyAdmin");
    const proxy = await ethers.getContract("Box_Proxy");
    const boxV1 = await ethers.getContractAt("Box", proxy.address);
    let version = await boxV1.getVersion();
    console.log(version);
    const boxV2 = await ethers.getContract("BoxV2");
    const tx = await proxyAdmin.upgrade(proxy.address, boxV2.address);
    await tx.wait(1);
    const proxyBoxV2 = await ethers.getContractAt("BoxV2", proxy.address);
    version = await proxyBoxV2.getVersion();
    console.log(version);
}


main().then(() => {
    process.exit(0);
}).catch((e) => {
    console.log(e);
    process.exit(1);
})
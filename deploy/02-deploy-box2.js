const { network } = require("hardhat");
const { verify } = require("../utils/verify.js");
const { devChains } = require("../helper-hardhat-config");
require("dotenv").config();
module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts();
    const { deploy, log } = deployments;
    const chainId = network.config.chainId;
    const box2 = await deploy("BoxV2", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    if (!devChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying .....");
        await verify(box2.address, []);
    }

}    
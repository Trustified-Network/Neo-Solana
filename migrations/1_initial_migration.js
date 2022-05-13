const Agreement = artifacts.require("AgreementContract");
const Ag = artifacts.require("Agreement");

module.exports = function (deployer) {
  deployer.deploy(Ag);
  deployer.deploy(Agreement);  
};

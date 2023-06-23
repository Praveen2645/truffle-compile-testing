var Maths = artifacts.require("./Maths.sol");

module.exports = function(deployer) {
  deployer.deploy(Maths);
};
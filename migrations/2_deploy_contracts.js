var Voting = artifacts.require('./Voting.sol')

module.exports = function (deployer) {
  deployer.deploy(Voting, 1000, web3.toWei('0.1', 'ether'), ['Apple', 'Raspberry', 'Mango'])
}
/* As you can see above, the deployer expects the first argument to be the name of the
contract followed by constructor arguments. In our case, there is only one argument which
is an array of candidates. The third argument is a hash where we specify the gas required
to deploy our code. The gas amount varies depending on the size of your contract.
*/

// Allows us to use ES6 in our migrations and tests.
require('babel-register')
require('dotenv').config()

var HDWalletProvider = require("truffle-hdwallet-provider")

var infura_apikey = process.env.INF_APIKEY
var mnemonic = process.env.MET_MNEMONIC

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      from: process.env.DEV_FROM,
      network_id: '*', // Match any network id

    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
      },
      network_id: 3
    }
  }
}

/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
// require("dotenv").config();
// const HDWalletProvider = require("@truffle/hdwallet-provider");
const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  /**
   
   */
 // Configure your compilers
 compilers: {
  solc: {
    version: "0.5.5",    // Fetch exact version from solc-bin (default: truffle's version)
   },
  },
  networks: {
    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    // ropsten: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       process.env.MNEMONIC,
    //       `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
    //     ),
    //   network_id: 3, // Ropsten's id
    //   gas: 5500000, // Ropsten has a lower block limit than mainnet
    //   confirmations: 2, // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    // }
   
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
};

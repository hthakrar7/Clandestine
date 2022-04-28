require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/o2EVLef2gTdouELeNPjXLIfr9esg9Bcc',
      accounts: ['4abf6498b543abaf9117a92fd47e7eb855c5ecf2832be860aae5bca253ea3ec6'],
    },
  },
};
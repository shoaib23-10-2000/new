require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['6321e0af2569105d1b4dbd0e6effd2b8ac2ab8e9038a32303adb37a5de0bac26'],
    },
  },
};
// https://eth-ropsten.alchemyapi.io/v2/Xr24WTQOwLliK1abH7JhDnMhWRm0O4W8

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Xr24WTQOwLliK1abH7JhDnMhWRm0O4W8',
      accounts: [ '3ecf8f134240f9cc062f77094ed916d1dc7e997b2d3e1f3f747dab24c9e6b263' ]
    }
  }
}
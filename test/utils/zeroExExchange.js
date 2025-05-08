const {assert} = require('chai');
const {getAssetInfo, getAssetInfoByAddress} = require("@defisaver/tokens");
const axios = require("axios");
const dfs = require('../../src');
const exchangeUtils = dfs.utils.zeroExExchange;

describe.skip('Exchange utils', () => {

  const prices = {};

  const myAddr = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';

  before(async function () {
    this.timeout(10000);

    const allAssets = ['ETH', 'WBTC'];
    const assetAddressesForTesting = allAssets.map(asset => getAssetInfo(asset.replace(/^ETH$/, 'WETH')).address);
    const pricesResponse = await axios({
      method: 'get',
      url: `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${assetAddressesForTesting}&vs_currencies=usd`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    const pairs = Object.entries(pricesResponse.data);

    for (let [address, {usd: price}] of pairs) {
      const token = getAssetInfoByAddress(address).symbol.replace('WETH', 'ETH');
      prices[token] = price;
    }
  });

  context('Get sell price via 0x', function() {
    it('Returns price for 18/18dec tokens', async () => {
      const price = await exchangeUtils.estimateSellPrice('1', 'ETH', 'DAI');
      assert.closeTo(+price, +prices.ETH, prices.ETH * 0.05);
    }).timeout(10000);

    it('Returns price for 18/6dec tokens', async () => {
      const price = await exchangeUtils.estimateSellPrice('1', 'ETH', 'USDC');
      assert.closeTo(+price, +prices.ETH, prices.ETH * 0.05);
    }).timeout(10000);

    it('Returns price for 8/18dec tokens', async () => {
      const price = await exchangeUtils.estimateSellPrice('1', 'WBTC', 'DAI');
      assert.closeTo(+price, +prices.WBTC, prices.WBTC * 0.05);
    }).timeout(10000);

    it('Returns price for 8/6dec tokens', async () => {
      const price = await exchangeUtils.estimateSellPrice('1', 'WBTC', 'USDC');
      assert.closeTo(+price, +prices.WBTC, prices.WBTC * 0.05);
    }).timeout(10000);
  })

  context('Get buy price via 0x', function() {
    it('Returns price for 18/18dec tokens', async () => {
      const price = await exchangeUtils.estimateBuyPrice('10000', 'DAI', 'ETH');
      assert.closeTo(+price, +prices.ETH, prices.ETH * 0.05);
    }).timeout(10000);

    it('Returns price for 18/6dec tokens', async () => {
      const price = await exchangeUtils.estimateBuyPrice('10000', 'USDC', 'ETH');
      assert.closeTo(+price, +prices.ETH, prices.ETH * 0.05);
    }).timeout(10000);

    it('Returns price for 8/18dec tokens', async () => {
      const price = await exchangeUtils.estimateBuyPrice('10000', 'DAI', 'WBTC');
      assert.closeTo(+price, +prices.WBTC, prices.WBTC * 0.05);
    }).timeout(10000);

    it('Returns price for 8/6dec tokens', async () => {
      const price = await exchangeUtils.estimateBuyPrice('10000', 'USDC', 'WBTC');
      assert.closeTo(+price, +prices.WBTC, prices.WBTC * 0.05);
    }).timeout(10000);
  })

  context('Get SellAction via 0x', function() {
    it('Creates action', async () => {
      const action = await exchangeUtils.createSellAction('10', 'ETH', 'DAI', '0', 0, myAddr, myAddr);
      assert.instanceOf(action, dfs.actions.basic.SellAction);
      assert.equal(action.args[1], myAddr);
      assert.equal(action.args[2], myAddr);
    }).timeout(10000);
  })

})

const dfs = require('../../../src');
const {getIlkInfo, assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: MakerSupplyAction', () => {
  let action;

  context('Supply 1 ETH without specifying CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerSupplyAction(
        '1234',
        assetAmountInWei(1, 'WETH'),
        getIlkInfo('ETH-A').join,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
      assert.equal(action.args[4], dfs.getAddr('McdCdpManager'));
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(assetAmountInEth(ethValue), '0');
    })
  })

  context('Supply 1 ETH via specific CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerSupplyAction(
        '1234',
        assetAmountInWei(1, 'WETH'),
        getIlkInfo('ETH-A').join,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        dfs.getAddr('BCdpManager'),
      );
      assert.equal(action.args[4], dfs.getAddr('BCdpManager'));
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);

    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(assetAmountInEth(ethValue), '0');
    })
  })

  context('Supply 1 WBTC without specifying CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerSupplyAction(
        '1234',
        assetAmountInWei(1, 'WBTC'),
        getIlkInfo('WBTC-A').join,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
      assert.equal(action.args[4], dfs.getAddr('McdCdpManager'));
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('WBTC').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })

  context('Supply 1 WBTC via specific CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerSupplyAction(
        '1234',
        assetAmountInWei(1, 'WBTC'),
        getIlkInfo('WBTC-A').join,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        dfs.getAddr('BCdpManager'),
      );
      assert.equal(action.args[4], dfs.getAddr('BCdpManager'));
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('WBTC').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })
})

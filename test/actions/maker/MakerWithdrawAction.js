const dfs = require('../../../src');
const {getIlkInfo, assetAmountInWei,getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: MakerWithdrawAction', () => {
  let action;

  context('Withdraw 1 ETH without specifying CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerWithdrawAction(
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
      assert.lengthOf(assetOwnerPairs, 0);
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })

  context('Withdraw 1 ETH without via specific CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerWithdrawAction(
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
      assert.lengthOf(assetOwnerPairs, 0);
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })

  context('Withdraw 1 ETH to invalid address', () => {
    it('constructor throws', () => {
      assert.throws(() => {
        action = new dfs.actions.maker.MakerWithdrawAction(
          '1234',
          assetAmountInWei(1, 'WETH'),
          getIlkInfo('ETH-A').join,
          '0x0000000000000000000000000000000000000000',
        );
      });
    });
  })
})

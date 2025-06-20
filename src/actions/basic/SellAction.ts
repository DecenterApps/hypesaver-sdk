import AbiCoder from 'web3-eth-abi';
import { getAssetInfoByAddress } from '@defisaver/tokens';
import ActionAbi from '../../abis/Action.json';
import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * Sells token on DeFi Saver exchange aggregator
 *
 * @category BasicActions
 */
export class SellAction extends Action {
  /**
   * @param exchangeOrder Standard DFS Exchange data
   * @param from Order sender
   * @param to Order recipient
   */
  constructor(
    exchangeOrder: Array<any>,
    from: EthAddress,
    to: EthAddress,
    protocolFee = '0',
  ) {
    requireAddress(to);
    super(
      'DFSSell',
      getAddr('DFSSell'),
      [
        [
          'address',
          'address',
          'uint256',
          'uint256',
          'uint256',
          'uint256',
          'address',
          'address',
          'bytes',
          ['address', 'address', 'address', 'uint256', 'uint256', 'bytes'],
        ],
        'address',
        'address',
      ],
      [exchangeOrder, from, to],
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[1],
      this.args[2],
    ];
  }

  encodeInputs() {
    const executeActionDirectAbi: any = ActionAbi.find(
      ({ name }) => name === 'executeActionDirect',
    )!;
    return AbiCoder.encodeFunctionCall(
      executeActionDirectAbi,
      this._encodeForCall(),
    );
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0][0]);
    if (asset.symbol !== 'ETH') return [{ asset: this.args[0][0], owner: this.args[1] }];
    return [];
  }
}

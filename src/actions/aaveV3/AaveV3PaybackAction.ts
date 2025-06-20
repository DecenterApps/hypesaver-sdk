import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint8, uint16, uint256,
} from '../../types';

/**
 * AaveV3PaybackAction - Payback debt on Aave using underlying token
 *
 * @category AaveV3
 */
export class AaveV3PaybackAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param useOnDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param amount Amount of tokens to be payed back
   * @param from Tokens will be supplied from this address
   * @param rateMode Type of borrow debt [Stable: 1, Variable: 2]
   * @param tokenAddress Address of token to pay back.
   * @param assetId The id of the underlying asset to be repaid
   * @param useOnBehalf  use on behalf param or default to proxy
   * @param onBehalf For what user we are paying back the debt, defaults to proxy
   */
  constructor(
    useOnDefaultMarket: boolean,
    market: EthAddress,
    amount: uint256,
    from: EthAddress,
    rateMode: uint8,
    tokenAddress: EthAddress,
    assetId: uint16,
    useOnBehalf: boolean,
    onBehalf: EthAddress = getAddr('Empty'),
  ) {
    super(
      'AaveV3Payback',
      getAddr('AaveV3Payback'),
      [
        'uint256',
        'address',
        'uint8',
        'uint16',
        'bool',
        'bool',
        'address',
        'address',
      ],
      [
        amount,
        from,
        rateMode,
        assetId,
        useOnDefaultMarket,
        useOnBehalf,
        market,
        onBehalf,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
      this.args[6],
      this.args[7],
    ];
    this.tokenForApproval = tokenAddress;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.tokenForApproval);
    if (asset.symbol !== 'ETH') return [{ asset: this.tokenForApproval, owner: this.args[1] }];
    return [];
  }
}

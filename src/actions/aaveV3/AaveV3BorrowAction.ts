import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint8, uint16, uint256,
} from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * AaveV3BorrowAction - Borrow a token from AaveV3
 *
 * @category AaveV3
 */
export class AaveV3BorrowAction extends Action {
  /**
   * @param useDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param amount Amount of tokens to be borrowed
   * @param to The address we are sending the borrowed tokens to
   * @param rateMode Type of borrow debt [Stable: 1, Variable: 2]
   * @param assetId The id of the token to be borrowed
   * @param useOnBehalf use on behalf or default to proxy
   * @param onBehalf On whose behalf we borrow the tokens, defaults to proxy
   */
  constructor(
    useDefaultMarket: boolean,
    market: EthAddress,
    amount: uint256,
    to: EthAddress,
    rateMode: uint8,
    assetId: uint16,
    useOnBehalf: boolean,
    onBehalf: EthAddress = getAddr('Empty'),
  ) {
    requireAddress(to);
    super(
      'AaveV3Borrow',
      getAddr('AaveV3Borrow'),
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
        to,
        rateMode,
        assetId,
        useDefaultMarket,
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
  }
}

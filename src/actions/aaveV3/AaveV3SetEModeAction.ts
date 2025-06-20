import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint8 } from '../../types';
/**
 * AaveV3SetEModeAction - Set EMode for the proxy AaveV3 position
 *
 * @category AaveV3
 */
export class AaveV3SetEModeAction extends Action {
  /**
   * @param useOnDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param categoryId ID of the category emode
   */
  constructor(
    useOnDefaultMarket: boolean,
    market: EthAddress,
    categoryId: uint8,
  ) {
    super(
      'AaveV3SetEMode',
      getAddr('AaveV3SetEMode'),
      ['uint8', 'bool', 'address'],
      [categoryId, useOnDefaultMarket, market],
    );

    this.mappableArgs = [this.args[2]];
  }
}

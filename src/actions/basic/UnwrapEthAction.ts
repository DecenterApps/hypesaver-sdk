import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { Action } from '../../Action';

/**
 * Unwraps a specified amount of WETH from the proxy
 *
 * @category BasicActions
 */
export class UnwrapEthAction extends Action {
  /**
   * @param amount Amount to unwrap
   * @param to Transfer recipient
   */
  constructor(amount: uint256, to: EthAddress) {
    requireAddress(to);
    super(
      'UnwrapEth',
      getAddr('UnwrapEth'),
      ['uint256', 'address'],
      [amount, to],
    );
  }
}

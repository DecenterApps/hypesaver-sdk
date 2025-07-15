import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FlashLoanId } from './FlashLoanId';

/**
 * Gets a flashloan from MorphoBlue
 *
 * @category Flashloans
 */
export class FelixFlashLoanAction extends Action implements FlashLoanId {
  public flashLoanId = 4;

  /**
   * @param token
   * @param amount
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(
    token: EthAddress,
    amount: uint256,
    flParamGetterAddr: EthAddress = getAddr('Empty'),
    flParamGetterData: bytes = [],
  ) {
    super(
      'FLMorphoBlue',
      getAddr('FLAction'),
      [
        'address[]',
        'uint256[]',
        'uint256[]',
        'address',
        'address',
        'bytes',
        'bytes',
      ],
      [
        [token],
        [amount],
        [],
        getAddr('Empty'),
        flParamGetterAddr,
        flParamGetterData,
        [],
      ],
    );
  }
}

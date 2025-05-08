import { Action } from '../Action';
import { getAddr } from '../addresses';
import { uint256 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class TimestampTrigger extends Action {
  constructor(nextTimestamp:uint256) {
    super('TimestampTrigger', getAddr('Empty'), ['uint256'], [nextTimestamp]);
  }
}

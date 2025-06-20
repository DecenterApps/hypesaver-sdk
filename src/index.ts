/* Export types here */
import type {
  EthAddress,
  bytes32,
  bytes,
  uint256,
  uint160,
  uint128,
  uint80,
  uint64,
  uint24,
  uint16,
  uint8,
  int24,
} from './types';

/* Export methods, classes and other here */
import { Action } from './Action';
import { Recipe } from './Recipe';
import { DfsWeb3 } from './DfsWeb3';

import * as actions from './actions';
import * as utils from './utils';

import { actionAddresses as _actionAddresses, getAddr } from './addresses';

export type {
  EthAddress,
  bytes32,
  bytes,
  uint256,
  uint160,
  uint128,
  uint80,
  uint64,
  uint24,
  uint16,
  uint8,
  int24,
};

const actionAddressesAllChains = _actionAddresses;

export {
  Action,
  Recipe,
  DfsWeb3,
  actions,
  utils,
  actionAddressesAllChains,
  getAddr,
};

export default {
  Action,
  Recipe,
  DfsWeb3,
  actions,
  utils,
  actionAddressesAllChains,
  getAddr,
};

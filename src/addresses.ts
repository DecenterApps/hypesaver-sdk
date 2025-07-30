import { EthAddress } from './types';

export const actionAddresses = {
  FLAction: '0x40e0a56da40bf3066866f9d6d352cf746c6d4f0b',

  PullToken: '0x16bc9e12ee596199dbf3a784bd3d7f7f3b8d0826',
  SendToken: '0xc5eb44f9d63a2b9f1a7367049ae6ec6dd4a70759',
  WrapEth: '0x927a91c788f5dbb08d5976501ca17e09c0ecbbcd',
  UnwrapEth: '0xad106a9ab883c905dd139aa8f1e85a1fd831cff1',

  AaveV3Borrow: '0x1c0496e78466af030cd40bd92d786881b339e606',
  AaveV3Supply: '0x1b7d04d91923b8f4eb6ce7bf868445282ee25a26',
  AaveV3SetEMode: '0xca00a1b6be0051ff353f016df0a10150f82a95d7',
  AaveV3Payback: '0x0ddc5bac923742a2e361bf8dcf00dbad349bc5d1',
  AaveV3Withdraw: '0x45cddf5c8aa2a54bfd107a0fb5ae90a119a12b2a',

  MorphoBlueSupplyCollateral: '0x4e7ad9714d1622b449acbb38bbe08a0a02b05ffe',
  MorphoBlueBorrow: '0x0038b73bbc30a3a4d74c987d4cee96082dcb6ef5',
  MorphoBluePayback: '0x45c413dbf3eef0d54dbb3680cca79689686e50aa',
  MorphoBlueWithdrawCollateral: '0xbdf7f07ebf6f7c5ed4229d9ea0b46eb9ae392035',

  LSVSupply: '0xbf3f6dd2a510f8a1fd35cbb46a09d33847e5c962',
  LSVBorrow: '0xf4691e11f7f73a9350777d0cc25e06d480181f7f',
  LSVPayback: '0xbd131db75a0f249e59c2b103999e1c202be0408f',
  LSVWithdraw: '0x1cdb2bbc96ec88fd47f736c579fc7589ed2fbb17',
  LSVSell: '0xd31ec966f92fe8ba9258f2288e14ee9751f6bffe',

  RecipeExecutor: '0x58d4d41efdecb42924a745fc5856acd2c6fdddc3',

  Empty: '0x0000000000000000000000000000000000000000',
};

/**
 *
 * @param name
 * @param chainId
 */
export const getAddr = (name: string): EthAddress => {
  if (!actionAddresses[name as keyof typeof actionAddresses]) throw new Error(`Cannot find address for name: ${name}.`);

  return actionAddresses[name as keyof typeof actionAddresses]!;
};

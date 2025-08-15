import { EthAddress } from './types';

export const actionAddresses = {
  FLAction: '0x2eca66063af3af3f79516349743e8ee8c86d5a42',

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

  LSVSupply: '0x3a25aa3f2219104bd1d99589098643f1df2c063c',
  LSVBorrow: '0x4283b638f17c4641f01f0f1211bfece557796c11',
  LSVPayback: '0x9f2261e743f6014e73f0d02122dbd56c733025a8',
  LSVWithdraw: '0x04e4535af5a54194479e4c35cbdd65c7aa897ea7',
  LSVSell: '0x87334a812c3f8878d9a66154d5d1f4fa5a7aea76',

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

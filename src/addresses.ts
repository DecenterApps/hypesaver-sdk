import { MorphoBlueWithdrawCollateralAction } from './actions/morpho-blue';
import { EthAddress } from './types';

export const actionAddresses = {
  FLAction: '0xe729cB7eE8f7cAFF8CA911D09cc44F99C9A5043A',

  PullToken: '0x077d1831b6d7ad53e1393dd0bd79d34b4c045918',
  SendToken: '0x99ef1612dbd3b3e4fd332885f925a5f9123446b5',
  DFSSell: '0x33aff4acee8c0c1d1ec94eefa3f061a1f426e451',
  LSVSell: '0x33aff4acee8c0c1d1ec94eefa3f061a1f426e451',

  AaveV3Borrow: '0x9b25a772deb74808ec0e1c4ca97f28cf975aebe5',
  AaveV3Supply: '0xf21f51c3c3a67e2bf980ddf08d80fbb1d49634f3',
  AaveV3SetEMode: '0xd601e069f229599416978dc089358bbd372dcdca',
  AaveV3Payback: '0x87d55cbbff8bd8a67f75e75df73833c0092bb6f0',
  AaveV3Withdraw: '0x759556b55af5e240bfd027d437148967a186d869',

  MorphoBlueSupplyCollateral: '0x76ce85d3c1502cC1ba3bE1a8D174646ddCB840e4',
  MorphoBlueBorrow: '0x40503731c412677F27Ce5bD993E1f311F90a92f7',
  MorphoBluePayback: '0xD4153e26CE1e1EC17Cf84653077D0414D314B512',
  MorphoBlueWithdrawCollateral: '0xeB4F6882bb6F87316561d799cAEbDE2812a4EE79',

  LSVSupply: '0xa489d6972c9d2db3afd278ac3ff69acf55b881f4',
  LSVBorrow: '0xe2574a2e61aa083d4685e49f5d494589e729bd4c',
  LSVPayback: '0x6768868d77fa7147083f5849625fb203ac4e37ed',
  LSVWithdraw: '0xc6eb6091b4e07cbb64badbb3dc6a0e6b6c5e2357',

  RecipeExecutor: '0x639cd0dc7c511392eabc5265baacb8df2a0039d1',

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

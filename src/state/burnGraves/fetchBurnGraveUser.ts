import drBurnensteinAbi from 'config/abi/drBurnenstein.json'
import multicall from 'utils/multicall'
import { getDrBurnensteinAddress, getZombieAddress } from 'utils/addressHelpers'
import BigNumber from "bignumber.js";
import { getId, toBN } from '../../utils'
import { BurnGraveConfig, BurnGraveUserInfo } from "../types";
import erc20ABI from "../../config/abi/erc20.json";

export const fetchBurnGraveUser = async (account: string, burnGravesToFetch: BurnGraveConfig[]): Promise<BurnGraveUserInfo[]> => {
  const drBurnensteinAddress = getDrBurnensteinAddress()

  const calls = burnGravesToFetch.map((grave) => ({
      address: drBurnensteinAddress,
      name: 'userInfo',
      params: [getId(grave.pid), account],
    })
  )

  const userInfos = await multicall(drBurnensteinAbi, calls);
  const tokenInfos = await fetchBurnGraveUserTokenInfo(account);
  return userInfos.map((userInfo) => ({
    deposited: userInfo.deposited,
    amount: toBN(userInfo.amount),
    burnedAmount: toBN(userInfo.burnedAmount),
    depositedAmount: toBN(userInfo.depositedAmount),
    depositedId: toBN(userInfo.depositedId),
    nftMintDate: toBN(userInfo.nftMintDate),
    ...tokenInfos
  }))
}


export const fetchBurnGraveUserTokenInfo = async (account: string): Promise<{ zombieAllowance: BigNumber, zombieBalance: BigNumber }> => {
  const calls = [
      {
        address: getZombieAddress(),
        name: 'allowance',
        params: [account, getDrBurnensteinAddress()],
      },
      {
        address: getZombieAddress(),
        name: 'balanceOf',
        params: [account],
      },
    ]

  const tokenInfos = await multicall(erc20ABI, calls)
  return {
      zombieAllowance: toBN(tokenInfos[0]),
      zombieBalance: toBN(tokenInfos[1])
    }
}
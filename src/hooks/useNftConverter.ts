// Approve an address
import { Contract } from 'web3-eth-contract'
import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'
import { useAppDispatch } from '../state'
import { convertNft } from '../utils/callHelpers'
import { fetchGravesUserDataAsync } from '../state/graves'

export const useConvertNft = (nftSwapperContract: Contract, nftConverterPid: number, tokenId: number) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const handleNftConvert = useCallback(async () => {
    try {
      const tx = await convertNft(nftSwapperContract, nftConverterPid, tokenId, account)
      // @ts-ignore
      dispatch(fetchGravesUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [nftSwapperContract, nftConverterPid, tokenId, account, dispatch])

  return { onNftConvert: handleNftConvert }
}

// Approve an address
import { Contract } from 'web3-eth-contract'
import { BigNumber } from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'
import { useAppDispatch } from '../state'
import {
  burnGraveBurnZombie,
  burnGraveEnterStaking,
  burnGraveLeaveStaking,
} from '../utils/callHelpers'
import { fetchGravesUserDataAsync } from '../state/graves'
import { BIG_ZERO } from '../utils/bigNumber'
import { fetchBurnGravesUserDataAsync } from "../state/burnGraves";

export const useEnterStaking = (drBurnensteinContract: Contract, pid: number, amount: BigNumber) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const handleEnterStaking = useCallback(async () => {
    try {
      const tx = await burnGraveEnterStaking(drBurnensteinContract, pid, amount, account)
      // @ts-ignore
      dispatch(fetchBurnGravesUserDataAsync(account))
      dispatch(fetchGravesUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [drBurnensteinContract, pid, amount, account, dispatch])

  return { onEnterStaking: handleEnterStaking }
}

export const useBurnZombie = (drBurnensteinContract: Contract, pid: number, amount: BigNumber) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const handleBurnZombie = useCallback(async () => {
    try {
      const tx = await burnGraveBurnZombie(drBurnensteinContract, pid, amount, account)
      // @ts-ignore
      dispatch(fetchBurnGravesUserDataAsync(account))
      dispatch(fetchGravesUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [drBurnensteinContract, pid, amount, account, dispatch])

  return { onBurnZombie: handleBurnZombie }
}

export const useLeaveStaking = (drBurnensteinContract: Contract, pid: number, amount: BigNumber) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const handleLeaveStaking = useCallback(async () => {
    try {
      const tx = await burnGraveLeaveStaking(drBurnensteinContract, pid, amount, account)
      // @ts-ignore
      dispatch(fetchBurnGravesUserDataAsync(account))
      dispatch(fetchGravesUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [drBurnensteinContract, pid, amount, account, dispatch])

  return { onLeaveStaking: handleLeaveStaking }
}

export const useHarvest = (drBurnensteinContract: Contract, pid: number) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const handleHarvest = useCallback(async () => {
    try {
      const tx = await burnGraveLeaveStaking(drBurnensteinContract, pid, BIG_ZERO, account)
      // @ts-ignore
      dispatch(fetchBurnGravesUserDataAsync(account))
      dispatch(fetchGravesUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [drBurnensteinContract, pid, account, dispatch])

  return { onHarvest: handleHarvest }
}

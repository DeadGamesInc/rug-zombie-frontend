import { useSelector } from 'react-redux'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from '../../utils/bigNumber'
import { PriceState, State, TokenPrices } from '../types'
import { getWbnbAddress, getZombieAddress } from '../../utils/addressHelpers'
import tokens from "../../config/constants/tokens";
import { ChainId } from "../../config/constants/types";

export const useGetPrices = (): PriceState => useSelector((state: State) => state.prices)

export const useGetPricesByTokenAddress = (address: string): TokenPrices => useGetPrices().prices[address.toLowerCase()]

export const useGetUsdPriceByTokenAddress = (address: string): BigNumber => {
  const prices = useGetPricesByTokenAddress(address)
  return prices ? new BigNumber(prices.priceUsd) : BIG_ZERO
}

export const useGetBnbPriceByTokenAddress = (address: string): BigNumber => {
  const prices = useGetPricesByTokenAddress(address)
  return prices ? new BigNumber(prices.priceBnb) : BIG_ZERO
}

// Using regular numbers for USD prices for now
export const useGetBnbPriceUsd = (): number => useGetUsdPriceByTokenAddress(getWbnbAddress()).toNumber()
export const useGetZombiePriceBnb = (): BigNumber => new BigNumber(useGetBnbPriceByTokenAddress(getZombieAddress()))
export const useGetZombiePriceUsd = (): number => useGetUsdPriceByTokenAddress(tokens.zmbe.address[ChainId.BSC]).toNumber()

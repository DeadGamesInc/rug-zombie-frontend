/* eslint-disable camelcase */
import { getWbnbAddress, getZombieAddress, getZombieAddressForPrices } from '../../utils/addressHelpers'
import { PriceApiThunk, TokenPrices } from '../types'
import { coingeckoPrice } from "../../redux/get";

export interface PriceApiResultInfo {
  name: string
  symbol: string
  price: string
  price_BNB: string
}

export interface PriceApiResponse {
  updated_at: string
  data: PriceApiResultInfo
}

export interface PluralPriceApiResponse {
  updated_at: string
  data: { [key: string]: PriceApiResultInfo }
}

const infoToTokenPrices = ({ price, price_BNB }: PriceApiResultInfo): TokenPrices => ({
  priceUsd: parseFloat(price),
  priceBnb: parseFloat(price_BNB),
})

const fetchPrices = async (): Promise<PriceApiThunk> => {
  const [bnbRes, zombieRes] = await Promise.all([
    coingeckoPrice('binancecoin'),
    coingeckoPrice('rugzombie'),
  ])

  const zombiePriceUsd =  zombieRes.data.rugzombie.usd
  const bnbPriceUsd =  bnbRes.data.binancecoin.usd

  // Return normalized token names
  return {
    prices: {
      [getZombieAddressForPrices().toLowerCase()]: {
        priceUsd: zombiePriceUsd,
        priceBnb: zombiePriceUsd / bnbPriceUsd
      },
      [getWbnbAddress().toLowerCase()]: {
        priceUsd: bnbPriceUsd,
        priceBnb: bnbPriceUsd / bnbPriceUsd
      },
    },
    updatedAt: ""
  }
  // {
  //   updatedAt: data.updated_at,
  //   prices,
  // }
}

export default fetchPrices

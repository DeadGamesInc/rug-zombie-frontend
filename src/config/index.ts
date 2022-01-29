import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

// CAKE_PER_BLOCK details
// 40 CAKE is minted per block
// 18 CAKE per block is sent to Burn pool (A farm just for burning cake)
// 10 CAKE per block goes to CAKE syrup pool
// 12 CAKE per block goes to Yield farms and lottery
// CAKE_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CAKE/Block in components/ZmbeStats.tsx = 22 (40 - Amount sent to burn pool)

export const CAKE_PER_BLOCK = new BigNumber(40)
export const ZMBE_PER_BLOCK = new BigNumber(10)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://pancakeswap.finance'
export const BASE_EXCHANGE_URL = 'https://pancakeswap.finance'
export const BASE_V1_EXCHANGE_URL = 'https://v1exchange.pancakeswap.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const APESWAP_EXCHANGE_URL = 'https://app.apeswap.finance'
export const AUTOSHARK_EXCHANGE_URL = 'https://autoshark.finance'
export const APESWAP_ADD_LIQUIDITY_URL = `${APESWAP_EXCHANGE_URL}/add`
export const AUTOSHARK_ADD_LIQUIDITY_URL = `${AUTOSHARK_EXCHANGE_URL}/add`
export const APESWAP_LIQUIDITY_POOL_URL = `${APESWAP_EXCHANGE_URL}/#/pool`
export const BASE_BSC_SCAN_URL = 'https://bscscan.com'
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const BASE_BSC_SCAN_URLS = {
  56: 'https://bscscan.com',
  97: 'https://testnet.bscscan.com',
}
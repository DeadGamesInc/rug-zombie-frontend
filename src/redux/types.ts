import BigNumber from 'bignumber.js'
import { Address, Artist, Id, Token } from '../config/constants/types'

export interface UserInfo {
  paidUnlockFee: boolean
  rugDeposited: BigNumber
  tokenWithdrawalDate: number
  nftRevivalDate: number
  amount: BigNumber
  pendingZombie: BigNumber
}

export interface PoolInfo {
  lpToken: string
  allocPoint: number
  unlockFee: BigNumber
  minimumStake: BigNumber
  totalStakingTokenStaked: BigNumber
  withdrawCooldown: number
  nftRevivalTime: number
}

export interface SpawningPoolInfo {
  rewardPerBlock: BigNumber
  unlockFee: BigNumber
  minimumStake: BigNumber
  totalZombieStaked: BigNumber
  withdrawCooldown: number
  nftRevivalTime: number
}

export interface SpawningUserInfo {
  paidUnlockFee: boolean
  tokenWithdrawalDate: number
  nftRevivalDate: number
  amount: BigNumber
  pendingReward: BigNumber
  zombieAllowance: BigNumber
}

export interface Bid {
  id: number
  bidder: number
  amount: Bid[]
}

export interface AuctionInfo {
  lastBidId: number
  bids: Bid[]
  endDate: number
  finalized: boolean
  unlockFeeInBnb?: BigNumber
}

export interface AuctionUserInfo {
  bid: BigNumber
  paidUnlockFee?: boolean
}

export interface Grave {
  pid: Id
  name: string
  subtitle: string
  path: string
  type: string
  withdrawalCooldown: string
  nftRevivalTime: string
  isNew?: boolean
  isEnding?: boolean
  isClosed?: boolean
  endDate?: number
  latestEntryDate?: string
  startingDate?: number
  requiresNft?: boolean
  requiredNftPath?: string
  nft?: string
  nftConverterPid?: number
  graveNftToken?: string
  additionalDetails?: any[]
  rug: Token
  artist: Artist
  pcsVersion: string
  stakingToken: string
  liquidityDetails: string
  userInfo: UserInfo
  poolInfo: PoolInfo
  rarity: string
  isFeatured?: boolean
  isRetired?: boolean
}

export interface SpawningPool {
  id: number
  name: string
  subtitle: string
  path: string
  type: string
  address: Address
  project: any
  endBlock: number
  endDate: number
  withdrawalCooldown: string
  nftRevivalTime: string
  isNew: boolean
  rewardToken: Token
  rewardTokenId?: string
  rewardTokenBnbLp?: string
  bnbLpTokenIndex?: number
  artist: Artist
  pcsVersion: string
  stakingToken: string
  liquidityDetails: string
  color?: string
  tokenLogoFormat?: string
  userInfo: SpawningUserInfo
  poolInfo: SpawningPoolInfo
}

export interface SharkPoolInfo {
  unlockFee: BigNumber
  minStake: BigNumber
  maxStake: BigNumber
  depositTaxRate: number
  requiresDeposit: boolean
  totalStaked: BigNumber
  minStakeTime: BigNumber
}

export interface SharkPoolUserInfo {
  stakedAmount: BigNumber
  paidUnlock: boolean
  paidDeposit: boolean
  nftMintDate: number
}

export interface SharkPool {
  id: number
  name: string
  isNew: boolean
  address: Address
  nft: number
  mintTime: string
  stakeToken: Token
  depositToken: Token
  geckoId?: string
  lpPool?: boolean
  token0?: Token
  token1?: Token
  bnbLpTokenIndex?: number
  project: any
  poolInfo: SharkPoolInfo
  userInfo: SharkPoolUserInfo
}

export interface Auction {
  id: number
  aid: number
  prize: string
  prizeSymbol: string
  isFinished: boolean
  bidToken?: string
  version: string
  exchange?: string
  path: string
  prizeDescription: string
  startingBid: number
  bt?: string
  artist: Artist
  token0?: string
  token1?: string
  type?: string
  end: number
  additionalDetails?: any
  userInfo: AuctionUserInfo
  auctionInfo: AuctionInfo
}

export interface RugMarketListing {
  id: number
  owner: string
  token: Token
  quantity: string
  price: string
  taxedToken: boolean
  state: string
}

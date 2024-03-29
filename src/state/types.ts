import BigNumber from 'bignumber.js'

import {
  Address, AnnouncementSubject,
  Artist, Dex,
  Id,
  SpawningPoolConfig, Token,
  TombConfig,
  UserActivityType,
  WhalePoolConfig
} from 'config/constants/types'

export type TranslatableText =
  | string
  | {
  key: string
  data?: {
    [key: string]: string | number
  }
}

export enum GraveType {
  Default,
  Burn
}

export interface GraveUserInfo {
  paidUnlockFee: boolean
  rugDeposited: BigNumber
  rugAllowance: BigNumber
  rugBalance: BigNumber
  zombieAllowance: BigNumber
  zombieBalance: BigNumber
  tokenWithdrawalDate: BigNumber
  nftMintDate: BigNumber
  amount: BigNumber
  pendingZombie: BigNumber
}

export interface GravePoolInfo {
  lpToken: string
  allocPoint: BigNumber
  weight: BigNumber
  unlockFee: BigNumber
  minimumStake: BigNumber
  tokenAmount: BigNumber
  withdrawCooldown: BigNumber
  nftMintTime: BigNumber
}

export interface GraveConfig extends AnnouncementSubject {
  // type: GraveType
  pid: Id
  name: string
  nftId: number
  nft?: number
  depositNftId?: number
  isNew?: boolean
  isFeatured?: boolean
  isClosed?: boolean
  endDate?: number
  startingDate?: number
  nftConverterPid?: number // remove move to own type
  graveNftToken?: string // remove move to own type
  additionalDetails?: any[]
  rug: Token
  rugDex?: Dex
  liquidityDetails?: string
  isRetired?: boolean
  isBurnGrave?: boolean
}

export interface Grave extends GraveConfig {
  userInfo?: GraveUserInfo
  poolInfo: GravePoolInfo
}

export interface WhalePoolInfo {
  mintingFeeBnb: BigNumber
  totalStakers: number
  mintingTime: BigNumber
}

export interface WhalePoolUserInfo {
  stakedNft: string,
  stakedId: BigNumber,
  nftMintTime: BigNumber,
  isStaked: boolean,
  isMinting: boolean,
  hasRandom: boolean,
  randomNumber: BigNumber
}

export interface WhalePool extends WhalePoolConfig {
  poolInfo: WhalePoolInfo
  userInfo: WhalePoolUserInfo
}

export interface TombUserInfo {
  tokenWithdrawalDate: BigNumber
  nftMintTime: BigNumber
  amount: BigNumber
  pendingZombie: BigNumber
  lpBalance: BigNumber
  lpAllowance: BigNumber
  randomNumber: BigNumber
  isMinting: boolean
}

export interface TombPoolInfo {
  allocPoint: BigNumber
  weight: BigNumber
  tokenAmount: BigNumber
  withdrawCooldown: BigNumber
  nftMintTime: BigNumber
  mintingFee: BigNumber
  lpPriceBnb: BigNumber
  lpReserves: [BigNumber, BigNumber]
  lpTotalSupply: BigNumber
  bracketBStart: number
  bracketCStart: number
}

export interface Tomb extends TombConfig {
  userInfo?: TombUserInfo
  poolInfo: TombPoolInfo
}

export interface SpawningPoolInfo {
  rewardPerBlock: BigNumber
  unlockFee: BigNumber
  minimumStake: BigNumber
  totalAmount: BigNumber
  withdrawCooldown: BigNumber
  nftMintTime: BigNumber
  rewardTokenPriceBnb: BigNumber
}

export interface SpawningPoolUserInfo {
  paidUnlockFee: boolean
  tokenWithdrawalDate: BigNumber
  nftMintDate: BigNumber
  amount: BigNumber
  pendingReward: BigNumber
  zombieAllowance: BigNumber
  zombieBalance: BigNumber
}

export interface SpawningPool extends SpawningPoolConfig {
  userInfo?: SpawningPoolUserInfo
  poolInfo: SpawningPoolInfo
}

export interface UserActivity {
  type: UserActivityType
  timestamp: number
  data: Record<string, any>
}

export interface BurnGraveConfig {
  // type: GraveType
  pid: Id
  name: string
  mintingTime: string
  nftId: number
  isNew: boolean
  isClosed: boolean
  depositToken: Token
  depositNftId: number
  stakingToken: Token
  geckoId: string
  isRetired?: boolean
  isFeatured?: boolean
  endDate: number
  isBurnGrave: boolean
}

export interface BurnGrave extends BurnGraveConfig {
  poolInfo: BurnGravePoolInfo
  userInfo?: BurnGraveUserInfo
}

export interface BurnGravePoolInfo {
  pid?: Id
  isEnabled: boolean
  depositType: number
  depositAddress: string
  minimumStake: BigNumber
  nftMintTime: BigNumber
  tokensToBurn: BigNumber
  burnReduction: BigNumber
  maxBurned: BigNumber
  totalStaked: BigNumber
  totalBurned: BigNumber
}

export interface BurnGraveUserInfo {
  amount: BigNumber
  zombieBalance: BigNumber
  zombieAllowance: BigNumber
  hasDeposited: boolean
  nftMintDate: BigNumber
  burnedAmount: BigNumber
}

// Slices states

export interface GravesState {
  data: Grave[]
  userDataLoaded: boolean
}

export interface BurnGravesState {
  data: BurnGrave[]
  userDataLoaded: boolean
}

export interface WhalePoolState {
  data: WhalePool
  userDataLoaded: boolean
}


export interface TombsState {
  data: Tomb[]
  userDataLoaded: boolean
}

export interface SpawningPoolState {
  data: SpawningPool[]
  userDataLoaded: boolean
}

export interface UserActivityState {
  data: UserActivity[]
  userDataLoaded: boolean
}

export interface GraveState {
  data: Grave[]
  userDataLoaded: boolean
}


export interface TokenPrices {
  priceUsd: number
  priceBnb: number
}

export interface TokenPriceMap {
  [key: string]: TokenPrices
}

export interface PriceApiThunk {
  updatedAt: string
  prices: TokenPriceMap
}

export interface PriceState {
  lastUpdated: string
  prices: { [key: string]: TokenPrices }
}

// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}

// Graveyard

export interface ImageCache {
  highResImage: string;
  lowResImage: string;
}

export interface NftToken {
  id: number;
  imageCache: ImageCache;
}

export interface PreviewToken {
  address: string;
  previewToken: NftToken;
}

export interface NftUserInfo {
  ownedIds: number[]
}
export interface Nft {
  id: number
  name: string
  description: string
  symbol: string
  address: Address
  totalSupply: BigNumber
  path?: string
  type: string
  rarity: string
  artist?: Artist
  userInfo: NftUserInfo
  imageCache?: ImageCache
}

export interface NftState {
  data: Nft[]
  userDataLoaded: boolean
}

// Mausoleum

export enum BetPosition {
  BULL = 'Bull',
  BEAR = 'Bear',
  HOUSE = 'House',
}

export enum PredictionStatus {
  INITIAL = 'initial',
  LIVE = 'live',
  PAUSED = 'paused',
  ERROR = 'error',
}

export interface Round {
  id: string
  epoch: number
  failed?: boolean
  startBlock: number
  startAt: number
  lockAt: number
  lockBlock: number
  lockPrice: number
  endBlock: number
  closePrice: number
  totalBets: number
  totalAmount: number
  bullBets: number
  bearBets: number
  bearAmount: number
  bullAmount: number
  position: BetPosition
  bets?: Bet[]
}

export interface Market {
  id: string
  paused: boolean
  epoch: number
}

export interface Bet {
  id: string
  hash: string
  amount: number
  position: BetPosition
  claimed: boolean
  user: PredictionUser
  round: Round
}

export interface PredictionUser {
  id: string
  address: string
  block: number
  totalBets: number
  totalBNB: number
}

export interface RoundData {
  [key: string]: Round
}

export interface HistoryData {
  [key: string]: Bet[]
}

export interface BetData {
  [key: string]: {
    [key: string]: Partial<Bet>
  }
}

export enum HistoryFilter {
  ALL = 'all',
  COLLECTED = 'collected',
  UNCOLLECTED = 'uncollected',
}

export interface PredictionsState {
  status: PredictionStatus
  isLoading: boolean
  isHistoryPaneOpen: boolean
  isChartPaneOpen: boolean
  isFetchingHistory: boolean
  historyFilter: HistoryFilter
  currentEpoch: number
  currentRoundStartBlockNumber: number
  intervalBlocks: number
  bufferBlocks: number
  minBetAmount: string
  rounds: RoundData
  history: HistoryData
  bets: BetData
}

// Global state

export interface State {
  block: BlockState
  prices: PriceState
  graves: GraveState
  tombs: TombsState
  spawningPools: SpawningPoolState
  burnGraves: BurnGravesState
  userActivity: UserActivityState
  predictions: PredictionsState
  nfts: NftState
  whalePool: WhalePoolState
}



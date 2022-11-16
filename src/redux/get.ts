import axios from 'axios'
import { BigNumber } from 'bignumber.js'
import { getId } from '../utils'
import * as actions from './actions'
import store from './store'
import { Auction, Grave, RugMarketListing, SharkPool, SpawningPool, UserInfo } from './types'

export const account = (): string => {
  return store.getState().account
}

export const zombieAllowance = (): BigNumber => {
  return store.getState().zombie.allowance
}

export const zombieBalance = (): BigNumber => {
  return store.getState().zombie.balance
}

export const bnbBalance = (): BigNumber => {
  return store.getState().bnbBalance
}

export const zombieTotalSupply = (): BigNumber => {
  return store.getState().zombie.totalSupply
}

export const drFrankensteinZombieBalance = (): BigNumber => {
  return store.getState().drFrankenstein.zombieBalance
}

export const totalAllocPoint = (): BigNumber => {
  return store.getState().drFrankenstein.totalAllocPoint
}

export const coingeckoPrice = (id: string) => {
  return axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`)
}

export const graveByPid = (pid: number): Grave => {
  return store.getState().graves.find((g) => getId(g.pid) === pid)
}

export const graves = (): Grave[] => {
  return store.getState().graves
}

export const graveUserInfo = (pid: number): UserInfo => {
  return store.getState().graves[pid].userInfo
}

export const spawningPools = (): SpawningPool[] => {
  return store.getState().spawningPools
}

export const sharkPools = (): SharkPool[] => {
  return store.getState().sharkPools
}

export const spawningPoolById = (id: number): SpawningPool => {
  return store.getState().spawningPools.find((p) => p.id === id)
}

export const sharkPoolById = (id: number): SharkPool => {
  return store.getState().sharkPools.find((a) => a.id === id)
}

export const grave = (pid: number): Grave => {
  return store.getState().graves.find((g) => getId(g.pid) === pid)
}

export const auctions = (): Auction[] => {
  return store.getState().auctions
}

export const auctionById = (id: number): Auction => {
  return auctions().find((a) => a.id === id)
}

export const rugMarketListings = (filter, wallet): RugMarketListing[] => {
  switch (filter) {
    case 0:
      return store.getState().rugMarketListings.filter((listing) => listing.state === '0' && listing.owner !== wallet)
      break
    case 1:
      return store.getState().rugMarketListings.filter((listing) => listing.owner === wallet)
      break
    case 2:
      return store.getState().rugMarketListings.filter((listing) => listing.state === '1')
      break
    default:
      return store.getState().rugMarketListings
  }
}

export const rugMarketListingById = (id: number): RugMarketListing => {
  return store.getState().rugMarketListings.find((listing) => listing.id === id)
}

export const markRugMarketListingSold = (id: number) => {
  store.dispatch(actions.markRugMarketListingSold(id))
}

export const cancelRugMarketListing = (id: number) => {
  store.dispatch(actions.cancelRugMarketListing(id))
}

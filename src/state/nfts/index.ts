/* eslint-disable no-param-reassign */
import nftConfig from 'config/constants/nfts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nft, NftState } from '../types'
import fetchNftsUser, { NftIdAndUserInfo } from './fetchNftsUser'
import fetchNfts from './fetchNfts'

const noAccountNftConfig: Nft[] = nftConfig.map((nft) => ({
  ...nft,
  userInfo: { ownedIds: [] },
}))

const initialState: NftState = { data: noAccountNftConfig, userDataLoaded: false }

export const nftSlice = createSlice({
  name: 'Nfts',
  initialState,
  reducers: {
    setNftInfo: (state, action: PayloadAction<Nft[]>) => {
      const liveNftsData = action.payload
      state.data = state.data.map((nft) => {
        const liveNftData = liveNftsData.find((n) => n.id === nft.id)
        return { ...nft, totalSupply: liveNftData.totalSupply }
      })
    },
    setNftUserInfo: (state, action: PayloadAction<NftIdAndUserInfo[]>) => {
      const liveNftUserData = action.payload
      liveNftUserData.forEach(({ id, userInfo }) => {
        const index = state.data.findIndex((n) => n.id === id)
        state.data[index] = { ...state.data[index], userInfo }
      })
      state.userDataLoaded = true
    },
  },
})

// Actions
export const { setNftInfo, setNftUserInfo } = nftSlice.actions

// Thunks
export const fetchNftPublicDataAsync = () => async (dispatch) => {
  try {
    const nfts = await fetchNfts(nftConfig)
    dispatch(setNftInfo(nfts))
  } catch (e) {
    console.log("Fetch NFTs multicall failed")
    console.warn(e)
  }
}
export const fetchNftUserDataAsync = (account: string) => async (dispatch) => {
  let nftIdAndUserInfos
  try {
    nftIdAndUserInfos = await fetchNftsUser(account, nftConfig)
  } catch (e) {
    console.log(e)
  }
  dispatch(setNftUserInfo(nftIdAndUserInfos))
}

export default nftSlice.reducer

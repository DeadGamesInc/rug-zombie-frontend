/* eslint-disable no-param-reassign */
import nftConfig from 'config/constants/nfts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import deadgames, { NftPreviewDTO } from "@dead-games-libs/api";
import { Nft, NftState } from '../types'
import fetchNftsUser, { NftIdAndUserInfo } from './fetchNftsUser'
import fetchNfts from './fetchNfts'
import { ChainId } from "../../config/constants/types";
import { equalAddresses } from "../../utils";
import BigNumber from "bignumber.js";

const noAccountNftConfig: Nft[] = nftConfig.map((nft) => ({
  ...nft,
  userInfo: { ownedIds: [] },
}))

const initialState: NftState = { data: noAccountNftConfig, userDataLoaded: false }

export const nftSlice = createSlice({
  name: 'Nfts',
  initialState,
  reducers: {
    setNftUserInfo: (state, action: PayloadAction<NftIdAndUserInfo[]>) => {
      const liveNftUserData = action.payload
      liveNftUserData.forEach(({ id, userInfo }) => {
        const index = state.data.findIndex((n) => n.id === id)
        state.data[index] = { ...state.data[index], userInfo }
      })
      state.userDataLoaded = true
    },
    setNftImageCaches: (state, action: PayloadAction<NftPreviewDTO[]>) => {
      const previews = action.payload
      state.data = state.data.map((nft) => {
        const preview = previews.find((p) => equalAddresses(p.address, nft.address[ChainId.BSC]))
        return { ...nft, imageCache: preview?.previewToken.imageCache, totalSupply: new BigNumber(preview?.totalSupply)  }
      })
    },
  },
})

// Actions
export const { setNftUserInfo, setNftImageCaches } = nftSlice.actions

// Thunks
export const fetchNftUserDataAsync = (account: string) => async (dispatch) => {
  let nftIdAndUserInfos
  try {
    nftIdAndUserInfos = await fetchNftsUser(account, nftConfig)
  } catch (e) {
    console.log(e);
  }
  dispatch(setNftUserInfo(nftIdAndUserInfos))
}

export const fetchNftInfoAsync = (addresses: string[]) => async (dispatch) => {
  try {
    const nftPreviews = await deadgames().getNftPreviewsByAddress(addresses);
    dispatch(setNftImageCaches(nftPreviews))
  } catch (e) {
    console.log(e);
  }
}

export default nftSlice.reducer

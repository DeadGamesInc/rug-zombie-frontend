/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import burnGravesConfig from 'config/constants/burnGraves'
import fetchBurnGraves from './fetchBurnGraves'
import { fetchBurnGraveUser } from './fetchBurnGraveUser'
import { BurnGrave, BurnGravePoolInfo, BurnGravesState, Grave } from '../types'
import { BIG_ZERO } from '../../utils/bigNumber'
import { getId } from '../../utils'

const noAccountBurnGraveConfig: BurnGrave[] = burnGravesConfig.map((grave) => ({
  ...grave,
  poolInfo: {
    isEnabled: true,
    depositType: 0,
    depositAddress: '',
    minimumStake: BIG_ZERO,
    nftMintTime: BIG_ZERO,
    tokensToBurn: BIG_ZERO,
    burnReduction: BIG_ZERO,
    maxBurned: BIG_ZERO,
    totalStaked: BIG_ZERO,
    totalBurned: BIG_ZERO,
  },
  userInfo: {
    amount: BIG_ZERO,
    hasDeposited: false,
    nftMintDate: BIG_ZERO,
    burnedAmount: BIG_ZERO,
    zombieAllowance: BIG_ZERO,
    zombieBalance: BIG_ZERO
  },
}))

const initialState: BurnGravesState = { data: noAccountBurnGraveConfig, userDataLoaded: false }

export const burnGravesSlice = createSlice({
  name: 'BurnGraves',
  initialState,
  reducers: {
    setBurnGravePoolInfo: (state, action) => {
      const liveBurnGravesData: BurnGravePoolInfo[] = action.payload
      state.data = state.data.map((burnGrave) => {
        const liveBurnGraveData = liveBurnGravesData.find((g) => getId(g.pid) === getId(burnGrave.pid))
        return { ...burnGrave, poolInfo: { ...burnGrave.poolInfo, ...liveBurnGraveData } }
      })
    },
    setBurnGraveUserInfo: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload
      arrayOfUserDataObjects.forEach((userInfoEl) => {
        const { pid } = userInfoEl
        const index = state.data.findIndex((burnGrave) => getId(burnGrave.pid) === pid)
        state.data[index] = { ...state.data[index], userInfo: { ...state.data[index].userInfo, ...userInfoEl } }
      })
      state.userDataLoaded = true
    },
  },
})

// Actions
export const { setBurnGravePoolInfo, setBurnGraveUserInfo } = burnGravesSlice.actions

// Thunks
export const fetchBurnGravesPublicDataAsync = () => async (dispatch) => {
  const graves = await fetchBurnGraves(burnGravesConfig)
  console.log(graves)
  dispatch(setBurnGravePoolInfo(graves))
}

export const fetchBurnGravesUserDataAsync = (account: string) => async (dispatch) => {
  const userInfos = await fetchBurnGraveUser(account, burnGravesConfig)
  const arrayOfUserDataObjects = userInfos.map((userInfo, index) => {
    return {
      pid: getId(burnGravesConfig[index].pid),
      ...userInfo
    }
  })
  // console.log(arrayOfUserDataObjects)

  dispatch(setBurnGraveUserInfo({ arrayOfUserDataObjects }))
}

export default burnGravesSlice.reducer

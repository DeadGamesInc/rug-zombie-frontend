import React, { useEffect } from 'react'
import './Landing.Styles.css'
import { useHistory } from 'react-router'
import { sum } from "lodash";
import { BIG_ZERO } from '../../utils/bigNumber'
import { getBalanceNumber } from '../../utils/formatBalance'
import Hero from './components/Hero'
import NftSection from './components/NftSection'
import TutorialSection from './components/TutorialSection'
import Footer from '../Footer'
import {
  useGetBnbPriceUsd, useGetBurnGraves,
  useGetGraveByPid,
  useGetGraves,
  useGetSpawningPools,
  useGetTombs,
  useGetZombiePriceUsd,
} from '../../state/hooks'
import { getId } from '../../utils'
import { useAppDispatch } from '../../state'
import { fetchTombsPublicDataAsync } from '../../state/tombs'
import { fetchSpawningPoolsPublicDataAsync } from '../../state/spawningPools'
import { fetchGravesPublicDataAsync } from '../../state/graves'
import { fetchBurnGravesPublicDataAsync } from "../../state/burnGraves";
import nfts from '../../config/constants/test.json'

const Home: React.FC = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGravesPublicDataAsync())
    dispatch(fetchSpawningPoolsPublicDataAsync())
    dispatch(fetchTombsPublicDataAsync())
    dispatch(fetchBurnGravesPublicDataAsync())
  }, [dispatch])

  // console.log(nfts.map(n => n.address))

  const graveSum = useGetGraves().data.reduce(
    (tvlSum, { pid, poolInfo: { tokenAmount } }) => {
      return {
        totalAmount: getId(pid) === 0 ? tvlSum.totalAmount : tvlSum.totalAmount.plus(tokenAmount),
      }
    },
    { totalAmount: BIG_ZERO },
  )

  const zombiePriceUsd = useGetZombiePriceUsd()
  const legacyGraveTvl =
    getBalanceNumber(useGetGraveByPid(0).poolInfo.tokenAmount.minus(graveSum.totalAmount)) * zombiePriceUsd
  const graveTvl = getBalanceNumber(graveSum.totalAmount) * zombiePriceUsd + legacyGraveTvl

  const spawningPoolSum = useGetSpawningPools().data.reduce(
    (tvlSum, { poolInfo: { totalAmount } }) => {
      return {
        totalAmount: tvlSum.totalAmount.plus(totalAmount),
      }
    },
    { totalAmount: BIG_ZERO },
  )

  const spawningPoolsTvl = getBalanceNumber(spawningPoolSum.totalAmount) * zombiePriceUsd
  const bnbPriceUsd = useGetBnbPriceUsd()

  const tombSum = useGetTombs().data.reduce(
    (tvlSum, { poolInfo: { tokenAmount, lpPriceBnb } }) => {
      const lpPrice = lpPriceBnb.times(bnbPriceUsd).toNumber()
      return {
        tokenAmountTvl: tvlSum.tokenAmountTvl.plus(getBalanceNumber(tokenAmount.times(lpPrice))),
      }
    },
    { tokenAmountTvl: BIG_ZERO },
  )

  const drBurnTvl = sum(useGetBurnGraves().data.map(({ poolInfo: { totalStaked } }) => getBalanceNumber(totalStaked))) * zombiePriceUsd

  const tvl = graveTvl + spawningPoolsTvl + tombSum.tokenAmountTvl.toNumber() + drBurnTvl
  return (
    <>
      <Hero tvl={tvl} history={history} />
      <NftSection history={history} />
      <TutorialSection />
      <Footer />
    </>
  )
}

export default Home

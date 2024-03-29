import React, { lazy, useEffect, useState } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { ResetCSS } from '@rug-zombie-libs/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import ToastListener from 'components/ToastListener'
import { routes } from 'routes'
import AppContainer from 'components/AppContainer'
import Tombs from 'views/Tombs'
import Gravedigger from 'views/Gravedigger/'
import { useWeb3React } from '@web3-react/core'
import SpawnWithUs from 'views/SpawnWithUs'
import Catacombs from 'views/Catacombs'
import history from './routerHistory'
import GlobalStyle from './style/Global'
import Graves from './views/Graves'
import * as fetch from './redux/fetch'
import Mausoleum from './views/Mausoleum'
import PredictionsHome from './views/PredictionsHome'
import SpawningPools from './views/SpawningPools'
import Graveyard from './views/Graveyard'
import Profile from './views/Profile'
import DataLab from './views/Catacombs/components/DataLab'
import BlackMarket from './views/Catacombs/components/BlackMarket'
import Barracks from './views/Catacombs/components/Barracks'
import RugRoll from './views/Catacombs/components/RugRoll'
import SwiperProvider from './views/Mausoleum/context/SwiperProvider'

import SharkPools from './views/SharkPools'
import { useAppDispatch } from './state'
import { fetchNftInfoAsync } from './state/nfts'
import Nfts from './views/Nfts'
import BurnGraves from './views/BurnGraves'
import { fetchPricesAsync } from './state/prices'
import WhalePools from "./views/WhalePool";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import Loader from "./components/Loader";
import NavBar from "./views/NavBar/NavBar";
import nfts from "./config/constants/nfts";
import { ChainId } from "./config/constants/types";
import { batch } from "react-redux";

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Landing = lazy(() => import('./components/Home'))

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  const [modal, setModal] = useState(null)

  useEffect(() => {
    document.title = 'RugZombie'
  }, [])
  useEagerConnect()

  const { account } = useWeb3React()
  useEffect(() => {
    batch(() => {
      dispatch(fetchPricesAsync())
      dispatch(fetchNftInfoAsync(nfts.map((nft) => nft.address[ChainId.BSC])))
    });

  }, [dispatch]);


  useEffect(() => {
    fetch.initialData(account)
  }, [account]);

  return (
    <Router history={history}>
      <ResetCSS/>
      <GlobalStyle/>
      <SuspenseWithChunkError fallback={<Loader/>}>
        <Switch>
          <Route exact path={routes.GRAVEDIGGER}>
            <Gravedigger/>
          </Route>
          <Route exact path={routes.SPAWNWITHUS}>
            <SpawnWithUs/>
          </Route>
          <Route exact path={routes.CATACOMBS}>
            <Catacombs/>
          </Route>
          <Route exact path={routes.RUGROLL}>
            <RugRoll/>
          </Route>
          <Route exact path={routes.DATALAB}>
            <SwiperProvider>
              <DataLab modalObj={{ modal, setModal }}/>
            </SwiperProvider>
          </Route>
          <Route exact path={routes.BLACKMARKET}>
            <BlackMarket/>
          </Route>
          <Route exact path={routes.BARRACKS}>
            <Barracks/>
          </Route>
          <Route exact path={routes.HOME}>
            <Redirect to={routes.LANDING}/>
          </Route>
          <Route exact path={routes.LANDING}>
            <>
              <NavBar/>
              <AppContainer>
                <Landing/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.GRAVES}>
            <>
              <NavBar/>
              <AppContainer>
                <Graves/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.TOMBS}>
            <>
              <NavBar/>
              <AppContainer>
                <Tombs/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.SPAWNING_POOLS}>
            <>
              <NavBar/>
              <AppContainer>
                <SpawningPools/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.PROFILE}>
            <>
              <NavBar/>
              <AppContainer>
                <Profile/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.GRAVEYARD}>
            <>
              <NavBar/>
              <AppContainer>
                <Graveyard/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.NFTS}>
            <>
              <NavBar/>
              <AppContainer>
                <Nfts/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.MAUSOLEUM}>
            <>
              <NavBar/>
              <AppContainer>
                <PredictionsHome/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.AUCTION}>
            <>
              <NavBar/>
              <AppContainer>
                <Mausoleum/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.SHARKTANK}>
            <>
              <NavBar/>
              <AppContainer>
                <SharkPools/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.BURNGRAVES}>
            <>
              <NavBar/>
              <AppContainer>
                <BurnGraves/>
              </AppContainer>
            </>
          </Route>
          <Route exact path={routes.WHALE_POOLS}>
            <>
              <NavBar/>
              <AppContainer>
                <WhalePools/>
              </AppContainer>
            </>
          </Route>
        </Switch>
      </SuspenseWithChunkError>
      <ToastListener/>
      {modal}
    </Router>
  )
}

export default React.memo(App)

import React, { useEffect } from 'react'
import PageHeader from 'components/PageHeader'
import { Flex, Heading } from '@rug-zombie-libs/uikit'
import { getId } from 'utils'
import Page from 'components/layout/Page'
import { useWeb3React } from "@web3-react/core";
import BurnGraveTable from "./components/BurnGraveTable";
import { useAppDispatch } from "../../state";
import { fetchBurnGravesPublicDataAsync, fetchBurnGravesUserDataAsync } from "../../state/burnGraves";
import { useGetBurnGraves } from "../../state/hooks";

const BurnGraves: React.FC = () => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const burnGraves = useGetBurnGraves().data

  useEffect(() => {
  dispatch(fetchBurnGravesPublicDataAsync())
    }, [dispatch])

  useEffect(() => {
    if (account) {
      dispatch(fetchBurnGravesUserDataAsync(account))
    }
  }, [dispatch, account])

  return (
    <>
      <PageHeader background="#101820">
        <Flex justifyContent="space-between" flexDirection={['column', null, 'row']}>
          <Flex flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" size="xxl" color="secondary" mb="24px">
              Burn Graves
            </Heading>
            <Heading size="md" color="text">
              These graves help burn ZMBE in exchange for faster NFT mintings!
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <div>
          {burnGraves.map((a) => {
            return <BurnGraveTable burnGrave={a} key={getId(a.pid)} />
          })}
        </div>
      </Page>
    </>
  )
}

export default BurnGraves

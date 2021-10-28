import React, { useEffect, useState } from 'react'
import { Flex, Text } from '@rug-zombie-libs/uikit'
import useEagerConnect from '../../hooks/useEagerConnect'
import { useCatacombsContract } from '../../hooks/useContract'
import Entry from './components/Entry'
import { account } from '../../redux/get'
import Home from './components/Home'

const Catacombs: React.FC = () => {
  useEagerConnect()
  const catacombs = useCatacombsContract()

  const [unlocked, setUnlocked] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (account()) {
      catacombs.methods.isUnlocked(account()).call()
        .then(
          res => {
            setUnlocked(res)
            setLoading(false)
          })
    }
  }, [catacombs.methods])
  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {loading && account() ? <>
        <Flex alignItems='center' justifyContent='center' mb='16px'>
          <img src='images/rugZombie/BasicZombie.gif' alt='loading' />
        </Flex>
        <Flex alignItems='center' justifyContent='center' mb='16px'>
          <Text color='white' bold fontSize='30px'>Entering the Catacombs</Text>
        </Flex>
      </> : unlocked ? <Home /> : <Entry setUnlocked={setUnlocked} />}
    </>

  )
}

export default Catacombs

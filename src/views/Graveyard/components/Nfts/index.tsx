/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NftCard from './components/NftCard'
import { useGetNfts } from '../../../../state/nfts/hooks'

const NftsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 480px;
`

interface NftsProps {
  filter?: string
  inWallet?: boolean
}

const Nfts: React.FC<NftsProps> = ({ filter, inWallet }) => {
  const [items, setItems] = useState([])
  const nfts = useGetNfts().data.slice().reverse()

  useEffect(() => {
    let temp = nfts
    if (filter !== 'All') temp = nfts.filter((nft) => nft.rarity === filter)

    if (inWallet) temp = temp.filter((nft) => nft.userInfo.ownedIds.length > 0)
    setItems(temp)
  }, [filter, inWallet])

  const NftCardList = items.map((nft) => <NftCard showTotalSupply key={nft.id} id={nft.id} />)

  return <NftsContainer>{NftCardList}</NftsContainer>
}

export default Nfts

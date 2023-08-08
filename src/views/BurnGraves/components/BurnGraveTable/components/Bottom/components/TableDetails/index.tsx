import React from 'react'
import styled from 'styled-components'
import numeral from 'numeral'
import { LinkExternal } from '@rug-zombie-libs/uikit'
import { useHistory } from 'react-router'
import { getBalanceAmount } from '../../../../../../../../utils/formatBalance'
import { formatDays, formatDuration, now } from '../../../../../../../../utils/timerHelpers'
import { useGetNftById, useGetZombiePriceUsd } from '../../../../../../../../state/hooks'
import { BASE_EXCHANGE_URL } from '../../../../../../../../config'
import { getAddress } from '../../../../../../../../utils/addressHelpers'
import { getLowResImage } from "../../../../../../../../utils";
import tokens from "../../../../../../../../config/constants/tokens";
import { BurnGrave } from "../../../../../../../../state/types";

export enum GraveItemType {
  Number,
  Money,
  Percentage,
  Duration,
}

interface TableDetailsProps {
  grave: BurnGrave
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const NftImageContainer = styled.div`
  margin: 25px 0 0 0;
  position: relative;
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  background: #0d1417;
  border-radius: 10px;
`

const NftImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`

const NftVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 10px 0 10px;
`

const GraveInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;
`

const HeaderText = styled.div`
  text-align: left;
  font: normal normal normal 16px/30px Poppins;
  color: #ffffff;
`

const SubHeaderText = styled.p`
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  color: #6b7682;
`

const Text = styled.span`
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  color: #ffffff;
  white-space: nowrap;
`

const LiquidityText = styled(Text)`
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  color: #AE32AA;
  white-space: normal;
`

const Link = styled(LinkExternal)`
  color: #ae32aa;
`

const TableDetails: React.FC<TableDetailsProps> = ({ grave }) => {
  const {
    nftId,
    endDate,
    poolInfo: { nftMintTime, totalBurned, minimumStake, burnReduction, tokensToBurn },
  } = grave
  const nft = useGetNftById(nftId)
  const history = useHistory()
  const tvl = getBalanceAmount(totalBurned.times(useGetZombiePriceUsd()))
  const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const source = event.target as HTMLImageElement
    source.onerror = null
    source.remove()
  }

  const linkToNft = () => {
    history.push(`/nfts/${nftId}`)
  }

  return (
    <Container>
      <NftImageContainer>
        {nft.type === 'video' ? (
          <NftVideo onClick={linkToNft} autoPlay loop muted>
            <source src={getLowResImage(nft)} type="video/webm"/>
          </NftVideo>
        ) : (
          <NftImage onClick={linkToNft} src={getLowResImage(nft)} onError={imageOnErrorHandler}/>
        )}
      </NftImageContainer>
      <Details>
        <GraveInfo>
          <HeaderText>{nft.name}</HeaderText>
          <SubHeaderText>
            Total Volume Burned: <Text>{numeral(tvl.toString()).format('$ (0.00 a)')}</Text>
          </SubHeaderText>
          <Link href={`${BASE_EXCHANGE_URL}/swap?outputCurrency=${getAddress(tokens.zmbe.address)}`}>Get ZMBE</Link>
        </GraveInfo>
        <GraveInfo>
          <SubHeaderText>
            NFT Minting Time: <Text>{formatDays(nftMintTime.toNumber())}</Text>
          </SubHeaderText>
          <SubHeaderText>
            Minimum Stake: <Text>{getBalanceAmount(minimumStake).toString()} ZMBE</Text>
          </SubHeaderText>
          <SubHeaderText>
            Burn Amount: <Text>{getBalanceAmount(tokensToBurn).toString()} ZMBE</Text>
          </SubHeaderText>
          <SubHeaderText>
            Burn Reduction: <Text>{burnReduction.toString()} Hour</Text>
          </SubHeaderText>
          {endDate ? (
            <SubHeaderText>
              End date: <Text>{formatDuration(endDate - now())}</Text>
            </SubHeaderText>
          ) : null}
        </GraveInfo>
      </Details>
    </Container>
  )
}

export default TableDetails

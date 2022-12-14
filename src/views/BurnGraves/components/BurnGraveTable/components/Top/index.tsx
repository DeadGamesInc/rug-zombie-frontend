import React from 'react'
import styled from 'styled-components'
import tokens from 'config/constants/tokens'
import uppointer from 'images/graves/Hide_Dropdown.svg'
import downpointer from 'images/graves/Dropdown_icon.svg'
import { Token } from 'config/constants/types'
import BigNumber from 'bignumber.js'
import { useGetZombiePriceUsd } from '../../../../../../state/hooks'
import { getBalanceNumber, getDecimalAmount } from '../../../../../../utils/formatBalance'
import CardItem, { CardItemValueType, NftTimerCardItem } from '../../../../../../components/CardItem'
import { BurnGrave } from "../../../../../../state/types";
import { now } from "../../../../../../utils/timerHelpers";

const GraveColumn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
`

const GraveHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding-bottom: 20px;
`

const TokenFlex = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 70px;
  justify-content: space-between;
`

const GraveTitle = styled.div`
  text-align: left;
  font: normal normal normal 20px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  padding-left: 20px;
  min-width: 40.5%;
  @media (max-width: 527px) {
    width: 100%;
  }
`

const TabFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  margin-left: 5px;

  @media (max-width: 527px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    row-gap: 5px;
  }
`

const GreyTab = styled.div`
  padding: 0 10px;
  height: 30px;
  border: 2px solid #6b7682;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;

  @media (max-width: 527px) {
    row-gap: 5px;
  }
`

const GreenTab = styled(GreyTab)`
  border: 2px solid #b8c00d;
`

const RedTab = styled(GreyTab)`
  border: 2px solid #fc0303;
`

const BlueTab = styled(GreyTab)`
  border: 2px solid #4b7bdc;
`

const PinkTab = styled(GreyTab)`
  border: 2px solid #ae32aa;
`

const GreyTabText = styled.div`
  font: normal normal normal 12px/30px Poppins;
  color: #6b7682;
`

const WhiteTabText = styled(GreyTabText)`
  color: #ffffff;
  white-space: nowrap;
`

const GraveSubRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: 527px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }
`

const Amounts = styled.div`
  display: flex;
  flex-grow: 1;
`

const Percentages = styled.div`
  display: flex;
  flex-grow: 1;
`

interface TopProps {
  grave: BurnGrave
  open: boolean
  setOpen: any
}

const Top: React.FC<TopProps> = ({ grave, open, setOpen }) => {
  const {
    name,
    isNew,
    isClosed,
    poolInfo: { totalBurned, },
    userInfo: { nftMintDate, amount },
    // poolInfo: { allocPoint, tokenAmount },
    // userInfo: { pendingZombie, nftMintDate, tokenWithdrawalDate, amount },
    endDate
  } = grave
  const toggleOpen = () => setOpen(!open)
  const tokenImage = (token: Token) => {
    return token.tokenLogo ? token.tokenLogo : `images/tokens/${token.symbol}.png`
  }

  const zombiePriceUsd = useGetZombiePriceUsd()
  const bigTvb = totalBurned.times(zombiePriceUsd)
  const tvb = getBalanceNumber(bigTvb)

  const getTabs = () => {
    const tabs = []
    tabs.push(
      <PinkTab>
        <WhiteTabText>BURN</WhiteTabText>
      </PinkTab>
    )
    if(!isClosed) {
      tabs.push(
        <BlueTab>
          <WhiteTabText>NFT-ONLY</WhiteTabText>
        </BlueTab>,
      )
    } else {
      tabs.push(
        <PinkTab>
          <WhiteTabText>RETIRED</WhiteTabText>
        </PinkTab>,
      )
    }

    if(isNew) {
      tabs.push(
        <RedTab>
          <WhiteTabText>NEW</WhiteTabText>
        </RedTab>,
      )
    }

    return (
      <TabFlex>
        {tabs}
        {/* <AnnouncementLink key="announcement-link" subject={grave} /> */}
      </TabFlex>
    )
  }

  return (
    <GraveColumn onClick={toggleOpen}>
      <GraveHeaderRow>
        <TokenFlex>
          <img src={tokenImage(tokens.zmbe)} style={{ width: '30px', height: '30px' }} alt='Zombie Token logo'/>
        </TokenFlex>
        <GraveTitle>{name}</GraveTitle>
        {getTabs()}
      </GraveHeaderRow>
      <GraveSubRow>
        <Amounts>
          <CardItem label='TVB' value={tvb} valueType={CardItemValueType.Money}/>
        </Amounts>
        <Percentages>
          <NftTimerCardItem mintDate={new BigNumber(nftMintDate)} amountStaked={amount}/>
          <CardItem
            highlightable
            // isHighlighted={() => true}
            label="Grave End"
            value={endDate - now()}
            valueType={CardItemValueType.Duration}
          />
          {open ? (
            <img src={uppointer} alt='Close Grave' style={{ width: '35px', height: '35px' }}/>
          ) : (
            <img src={downpointer} alt='Open Grave' style={{ width: '35px', height: '35px' }}/>
          )}
        </Percentages>
      </GraveSubRow>
    </GraveColumn>
  )
}

export default Top

import AnnouncementLink from 'components/AnnouncementLink'
import React from 'react'
import styled from 'styled-components'
import tokens from 'config/constants/tokens'
import uppointer from 'images/spawningPools/Hide_Dropdown.svg'
import downpointer from 'images/spawningPools/Dropdown_icon.svg'
import { Token } from 'config/constants/types'
import { useGetBnbPriceUsd, useGetZombiePriceUsd } from '../../../../../../state/hooks'
import { SpawningPool } from '../../../../../../state/types'
import { getBalanceNumber, getFullDisplayBalance } from '../../../../../../utils/formatBalance'
import { getSpawningPoolApr } from '../../../../../../utils/apr'
import CardItem, { CardItemValueType, NftTimerCardItem } from '../../../../../../components/CardItem'
import { TableTop } from "../../../../../../components/TableFactory";

const SpawningPoolColumn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
`

const SpawningPoolHeaderRow = styled.div`
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

const SpawningPoolTitle = styled.div`
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

const GreenTab = styled.div`
  min-width: 49px;
  height: 30px;
  border: 2px solid #b8c00d;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`

const GreyTab = styled.div`
  width: 60px;
  height: 30px;
  border: 2px solid #6b7682;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const GreenTabText = styled.div`
  font: normal normal normal 12px/30px Poppins;
  color: #ffffff;
`

const GreyTabText = styled.div`
  font: normal normal normal 12px/30px Poppins;
  color: #6b7682;
`

const SpawningPoolSubRow = styled.div`
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

const Top: TableTop<SpawningPool> = ({ target: spawningPool, open }) => {
  const {
    name,
    rewardToken,
    isNew,
    unknownPrice,
    poolInfo: { totalAmount, rewardTokenPriceBnb, rewardPerBlock },
    userInfo: { pendingReward, nftMintDate, tokenWithdrawalDate, amount },
  } = spawningPool
  const tokenImage = (token: Token) => {
    return token.tokenLogo ? token.tokenLogo : `images/tokens/${token.symbol}.png`
  }
  const zombiePriceUsd = useGetZombiePriceUsd()
  const bigTvl = totalAmount.times(zombiePriceUsd)

  const tvl = getBalanceNumber(bigTvl)
  const rewardTokenPrice = rewardTokenPriceBnb.times(useGetBnbPriceUsd()).toNumber()
  const yearly = getSpawningPoolApr(
    zombiePriceUsd,
    rewardTokenPrice,
    getBalanceNumber(totalAmount),
    getBalanceNumber(rewardPerBlock, rewardToken.decimals),
  )
  const daily = yearly / 365

  const now = Math.floor(Date.now() / 1000)

  const cooldownTime = () => {
    if (amount.isZero()) {
      return <CardItem label="Withdrawal Timer" value="N/A" valueType={CardItemValueType.Text} />
    }
    const remainingCooldownTime = tokenWithdrawalDate.toNumber() - now
    if (remainingCooldownTime <= 0) {
      return <CardItem label="Withdrawal Timer" value="None" valueType={CardItemValueType.Text} />
    }
    return <CardItem label="Withdrawal Timer" value={remainingCooldownTime} valueType={CardItemValueType.Duration} />
  }

  return (
    <SpawningPoolColumn>
      <SpawningPoolHeaderRow>
        <TokenFlex>
          <img src={tokenImage(tokens.zmbe)} style={{ width: '30px', height: '30px' }} alt="Zombie Token logo" />
          <img src={tokenImage(rewardToken)} style={{ maxWidth: '30px', maxHeight: '30px', objectFit: 'scale-down' }} alt="Reward token logo" />
        </TokenFlex>
        <SpawningPoolTitle>{name}</SpawningPoolTitle>
        <TabFlex>
          <GreenTab>
            <GreenTabText>{rewardToken.symbol}</GreenTabText>
          </GreenTab>
          <GreyTab>
            <GreyTabText>ZMBE</GreyTabText>
          </GreyTab>
          {isNew ? (
            <GreenTab>
              <GreenTabText>NEW</GreenTabText>
            </GreenTab>
          ) : null}
          <AnnouncementLink subject={spawningPool} />
        </TabFlex>
      </SpawningPoolHeaderRow>
      <SpawningPoolSubRow>
        <Amounts>
          <CardItem
            label="Earned"
            highlightable
            unit={`${rewardToken.symbol}${
              unknownPrice
                ? ''
                : ` ($${getFullDisplayBalance(pendingReward.times(rewardTokenPrice), rewardToken.decimals, 2)})`
            }`}
            value={getBalanceNumber(pendingReward, rewardToken.decimals)}
            valueType={CardItemValueType.Number}
          />
          <CardItem label="Yearly" value={yearly} valueType={CardItemValueType.Percentage} />
          <CardItem label="Daily" value={daily} valueType={CardItemValueType.Percentage} />
          <CardItem label="TVL" value={tvl} valueType={CardItemValueType.Money} />
        </Amounts>
        <Percentages>
          <NftTimerCardItem amountStaked={amount} mintDate={nftMintDate} />
          {cooldownTime()}
          {open ? (
            <img src={uppointer} alt="Close SpawningPool" style={{ width: '35px', height: '35px' }} />
          ) : (
            <img src={downpointer} alt="Open SpawningPool" style={{ width: '35px', height: '35px' }} />
          )}
        </Percentages>
      </SpawningPoolSubRow>
    </SpawningPoolColumn>
  )
}

export default Top

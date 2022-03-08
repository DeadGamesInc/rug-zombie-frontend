import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { Box, Flex, FlexProps, Text } from '@rug-zombie-libs/uikit'
import { formatBnb } from 'views/Mausoleum/helpers'
import { useTranslation } from 'contexts/Localization'
import { BetPosition, Round } from 'state/types'
import { BigNumber } from 'bignumber.js'
import { auctionById } from '../../../../redux/get'
import { useGetBnbPriceUsd, useGetZombiePerZombieBnbLp } from '../../../../state/hooks'
import { formatNumber, getBalanceAmount } from '../../../../utils/formatBalance'

// PrizePoolRow
interface PrizePoolRowProps extends FlexProps {
  totalAmount: Round['totalAmount']
  bt?: boolean
}

const getPrizePoolAmount = (totalAmount: PrizePoolRowProps['totalAmount']) => {
  if (!totalAmount) {
    return '0'
  }

  return formatBnb(totalAmount)
}

export const PrizePoolRow: React.FC<PrizePoolRowProps> = ({ totalAmount, bt, ...props }) => {
  const { t } = useTranslation()

  return (
    <Flex alignItems="center" justifyContent="space-between" {...props}>
      <Text bold>{t('Bid Value')}:</Text>
      <Text bold>{`${getPrizePoolAmount(totalAmount)} ${bt ? 'BT' : 'BNB'}`}</Text>
    </Flex>
  )
}

// LockPriceRow
interface LockPriceRowProps {
  bid: any
  id: number
}

export const UsdPriceRow: React.FC<LockPriceRowProps> = ({ id, bid, ...props }) => {
  const { t } = useTranslation()
  const quarterBid = bid.amount / 4
  const { version } = auctionById(id)
  const v3 = version === 'v3'
  const bnbPriceUsd = useGetBnbPriceUsd()
  const zombiePerZombieBnbLp = useGetZombiePerZombieBnbLp()
  return (
    <>
      {v3 ? (
        <Flex alignItems="center" justifyContent="space-between" {...props}>
          <Text fontSize="14px">{t('USD Value')}:</Text>
          <Text fontSize="14px">{formatNumber(getBalanceAmount(bid.amount).times(bnbPriceUsd).toNumber())}</Text>
        </Flex>
      ) : (
        <>
          <Flex alignItems="center" justifyContent="space-between" {...props}>
            <Text fontSize="14px">{t('ZMBE Burned')}:</Text>
            <Text fontSize="14px">
              {formatNumber(getBalanceAmount(zombiePerZombieBnbLp.times(quarterBid * 3)).toNumber())}
            </Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" {...props}>
            <Text fontSize="14px">{t('LP Locked')}:</Text>
            <Text fontSize="14px">
              {Math.round(getBalanceAmount(new BigNumber(quarterBid)).toNumber() * 100) / 100} vssß
            </Text>
          </Flex>
        </>
      )}
    </>
  )
}

// RoundResultBox
interface RoundResultBoxProps {
  betPosition?: BetPosition
  isNext?: boolean
  isLive?: boolean
  hasEntered?: boolean
}

const getBackgroundColor = ({
  theme,
  betPosition,
  isNext,
  isLive,
  hasEntered,
}: RoundResultBoxProps & { theme: DefaultTheme }) => {
  if (isNext) {
    return 'linear-gradient(180deg, #53DEE9 0%, #7645D9 100%)'
  }

  if (hasEntered || isLive) {
    return theme.colors.secondary
  }

  if (betPosition === BetPosition.BULL) {
    return theme.colors.success
  }

  if (betPosition === BetPosition.BEAR) {
    return theme.colors.failure
  }

  return theme.colors.borderColor
}

const Background = styled(Box)<RoundResultBoxProps>`
  background: ${getBackgroundColor};
  border-radius: 16px;
  padding: 2px;
`

const StyledRoundResultBox = styled.div`
  background: ${({ theme }) => theme.card.background};
  border-radius: 14px;
  padding: 16px;
`

export const RoundResultBox: React.FC<RoundResultBoxProps> = ({
  isNext = false,
  hasEntered = false,
  isLive = false,
  children,
  ...props
}) => {
  return (
    <Background isNext={isNext} hasEntered={hasEntered} isLive={isLive} {...props}>
      <StyledRoundResultBox>{children}</StyledRoundResultBox>
    </Background>
  )
}

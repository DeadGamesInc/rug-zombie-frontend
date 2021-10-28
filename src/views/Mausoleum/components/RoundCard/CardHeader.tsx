import React, { ReactElement } from 'react'
import { Flex, Text } from '@rug-zombie-libs/uikit'
import styled, { DefaultTheme } from 'styled-components'

type Status = 'outbid' | 'live' | 'next' | 'soon' | 'canceled' | 'calculating'

interface CardHeaderProps {
  status: Status
  title: string
  bid: any,
  id: number,
  icon?: ReactElement
}

const getBackgroundColor = (theme: DefaultTheme, status: Status) => {
  switch (status) {
    case 'calculating':
      return theme.colors.gradients.cardHeader
    case 'live':
      return 'transparent'
    case 'canceled':
      return theme.colors.warning
    case 'next':
      return theme.colors.secondary
    case 'outbid':
    case 'soon':
    default:
      return theme.colors.borderColor
  }
}

type TextColor = 'textDisabled' | 'white' | 'secondary' | 'text' | 'textSubtle'
type FallbackColor = 'text' | 'textSubtle'

const getTextColorByStatus = (status: Status, fallback: FallbackColor): TextColor => {
  switch (status) {
    case 'outbid':
      return 'textDisabled'
    case 'next':
      return 'white'
    case 'live':
      return 'secondary'
    case 'canceled':
    case 'calculating':
      return 'text'
    default:
      return fallback
  }
}

const StyledCardHeader = styled.div<{ status: Status }>`
  align-items: center;
  background: ${({ theme, status }) => getBackgroundColor(theme, status)};
  border-radius: 16px 16px 0 0;
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  padding: ${({ status }) => (status === 'live' ? '16px' : '8px')};
`

const Round = styled.div`
  justify-self: center;
`

const CardHeader: React.FC<CardHeaderProps> = ({ status, title, icon, bid }) => {
  const textColor = getTextColorByStatus(status, 'text')
  const isLive = status === 'live'

  return (
    <StyledCardHeader status={status}>
      <Flex alignItems="center">
        {icon}
        <Text color={textColor} bold={isLive} textTransform={isLive ? 'uppercase' : 'capitalize'} lineHeight="21px">
          {title}
        </Text>
      </Flex>
      <Round>
        <Text fontSize={isLive ? '14px' : '12px'} color={getTextColorByStatus(status, 'textSubtle')} textAlign="center">
           {`#${bid.id}`}
        </Text>
      </Round>
    </StyledCardHeader>
  )
}

export default CardHeader

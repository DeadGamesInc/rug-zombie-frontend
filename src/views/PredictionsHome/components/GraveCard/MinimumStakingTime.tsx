import React from 'react'
import {
  Flex,
  useTooltip,
} from '@rug-zombie-libs/uikit'

interface MinimumStakingTimeProps {
  period: string
}

// Minimum Staking Time
const MinimumStakingTime: React.FC<MinimumStakingTimeProps> = () => {
  const { tooltip, tooltipVisible } = useTooltip(
    'Funds staked in this grave are locked for a specified amount of time. Withdrawing your funds early results in a 5% fee.',
    { placement: 'bottom-end' },
  )

  return (
    <Flex alignItems='center' justifyContent='space-between'>
      {tooltipVisible && tooltip}
    </Flex>
  )
}

export default MinimumStakingTime

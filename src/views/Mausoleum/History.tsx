import React, { useEffect } from 'react'
import { Box, Heading, Spinner, Text } from '@rug-zombie-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Header } from './components/History'

const StyledHistory = styled.div`
  background-color: ${({ theme }) => theme.card.background};
  display: flex;
  flex-direction: column;
  height: 100%;
`

const BetWrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  position: relative;
`

const SpinnerWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.card.background};
  display: flex;
  left: 0;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
`

const History: React.FC = () => {
  const { t } = useTranslation()

  return (
    <StyledHistory>
      <Header />
      <BetWrapper>
          <Box p="24px">
            <Heading size="lg" textAlign="center" mb="8px">
              {t('No predictions history available')}
            </Heading>
            <Text as="p" textAlign="center">
              {t(
                'If you are sure you should see history here, make sure you’re connected to the correct wallet and try again.',
              )}
            </Text>
          </Box>
        {/* )} */}
      </BetWrapper>
    </StyledHistory>
  )
}

export default History

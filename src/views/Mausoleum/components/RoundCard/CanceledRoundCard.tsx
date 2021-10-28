import React from 'react'
import { CardBody, Flex, BlockIcon, LinkExternal } from '@rug-zombie-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import { BetPosition } from 'state/types'
import { RoundResultBox } from '../RoundResult'
import MultiplierArrow from './MultiplierArrow'
import Card from './Card'
import CardHeader from './CardHeader'

interface CanceledRoundCardProps {
  bid: any,
  id: number
}

const CanceledRoundCard: React.FC<CanceledRoundCardProps> = ({ bid, id }) => {
  const { t } = useTranslation()
  // const { isRefundable, setIsRefundable } = useIsRefundable(round.epoch)
  // const { epoch, startBlock } = round
  // const estimatedEndBlock = startBlock + interval

  return (
    <Card>
      <CardHeader
        status="canceled"
        icon={<BlockIcon mr="4px" width="21px" />}
        title={t('Canceled')}
        bid={bid}
        id={id}
      />
      <CardBody p="16px">
        <MultiplierArrow isDisabled />
        <RoundResultBox>
          <Flex flexDirection="column" alignItems="center">
            {/* <Text bold color={isRefundable ? 'text' : 'textDisabled'}> */}
            {/*  {t('Round Canceled')} */}
            {/* </Text> */}
            {/* {isRefundable && <ReclaimPositionButton epoch={epoch} onSuccess={handleSuccess} width="100%" my="8px" />} */}
            <LinkExternal href="https://docs.pancakeswap.finance/products/prediction" external>
              {t('Learn More')}
            </LinkExternal>
          </Flex>
        </RoundResultBox>
        <MultiplierArrow betPosition={BetPosition.BEAR} isDisabled />
      </CardBody>
    </Card>
  )
}

export default CanceledRoundCard

import React, { useCallback, useState } from 'react'
import { Button, Flex, Modal, Text } from '@rug-zombie-libs/uikit'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import numeral from 'numeral'
import { getBalanceAmount, getDecimalAmount, getFullDisplayBalance } from '../../../../utils/formatBalance'
import { getAddress } from '../../../../utils/addressHelpers'
import tokens from '../../../../config/constants/tokens'
import { BIG_ZERO } from '../../../../utils/bigNumber'
import { BASE_EXCHANGE_URL } from '../../../../config'
import { useDrBurnenstein } from '../../../../hooks/useContract'
import useToast from '../../../../hooks/useToast'
import { useTranslation } from '../../../../contexts/Localization'
import { getId } from "../../../../utils";
import { BurnGrave } from "../../../../state/types";
import { useBurnZombie } from "../../../../hooks/useBurnGrave";
import { PrimaryButton, PrimaryButtonText } from "../../../../components/Buttons";
import { formatBurnDuration, formatDuration } from "../../../../utils/timerHelpers";

const StyledButton = styled(Button)`
  flex-grow: 1;
`

const GraveTitle = styled.div`
  text-align: left;
  font: normal normal normal 20px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  margin-bottom: 20px;
`
const Inputs = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
  margin: 10px 0 0 0;
`
const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 104px;
`


const BalanceText = styled.button`
  font: normal normal normal 14px/21px Poppins;
  color: #6b7682;
  background: none;
  border: none;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`

const AmountText = styled.p`
  font: normal normal normal 14px/21px Poppins;
  margin: 0;
`

const PrimaryStakeButton = styled.button`
  height: 60px;
  width: 150px;
  background: #b8c00d 0% 0% no-repeat padding-box;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;

  &:hover {
    cursor: pointer;
  }
`

const SecondaryStakeButton = styled.button`
  height: 60px;
  width: 150px;
  border: 2px solid #b8c00d;
  border-radius: 10px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;

  &:hover {
    cursor: pointer;
  }
`

const PrimaryStakeButtonText = styled.div`
  text-align: center;
  font: normal normal normal 16px/25px Poppins;
  color: #010202;
`

const SecondaryStakeButtonText = styled.div`
  text-align: center;
  font: normal normal normal 16px/25px Poppins;
  color: #ffffff;
`

export interface BurnZombieModalProps {
  grave: BurnGrave
  onDismiss?: () => void
}

const BurnZombieModal: React.FC<BurnZombieModalProps> = ({ grave, onDismiss }) => {
  const [burnAmount, setBurnAmount] = useState(grave.poolInfo.tokensToBurn)
  const [burningZombie, setBurningZombie] = useState(false)
  const drburn = useDrBurnenstein()
  const { onBurnZombie } = useBurnZombie(drburn, getId(grave.pid), burnAmount)
  const { toastError } = useToast()
  const { t } = useTranslation()
  const { poolInfo: { burnReduction, tokensToBurn,  }} = grave

  const handleBurnInputAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value || '0'
    setBurnAmount(getDecimalAmount(new BigNumber(inputValue)))
  }

  const handleBurnChange = (type: number) => {
    let amount

    switch (type) {
      case 0:
        if(burnAmount.gt(tokensToBurn)) {
          amount = burnAmount.minus(tokensToBurn)
        } else {
          amount = BIG_ZERO
        }
        break
      case 1:
        if(burnAmount.plus(grave.poolInfo.tokensToBurn).gt(grave.poolInfo.maxBurned)) {
          amount = grave.poolInfo.maxBurned
        } else {
          amount = burnAmount.plus(grave.poolInfo.tokensToBurn)
        }
        break
      default:
        amount = grave.poolInfo.maxBurned.minus(grave.userInfo.burnedAmount)
        break
    }

    setBurnAmount(amount)
  }

  const handleTx = useCallback(async () => {
    setBurningZombie(true)
    onBurnZombie()
      .then(succeeded => {
        if(succeeded) {
          toastError("ZMBE Burned")
          onDismiss()
        }
        setBurningZombie(false)
      })
      .catch(() => {
        setBurningZombie(false)
      })
  }, [toastError, onDismiss, onBurnZombie])

  // const handleBurn = () => {
  //   let formattedAmount = burnAmount.toString()
  //   const index = burnAmount.toString().indexOf('.')
  //   if(index >= 0) {
  //     formattedAmount = formattedAmount.substring(0, index)
  //   }
  //
  //   drburn.methods
  //     .burnZombie(id, formattedAmount)
  //     .send({ from: account })
  //     .then(() => {
  //       updateResult(id)
  //       toastDefault(t('Burned ZMBE'))
  //       onDismiss()
  //     })
  // }

  let burnDetails = ''
  let isDisabled = false

  const bigBurnAmount = new BigNumber(burnAmount)

  if(bigBurnAmount.gt(grave.userInfo.zombieBalance)) {
    isDisabled = true
    burnDetails = 'Invalid Burn: Insufficient ZMBE Balance'
  } else if(bigBurnAmount.plus(grave.userInfo.burnedAmount).gt(grave.poolInfo.maxBurned)) {
    isDisabled = true
    burnDetails = `Invalid Stake: Maximum ${getBalanceAmount(grave.poolInfo.maxBurned).toString()} ${
      grave.stakingToken.symbol
    } burned per cycle`
  } else if(bigBurnAmount.mod(grave.poolInfo.tokensToBurn).toString() !== '0') {
    isDisabled = true
    burnDetails = `Invalid Stake: Must burn in multiples of ${getBalanceAmount(
      grave.poolInfo.tokensToBurn,
    ).toString()} ${grave.stakingToken.symbol}`
  }

  console.log(grave.poolInfo.tokensToBurn)
  return (
    <Modal onDismiss={onDismiss} title="BURN ZOMBIE" headerBackground="black">
      <GraveTitle>
        This grave allows you to burn zombie to earn NFTs faster
      </GraveTitle>
      <Inputs>
          <BalanceText>
            Wallet Balance:{' '}
            <AmountText>{numeral(getFullDisplayBalance(grave.userInfo.zombieBalance)).format('(0.00 a)', Math.floor)} ZMBE</AmountText>
          </BalanceText>
        <BalanceText>
          Amount Burned:{' '}
          <AmountText>{numeral(getFullDisplayBalance(grave.userInfo.burnedAmount)).format('(0.00 a)', Math.floor)} ZMBE</AmountText>
        </BalanceText>
      </Inputs>
      <Flex justifyContent="center" mt="20px">
        <GraveTitle>
          {getFullDisplayBalance(burnAmount)} ZMBE - {formatBurnDuration(burnReduction.times(burnAmount.div(grave.poolInfo.tokensToBurn).times(3600)).toNumber())}
        </GraveTitle>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" mt="8px">
        <PrimaryStakeButton onClick={() => handleBurnChange(0)}>
          <PrimaryStakeButtonText>
            -
          </PrimaryStakeButtonText> </PrimaryStakeButton>
        <PrimaryStakeButton onClick={() => handleBurnChange(1)}>
          <PrimaryStakeButtonText>
            +
          </PrimaryStakeButtonText>
        </PrimaryStakeButton>
        <PrimaryStakeButton onClick={() => handleBurnChange(2)}>
          <PrimaryStakeButtonText>
            MAX
          </PrimaryStakeButtonText>
        </PrimaryStakeButton>
      </Flex>
      {grave.userInfo.zombieBalance.toString() === '0' ? (
        <Button
          mt="8px"
          as="a"
          external
          href={`${BASE_EXCHANGE_URL}/swap?outputCurrency=${getAddress(tokens.zmbe.address)}`}
          variant="secondary"
        >
          Get ZMBE
        </Button>
      ) : (
        <Button onClick={handleTx} disabled={isDisabled} mt="8px" as="a" variant="secondary">
          {burningZombie ? "BURNING..." : "BURN ZMBE"}
        </Button>
      )}
    </Modal>
  )
}

export default BurnZombieModal

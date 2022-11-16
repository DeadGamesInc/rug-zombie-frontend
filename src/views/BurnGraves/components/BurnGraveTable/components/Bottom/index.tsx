import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { BigNumber } from 'bignumber.js'
import numeral from 'numeral'
import { LinkExternal, useModal } from '@rug-zombie-libs/uikit'
import ProgressBar from './components/ProgressBar'
import TableDetails from './components/TableDetails'
import useApprove from '../../../../../../hooks/useApprove'
import { getDrBurnensteinAddress, getZombieAddress } from '../../../../../../utils/addressHelpers'
import { useDrBurnenstein, useZombie } from '../../../../../../hooks/useContract'
import { useUnstakeEarly } from '../../../../../../hooks/useGrave'
import { getId } from '../../../../../../utils'
import tokens from '../../../../../../config/constants/tokens'
import { getBalanceNumber, getDecimalAmount, getFullDisplayBalance } from '../../../../../../utils/formatBalance'
import { useGetNfts } from '../../../../../../state/hooks'
import useToast from '../../../../../../hooks/useToast'
import { formatDuration, now } from '../../../../../../utils/timerHelpers'
import { BASE_EXCHANGE_URL } from '../../../../../../config'
import { useEnterStaking, useLeaveStaking, useHarvest } from "../../../../../../hooks/useBurnGrave";
import { BurnGrave } from "../../../../../../state/types";
import BurnZombieModal from "../../../BurnZombieModal";

const Separator = styled.div`
  height: 0px;
  border: 1px dashed #6b7682;
  margin: 25px 0 0 0;
`

const StakingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
`

const Inputs = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
  margin: 10px 0 0 0;
`

const Buttons = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
  margin: 54px 0 0 0;
  @media (max-width: 723px) {
    margin: 10px 0 0 0;
  }
`

const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 104px;
`

const Link = styled(LinkExternal)`
  text-align: left;
  text-decoration: underline;
  font: normal normal normal 16px/30px Poppins;
  letter-spacing: 0px;
  color: #ae32aa;
`

const StakingInput = styled.input`
  width: 150px;
  height: 60px;
  background: #0d1417 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding-left: 20px;
  border: none;
  text-align: left;
  font: normal normal normal 14px/30px Poppins;
  color: #ffffff;
  margin: 0 2px;
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

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FlexRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

interface BottomProps {
  grave: BurnGrave
}

const Bottom: React.FC<BottomProps> = ({ grave }) => {
  const {
    pid,
    nftId,
    endDate,
    isClosed,
    userInfo: { zombieBalance, zombieAllowance, amount, nftMintDate },
    poolInfo: { minimumStake, nftMintTime },
  } = grave
  const [unstakeAmount, setUnstakeAmount] = useState(new BigNumber(null))
  const drBurnenstein = useDrBurnenstein()
  const approveZombie = useApprove(useZombie(), getDrBurnensteinAddress()).onApprove
  const { onEnterStaking } = useEnterStaking(drBurnenstein, getId(pid), minimumStake)
  const { onLeaveStaking } = useLeaveStaking(drBurnenstein, getId(pid), unstakeAmount)
  const { onUnstakeEarly } = useUnstakeEarly(drBurnenstein, getId(pid), unstakeAmount)
  const { onHarvest } = useHarvest(drBurnenstein, getId(pid))
  const [confirmingStake, setConfirmingStake] = useState(false)
  const [confirmingUnstake, setConfirmingUnstake] = useState(false)
  const stakingSteps = useMemo(() => [], [])
  const unstakingSteps = useMemo(() => [], [])
  const nfts = useGetNfts().data
  const nft = nfts.find((n) => n.id === nftId)
  const { toastGraves } = useToast()

  enum StakingStep {
    ApproveZombie,
    StakeZombie,
    Staked,
  }

  const insufficientZombieBalance = minimumStake.gt(zombieBalance)
  const validUnstakeAmount = amount.minus(unstakeAmount).gte(minimumStake) || amount.minus(unstakeAmount).isZero()
  const insufficientStakedBalance = unstakeAmount.gt(amount)

  const [onBurn] = useModal(<BurnZombieModal grave={grave} />)

  stakingSteps[StakingStep.ApproveZombie] = {
    label: `Approve ZMBE`,
    sent: `Approving...`,
    func: approveZombie,
    toast: { title: 'Approved ZMBE' },
  }
  stakingSteps[StakingStep.StakeZombie] = {
    label: `Stake ${getFullDisplayBalance(minimumStake)} ZMBE`,
    sent: `Staking...`,
    func: onEnterStaking,
    toast: { title: 'Staked ZMBE' },
  }
  stakingSteps[StakingStep.Staked] = {
    label: `Burn ZMBE`,
    sent: `Burning...`,
    func: onBurn,
    toast: { title: 'Staked ZMBE' },
    nonAsync: true
  }
  let currentStep = StakingStep.ApproveZombie
  if(zombieAllowance.gt(0)) {
    currentStep = StakingStep.StakeZombie
  }
  if(amount.gt(0)) {
    currentStep = StakingStep.Staked
  }
  if(zombieAllowance.isZero() && amount.gt(0)) {
    currentStep = StakingStep.ApproveZombie
  }

  const handleTx = useCallback(async () => {
    const step = stakingSteps[currentStep]
    if(step.nonAsync) {
      step.func()
    } else {
      if([StakingStep.StakeZombie].includes(currentStep)) {
        if(insufficientZombieBalance) {
          toastGraves(
            'Insufficient ZMBE balance',
            <Link href={`${BASE_EXCHANGE_URL}/swap?outputCurrency=${getZombieAddress()}`}>
              Buy ZMBE
            </Link>,
          )
          return
        }
      }
      if(
        (nftMintTime.gt(endDate - now()) || isClosed)) {
        toastGraves(
          'Notice',
          <FlexColumn>
            <text>
              {endDate - now() > 0 || isClosed
                ? 'This grave is retired. '
                : `This grave retires in ${formatDuration(endDate - now())}. `}
              You will can no longer earn the {nft.name} NFT by staking.
            </text>
            <FlexRow>
              <PrimaryStakeButton onClick={step.func}>
                <PrimaryStakeButtonText>Proceed</PrimaryStakeButtonText>
              </PrimaryStakeButton>
            </FlexRow>
          </FlexColumn>,
        )
        return
      }

      setConfirmingStake(true)
      step
        .func()
        .then((succeeded) => {
          if(succeeded) {
            toastGraves(step.toast.title)
          }
          setConfirmingStake(false)
        })
        .catch(() => {
          setConfirmingStake(false)
        })
    }
  }, [
    stakingSteps,
    currentStep,
    StakingStep.StakeZombie,
    StakingStep.Staked,
    nftMintTime,
    endDate,
    insufficientZombieBalance,
    toastGraves,
    minimumStake,
    nft.name
  ])

  enum UnstakingStep {
    MintNft,
    Harvest,
    Unstake,
    UnstakeEarly,
    StakeZombie,
    Staked,
  }

  unstakingSteps[UnstakingStep.MintNft] = {
    label: `Mint NFT`,
    sent: `Minting...`,
    toast: { title: `Minted ${nft.symbol} NFT` },
    func: onHarvest,
  }
  unstakingSteps[UnstakingStep.Harvest] = {
    label: `Harvest`,
    sent: `Harvesting...`,
    toast: { title: 'Harvested ZMBE' },
    func: onHarvest,
  }
  unstakingSteps[UnstakingStep.Unstake] = {
    label: `Unstake`,
    sent: `Unstaking...`,
    toast: { title: 'Unstaked ZMBE' },
    func: onLeaveStaking,
  }
  unstakingSteps[UnstakingStep.UnstakeEarly] = {
    label: `Unstake Early`,
    sent: `Unstaking...`,
    toast: { title: 'Unstaked ZMBE' },
    func: onUnstakeEarly,
  }

  let currentUnstakingStep = UnstakingStep.Unstake
  if(amount.gt(0)) {
    if(nftMintDate.lte(now())) {
      currentUnstakingStep = UnstakingStep.MintNft
    } else if(unstakeAmount.isZero() || unstakeAmount.isNaN()) {
      currentUnstakingStep = UnstakingStep.Harvest
    }
  }

  const handleUnstakeTx = useCallback(async () => {
    if([UnstakingStep.Unstake, UnstakingStep.UnstakeEarly].includes(currentUnstakingStep)) {
      if(insufficientStakedBalance) {
        toastGraves('Insufficient staked balance', 'The amount specified exceeds your staked balance')
        return
      }
      if(!validUnstakeAmount) {
        toastGraves(
          'Invalid amount',
          <FlexColumn>
            <text>You must leave a minimum of {getFullDisplayBalance(minimumStake)} ZMBE in the grave</text>
            <FlexRow>
              <PrimaryStakeButton
                onClick={() => {
                  setUnstakeAmount(amount.minus(minimumStake))
                }}
              >
                <PrimaryStakeButtonText>Leave minimum</PrimaryStakeButtonText>
              </PrimaryStakeButton>
              <SecondaryStakeButton
                onClick={() => {
                  setUnstakeAmount(amount)
                }}
              >
                <SecondaryStakeButtonText>Withdraw max</SecondaryStakeButtonText>
              </SecondaryStakeButton>
            </FlexRow>
          </FlexColumn>,
        )
        return
      }
    }

    setConfirmingUnstake(true)
    unstakingSteps[currentUnstakingStep]
      .func()
      .then((succeeded) => {
        if(succeeded) {
          toastGraves(unstakingSteps[currentUnstakingStep].toast.title)
        }
        setConfirmingUnstake(false)
      })
      .catch(() => {
        setConfirmingUnstake(false)
      })
  }, [
    UnstakingStep.Unstake,
    UnstakingStep.UnstakeEarly,
    amount,
    currentUnstakingStep,
    insufficientStakedBalance,
    minimumStake,
    toastGraves,
    unstakingSteps,
    validUnstakeAmount,
  ])

  const changeUnstakeInput = (e) => {
    setUnstakeAmount(getDecimalAmount(new BigNumber(e.target.value), tokens.zmbe.decimals))
  }

  const maxUnstakeAmount = () => {
    setUnstakeAmount(amount)
  }

  return (
    <>
      <Separator/>
      <StakingContainer>
        <Inputs>
          <InputControl>
            <BalanceText onClick={maxUnstakeAmount}>
              Your
              Staked: <AmountText>{numeral(getFullDisplayBalance(amount)).format('(0.00 a)', Math.floor)} ZMBE</AmountText>
            </BalanceText>
            <StakingInput
              onInput={changeUnstakeInput}
              value={getBalanceNumber(unstakeAmount)}
              placeholder="Unstake amount"
              type="number"
            />
          </InputControl>
        </Inputs>
        <Buttons>
          <PrimaryStakeButton onClick={handleTx}>
            <PrimaryStakeButtonText>
              {confirmingStake ? stakingSteps[currentStep].sent : stakingSteps[currentStep].label}
            </PrimaryStakeButtonText>
          </PrimaryStakeButton>
          <SecondaryStakeButton onClick={handleUnstakeTx}>
            <SecondaryStakeButtonText>
              {confirmingUnstake
                ? unstakingSteps[currentUnstakingStep].sent
                : unstakingSteps[currentUnstakingStep].label}
            </SecondaryStakeButtonText>
          </SecondaryStakeButton>
        </Buttons>
      </StakingContainer>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <ProgressBar grave={grave} />
      <Separator/>
      <TableDetails grave={grave} />
    </>
  )
}

export default Bottom

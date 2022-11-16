import React from 'react'
import { Button, Flex, useModal } from '@rug-zombie-libs/uikit'
import BigNumber from "bignumber.js";
import { useWeb3React } from "@web3-react/core";
import { formatDuration } from '../../../../utils/timerHelpers'
import { getFullDisplayBalance } from '../../../../utils/formatBalance'
import { BIG_ZERO } from '../../../../utils/bigNumber'
import { useDrBurnenstein } from '../../../../hooks/useContract'
import useToast from '../../../../hooks/useToast'
import { useTranslation } from '../../../../contexts/Localization'
import BurnZombieModal from '../BurnZombieModal'
import { useGetBurnGraves } from "../../../../state/hooks";
import { getId } from "../../../../utils";

export interface BurnPanelProps {
  id: number
  updateResult: any
}

const BurnPanel: React.FC<BurnPanelProps> = ({ id, updateResult }) => {
  const { account } = useWeb3React()
  const grave = useGetBurnGraves().data.find(bg => getId(bg.pid) === id)
  const drburn = useDrBurnenstein()
  const { toastDefault } = useToast()
  const { t } = useTranslation()

  const currentDate = Math.floor(Date.now() / 1000)
  let nftMintDateFixed = grave.userInfo.nftMintDate

  if (grave.userInfo.nftMintDate.lt(0)) {
    nftMintDateFixed = new BigNumber(currentDate)
  }

  const initialNftTime = nftMintDateFixed.minus(currentDate)

  const onMintNft = () => {
    drburn.methods
      .leaveStaking(id, 0)
      .send({ from: account })
      .then(() => {
        updateResult(id)
        toastDefault(t('Minted NFT'))
      })
  }

  const handleBurn = null // useModal(<BurnZombieModal id={id} updateResult={updateResult} />)

  const renderBurnButton = () => {
    if (!account) {
      return (
        <div className="frank-card">
          <div className="small-text">
            <span className="white-color">NEXT STEP:</span>
          </div>
          <span className="total-earned text-shadow">CONNECT WALLET</span>
        </div>
      )
    }

    if (!grave.userInfo.hasDeposited) {
      if (grave.poolInfo.depositType === 1) {
        return (
          <div className="frank-card">
            <div className="small-text">
              <span className="white-color">NEXT STEP:</span>
            </div>
            <span className="total-earned text-shadow" style={{ fontSize: '20px' }}>
              DEPOSIT TOKEN
            </span>
          </div>
        )
      }
      if (grave.poolInfo.depositType === 2) {
        return (
          <div className="frank-card">
            <div className="small-text">
              <span className="white-color">NEXT STEP:</span>
            </div>
            <span className="total-earned text-shadow" style={{ fontSize: '20px' }}>
              DEPOSIT NFT
            </span>
          </div>
        )
      }
    }

    // if (!grave.userInfo.hasUnlocked) {
      return (
        <div className="frank-card">
          <div className="small-text">
            <span className="white-color">NEXT STEP:</span>
          </div>
          <span className="total-earned text-shadow">UNLOCK GRAVE</span>
        </div>
      )
    // }

    if (grave.userInfo.amount.lt(grave.poolInfo.minimumStake)) {
      return (
        <div className="frank-card">
          <div className="small-text">
            <span className="white-color">NEXT STEP:</span>
          </div>
          <span className="total-earned text-shadow" style={{ fontSize: '20px' }}>
            STAKE ZMBE
          </span>
        </div>
      )
    }

    if (grave.userInfo.burnedAmount.gte(grave.poolInfo.maxBurned)) {
      return (
        <div className="frank-card">
          <div className="small-text">
            <span className="white-color">NEXT STEP:</span>
          </div>
          <button className="btn btn-disabled" disabled type="button">
            MAX BURNED
          </button>
        </div>
      )
    }

    return (
      <div className="frank-card">
        <button onClick={handleBurn} className="btn" type="button">
          BURN ZMBE
        </button>
      </div>
    )
  }

  const renderTimer = () => {
    if (grave.userInfo.amount.eq(BIG_ZERO)) {
      return null
    }

    if (currentDate >= grave.userInfo.nftMintDate.toNumber() && grave.userInfo.amount.gte(grave.poolInfo.minimumStake)) {
      return (
        <Button className="btn w-100" onClick={onMintNft}>
          MINT NFT
        </Button>
      )
    }

    return (
      <div>
        <div className="small-text">
          <span className="white-color">NFT Timer</span>
        </div>
        <span className="total-earned text-shadow" style={{ fontSize: '20px' }}>
          {formatDuration(initialNftTime.toNumber())}
        </span>
      </div>
    )
  }

  const renderBurned = () => {
    if (currentDate >= grave.userInfo.nftMintDate.toNumber() && grave.userInfo.amount.gte(grave.poolInfo.minimumStake)) {
      return null
    }

    return (
      <div style={{ paddingLeft: '20px' }}>
        <div className="small-text">
          <span className="white-color">BURNED:</span>
        </div>
        <span className="total-earned text-shadow" style={{ fontSize: '20px' }}>
          {getFullDisplayBalance(grave.userInfo.burnedAmount)} ZMBE
        </span>
      </div>
    )
  }
  /* eslint-disable */
  return (
    <>
      {renderBurnButton()}
      <Flex className="frank-card">
        {renderTimer()}
        {renderBurned()}
      </Flex>
    </>
  )
}

export default BurnPanel

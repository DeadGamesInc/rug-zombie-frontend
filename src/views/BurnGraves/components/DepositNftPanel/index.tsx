import React from 'react'
import { useModal } from '@rug-zombie-libs/uikit'
import { useWeb3React } from "@web3-react/core";
import DepositNftModal from '../DepositNftModal'
import { useGetBurnGraveById, useGetNftById } from '../../../../state/hooks'

export interface DepositNftPanelProps {
  id: number
  updateResult: any
}

const DepositNftPanel: React.FC<DepositNftPanelProps> = ({ id, updateResult }) => {
  const grave = useGetBurnGraveById(id)
  const { account } = useWeb3React()
  const nft = useGetNftById(grave.depositNftId)

  const [handleDeposit] = useModal(<DepositNftModal id={id} updateResult={updateResult}/>)

  const renderButton = () => {
    if(!account) {
      return <span className="total-earned text-shadow">CONNECT WALLET</span>
    }

    if(!grave.userInfo.hasDeposited) {
      return (
        <button onClick={handleDeposit} className="btn w-100" type="button">
          DEPOSIT
        </button>
      )
    }

    return (
      <button className="btn btn-disabled w-100" type="button">
        DEPOSITED
      </button>
    )
  }

  return (
    <div className="frank-card">
      <div className="small-text">
        <span className="white-color">DEPOSIT 1 {nft.symbol} NFT</span>
      </div>
      <div className="space-between">{renderButton()}</div>
    </div>
  )
}

export default DepositNftPanel

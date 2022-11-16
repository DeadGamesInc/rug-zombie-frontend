import React, { useState, useEffect } from 'react'
import { useModal } from '@rug-zombie-libs/uikit'
import { useERC20 } from 'hooks/useContract'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import { getDrBurnensteinAddress } from 'utils/addressHelpers'
import { BIG_TEN } from 'utils/bigNumber'
import { useWeb3React } from "@web3-react/core";
import DepositTokenModal from './DepositTokenModal'
import { useGetBurnGraveById } from "../../../../state/hooks";

export interface DepositTokenProps {
  id: number
  updateResult: any
}

const DepositToken: React.FC<DepositTokenProps> = ({ id, updateResult }) => {
  const [isApproved, setIsApproved] = useState(false)

  const { toastDefault } = useToast()
  const { t } = useTranslation()

  const grave = useGetBurnGraveById(id)
  const { account } = useWeb3React()

  const tokenContract = useERC20(grave.poolInfo.depositAddress)

  useEffect(() => {
    tokenContract.methods
      .allowance(account, getDrBurnensteinAddress())
      .call()
      .then((res) => {
        if (parseInt(res.toString()) !== 0) {
          setIsApproved(true)
        } else {
          setIsApproved(false)
        }
      })
  }, [tokenContract, account, setIsApproved])

  const handleApprove = () => {
    if (account) {
      tokenContract.methods
        .approve(getDrBurnensteinAddress(), BIG_TEN.pow(18).toString())
        .send({ from: account })
        .then(() => {
          toastDefault(t(`Approved ${grave.depositToken.symbol}`))
          setIsApproved(true)
        })
    }
  }

  const [handleDeposit] = useModal(<DepositTokenModal id={id} updateResult={updateResult} />)

  const renderButton = () => {
    if (!account) {
      return <span className="total-earned text-shadow">Connect account</span>
    }

    if (!isApproved && !grave.userInfo.hasDeposited) {
      return (
        <button onClick={handleApprove} className="btn w-100" type="button">
          APPROVE
        </button>
      )
    }

    if (!grave.userInfo.hasDeposited) {
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
        <span className="white-color">DEPOSIT 1 {grave.depositToken.symbol}</span>
      </div>
      <div className="space-between">{renderButton()}</div>
    </div>
  )
}

export default DepositToken

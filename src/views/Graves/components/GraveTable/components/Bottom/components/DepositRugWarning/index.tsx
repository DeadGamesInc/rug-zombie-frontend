import React from 'react'
import { Modal } from '@rug-zombie-libs/uikit'
import { Token } from "../../../../../../../../config/constants/types";
import FlexRow from "../../../../../../../Mausoleum/components/FlexRow";
import {
  PrimaryButton,
  PrimaryButtonText,
  SecondaryButton,
  SecondaryButtonText
} from "../../../../../../../../components/Buttons";

interface DepositRugModalProps {
  onDepositRug: () => Promise<any>
  rug: Token
  onDismiss?: () => void
}

const DepositRugModal: React.FC<DepositRugModalProps> = ({ onDepositRug, onDismiss, rug }) => {
  return (
    <Modal style={{ width: '500px', maxWidth: '90vw' }} onDismiss={onDismiss} title="Deposit Rug">
      <p style={{ color: "white", fontWeight: '800', marginBottom: '5px' }}>
        DISCLAIMER
      </p>
      <br/>
      <p style={{ color: 'white', marginBottom: '5px' }}>
        You are about to deposit the {rug.symbol} token, any amount is acceptable to enter the grave.
      </p>
      <br/>
      <p style={{ color: 'white' }}>
        You do NOT get this token back.
      </p>
      <br/>
      <FlexRow justifyContent='space-around'>
        <PrimaryButton onClick={onDismiss}><PrimaryButtonText>Go back</PrimaryButtonText></PrimaryButton>
        <SecondaryButton onClick={onDepositRug}><SecondaryButtonText>
          I Understand</SecondaryButtonText></SecondaryButton>
      </FlexRow>
    </Modal>
  )
}

export default DepositRugModal

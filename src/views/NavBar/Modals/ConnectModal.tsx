import React from 'react';
import { useWalletModal } from '@rug-zombie-libs/uikit';
import useAuth from 'hooks/useAuth';
import * as St from 'style/Library/PopUpModal';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  message?: string;
}

const ConnectModal: React.FC<Props> = ({ setShowModal, message }) => {
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);

  const handleYesClick = () => {
    setShowModal(false);
    onPresentConnectModal();
  };

  return (
    <St.ModalDiv>
      <St.Text>{message || 'Would you like to connect your wallet?'}</St.Text>
      <St.ButtonDiv>
        <St.Button onClick={handleYesClick}>{message ? 'Connect' : 'Yes'}</St.Button>
        <St.Button onClick={() => setShowModal(false)}>{message ? 'Cancel' : 'No'}</St.Button>
      </St.ButtonDiv>
    </St.ModalDiv>
  );
};

export default ConnectModal;

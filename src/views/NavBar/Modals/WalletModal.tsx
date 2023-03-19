import React, { useContext } from 'react';
import useAuth from 'hooks/useAuth';
import xIcon from 'images/icons/x-icon-lg.svg';
import externalLinkIcon from 'images/icons/ExternalLinkIcon.svg';
import copyIcon from 'images/icons/CopyIcon.svg';
import * as St from './WalletModal.styled';
import { getBscScanLink } from "../../../utils";

interface Props {
  account: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const WalletModal: React.FC<Props> = ({ account, setShowModal }) => {
  const { logout } = useAuth();

  const explorerUrlWithAddress = getBscScanLink(account, 'address');

  const HandleLogoutClick = () => {
    setShowModal(false);
    logout();
  };

  return (
    <St.ModalContainer>
      <St.TopDiv>
        <St.Text>Your Wallet</St.Text>
        <St.Xbutton src={xIcon} alt="Close Popup" onClick={() => setShowModal(false)} />
      </St.TopDiv>
      <St.BottomDiv>
        <St.LinkDiv>
          <St.LinkItemDiv href={explorerUrlWithAddress} target="_blank">
            <St.KindaOfALink>BscScan</St.KindaOfALink>
            <St.LinkIcon src={externalLinkIcon} />
          </St.LinkItemDiv>
          <St.LinkItemDiv onClick={() => navigator.clipboard.writeText(account)}>
            <St.KindaOfALink>Copy Address</St.KindaOfALink>
            <St.CopyIcon src={copyIcon} />
          </St.LinkItemDiv>
        </St.LinkDiv>
        <St.Button onClick={HandleLogoutClick}>Logout</St.Button>
      </St.BottomDiv>
    </St.ModalContainer>
  );
};

export default WalletModal;

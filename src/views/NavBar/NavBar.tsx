import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import useWindowWidth from 'hooks/useWindowWidth';
import useWindowHeight from 'hooks/useWindowHeight';
import logo from 'images/Logo.svg';
import Hamburger from 'hamburger-react';
import basiczombie from 'images/BasicZombie.gif'
import { motion } from "framer-motion";
import zombiehead from "images/menu/ZombieHead.svg";
import navContent, { LinkType } from './navContent';
import MobileNavDropdown from './MobileNavDropdown/MobileNavDropdown';
import ConnectModal from './Modals/ConnectModal';
import WalletModal from './Modals/WalletModal';
import * as St from './NavBar.styled';
import { Buttons, ProfileImage, Text, TokenButton } from "../../components/TopMenu/styles";
import { routes } from "../../routes";
import { useGetZombiePriceUsd } from "../../state/hooks";
import UnlockButton from "../../components/UnlockButton";

const NavBar: React.FC = () => {
  const history = useHistory();
  const zombiePrice = useGetZombiePriceUsd()
  const windowWidth = useWindowWidth();
  const windowHeight = useWindowHeight();
  const { account } = useWeb3React();

  const [showMenu, setShowMenu] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const mobileNavSwitchWidth = 1170;
  const navSwitchHeight = 500;

  return (
    <St.Navbar>
      <St.NavbarContent>
        {windowWidth < mobileNavSwitchWidth && (
          <>
            <Hamburger
              color="#6b7682"
              direction="right"
              size={30}
              toggled={showMenu}
              toggle={setShowMenu}
            />
            <MobileNavDropdown
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              navSwitchHeight={navSwitchHeight}
              showWalletModal={showWalletModal}
              setShowWalletModal={setShowWalletModal}
            />
          </>
        )}

        <Link to="/">
          <St.Logo src={logo} alt="RugZombie Logo"/>
        </Link>

        {windowWidth > mobileNavSwitchWidth && (
          <St.Links>
            {navContent.map((navItem) =>
              <motion.p
                initial={{ scale: 1, color: '#6b7682' }}
                whileHover={{ color: '#b8c00d' }}
                whileTap={{ scale: 0.9 }}
              >
                {navItem.type === LinkType.External ? (
                  <St.MenuLink to={{ pathname: navItem.href }} target="_blank" key={navItem.label}>
                    {navItem.label}
                  </St.MenuLink>
                ) : (
                  <St.MenuLink to={navItem.href} key={navItem.label}>
                    {navItem.label}
                  </St.MenuLink>
                )}
              </motion.p>
            )}
          </St.Links>
        )}

        {windowWidth > mobileNavSwitchWidth || windowHeight < navSwitchHeight ? (
          <Buttons>
            <TokenButton
              style={{ flexDirection: 'row' }}
              onClick={() => {
                window.location.href = 'https://dex.guru/token/0x50ba8bf9e34f0f83f96a340387d1d3888ba4b3b5-bsc'
              }}
            >
              <img src={zombiehead} alt="Zombie Icon" style={{ height: '70%', paddingRight: '20px' }}/>
              <Text style={{ fontWeight: 'bold' }}>${zombiePrice.toPrecision(2)}</Text>
            </TokenButton>
            <UnlockButton/>
            <ProfileImage onClick={() => history.push(routes.PROFILE)} src={basiczombie} alt="Profile Image"/>
          </Buttons>
        ) : (
          <ProfileImage onClick={() => history.push(routes.PROFILE)} src={basiczombie} alt="Profile Image"/>
        )}
      </St.NavbarContent>
      {showConnectModal && <ConnectModal setShowModal={setShowConnectModal}/>}
      {showWalletModal && <WalletModal account={account} setShowModal={setShowWalletModal}/>}
    </St.Navbar>
  );
};

export default NavBar;

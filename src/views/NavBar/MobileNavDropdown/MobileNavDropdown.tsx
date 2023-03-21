import React from 'react';
import Hamburger from 'hamburger-react';
import useWindowHeight from 'hooks/useWindowHeight';
import logo from 'images/Logo.svg';
import discord from 'images/Discord_Logo.svg';
import twitter from 'images/Twitter_Logo_3.svg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import navContent, { LinkType } from '../navContent';
import * as St from './MobileNavDropdown.styled';

interface Props {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  navSwitchHeight: number;
  showWalletModal: boolean;
  setShowWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavDropdown: React.FC<Props> = ({
                                              showMenu,
                                              setShowMenu,
                                              navSwitchHeight,
                                              showWalletModal,
                                              setShowWalletModal,
                                            }) => {
  const windowHeight = useWindowHeight();

  return (
    <St.NavContainer showMenu={showMenu}>
      <St.HamburgerContainer>
        <Hamburger
          color="#6b7682"
          direction="right"
          size={30}
          toggled={showMenu}
          toggle={setShowMenu}
        />
      </St.HamburgerContainer>
      <St.ContentContainer>
        <St.MainContent>
          <Link to="/">
            <St.Logo src={logo} alt="Rugzombie Logo"/>
          </Link>

          {/* <St.Search placeholder="Search" /> */}

          <St.NavLinks>
            {navContent.map((navItem) =>
              navItem.type === LinkType.External ? (
                <St.DropdownItem
                  to={{ pathname: navItem.href }}
                  target="_blank"
                  key={navItem.label}
                  onClick={() => setShowMenu(false)}
                >
                  <St.MenuText>{navItem.label}</St.MenuText>
                </St.DropdownItem>
              ) : (
                <motion.p
                  initial={{ scale: 1, color: '#6b7682' }}
                  whileHover={{ color: '#b8c00d' }}
                  whileTap={{ scale: 0.9, color: '#b8c00d' }}
                >
                  <St.DropdownItem
                    to={navItem.href}
                    key={navItem.label}
                    onClick={() => setShowMenu(false)}
                  >
                    <St.MenuText>{navItem.label}</St.MenuText>
                  </St.DropdownItem>
                </motion.p>
              ),
            )}
          </St.NavLinks>
        </St.MainContent>

        <St.BottomContent>
          {windowHeight > navSwitchHeight && (
            <>
              <St.MobileUnlockButton
                showWalletModal={showWalletModal}
                setShowWalletModal={setShowWalletModal}
              />
            </>
          )}

          <St.SocialIcons>
            <a href="https://discord.gg/fUb6ezk6" target="_blank" rel="noreferrer">
              <St.SocialIcon src={discord}/>
            </a>
            <a href="https://twitter.com/OblivionNft" target="_blank" rel="noreferrer">
              <St.SocialIcon src={twitter} alt="Twitter Icon"/>
            </a>
          </St.SocialIcons>
        </St.BottomContent>
      </St.ContentContainer>
    </St.NavContainer>
  );
};

export default MobileNavDropdown;

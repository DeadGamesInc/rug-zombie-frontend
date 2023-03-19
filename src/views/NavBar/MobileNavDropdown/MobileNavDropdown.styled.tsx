import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Icons from 'style/Library/Icons';
import UnlockButton from "../../../components/UnlockButton";

type MenuOpen = { showMenu: boolean };

export const NavContainer = styled.div<MenuOpen>`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100vh;
  width: 325px;

  display: flex;
  flex-direction: column;
  gap: 1em;

  background-color: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  padding: 1em 3em;

  transform: ${(props) => (props.showMenu ? 'translateX(0)' : 'translateX(-100vw)')};
  transition-duration: 400ms;
  transition-delay: 250ms;

  @media (max-width: 350px) {
    width: 100vw;
  }
`;

export const HamburgerContainer = styled.div`
  position: fixed;
  top: 1em;
  left: 1em;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 70px;
  padding-top: 0.5em;

  @media (max-height: 500px) {
    /* margin-bottom: 50px; */
    padding-top: 2.5em;
    justify-content: space-evenly;
  }

  @media (max-height: 500px) and (max-width: 700px) {
    padding-top: 3em;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 4em;

  @media (max-width: 350px), (max-height: 500px) {
    gap: 2em;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;

  @media (max-width: 350px) {
    gap: 1.5em;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  @media (max-width: 350px), (max-height: 500px) {
    gap: 1em;
  }
`;

export const Logo = styled.img`
  height: 20px;
  margin-top: 6px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 350px) {
    height: 1.875em;
  }

  @media (max-height: 500px) {
    height: 1.5em;
  }
`;

export const DropdownItem = styled(Link)`
  :hover {
    cursor: pointer;
    color: var(--color-blue);
  }
`;

export const MenuText = styled.div`
  color: #6b7682;
  font-size: 1.125rem;

  :hover {
    color: var(--color-blue);
    cursor: pointer;
  }

  @media (max-width: 350px), (max-height: 500px) {
    font-size: 1rem;
  }
`;

export const MobileUnlockButton = styled(UnlockButton)`
  margin: 0;

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5em;

  @media (max-height: 500px) {
    margin-top: 0.5em;
  }

  @media (max-height: 500px) and (max-width: 700px) {
    margin-top: 1.5em;
  }
`;

export const SocialIcon = styled(Icons.SocialIcon)``;

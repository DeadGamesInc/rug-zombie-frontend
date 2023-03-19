import styled from 'styled-components';
import { Main } from 'style/Library/Buttons';
import { Link } from "react-router-dom";
import { SecondaryButton } from "../../components/Buttons";

export const Navbar = styled.nav`
  width: 100%;
  background-color: black;
  z-index: 0;
`;

export const NavbarContent = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  padding: 1em;
`;

export const LeftSideDiv = styled.div`
  display: flex;
  gap: 2em;
`;

export const Logo = styled.img`
  height: 30px;
  margin-left: 0.5em;

  @media (max-width: 950px) {
    height: 24px;
    margin-right: 0.5em;
  }

  :hover {
    cursor: pointer;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MenuLink = styled(Link)`
  margin: 0 0.5em;
  font: normal normal normal 14px/30px Poppins;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 1615px) {
    font-size: 1rem;
  }

  @media (max-width: 1050px) {
    margin: 0 0.25em;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 1em;
  height: 50px;

  @media (max-height: 500px) and (max-width: 700px) {
    height: 40px;
  }
`;

export const NavButton = styled(Main)`
  font-size: 1.125rem;
  margin: 0;
  padding: 0.5em 1em;

  @media (max-width: 1050px) {
    font-size: 1rem;
  }

  @media (max-height: 500px) and (max-width: 700px) {
    font-size: 0.875rem;
    min-width: 140px;
  }
`;

export const ProfileImage = styled.img`
  height: 100%;
  max-height: 50px;
  border-radius: 20px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 950px) and (min-height: 500px) {
    max-height: 41px;
    border-radius: 15px;
  }

  @media (max-height: 500px) and (max-width: 700px) {
    max-height: 41px;
    border-radius: 15px;
  }
`;

export const TokenButton = styled(SecondaryButton)`
  padding: 0 25px 0 25px;
  margin: 0 20px 0 20px;
  &:hover {
    cursor: pointer;
  }
`
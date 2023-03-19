import styled from 'styled-components';
import * as Modal from 'style/Library/PopUpModal';

export const ModalContainer = styled(Modal.ModalDiv)`
  padding: 0;

  @media (max-width: 700px) {
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 350px) {
    min-width: 265px;
  }
`;

export const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5em;
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  --spacing: 2em;
  padding: var(--spacing) calc(var(--spacing) / 2);
  gap: var(--spacing);

  border-top: 2px solid var(--color-pink);
`;

export const LinkDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 1em;
`;

export const Text = styled(Modal.Text)`
  font-size: 1.375rem;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 1.125rem;
  }
`;

export const LinkItemDiv = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5em;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const KindaOfALink = styled.span`
  color: var(--color-text-offset);
  text-decoration: inherit;
`;

export const LinkIcon = styled.img`
  width: 1.25em;
`;

export const CopyIcon = styled.img`
  width: 1.125em;
`;

export const Button = styled(Modal.Button)`
  min-width: 150px;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const Xbutton = styled.img`
  position: fixed;
  top: 1em;
  right: 1em;
  cursor: pointer;
`;

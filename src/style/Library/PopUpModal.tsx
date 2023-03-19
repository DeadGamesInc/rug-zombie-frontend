import styled from 'styled-components';
import * as Buttons from 'style/Library/Buttons';

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-bg-offset);
  border: 3px solid var(--color-pink);
  border-radius: 20px;
  padding: 1.75em 1.5em;
  z-index: 69;
  min-width: 300px;
`;

export const Text = styled.span`
  color: var(--color-white);
  font-size: 1.25rem;
  font-weight: 600;
  max-width: 30ch;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 0.25em;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled(Buttons.Main)`
  margin: 0;
  min-width: 100px;
`;

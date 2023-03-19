import styled from 'styled-components';

export const Input = styled.input`
  max-width: 300px;
  height: 50px;
  background: var(--color-bg-offset);
  border: 2px solid var(--color-border);
  border-radius: 15px;
  padding: 0 1.25em;
  margin: 0.5em 0 1.25em 0;
  font-size: 0.875em;
  color: var(--color-white);

  ::placeholder {
    color: var(--color-text-offset);
  }
`;

export const TextArea = styled.textarea`
  max-width: 300px;
  height: 100px;
  background: var(--color-bg-dark);
  border-radius: 15px;
  padding: 0 1.25em;
  border: 2px solid var(--color-border);
  font: normal normal normal 14px/30px Poppins;
  color: var(--color-white);
  padding: 0.5em 1.125em;
  margin: 0.5em 0 1.25em 0;

  ::placeholder {
    color: var(--color-text-offset);
  }
`;

export const Label = styled.label`
  color: var(--color-text-offset);
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0;
  margin: 0.25em 0.5em;
`;

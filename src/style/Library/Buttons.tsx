import styled from 'styled-components';

export const Main = styled.button`
  background-color: transparent;
  color: white;
  border: 3px solid #AE32AA;
  border-radius: 20px;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.55em 1em;
  margin: 0.25em;

  :hover {
    background-color: #AE32AA;
    cursor: pointer;
  }
`;

export const Small = styled(Main)`
  border-radius: 15px;
  font-size: 1.125rem;
  padding: 0.25em 0.875em;
`;

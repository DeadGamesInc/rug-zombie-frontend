import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1320px;
  min-height: 200px;
  margin-bottom: 3em;

  @media (min-width: 1000px) {
    min-height: 500px;
  }
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1em;
  margin-top: 30px;
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;
`;

export const H1 = styled.span`
  font-size: 2.25rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: var(--color-text-offset);
  margin: 0.5em;
`;

export const TextDiv = styled.span`
  max-width: 45ch;
  font-size: 1.25rem;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: var(--color-text-offset);
  text-align: center;
  margin: 0.5em;
`;

import React from 'react'
import styled from 'styled-components'
import { ParentProps } from "../config/types";

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const AppContainer: React.FC<ParentProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default AppContainer

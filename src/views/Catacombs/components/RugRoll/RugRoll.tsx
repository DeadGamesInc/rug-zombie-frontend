// import { useTranslation } from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'
import { useMatchBreakpoints } from '@rug-zombie-libs/uikit'
import { Flex } from '@catacombs-libs/uikit'
import Menu from '../../../../components/Catacombs/Menu'
import Page from '../../../../components/layout/Page'
import RugRollCard from './components/RugRollCard'
import CatacombsMain1920x1080 from "../../../../components/Icons/CatacombsMain1920x1080";
import CatacombsMain414x720 from "../../../../components/Icons/CatacombsMain414x720";

const StyledDiv = styled.div`
  text-align: center;
  position: relative;
  color: white;
  height: 100%;
  width: 100%;
`

const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 15%;
  width: 25%;
  min-width: 300px;
  height: 50%;
  @media (max-width: 479px) {
    height: 40%;
    top: 2%;
    width: 90%;
    left: 5%;
  }
`

const RugRoll: React.FC = () => {
  const { isLg, isXl } = useMatchBreakpoints()
  const isDesktop = isLg || isXl

  return (
    <Menu>
      <StyledDiv>
        {isDesktop ? (
          <CatacombsMain1920x1080 />
        ) : (
          <CatacombsMain414x720 />
        )}
        <Flex justifyContent="center">
          <Container>
            <Page>
              <RugRollCard />
            </Page>
          </Container>
        </Flex>
      </StyledDiv>
    </Menu>
  )
}

export default RugRoll

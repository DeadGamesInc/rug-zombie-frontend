import React, { useState } from 'react'
import styled from 'styled-components'
import Top from './components/Top'
import Bottom from './components/Bottom'
import { WhalePool } from '../../../../state/types'
import { WhalePoolTable as Table } from "../../../../components/TableFactory";

const DetailsCard = styled.div<{ open: boolean }>`
  width: 100%;
  min-width: 260px;
  min-height: 130px;
  background-color: #151e21;
  border-radius: 10px;
  border: ${(props) => (props.open ? '2px solid red' : '2px solid #151E21')};
  padding: 20px;
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 1280px) {
    min-width: 668px;
  }
`

const Shadow = styled.div`
  width: 100%;
  height: 40px;
  background: #000000 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 0.5;
  filter: blur(10px);
  position: relative;
  bottom: 35px;
  margin-bottom: -15px;
  z-index: -1;
`

interface WhalePoolCardProps {
  whalePool: WhalePool
}

const WhalePoolCard: React.FC<WhalePoolCardProps> = ({ whalePool }) => {
  return <Table Top={Top} bottom={<Bottom whalePool={whalePool} />} borderColor='red' target={whalePool} openOnLoad />
}

export default WhalePoolCard

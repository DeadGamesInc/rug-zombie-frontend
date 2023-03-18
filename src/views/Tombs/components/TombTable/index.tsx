/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Tomb } from '../../../../state/types'
import { tableStyles } from "../../../../components/Style.styled";
import { TombTable as Table } from "../../../../components/TableFactory";
import Top from "./components/Top";
import Bottom from "./components/Bottom";

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

interface TombProps {
  tomb: Tomb
}

const TombTable: React.FC<TombProps> = ({ tomb }) => {

  return <Table Top={Top} bottom={<Bottom tomb={tomb} />} borderColor='#4B7BDC' target={tomb}/>
}

export default TombTable

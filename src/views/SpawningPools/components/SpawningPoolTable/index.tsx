/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import styled from 'styled-components'
import Top from './components/Top'
import Bottom from './components/Bottom'
import { SpawningPool } from '../../../../state/types'
import { tableStyles } from "../../../../components/Style.styled";

const SpawningPoolCard = styled.div<{ open: boolean }>`
  border: ${(props) => (props.open ? '2px solid #30C00D' : '2px solid #151E21')};
  ${tableStyles};
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

interface SpawningPoolProps {
  spawningPool: SpawningPool
}

const SpawningPoolTable: React.FC<SpawningPoolProps> = ({ spawningPool }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SpawningPoolCard open={open}>
        <Top spawningPool={spawningPool} open={open} setOpen={setOpen} />
        {open ? <Bottom spawningPool={spawningPool} /> : null}
      </SpawningPoolCard>
      <Shadow />
    </>
  )
}

export default SpawningPoolTable

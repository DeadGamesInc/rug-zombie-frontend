import React from 'react'
import styled from 'styled-components'

interface ProgressLineProps {
    active: boolean
}

const ActiveLine = styled.div`
  width: 100%;
  height: 2px;
  background: #00fbff 0% 0% no-repeat padding-box;
  position: relative;
  bottom: 1px;
`

const InactiveLine = styled.div`
  width: 100%;
  height: 2px;
  background: #0d1417 0% 0% no-repeat padding-box;
  position: relative;
  bottom: 1px;
`

const BracketLine: React.FC<ProgressLineProps> = ({ active }) => {
    return active ? <ActiveLine /> : <InactiveLine />
}

export default BracketLine

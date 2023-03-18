/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from "framer-motion";
import Top from './components/Top'
import Bottom from './components/Bottom'
import { Grave } from '../../../../state/types'
import { tableStyles } from "../../../../components/Style.styled";

const GraveCard = styled.div<{ open: boolean }>`
  border: ${(props) => (props.open ? '2px solid #AE32AA' : '2px solid #151E21')};
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

interface GraveProps {
  grave: Grave
}

const GraveTable: React.FC<GraveProps> = ({ grave }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <GraveCard open={open}>
        <Top grave={grave} open={open} setOpen={setOpen}/>
        <AnimatePresence>
          {open ? <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
          ><Bottom grave={grave}/></motion.div> : null}
        </AnimatePresence>
      </GraveCard>
      <Shadow/>
    </>
  )
}

export default GraveTable

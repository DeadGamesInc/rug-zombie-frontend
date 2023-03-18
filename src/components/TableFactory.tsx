/* eslint-disable no-param-reassign */
import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from "framer-motion";
import { tableStyles } from "./Style.styled";
import { Grave, SpawningPool, Tomb, WhalePool } from "../state/types";

const TableCard = styled(motion.div)<{ open: boolean, color: string }>`
  border: ${(props) => (props.open ? `2px solid ${props.color}` : '2px solid #151E21')};
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

const TransparentButton = styled.button`
  background: none;
  border: none;
`;

export type TableTop<T> = React.FC<{ open: boolean, target: T }>;

interface TableProps<T> {
  Top: TableTop<T>;
  bottom: ReactNode;
  borderColor: string;
  target: T;
  openOnLoad?: boolean;
}


// eslint-disable-next-line
const TableFactory = <T extends any>() => {
  const Instance: React.FC<TableProps<T>> = ({ borderColor, Top, bottom, target, openOnLoad }) => {
    const [open, setOpen] = useState(openOnLoad)
    return (
      <>
        <TableCard open={open} color={borderColor}>
          <TransparentButton type='button' onClick={() => setOpen(!open)}>
            <Top open={open} target={target} />
          </TransparentButton>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
              >
                {bottom}
              </motion.div>
            )}
          </AnimatePresence>
        </TableCard>
        <Shadow/>
      </>
    )
  }
  return Instance;
}

export const GraveTable = TableFactory<Grave>()
export const TombTable = TableFactory<Tomb>()
export const SpawningPoolTable = TableFactory<SpawningPool>()
export const WhalePoolTable = TableFactory<WhalePool>()

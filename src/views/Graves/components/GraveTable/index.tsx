/* eslint-disable no-param-reassign */
import React from 'react'
import Top from './components/Top'
import { Grave } from '../../../../state/types'
import Bottom from "./components/Bottom";
import { GraveTable as Table } from "../../../../components/TableFactory";

interface GraveProps {
  grave: Grave
}

const GraveTable: React.FC<GraveProps> = ({ grave }) => {
  return <Table Top={Top} bottom={<Bottom grave={grave}/>} borderColor='#AE32AA' target={grave}/>
}

export default GraveTable

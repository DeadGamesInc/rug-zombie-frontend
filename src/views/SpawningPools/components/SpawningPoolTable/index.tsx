import React from 'react'
import { SpawningPool } from '../../../../state/types'
import { SpawningPoolTable as Table } from "../../../../components/TableFactory";
import Top from "./components/Top";
import Bottom from "./components/Bottom";

interface SpawningPoolProps {
  spawningPool: SpawningPool
}

const SpawningPoolTable: React.FC<SpawningPoolProps> = ({ spawningPool }) => {
  return <Table Top={Top} bottom={<Bottom spawningPool={spawningPool}/>} borderColor="#30C00D" target={spawningPool}/>
}

export default SpawningPoolTable

import { BurnGraveConfig } from "../../state/types";
import tokens from "./tokens";

const burnGraves: BurnGraveConfig[] = [
  // {
  //   pid: {
  //     56: 3,
  //     97: 0,
  //   },
  //   name: 'Bitconnect Trevon',
  //   mintingTime: '30 days',
  //   burnReduction: '1 Hour',
  //   nftId: 75,
  //   isNew: true,
  //   isClosed: false,
  //   geckoId: 'rugzombie',
  //   depositToken: tokens.zmbe,
  //   depositNftId: 0,
  //   stakingToken: tokens.zmbe,
  //   endDate: 1641700800,
  //
  // },
  // {
  //   pid: {
  //     56: 4,
  //     97: 0,
  //   },
  //   name: 'Bitconnect Matos',
  //   mintingTime: '30 days',
  //   burnReduction: '1 Hour',
  //   nftId: 76,
  //   isNew: true,
  //   isClosed: false,
  //   geckoId: 'rugzombie',
  //   depositToken: tokens.zmbe,
  //   depositNftId: 0,
  //   stakingToken: tokens.zmbe,
  //   endDate: 1641700800,
  // },
  {
    pid: {
      56: 0,
      97: 3,
    },
    name: 'The Blackswan',
    mintingTime: '30 days',
    nftId: 115,
    isNew: true,
    isClosed: false,
    geckoId: 'rugzombie',
    depositToken: tokens.zmbe,
    depositNftId: 0,
    stakingToken: tokens.zmbe,
    endDate: 1671206400,
    isBurnGrave: true
  }
]

export default burnGraves

// eslint-disable-next-line import/prefer-default-export
import { Dex } from './types'
import tokens from './tokens'
import { GraveConfig } from "../../state/types";

const graves: GraveConfig[] = [
  {
    pid: {
      56: 22,
      97: 0,
    },
    name: 'RugZombie Common',
    nftId: 6,
    rug: tokens.zmbe,
    rugDex: Dex.PCS_V2,
    isFeatured: true,
    announcementIds: [84],
  },
  {
    pid: {
      56: 0,
      97: 0,
    },
    name: 'RugZombie Common (Legacy)',
    nftId: 6,
    rug: tokens.none,
    rugDex: Dex.PCS_V2,
    liquidityDetails: '',
    isClosed: true,
    isRetired: true,
    announcementIds: [84],
  },
  {
    pid: {
      56: 23,
      97: 0,
    },
    name: 'RugZombie Uncommon',
    nftId: 19,
    rug: tokens.basicZmbe,
    liquidityDetails: 'None! You must earn the Basic Zombie NFT from the RugZombie Common Grave to gain access.',
    depositNftId: 6,
    nftConverterPid: 0,
    graveNftToken: '0x22e42D9425b55FD2262bfF72a316bb052DDb2a77',
    isFeatured: true,
    announcementIds: [84],
  },
  {
    pid: {
      56: 24,
      97: 0,
    },
    name: 'RugZombie Rare',
    nftId: 29,
    rug: tokens.horde,
    liquidityDetails: 'None! You must earn the Zombie Horde NFT from the RugZombie Uncommon Grave to gain access.',
    depositNftId: 19,
    nftConverterPid: 1,
    graveNftToken: '0xE30043524ADb329169b11eDfe833a9beDd4D2A11',
    isFeatured: true,
    announcementIds: [84],
  },
  {
    pid: {
      56: 27,
      97: 0,
    },
    name: 'Whale Pass Rare',
    nftId: 39,
    rug: tokens.basicZmbe,
    liquidityDetails: 'None! You must earn the Basic Zombie NFT from the RugZombie Common Grave to gain access.',
    depositNftId: 6,
    nftConverterPid: 0,
    graveNftToken: '0x22e42D9425b55FD2262bfF72a316bb052DDb2a77',
    endDate: 1648051200,
    announcementIds: [77],
  },
  {
    pid: {
      56: 68,
      97: 1,
    },
    name: 'Whale Pass Rare',
    nftId: 117,
    rug: tokens.basicZmbe,
    announcementIds: [],
    endDate: 1689044400,
    depositNftId: 6,
    nftConverterPid: 0,
    graveNftToken: '0x22e42D9425b55FD2262bfF72a316bb052DDb2a77',
    isNew: true,
    liquidityDetails: 'None! You must earn the Basic Zombie NFT from the RugZombie Common Grave to gain access.',
  },
  {
    pid: {
      56: 69,
      97: 1,
    },
    name: 'USD Coin Rare',
    nftId: 118,
    rug: tokens.usdc,
    announcementIds: [],
    rugDex: Dex.PCS_V2,
  },
  {
    pid: {
      56: 66,
      97: 1,
    },
    name: 'Moonpot Rare',
    nftId: 116,
    rug: tokens.pots,
    announcementIds: [],
    rugDex: Dex.PCS_V2,
  },
  {
    pid: {
      56: 67,
      97: 1,
    },
    name: 'zMoonpot Rare',
    nftId: 116,
    rug: tokens.zpots,
    announcementIds: [],
    liquidityDetails: 'zPOTS token can be found in the Catacombs (RugMarket / RugRoll), you can also ask a community member in the RugZombie telegram.',
  },
  {
    pid: {
      56: 63,
      97: 1,
    },
    name: 'Nomad Bridge Legendary',
    nftId: 111,
    rug: tokens.znomad,
    announcementIds: [140],
    liquidityDetails: 'zNOMAD token can be found in the Catacombs (RugMarket / RugRoll), you can also ask a community member in the  RugZombie telegram.',
  },
  {
    pid: {
      56: 64,
      97: 1,
    },
    name: 'Celsius Network Rare',
    nftId: 112,
    rug: tokens.zcel,
    announcementIds: [141],
    liquidityDetails: 'zCEL token can be found in the Catacombs (RugMarket / RugRoll), you can also ask a community member in the  RugZombie telegram.',
  },
  {
    pid: {
      56: 62,
      97: 1,
    },
    name: 'Harmony One Rare',
    nftId: 108,
    rug: tokens.one,
    rugDex: Dex.PCS_V2,
    announcementIds: [],
  },
  {
    pid: {
      56: 61,
      97: 1,
    },
    name: 'BAYC Rare',
    nftId: 104,
    rug: tokens.zape,
    liquidityDetails: 'ZAPE token can be found in the Catacombs (RugMarket / RugRoll), you can also ask a community member in the  RugZombie telegram.',
    announcementIds: [137],
  },
  {
    pid: {
      56: 60,
      97: 1,
    },
    name: 'TerraUSD Legendary',
    nftId: 106,
    rug: tokens.ust,
    rugDex: Dex.PCS_V2,
    announcementIds: [],
    endDate: 1665716400
  },
  {
    pid: {
      56: 59,
      97: 1,
    },
    name: 'Luna Legendary',
    nftId: 105,
    rug: tokens.luna,
    rugDex: Dex.PCS_V2,
    announcementIds: [],
    endDate: 1665716400
  },
  {
    pid: {
      56: 58,
      97: 1,
    },
    name: 'Axie Infinity Rare',
    nftId: 101,
    rug: tokens.axs,
    rugDex: Dex.PCS_V2,
    announcementIds: [134],
  },
  {
    pid: {
      56: 57,
      97: 1,
    },
    name: 'Unlegendary Chompers',
    nftId: 99,
    rug: tokens.basicZmbe,
    liquidityDetails: 'None! You must earn the Basic Zombie NFT from the RugZombie Common Grave to gain access.',
    depositNftId: 6,
    nftConverterPid: 0,
    isRetired: true,
    announcementIds: [133],
  },
  {
    pid: {
      56: 56,
      97: 1,
    },
    name: 'Disappointing DragonFarm',
    nftId: 98,
    rug: tokens.basicZmbe,
    liquidityDetails: 'None! You must earn the Basic Zombie NFT from the RugZombie Common Grave to gain access.',
    depositNftId: 6,
    nftConverterPid: 0,
    isRetired: true,
    announcementIds: [133],
  },
  {
    pid: {
      56: 55,
      97: 1,
    },
    name: 'Salvation Finance Common',
    nftId: 97,
    rug: tokens.slvn,
    rugDex: Dex.PCS_V2,
    announcementIds: [132],
  },
  {
    pid: {
      56: 52,
      97: 1,
    },
    name: 'AtmosSoft Legendary',
    nftId: 91,
    depositNftId: 34,
    rug: tokens.babe,
    nftConverterPid: 5,
    endDate: 1651982400,
    announcementIds: [69],
  },
  {
    pid: {
      56: 53,
      97: 1,
    },
    name: 'Monkey Coin Legendary',
    nftId: 92,
    rug: tokens.mutant,
    depositNftId: 33,
    nftConverterPid: 7,
    endDate: 1651982400,
    announcementIds: [67],
  },
  {
    pid: {
      56: 54,
      97: 1,
    },
    name: 'Squid Stake Legendary',
    nftId: 93,
    rug: tokens.cthuhlu,
    depositNftId: 64,
    nftConverterPid: 6,
    endDate: 1651982400,
    announcementIds: [99],
  },
  {
    pid: {
      56: 48,
      97: 1,
    },
    name: 'Atlantis Token Rare',
    nftId: 90,
    rug: tokens.atlas,
    rugDex: Dex.PCS_V2,
    announcementIds: [129],
  },
  {
    pid: {
      56: 47,
      97: 1,
    },
    name: 'CxCoin Rare',
    nftId: 89,
    rug: tokens.cx,
    rugDex: Dex.PCS_V2,
    announcementIds: [127],
  },
  {
    pid: {
      56: 46,
      97: 1,
    },
    name: 'CxCoin Uncommon',
    nftId: 88,
    rug: tokens.cx,
    rugDex: Dex.PCS_V2,
    announcementIds: [127],
  },
  {
    pid: {
      56: 45,
      97: 1,
    },
    name: 'TreasureKey Rare',
    nftId: 84,
    rug: tokens.pirate,
    rugDex: Dex.PCS_V2,
    announcementIds: [124],
  },
  {
    pid: {
      56: 44,
      97: 1,
    },
    name: 'zRonin Gamez Legendary',
    nftId: 80,
    rug: tokens.zroningmz,
    liquidityDetails:
      'None! RONINGMZ holders can claim ZRONINGMZ on the homepage Victim Pools card. ZRONINGMZ can also be found in the Blackmarket and RugRoll in the Catacombs!',
    isRetired: true,
    announcementIds: [119],
  },
  {
    pid: {
      56: 43,
      97: 1,
    },
    name: 'Ronin Gamez Legendary',
    nftId: 80,
    rug: tokens.roningmz,
    liquidityDetails:
      'None! Trading on the Ronin contract has been halted, a new grave will be available for new stakers shortly.',
    isRetired: true,
    announcementIds: [117],
  },
  {
    name: 'Iron Finance Legendary',
    pid: {
      56: 40,
      97: 1,
    },
    nftId: 72,
    rug: tokens.iron,
    endDate: 1647017999,
    announcementIds: [108, 56],
  },
  {
    pid: {
      56: 42,
      97: 1,
    },
    name: 'Pancake Hunny Rare',
    nftId: 79,
    rug: tokens.hunny,
    rugDex: Dex.PCS_V2,
    announcementIds: [115, 108],
  },
  {
    pid: {
      56: 41,
      97: 1,
    },
    name: 'Minereum BSC Common',
    nftId: 77,
    rug: tokens.zmneb,
    liquidityDetails:
      'None! zMinereum BSC can be claimed by MNEB holders on the home page or rolled for in the Catacombs! ',
    announcementIds: [85],
  },
  {
    pid: {
      56: 39,
      97: 1,
    },
    name: 'Squid Game Rare',
    nftId: 67,
    rug: tokens.squidgame,
    rugDex: Dex.PCS_V2,
    additionalDetails: [
      {
        name: 'SPONSORED BY L1GHT L1ST',
        url: 'https://l1ghtl1st.io/',
      },
    ],
    announcementIds: [102],
  },
  {
    pid: {
      56: 37,
      97: 1,
    },
    name: 'Bogged Finance Rare',
    nftId: 60,
    rug: tokens.zbog,
    liquidityDetails: 'None! BOG holders can claim ZBOG using the Victim Pools home card.',
    announcementIds: [97],
  },
  {
    pid: {
      56: 38,
      97: 1,
    },
    name: 'BlackDiamond Rare',
    nftId: 61,
    rug: tokens.zdiamonds,
    rugDex: Dex.PCS_V2,
    announcementIds: [85],
  },
  {
    pid: {
      56: 34,
      97: 1,
    },
    name: 'PokeCoin Uncommon',
    nftId: 58,
    rug: tokens.pokecoin,
    rugDex: Dex.PCS_V2,
    announcementIds: [96],
  },
  {
    pid: {
      56: 35,
      97: 1,
    },
    name: 'SaveTheKids Uncommon',
    nftId: 59,
    rug: tokens.kids,
    rugDex: Dex.PCS_V2,
    announcementIds: [93],
  },
  {
    pid: {
      56: 30,
      97: 1,
    },
    name: 'PokeCoin Common',
    nftId: 54,
    rug: tokens.pokecoin,
    rugDex: Dex.PCS_V2,
    announcementIds: [96],
  },
  {
    pid: {
      56: 31,
      97: 1,
    },
    name: 'Zombie Farm Common',
    nftId: 55,
    rug: tokens.zombie_no_relation,
    rugDex: Dex.PCS_V2,
    announcementIds: [94],
  },
  {
    pid: {
      56: 33,
      97: 1,
    },
    name: 'LifeLine Token Common',
    nftId: 56,
    rug: tokens.llt,
    rugDex: Dex.PCS_V1,
    announcementIds: [91],
  },
  {
    pid: {
      56: 32,
      97: 1,
    },
    name: 'Bullish Jackpot Token Common',
    nftId: 57,
    rug: tokens.bjt,
    rugDex: Dex.PCS_V2,
    additionalDetails: [
      {
        name: 'SPONSORED BY MAIN ST.',
        url: tokens.mainst.projectLink,
      },
    ],
    announcementIds: [95],
  },
  {
    pid: {
      56: 26,
      97: 1,
    },
    name: 'Pantherswap Legendary',
    nftId: 32,
    rug: tokens.panther,
    rugDex: Dex.PCS_V2,
    isClosed: true,
    isRetired: true,
    announcementIds: [108, 64],
  },
  {
    pid: {
      56: 28,
      97: 1,
    },
    name: 'Bonfire Rare',
    nftId: 41,
    rug: tokens.bonfire,
    rugDex: Dex.PCS_V1,
    announcementIds: [79],
  },
  {
    pid: {
      56: 19,
      97: 1,
    },
    name: 'Emperor Token Rare',
    nftId: 22,
    rug: tokens.zmpr,
    liquidityDetails:
      'None! The ZMPR token was airdropped to EMPR holders so you will have to ask around the telegram.',
    announcementIds: [42],
  },
  {
    pid: {
      56: 21,
      97: 1,
    },
    name: 'Hyrule Swap Rare',
    nftId: 24,
    rug: tokens.grupee,
    rugDex: Dex.APESWAP,
    announcementIds: [52],
  },
  {
    pid: {
      56: 20,
      97: 1,
    },
    name: 'Hyrule Swap Uncommon',
    nftId: 23,
    rug: tokens.rupee,
    rugDex: Dex.APESWAP,
    announcementIds: [52],
  },
  {
    pid: {
      56: 1,
      97: 1,
    },
    name: 'VikingSwap Rare',
    nftId: 7,
    rug: tokens.viking,
    rugDex: Dex.PCS_V1,
    announcementIds: [108],
  },
  {
    pid: {
      56: 2,
      97: 1,
    },
    name: 'MonsterSlayer Rare',
    nftId: 8,
    rug: tokens.msc,
    rugDex: Dex.PCS_V1,
    announcementIds: [108],
  },
  {
    pid: {
      56: 18,
      97: 1,
    },
    name: 'Thunderswap Rare',
    nftId: 21,
    rug: tokens.tndr,
    rugDex: Dex.PCS_V1,
    announcementIds: [29],
  },
  {
    pid: {
      56: 12,
      97: 1,
    },
    name: 'Autoshark Legendary',
    nftId: 12,
    rug: tokens.zshark,
    liquidityDetails: 'None! This grave is exclusive for victims of the flash loan attack on autoshark.',
    isClosed: true,
    isRetired: true,
    announcementIds: [8],
  },
  {
    pid: {
      56: 15,
      97: 1,
    },
    name: 'RUGBIDEN Rare',
    nftId: 15,
    rug: tokens.rugbiden,
    rugDex: Dex.PCS_V1,
    announcementIds: [41],
  },
  {
    pid: {
      56: 16,
      97: 1,
    },
    name: 'Burger Swap Rare',
    nftId: 16,
    rug: tokens.burger,
    rugDex: Dex.PCS_V1,
    announcementIds: [108, 40],
  },
  {
    pid: {
      56: 13,
      97: 1,
    },
    name: 'The US Dollar Rare',
    nftId: 13,
    rug: tokens.busd,
    rugDex: Dex.PCS_V2,
    announcementIds: [108, 33],
  },
  {
    pid: {
      56: 3,
      97: 1,
    },
    name: 'Defi100 Rare',
    nftId: 9,
    rug: tokens.d100,
    rugDex: Dex.PCS_V1,
    announcementIds: [108, 13],
  },
  {
    pid: {
      56: 10,
      97: 1,
    },
    name: 'Merlin Lab Rare',
    nftId: 11,
    rug: tokens.merl,
    rugDex: Dex.PCS_V2,
    announcementIds: [108, 24],
  },
  {
    pid: {
      56: 4,
      97: 1,
    },
    name: 'Fairmoon Rare',
    nftId: 10,
    rug: tokens.fairmoon,
    rugDex: Dex.PCS_V2,
    announcementIds: [108, 18],
  },
  {
    pid: {
      56: 14,
      97: 1,
    },
    name: 'Uranium Finance Uncommon',
    nftId: 14,
    rug: tokens.u92,
    rugDex: Dex.PCS_V2,
    announcementIds: [34],
  },
  {
    pid: {
      56: 5,
      97: 1,
    },
    name: 'Fairmoon Uncommon',
    nftId: 4,
    rug: tokens.fairmoon,
    rugDex: Dex.PCS_V1,
    announcementIds: [108, 18],
  },
  {
    pid: {
      56: 25,
      97: 1,
    },
    name: 'Kitty Cake Common',
    nftId: 31,
    rug: tokens.kcake,
    rugDex: Dex.PCS_V2,
    announcementIds: [66],
  },
  {
    pid: {
      56: 6,
      97: 1,
    },
    name: 'Fairmoon Common',
    nftId: 3,
    rug: tokens.fairmoon,
    rugDex: Dex.PCS_V1,
    announcementIds: [18],
  },
  {
    pid: {
      56: 7,
      97: 1,
    },
    name: 'Gorilla Yield Common',
    nftId: 0,
    rug: tokens.yape,
    rugDex: Dex.PCS_V1,
    announcementIds: [20],
  },
  {
    pid: {
      56: 8,
      97: 1,
    },
    name: 'Dragon Farm Finance Common',
    nftId: 2,
    rug: tokens.dragon,
    rugDex: Dex.PCS_V1,
    announcementIds: [19],
  },
  {
    pid: {
      56: 9,
      97: 1,
    },
    name: 'yPanda Common',
    nftId: 1,
    rug: tokens.ypanda,
    rugDex: Dex.PCS_V1,
    announcementIds: [23],
  },
]

export default graves

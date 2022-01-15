// eslint-disable-next-line import/prefer-default-export
import tokens from '../config/constants/tokens'
import artists from '../config/constants/artists'
import { BIG_ZERO } from '../utils/bigNumber'
import { SpawningPool } from './types'

const spawningPools: SpawningPool[] = [
  {
    id: 17,
    name: 'Blockmine Legendary',
    subtitle: 'Ol Jeb',
    path: 'https://ipfs.io/ipfs/QmUqZ6p2afdtjVQJQ6tHZVxW17NT9pPsUSGUePrk1vJzrN',
    type: 'video',
    address: {
      56: '0xc7D99410737B1601464f27cDDab9c2875A4da042',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 17080500,
    endDate: 1650340799,
    project: {
      name: 'Blockmine',
      description: 'Blockmine is a project that\'s goal is to solve existing issues with liquidity mining while incorporating metaverse and blockchain features. Watch the video to learn more!',
      additionalDetails: [
        {
          name: 'Video',
          url: 'https://www.youtube.com/watch?v=e8eZLYjv90I',
        },
        {
          name: 'Project website',
          url: tokens.goldbar.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://docs.block-mine.io/whitepaper/whitepaper',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/blockmine_io',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.goldbar,
    rewardTokenBnbLp: '0xc58a80cf11d1cbbae4fc1c2fa9244f517676ab3d',
    bnbLpTokenIndex: 1,
    artist: artists.febryangraves,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: true,
    color: 'orange',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 16,
    name: 'French Connection V2 Legendary',
    subtitle: 'Don of the Dead',
    path: 'https://ipfs.io/ipfs/QmQD5L6kSgd2WgyydYadfc5vcd1AxjTzSDxJdmgnhSRFbJ',
    type: 'video',
    address: {
      56: '0xAf0ed0352dCAbc57aa101dBd186C6abFb9C2a7F4',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 17000000,
    endDate: 1650168000,
    project: {
      name: 'French Connection Finance',
      description: 'French Connection Finance aims to create the world\'s first credit card to cryptocurrency encrypted online payment gateway, which rewards its holders with 9% fully automated BNB reflection on all the transactions made with $FCF during the same 24 hour period.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.fcf.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://frenchconnection.finance/white-paper/',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/frenchconnection_bsc',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.fcf,
    rewardTokenBnbLp: '0xc58a80cf11d1cbbae4fc1c2fa9244f517676ab3d',
    bnbLpTokenIndex: 1,
    artist: artists.febryangraves,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: true,
    color: 'brown',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 15,
    name: 'L1GHT L1ST Legendary',
    subtitle: 'The Mother',
    path: 'https://storage.googleapis.com/rug-zombie/The%20Mother%20compressed.jpeg',
    type: 'image',
    address: {
      56: '0xBBFF27B0CDEEa37EaC4A01430C9b03C512784954',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 15600000,
    endDate: 1647147599,
    project: {
      name: 'L1GHT L1ST',
      description: 'L1ght L1st was founded with the intention of bridging ambitious investors to the most innovative and remarkable projects on the blockchain. Shifting the focus from hype to utility and long term market validation. Their goal is to offer investors the exclusive opportunity to invest in innovative startups, while offering remarkable start ups the early exposure necessary for success allowing them to pay in their own token and set their own terms for launch.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.l1ghtv2.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://l1ghtl1st.io/documentation',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/L1ghtL1st',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.l1ghtv2,
    rewardTokenBnbLp: '0x8458ec4a50e0bcf825dcd27b5f84fc0f39bf3b09',
    bnbLpTokenIndex: 1,
    artist: artists.ayaz_psd,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 14,
    name: 'Street Punks Legendary',
    subtitle: 'Street Zombies',
    path: 'https://ipfs.io/ipfs/QmdSGtvB9tScPDuNNEh8xWAChdKZfv5MhV4cUkWSgBxjNy',
    type: 'image',
    address: {
      56: '0x306d8c5B2Fa6999D2Af31a966FB4Eb76E0FEc955',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 15900000,
    endDate: 1646888399,
    project: {
      name: 'Street Punks',
      description: 'StreetPunks is a spinoff inspired by the CryptoPunks project created by a small group of CryptoPunk fans. They strive to contribute to the CryptoPunks hype by creatively adding streetwear and (popular) theme orientated costumes. StreetPunks offers the average CyberPunk lover to invest early into the next stage of the CryptoPunks hype.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.punks.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://streetpunks.org/wp-content/uploads/2021/11/Streetpunks-Whitepaper-2021-1.pdf',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/StreetPunksOfficial',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.punks,
    rewardTokenBnbLp: '0x3118f49b01a2c9386937f05c1bc73e3186df8b4f',
    bnbLpTokenIndex: 0,
    artist: artists.trippynazz,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'silver',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 13,
    name: 'Black Eye Galaxy Legendary',
    subtitle: 'Great Zom',
    path: 'https://ipfs.io/ipfs/QmXKBTHHpaSrhgtC67RT4JqkjDHaTJAsnYWfszcUUZfehM',
    type: 'image',
    address: {
      56: '0x2855dBBb6De5dc93893717c326a0fbDE94a9431a',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 15400000,
    endDate: 1646197199,
    project: {
      name: 'Black Eye Galaxy',
      description: 'Black Eye Galaxy is a Metaverse designed to create a space exploration experience for its members. Offering tradable assets from planets to spaceships and buildings, BYG is a Play-To-Earn game meaning that just by doing tasks in-game the player will be rewarded BYG tokens.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.byg.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://www.blackeyegalaxy.space/wp-content/uploads/2021/11/Byg_WP1.4.pdf',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/blackeyegalaxypublic',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.byg,
    rewardTokenId: 'black-eye-galaxy',
    artist: artists.ayaz_psd,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'silver',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 12,
    name: 'InfiniteOne Legendary',
    subtitle: 'Infinite Zombie',
    path: 'https://ipfs.io/ipfs/Qme5fwhsG5sAHWg1yZUPYHqVj3wvZWetzpu5FWV4cmYHV3',
    type: 'image',
    address: {
      56: '0x0b9e22204EeE16B97cD9CE9dE82417D74102C6fa',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 15300000,
    endDate: 1645073999,
    project: {
      name: 'InfiniteOne',
      description: 'InfiniteOne Token is the only token you truly need in your wallet. It rewards you in multiple ways just for holding it. It supplies you with Infinite rewards through the ups and downs of the market.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.if1.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://infiniteone.io/whitepaper/#comp-0',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/TheRealInfiniteOne',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.if1,
    rewardTokenBnbLp: '0x4b5676c8775f035405c817e11c2ecb3ce5e5ef90',
    bnbLpTokenIndex: 0,
    artist: artists.canadiancryptojunkie,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'grey',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 11,
    name: 'Squid Stake Legendary',
    subtitle: 'Don\'t mess with Cthulhu',
    path: 'https://ipfs.io/ipfs/QmQ11oNLDfg7c3k1S6sfBEhcHWHtc9ykTQJhXhNU25fp7V',
    type: 'image',
    address: {
      56: '0x2499751b166D38e00590d054b82c20e9a1613913',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 15060000,
    endDate: 1644641999,
    project: {
      name: 'Squid Stake',
      description: 'Squid Stake builds on the oceanic ecosystem of AutoShark to help you stake more and earn more.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.squidstake.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://docs.squidstake.com/',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/squidstake',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.squidstake,
    rewardTokenBnbLp: '0x2e0484D3684701dC032f29cce59c785A5837B34E',
    bnbLpTokenIndex: 1,
    artist: artists.canadiancryptojunkie,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'pink',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 10,
    name: 'French Connection Legendary',
    subtitle: 'Fluffy',
    path: 'https://ipfs.io/ipfs/QmdRJp1tPFNdg9WP1V1A3KTGYaF74zs6vT5yodhsn9FGcn',
    type: 'video',
    address: {
      56: '0xFC57f86f80D3f6155dE76F15e245F0A9ad33fFA5',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 14170000,
    endDate: 1641646800,
    project: {
      name: 'French Connection Finance',
      description: 'French Connection Finance aims to create the world\'s first credit card to cryptocurrency encrypted online payment gateway, which rewards its holders with 9% fully automated BNB reflection on all the transactions made with $FCF during the same 24 hour period.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.fcf.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://frenchconnection.finance/white-paper/',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/frenchconnection_bsc',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.fcf,
    rewardTokenBnbLp: '0xc58a80cf11d1cbbae4fc1c2fa9244f517676ab3d',
    bnbLpTokenIndex: 1,
    artist: artists.TheLeap3d,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'brown',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 9,
    name: 'Autoshark Legendary',
    subtitle: 'ChompersV2',
    path: 'https://ipfs.io/ipfs/QmSwn2nVZ7onSrh59LTtiC4o44Qbzzdk5eQFJkPB6wxbWw',
    type: 'image',
    address: {
      56: '0x2B2327E219D6BA1DE8b3cF5715Dd1d1FE6f39e60',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 13800000,
    endDate: 1640523600,
    project: {
      name: 'Autoshark',
      description: 'AutoShark Finance is the 1st Cross-Chain Hybrid AMM and Yield Optimizer, offering unparalleled access to farming opportunities through the use of superior yield strategies, auto-compounding vaults, and NFT-powered farming.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.fins.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://autosharkgw.gitbook.io/autoshark/',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/AutoSharkFinance',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.fins,
    rewardTokenBnbLp: '0x14b5a6d26577970953f9e6608d6604e4676ac5b7',
    bnbLpTokenIndex: 1,
    artist: artists.eyes_of_lamia,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    tokenLogoFormat: 'svg',
    color: '#9400d3',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 8,
    name: 'Bingus Network Legendary',
    subtitle: 'The Eye of Bingus',
    path: 'https://ipfs.io/ipfs/QmYvobX57rSxJE9LC2tgQhWKKirZQRmnfTHFy12tR8SQba',
    type: 'image',
    address: {
      56: '0xBBB1c60CA67cab1441AcD8c077BB0b779e73DA40',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 13700000,
    endDate: 1640188800,
    project: {
      name: 'Bingus Network',
      description: 'The Bingus project was launched as an animal charity / meme token on BSC. Bingus Network aims to save as many animals as possible. A percentage of every Bingus Network transaction is donated to animal shelters and charities and over $120k has been donated since April.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.bingus.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://bingus.io/documents/Bingus-Network-Whitepaper.pdf',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/BingusNetworkOfficial',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.bingus,
    rewardTokenBnbLp: '0xafd29fd11b5570171ff62e5b638baffa7f00938f',
    bnbLpTokenIndex: 1,
    artist: artists.jussjoshinduh,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: '#C4A484',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 7,
    name: 'Octaplex Legendary',
    subtitle: 'Freaky Zolom',
    path: 'https://ipfs.io/ipfs/QmafkchvcXFDdMkdJzQFjWaXcZQyGfe4F8p35X4TQVVGH3',
    type: 'image',
    address: {
      56: '0xe9Dc48d8F5a1eAd54b8ADC263c4564b5346b1aEB',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 13620000,
    endDate: 1639940400,
    project: {
      name: 'Octaplex Network',
      description: 'Octaplex Network is an ecosystem with a unique and revolutionary concept bringing a new template for the future development of DeFi and yield bearing tokens. They aim to create an ecosystem of tokens in which users shall be rewarded and will be able to get special deals by holding their native $PLX token as well as our partner project tokens.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.plx.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://octaplex.gitbook.io/octaplex-network-whitepaper/',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/OctaplexNetwork',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.plx,
    rewardTokenBnbLp: '0x63730fcf35b0edc45742c19ebe20205ab99ce05d',
    bnbLpTokenIndex: 1,
    artist: artists.jussjoshinduh,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'violet',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 6,
    name: 'AtmosSoft Legendary',
    subtitle: 'Zombabe',
    path: 'https://ipfs.io/ipfs/QmVGjzRvf2WD5JKjh5wNVjVtimPv9R2mzeuYUNin2cFsc7',
    type: 'image',
    address: {
      56: '0x20E060a9FD13F9F2D442f6e7A804B186C53EcF60',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 13566061,
    endDate: 1639771200,
    project: {
      name: 'AtmosSoft',
      description: 'AtmosSoft is an NFT Play-2-Earn collectible card game where you Earn $ATMSSFT just by playing. NFT Staking and Farming including P2P gameplay to earn a spot in tournaments with prize pools.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.atmssft.projectLink,
        },
        {
          name: 'Whitepaper',
          url: 'https://atmossoft.gitbook.io/atmossoft-ccg/',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/atmossoft',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.atmssft,
    rewardTokenBnbLp: '0xdf825e486d9d15848a36c113b7725d7923e886a4',
    bnbLpTokenIndex: 0,
    artist: artists.geek_amy_art,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'red',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 5,
    name: 'Monkey Coin Legendary',
    subtitle: 'Crypto Mutant Zombie',
    path: 'https://storage.googleapis.com/rug-zombie/Zombi_Monkey-min.jpg',
    type: 'image',
    address: {
      56: '0x1976e5607aB7D163E5DA2F6D427aD1868e967f97',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 13503600,
    endDate: 1639576800,
    project: {
      name: 'CryptoMonkey Empire',
      description: 'CryptoMonkey Empire is a Massively Multiplayer Online Real Time Strategy video game. Where you, the player manages monkeys to build an Empire. You will collect resources by raiding other player\'s empires to build up a city and make technological progress. Their MonkeyCoin token is used in game as a resource and your army is used to steal other player\'s cryptocurrency during raids.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.mkc.projectLink,
        },
        {
          name: 'Pre-alpha Gameplay Video',
          url: 'https://www.youtube.com/watch?v=OiiQ8CBOuLw',
        },
        {
          name: 'Whitepaper',
          url: 'https://mwgbucket.s3.eu-west-3.amazonaws.com/CME_WP_V7bis.pdf',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/cryptomonkeyempire',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.mkc,
    rewardTokenBnbLp: '0x77acd18484430203212dc67c9b5362d0abace8de',
    bnbLpTokenIndex: 1,
    artist: artists.cryptomonkeyemp,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'red',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 4,
    name: 'WalletNow Legendary',
    subtitle: 'Zombie Wallet',
    path: 'https://ipfs.io/ipfs/QmcvagniUfh9k8Ks42pJPnDicHBGSkFgLB6dcUbJKnTB4p',
    type: 'image',
    address: {
      56: '0x32c5ec65beB8482b5c727A0E3A352F8E330eb312',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 13350000,
    endDate: 1639101600,
    project: {
      name: 'WalletNow',
      description: 'WalletNow is an advanced crypto portfolio monitoring solution. It aggregates all your DeFi & CeFi investments in a searchable table and actively monitors it with an integrated Telegram Bot. With detailed LP information, impermanent loss and yields calculation, you are always in control of your wallet.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.wnow.projectLink,
        },
        {
          name: 'Telegram',
          url: 'https://t.me/WalletNow',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.wnow,
    rewardTokenBnbLp: '0x268c6d2bd3f593d44f3e697cc5a02ae6ecda9a23',
    bnbLpTokenIndex: 1,
    artist: artists.jussjoshinduh,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'rgb(0, 150, 255)',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 3,
    name: 'Koala Defi Legendary',
    subtitle: 'Nightmare Fuel Karen',
    path: 'https://ipfs.io/ipfs/QmaTXD2A7dfTaMhGzDU9ubFwVS79GF9EPMRFkGc6G9XEHf',
    type: 'image',
    address: {
      56: '0x14422173F2EA692Ae2e27c77a9bf5DB58b38b457',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 13140040,
    endDate: 1638453600,
    project: {
      name: 'Koala Defi',
      description: 'Koala DeFi Finance is a yield farming dapp running on Binance Smart Chain and ApeSwap exchange, with cool new features that let you earn and win LYPTUS tokens. The idea behind this project is to create a safe place for conservative yield farmers. ',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.nalis.projectLink,
        },
        {
          name: 'Telegram',
          url: 'https://t.me/koaladefichat',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.nalis,
    rewardTokenBnbLp: '0x8c7ef42d68889ef820cae512f43d8c256fdaa1a0',
    bnbLpTokenIndex: 1,
    artist: artists.jussjoshinduh,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 2,
    name: 'Main Street Legendary',
    subtitle: 'Block Party',
    path: 'https://storage.googleapis.com/rug-zombie/Main%20Street.png',
    type: 'image',
    address: {
      56: '0x0af40D42F805112ECc40b0148c1221eDc8Ce001B',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 12790000,
    endDate: 1637366400,
    project: {
      name: 'Main Street',
      description: 'Main Street is a deflationary token that provides its holders with a space to find new high use case tokens in their Neighborhood and Alley, as well as entertainment and games in their Shops.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.mainst.projectLink,
        },
        {
          name: 'Telegram',
          url: 'https://t.me/buymainstreet',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.mainst,
    rewardTokenBnbLp: '0xdbb9ed740a8163a04cc0227e638c30b447d155b8',
    bnbLpTokenIndex: 1,
    artist: artists.ZomBaes,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 1,
    name: 'Euler Tools Legendary',
    subtitle: 'Leonhard Euler\'s Day Off',
    path: 'images/rugZombie/Leonhard Euler\'s Day Off.gif',
    type: 'image',
    address: {
      56: '0x637810116bfdEcA4bB38c61D9FeBC5911440B0eF',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 12350000,
    endDate: 1636189527,
    project: {
      name: 'Euler Tools',
      description: 'Euler Tools is a platform to explore and discover blockchain content. With a clean, usable and responsive interface.',
      additionalDetails: [
        {
          name: 'Project website',
          url: tokens.euler.projectLink,
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/EulerTools',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/eulertools',
        },
        {
          name: 'Medium Post',
          url: 'https://rugzombie.medium.com/new-spawning-pool-euler-tools-a07b095a9846',
        },
      ],
    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.euler,
    rewardTokenId: 'euler-tools',
    artist: artists.ZomBaes,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    isNew: false,
    color: 'rgb(0, 150, 255)',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
  {
    id: 0,
    name: 'Gorilla-Fi Legendary',
    subtitle: 'Silverback',
    path: 'images/rugZombie/Silverback.webm',
    type: 'video',
    address: {
      56: '0x83818859688eF175F6AEAFb80Be881Db24A4E50a',
      97: '0xBf559640BCEa0f19eC0B1dc30B7F294e4194a300',
    },
    endBlock: 12209400,
    endDate: 1635608820,
    project: {
      name: 'Gorilla-Fi',
      description: 'Gorilla-Fi is a comprehensive De-Fi earnings ecosystem that allows anyone with a smartphone to earn passive income.',
      additionalDetails: [
        {
          name: 'Project website',
          url: 'https://www.gorillafi.com/',
        },
        {
          name: 'Podcast with project founder',
          url: 'https://www.youtube.com/watch?v=xdwiHSCPSNw',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/GorillaFi',
        },
        {
          name: 'Medium post',
          url: 'https://rugzombie.medium.com/first-spawn-gorilla-fi-g-fi-f16a234047f7',
        },
      ],

    },
    withdrawalCooldown: '3 days',
    nftRevivalTime: '45 days',
    rewardToken: tokens.gfi,
    rewardTokenId: 'gorilla-fi',
    artist: artists.deadtunnelrat,
    stakingToken: '',
    pcsVersion: 'v1',
    liquidityDetails: '',
    isNew: false,
    color: 'rgb(0, 150, 255)',
    userInfo: {
      paidUnlockFee: false,
      tokenWithdrawalDate: 0,
      nftRevivalDate: 0,
      amount: BIG_ZERO,
      pendingReward: BIG_ZERO,
      zombieAllowance: BIG_ZERO,
    },
    poolInfo: {
      unlockFee: BIG_ZERO,
      rewardPerBlock: BIG_ZERO,
      minimumStake: BIG_ZERO,
      totalZombieStaked: BIG_ZERO,
      withdrawCooldown: 0,
      nftRevivalTime: 0,
    },
  },
]

export default spawningPools

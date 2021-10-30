import { MenuEntry } from '@rug-zombie-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: 'Graves',
    icon: 'PoolIcon',
    href: '/graves',
  },
  {
    label: 'Tombs',
    icon: 'FarmIcon',
    href: '/tombs',
  },
  {
    label: 'Spawning Pools',
    icon: 'PoolIcon',
    href: '/spawning_pools'
  },
  {
    label: 'DoD Swap',
    icon: 'TradeIcon',
    href: '/dayofdead',
  },
  {
    label: 'Mausoleum (BETA)',
    icon: 'PredictionsIcon',
    href: '/mausoleum',
  },
  {
    label: 'Graveyard',
    icon: 'NftIcon',
    href: '/graveyard'
  },
  {
    label: 'Catacombs',
    icon: 'GroupsIcon',
    href: '/catacombs'
  },
  {
    label: 'Profile',
    icon: 'GroupsIcon',
    href: '/profile'
  },
  {
    label: 'Referral Program',
    icon: 'TeamBattleIcon',
    items: [
      {
        label: 'In development',
        href: '/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://rugzombie.gitbook.io/docs/feedback-suggestions-and-bug-bounty',
      },
      {
        label: 'Github',
        href: 'https://github.com/Rug-Zombie',
      },
      {
        label: 'Docs',
        href: 'https://rugzombie.gitbook.io/docs/',
      },
    ],
  },
]

export default config

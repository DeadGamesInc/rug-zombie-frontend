export enum LinkType {
  Internal,
  External,
}

const navContent: { label: string; href: string; type?: LinkType }[] = [
  {
    label: 'Graves',
    href: '/graves',
  },
  {
    label: 'Tombs',
    href: '/tombs',
  },
  {
    label: 'Spawning Pools',
    href: '/spawning_pools',
  },
  {
    label: 'Graveyard',
    href: '/graveyard',
  },
  {
    label: 'Catacombs',
    href: '/catacombs',
  },
  {
    label: 'WhalePool',
    href: '/whalepool'
  }
];

export default navContent;

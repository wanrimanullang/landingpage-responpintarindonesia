export interface LogoItem {
  name: string;
  src: string;
  srcLight?: string;
  url?: string;
  type: 'client' | 'partner';
}

export const logos: LogoItem[] = [
  {
    name: 'Meta',
    src: '/logos/meta.png',
    srcLight: '/logos/meta-light.png',
    url: 'https://about.meta.com/',
    type: 'partner',
  },
  {
    name: 'MasterLogistic',
    src: '/logos/masterlogistic.png',
    srcLight: '/logos/masterlogistic-light.png',
    url: 'https://masterlogistic.id/',
    type: 'client',
  },
];

export interface LogoItem {
  name: string;
  src: string;
  srcLight?: string;
  url?: string;
  type: 'client' | 'partner';
}

export const logos: LogoItem[] = [
  {
    name: 'Rain Realty',
    src: '/logos/rain-realty.png',
    srcLight: '/logos/rain-realty-light.png',
    url: 'https://rainrealty.id/',
    type: 'client',
  },
  {
    name: 'Meta',
    src: '/logos/meta.png',
    srcLight: '/logos/meta-light.png',
    url: 'https://about.meta.com/',
    type: 'partner',
  },
  {
    name: 'WIKA',
    src: '/logos/wika.png',
    srcLight: '/logos/wika-light.png',
    url: 'https://www.wika.co.id/',
    type: 'client',
  },
  {
    name: 'Kesuma Agung Selaras',
    src: '/logos/kas.png',
    srcLight: '/logos/kas-light.png',
    url: 'https://kasg.co.id/',
    type: 'client',
  },
  {
    name: 'MAS Group',
    src: '/logos/mas-group.svg',
    srcLight: '/logos/mas-group-light.svg',
    url: 'https://masgroup.co.id/',
    type: 'client',
  },
  {
    name: 'Bali Resort Tangerang',
    src: '/logos/bali-resort.svg',
    srcLight: '/logos/bali-resort-light.svg',
    url: 'https://baliresortserpong.com/',
    type: 'client',
  },
];

import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/avatar.jpg'),
  fullName: 'Joseph Esteban',
  role: 'Senior Full Stack Developer',
  details: [
    { label: 'Phone', value: '+51968728452', url: 'tel:+51968728452' },
    {
      label: 'Email',
      value: 'esteban.programador@gmail.com',
      url: 'mailto:esteban.programador@gmail.com',
    },
    { label: 'From', value: 'Perú, Lima' },
    { label: 'Salary range', value: '~' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+51 9687 28452' },
    { label: 'Email', value: 'esteban.programador@gmail.com' },
    {
      label: 'LinkedIn',
      value: '/in/josephesteban',
      url: 'https://www.linkedin.com/in/josephesteban/',
    },
    {
      label: 'GitHub',
      value: '/jesteban19',
      url: 'https://github.com/jesteban19',
    },
    {
      label: 'Website',
      value: 'josephesteban.com',
      url: '/',
      fullRow: true,
    },
  ],
  description:
    'Senior FullStack Developer con más de 13 años de experiencia en análisis, desarrollo e implementación de soluciones tecnológicas. Apasionado por la innovación y mantenerse al día con las últimas herramientas y lenguajes.',
  tags: [
    { name: 'Open for freelance' },
    { name: 'Available for mentoring' },
    { name: 'Available for work' },
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-JosephEsteban.pdf',
  },
  links: [
    facebook({ url: '#' }),
    github({ url: 'https://github.com/jesteban19' }),
    linkedin({ url: 'https://www.linkedin.com/in/josephesteban/' }),
    twitter({ url: '#' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

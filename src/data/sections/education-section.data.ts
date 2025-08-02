import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Gestión de sistemas de información',
      institution: 'Escuela ISAM',
      image: import('@/assets/logos/isam.png'),
      dates: [new Date('2024.01'), null], // Currently studying
      description:
        'Distance learning program focused on information systems management and modern technology.',
      links: [website({ url: 'https://escuelaisam.edu.pe/' })],
    },
    {
      title: 'Técnico en computación e informatica',
      institution: 'CIMAS',
      image: import('@/assets/logos/cimas.png'),
      dates: [new Date('2008.01'), new Date('2011.01')],
      description: 'Specialization in software development.',
      links: [website({ url: 'https://www.cimas.edu.pe/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

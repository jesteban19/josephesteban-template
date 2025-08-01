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

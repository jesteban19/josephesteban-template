import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Joseph Esteban Carrasco - Senior Full Stack Developer',
    description:
      'Senior FullStack Developer con más de 13 años de experiencia en análisis, desarrollo e implementación de soluciones tecnológicas. Apasionado por la innovación y mantenerse al día con las últimas herramientas y lenguajes.',
    faviconPath: '/src/assets/avatar.jpg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;

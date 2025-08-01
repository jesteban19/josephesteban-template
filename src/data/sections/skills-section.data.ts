import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  angular,
  apolloGraphql,
  astro,
  automation,
  aws,
  azure,
  chakraUi,
  csharp,
  cypress,
  dotnet,
  eslint,
  ethical,
  firebase,
  gcp,
  godot,
  java,
  kotlin,
  mongoDb,
  nestJs,
  nodejs,
  php,
  pnpm,
  postgreSql,
  prettier,
  python,
  react,
  ruby,
  rust,
  sass,
  sql,
  supabase,
  tailwindCss,
  typescript,
  vuejs,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        python({
          level: 5,
          description:
            'Tengo 8 años de experiencia en Python, especializado en desarrollo backend, análisis de datos, automatización de procesos y mejora del rendimiento y la eficiencia del código.',
        }),
        kotlin({
          level: 3,
          description:
            'Tengo 2 años de experiencia en Kotlin, especializado en programación funcional, desarrollo de microservicios, manejo de colas y optimización del rendimiento y la eficiencia del código.',
        }),
        java({
          level: 4,
          description:
            'Tengo 5 años de experiencia en Java, especializado en el uso de Spring Boot y paquetes populares como Spring Data, Spring Security y Spring MVC para el desarrollo de aplicaciones robustas y escalables.',
        }),
        nodejs({
          level: 5,
          description:
            'Tengo 7 años de experiencia en Node.js, especializado en el uso de Express para crear APIs RESTful, desarrollo de microservicios, funciones Lambda de AWS, y conceptos como la programación asíncrona, middleware, y gestión de bases de datos NoSQL.',
        }),
        php({
          level: 5,
        }),
        csharp({
          level: 3,
        }),
        dotnet({
          level: 4,
        }),
        react({
          level: 5,
          description:
            'Tengo 7 años de experiencia en React.js, especializado en el desarrollo basado en componentes, gestión de estado con Redux y optimización del rendimiento.',
        }),
        angular({
          level: 4,
          description:
            'Con 7 años de experiencia en Angular, tengo sólidos conocimientos en componentes, servicios, enrutamiento, gestión de estado con RxJS/NgRx, y desarrollo de aplicaciones escalables.',
        }),
        vuejs({
          level: 3,
        }),
        typescript({
          level: 4,
        }),
        postgreSql({ level: 2 }),
        mongoDb({ level: 4 }),
        firebase({ level: 2 }),
        sql({ level: 4 }),
        aws({
          level: 4,
        }),
        gcp({ level: 2 }),
        azure({ level: 2 }),
        automation({
          level: 4,
        }),
        ethical({
          level: 4,
        }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [ruby(), godot(), rust()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - native' },
        { icon: 'circle-flags:us', name: 'English - A2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;

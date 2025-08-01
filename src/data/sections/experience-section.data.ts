import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  facebook,
  github,
  instagram,
  linkedin,
  twitter,
  website,
} from '../helpers/links';
import {
  angular,
  automation,
  aws,
  azure,
  chakraUi,
  csharp,
  dotnet,
  eslint,
  ethical,
  firebase,
  gcp,
  java,
  kotlin,
  nextJs,
  nodejs,
  nx,
  php,
  pnpm,
  postgreSql,
  python,
  react,
  reactQuery,
  sql,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior full stack developer',
      company: 'Foodology Inc',
      image: import('@/assets/logos/default.png'),
      dates: [new Date('2022-04'), new Date('2024-07')],
      description: `
        - Desarrollo de requerimientos para Foodology Inc.
        - Implementación de arquitectura de software para proyectos de micro-servicios.
        - Gestión y estimación de proyectos o requerimientos.
        - Lenguajes,frameworks & Cloud: AWS ,GCP, Kotlin, ReactJS ,Typescript, Nodejs & Python.
        - Mentoría al equipo de  Intern & Jr.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          kotlin(),
          react(),
          python(),
          angular(),
          java(),
          nodejs(),
          typescript(),
          aws(),
          gcp(),
          ethical(),
          automation(),
        ],
      },
      links: [website({ url: 'https://foodology.com.co/' })],
    },
    {
      role: 'Senior full stack developer',
      company: 'MDP Consulting - Niubiz',
      image: import('@/assets/logos/logo.png'),
      dates: [new Date('2021-12'), new Date('2022-04')],
      description: `
        - Desarrollo y estimaciones para requerimientos solicitados por el cliente Niubiz - Vendemás.
        - Analisis y soporte para trasladar información al equipo no técnico.
        - Soporte en despliegues de QA y Producción.
        - Workflow of development: Angular + NodeJs + Dynamo + Test Angular.
        - Lider Técnico
      `,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), nodejs(), typescript(), aws(), react(), java()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Senior full stack developer',
      company: 'Hispatec',
      image: import('@/assets/logos/default.png'),
      dates: [new Date('2020-12'), new Date('2021-12')],
      description: `
        - Desarrollo e implementación de CRM Agrotareo, Django + Python
        - Implementación de App Hibrido - VueJs + Redux + Typescript
        - Manejo y analisis de requerimientos de diversos clientes en todo en el mundo.
        - Coordinación con el equipo de España y trabajo en conjunto con programadores de diversas sucursales de la empresa.
        - Capacitación y coordinación de personas para llevar acabo un objetivo.
        - Desarollo e implementación en el campo, oficinas del cliente de acuerdo a requerimientos solicitados.
        - Liderar Backend del CRM Agrotareo a nivel global de diferentes paises.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [vue(), python(), postgreSql(), sql(), azure()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'Senior full stack developer',
      company: 'IQVIA',
      image: import('@/assets/logos/default.png'),
      dates: [new Date('2017-10'), new Date('2020-12')],
      description: `
        - Development of reports consuming big data.
        - Development of applications for handling reports to clients.
        - Web & Mobile Application Development
        - Developer System web data reports in Django Framework , Django Framework Rest , Angular 4 
          and Python.
        - Applications C# Desktop
        - Python Scripting Scrapper
        - Sql Server
        - Windows server 2012
        - IIS & CGI
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          angular(),
          react(),
          python(),
          sql(),
          azure(),
          aws(),
          kotlin(),
          java(),
          csharp(),
          dotnet(),
          automation(),
          ethical(),
        ],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'Senior backend developer',
      company: 'Grupo el comercio',
      image: import('@/assets/logos/logo.png'),
      dates: [new Date('2017-03'), new Date('2017-10')],
      description: `
        Proyectos:
          -Catalogo digital : Hiraoka y Hasbro
          Proyecto desarrollados en Opencart y Laravel 5.2.
        -Especiales (Paginas con contenido de posts):
        *Especial Cusqueña "De lo bueno , lo mejor"
        -Suplementos Comerciales
        *El Comercio
        *Gestion
        * Peru21
      `,
      tagsList: {
        title: 'Technologies',
        tags: [php(), angular(), sql(), aws(), java(), ethical()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'Senior full stack developer',
      company: 'Zeusintranet',
      image: import('@/assets/logos/logo.png'),
      dates: [new Date('2011-12'), new Date('2017-03')],
      description: `
        Sistema de Gestión Educativa (Red Social,Notas,Alumnos,Profesor,Academico,Estadisticas)
      `,
      tagsList: {
        title: 'Technologies',
        tags: [dotnet(), csharp(), php(), sql(), java(), ethical()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'Jr developer',
      company: 'Ministerio de transportes y comunicación',
      image: import('@/assets/logos/default.png'),
      dates: [new Date('2010-12'), new Date('2011-12')],
      description: `
        Validación y migración de datos.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [dotnet(), csharp(), sql()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

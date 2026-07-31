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
      role: 'IA Developer',
      company: 'Banco de Crédito BCP',
      image: import('@/assets/logos/bcp.jpeg'),
      dates: [new Date('2025-07'), null],
      description: `
        - Desarrollo e implementación de soluciones avanzadas de Inteligencia Artificial utilizando Semantic Kernel, Python, Node.js y TypeScript, directamente integradas en los sistemas bancarios de BCP.
        - Optimización y escalamiento de arquitecturas de IA en producción, mejorando los tiempos de respuesta y la precisión de los modelos de machine learning para servicios financieros críticos.
        - Desarrollo de sistemas multiagente especializados para automatización de procesos bancarios, incluyendo análisis de riesgo crediticio en tiempo real y personalización de servicios financieros.
        - Implementación de soluciones de procesamiento de lenguaje natural (NLP) para análisis automatizado de documentos financieros y detección de patrones en transacciones.
        - Diseño y desarrollo de APIs de IA robustas utilizando Azure y tecnologías cloud, garantizando alta disponibilidad y seguridad en el ecosistema bancario.
        - Colaboración directa con equipos de producto y negocio para traducir requerimientos estratégicos en soluciones técnicas de IA escalables y eficientes.
        - Mentoring y liderazgo técnico en implementación de mejores prácticas de MLOps y desarrollo de IA ética en el sector financiero.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          python(),
          nodejs(),
          typescript(),
          azure(),
          react(),
          automation(),
          ethical(),
        ],
      },
      links: [website({ url: 'https://www.viabcp.com/' })],
    },
    {
      role: 'Lead Engineer',
      company: 'CREDICORP (via NTT DATA Europe & Latam)',
      image: import('@/assets/logos/ntt.jpeg'),
      dates: [new Date('2024-09'), new Date('2025-07')],
      description: `
        - Lideré el desarrollo e implementación de soluciones de IA para el sector financiero utilizando Node.js, TypeScript, React y Python, alineadas con los objetivos estratégicos del área de Inteligencia Artificial de Credicorp.
        - Diseñé y optimicé flujos de datos críticos utilizando Azure y Databricks, mejorando significativamente la eficiencia del análisis predictivo y procesamiento de información financiera.
        - Desarrollé sistemas multiagente innovadores y soluciones con OpenAI para casos de uso financiero especializados, incluyendo evaluación automatizada de riesgos crediticios y atención al cliente personalizada con IA.
        - Implementé sistemas avanzados de procesamiento de audio para analizar conversaciones telefónicas bancarias y extraer insights clave que mejoraron la toma de decisiones estratégicas.
        - Lideré la colaboración con equipos multidisciplinarios garantizando el cumplimiento de tiempos y entregables críticos para el área de IA, manteniendo alta calidad en todos los proyectos.
        - Analizé y documenté requerimientos técnicos y funcionales complejos, asegurando que todas las soluciones fueran escalables, sostenibles y de alto impacto para la organización.
        - Arquitecté e implementé soluciones robustas en la nube utilizando Azure, priorizando sostenibilidad, seguridad de datos financieros y escalabilidad empresarial.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          nodejs(),
          typescript(),
          react(),
          python(),
          azure(),
          automation(),
          ethical(),
        ],
      },
      links: [website({ url: 'https://pe.nttdata.com/' })],
    },
    {
      role: 'Senior full stack developer',
      company: 'Foodology Inc',
      image: import('@/assets/logos/food.jpeg'),
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

import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website, youtube } from '../helpers/links';
import {
  aws,
  chakraUi,
  eslint,
  ethical,
  firebase,
  java,
  jest,
  kotlin,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  youtubeSkill,
  tiktok,
  typescript,
  automation,
  php,
  python,
  sql,
  mongoDb,
  gcp,
  nodejs,
  angular,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Llama Delivery',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2024.01'), null],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['CEO', 'Tech Lead'] },
        { label: 'Company', value: 'Joseph Esteban' },
        { label: 'Category', value: ['Delivery'] },
      ],
      pdfDetails: [
        {
          label: 'Demo',
          value: 'https://llamadelivery.com',
          url: '#',
        },
        {
          label: 'Repository',
          value: 'Private',
          url: '#',
        },
      ],
      /*screenshots: [
        {
          src: import('@/assets/portfolio/project-1-screenshot-1.jpg'),
          alt: 'First screenshot',
        },
        {
          src: import('@/assets/portfolio/project-1-screenshot-2.jpg'),
          alt: 'Second screenshot',
        },
        {
          src: import('@/assets/portfolio/project-1-screenshot-3.jpg'),
          alt: 'Third screenshot',
        },
      ],*/
      description:
        'Desarrollamos una plataforma innovadora de delivery de comidas y pedidos, diseñada para llenar el vacío de servicios en áreas donde las aplicaciones populares no están disponibles. Nuestro objetivo es conectar restaurantes locales con clientes en nuestra comunidad, ofreciendo conveniencia y selecciones gastronómicas únicas.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), java(), kotlin(), aws(), ethical()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'Redes sociales',
      image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2019-06'), null],
      details: [
        { label: 'Team size', value: '2 people' },
        {
          label: 'My role',
          value: ['Creator', 'Developer'],
        },
        { label: 'Company', value: 'Joseph Esteban' },
        { label: 'Category', value: ['Youtube', 'Tiktok'] },
      ],
      pdfDetails: [
        {
          label: 'Youtube',
          value: 'JosephEstebanCarrasco',
          url: 'https://www.youtube.com/c/JosephEstebanCarrasco',
        },
        {
          label: 'Tiktok',
          value: '@josephestebandev',
          url: 'https://tiktok.com/@josephestebandev',
        },
      ],
      description:
        'Como mentor de programación en plataformas líderes como YouTube y TikTok, me dedico a crear contenido educativo y motivador para entusiastas de la programación de todos los niveles. Mi objetivo es simplificar conceptos complejos, ofrecer tutoriales paso a paso y compartir consejos prácticos para ayudar a mi comunidad a desarrollar habilidades técnicas y alcanzar sus metas en el mundo de la tecnología',
      tagsList: {
        title: 'Technologies',
        tags: [tiktok(), youtubeSkill()],
      },
      links: [demo({ url: 'https://tiktok.com/@josephestebandev' })],
    },
    {
      name: 'Aimbot zbot',
      image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2017-02'), new Date('2020-01')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Developer'] },
        { label: 'Company', value: 'Joseph Esteban' },
        { label: 'Category', value: ['Tools', 'P2W'] },
      ],
      pdfDetails: [
        {
          label: 'Repository',
          value: 'Private',
          url: '#',
        },
      ],
      description:
        'Aimbot Zbot es una extensión de Chrome desarrollada en JavaScript, diseñada específicamente para el juego DragonBound.net. Esta herramienta permite a los jugadores calcular tiros perfectos de manera precisa, mejorando su precisión y rendimiento en el juego. Ayuda a los usuarios a optimizar su estrategia y aumentar sus posibilidades de éxito en cada partida.',
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), php(), automation()],
      },
      links: [website({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'Josephesteban.com',
      image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2017-02'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: 'CEO' },
        { label: 'Company', value: 'Personal' },
        { label: 'Category', value: ['Mobile app', 'Open source'] },
      ],
      pdfDetails: [
        {
          label: 'Contactame',
          value: 'https://josephesteban.com/cv.pdf',
          url: '#',
        },
      ],
      description:
        'Como profesional freelance, me especializo en la ejecución de proyectos tanto para individuos como para empresas. Mis servicios abarcan desde el desarrollo de aplicaciones web y móviles hasta la consultoría en estrategias digitales. Con un enfoque en la calidad y la eficiencia, colaboro estrechamente con mis clientes para cumplir con sus objetivos y superar sus expectativas en cada proyecto',
      tagsList: {
        title: 'Technologies',
        tags: [
          typescript(),
          python(),
          java(),
          kotlin(),
          php(),
          sql(),
          ethical(),
          automation(),
          mongoDb(),
          gcp(),
          aws(),
          nodejs(),
          angular(),
          react(),
        ],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;

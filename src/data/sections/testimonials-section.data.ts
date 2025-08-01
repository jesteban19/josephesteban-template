import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Testimonials',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/santiago-rojas.jpg'),
      author: 'Santiago Rojas',
      relation: 'CTO & Parnert at Foodology (Endeavor)',
      content: `Joseph ha sido una parte integral de nuestro equipo de Foodology durante casi tres años, destacándose como desarrollador senior. Su capacidad para desarrollar el sistema de monitoreo de nuestra operación con una velocidad impresionante ha sido fundamental para nuestro éxito.
        Además de sus habilidades técnicas, Joseph tiene una pasión por la enseñanza y crea cursos de desarrollo en YouTube. Esta pasión se ha traducido en un valioso apoyo dentro de nuestro equipo, donde ha mentoreado a desarrolladores juniors recién graduados de bootcamps. Su disposición para compartir conocimientos y su dedicación al crecimiento profesional de sus compañeros lo convierten en un mentor excepcional y un recurso invaluable para nuestro equipo.
`,
      links: [linkedin({ url: 'https://www.linkedin.com/in/josephesteban/' })],
    },
    /*{
      image: import('@/assets/testimonials/testimonial-2.jpeg'),
      author: 'Jean Richards',
      relation: 'My project manager at GitLab',
      content:
        'Praesent nec congue elit. Vestibulum lobortis congue ipsum, a gravida mi tempus ac. Mauris aliquet purus nibh, vel varius turpis tempus non. Nullam eget ultricies orci. Quisque nulla ante, auctor eget varius ac, imperdiet nec magna.',
      links: [linkedin({ url: '#' })],
    },
    {
      image: import('@/assets/testimonials/testimonial-3.jpeg'),
      author: 'Jason Fisher',
      relation: 'My customer for sidewing.com website',
      content:
        'Mauris tincidunt at purus vehicula porta. Mauris eget mollis turpis. Sed iaculis rutrum pharetra. Vivamus risus quam, suscipit et semper ut, aliquet ut tellus. Donec quis auctor nunc.',
      links: [github({ url: '#' }), website({ url: '#' })],
    },*/
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;

import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#2980b9',
  url: 'https://www.python.org/',
});

export const kotlin = createSkillFactory({
  name: 'Kotlin',
  icon: 'simple-icons:kotlin',
  iconColor: '#8e44ad',
  url: 'https://kotlinlang.org/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'simple-icons:java',
  iconColor: '#3498db',
  url: 'https://java.com',
});

export const nodejs = createSkillFactory({
  name: 'NodeJS',
  icon: 'simple-icons:tsnode',
  iconColor: '#27ae60',
  url: 'https://nodejs.org',
});

export const php = createSkillFactory({
  name: 'PHP',
  icon: 'simple-icons:php',
  iconColor: '#0652DD',
  url: 'https://vuejs.org/',
});

export const csharp = createSkillFactory({
  name: 'C#',
  icon: 'simple-icons:csharp',
  iconColor: '#9980FA',
  url: 'https://vuejs.org/',
});

export const dotnet = createSkillFactory({
  name: '.NET',
  icon: 'simple-icons:dotnet',
  iconColor: '#5758BB',
  url: 'https://vuejs.org/',
});

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'simple-icons:angular',
  iconColor: '#e74c3c',
  url: 'https://angular.dev/',
});

export const vuejs = createSkillFactory({
  name: 'VueJS',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#2ecc71',
  url: 'https://vuejs.org/',
});

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:amazonaws',
  iconColor: '#FFC312',
  url: 'https://aws.amazon.com/',
});

export const gcp = createSkillFactory({
  name: 'GCP',
  icon: 'simple-icons:google',
  iconColor: '#EA2027',
  url: 'https://cloud.google.com/',
});

export const azure = createSkillFactory({
  name: 'Azure',
  icon: 'simple-icons:microsoftazure',
  iconColor: '#1B1464',
  url: 'https://azure.microsoft.com/',
});

export const sql = createSkillFactory({
  name: 'SQL Server',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#F79F1F',
  url: 'https://www.microsoft.com/',
});

export const automation = createSkillFactory({
  name: 'RPA / Scrapping',
  icon: 'simple-icons:probot',
  iconColor: '#6F1E51',
  url: 'https://pptr.dev/',
});

export const ethical = createSkillFactory({
  name: 'Ethical Hacking',
  icon: 'simple-icons:securityscorecard',
  iconColor: '#3d3d3d',
  url: 'https://es.wikipedia.org/wiki/Open_Web_Application_Security_Project',
});

export const ruby = createSkillFactory({
  name: 'Ruby',
  icon: 'simple-icons:rubyonrails',
  iconColor: '#ff3838',
  url: 'https://rubyonrails.org/',
});

export const godot = createSkillFactory({
  name: 'Godot Engine',
  icon: 'simple-icons:abbrobotstudio',
  iconColor: '#7d5fff',
  url: 'https://godotengine.org/',
});

export const rust = createSkillFactory({
  name: 'Rust',
  icon: 'simple-icons:rust',
  iconColor: '#3ae374',
  url: 'https://www.rust-lang.org/es',
});

export const youtubeSkill = createSkillFactory({
  name: 'Youtube',
  icon: 'simple-icons:youtube',
  iconColor: '#ff3838',
  url: 'https://www.youtube.com/c/JosephEstebanCarrasco',
});

export const tiktok = createSkillFactory({
  name: 'Tiktok',
  icon: 'simple-icons:tiktok',
  iconColor: '#3d3d3d',
  url: 'https://www.tiktok.com/@josephestebandev',
});

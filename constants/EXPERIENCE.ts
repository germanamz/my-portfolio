import Position from '../types/Position';

const EXPERIENCE: Position[] = [
  {
    companyName: 'X-Team',
    title: 'Senior Software Developer',
    bulletPoints: [
      'Developed and maintained FrontEnd and BackEnd features.',
      'Performed code reviews to ensure quality standards.',
      'Optimized code to deliver the best performances possible.',
      'Analyzed points of opportunity to tackle performance issues.',
      'Improved 2D rendering with Pixijs.',
    ],
    isCurrent: true,
    from: new Date(2021, 9),
    technologies: ['Temporal', 'vue.js', 'Go Lang', 'Hapi.js', 'React', 'AWS', 'AWS Lambda', 'Nodejs', 'Postgres', 'Docker', 'Lit Element', 'AWS', 'WebRTC', 'Mediasoup', 'Nodejs', 'Firebase', 'EC2', 'PixiJs'],
  },
  {
    companyName: 'ConsumerTrack inc',
    title: 'Senior Software developer',
    bulletPoints: [
      'Developed and maintained Back End features and microservices to enhance scalability.',
      'Refactored internal libraries following clean code principles to improve performance and maintainability.',
      'Migrated Serverless microservices from a conventional environment to a containerized one to optimize infrastructure performance.',
      'Led the development and integration of an internal microservice that advanced data quality.',
      'Modernized a legacy codebase by migrating from PHP to JavaScript which improved functionality and standardization.',
      'Performed code reviews that ensured that the software was meeting its specifications and quality standards.',
    ],
    technologies: ['PHP', 'Python', 'React', 'Nextjs', 'AWS Lambda', 'AWS Kinesis', 'AWS SQS', 'AWS Dynamo', 'AWS CloudWatch', 'AWS Step Functions', 'AWS CloudFront'],
    from: new Date(2020, 2),
    to: new Date(2021, 9),
  },
  {
    companyName: 'Boy Scouts of America',
    title: 'Software Developer',
    technologies: ['Javascript', 'Nodejs', 'Hapi.js', 'SQL Server', 'Rest', 'AWS', 'jenkins', 'Verdaccio'],
    bulletPoints: [
      'Developed and maintained the organization\'s core API REST endpoints to ensure proper integration and functionality.',
      'Improved microservice architecture to allow microservices to work together to operate as a monolithic service.',
      'Refactored complex SQL queries to improve application performance.',
      'Performed code reviews to improve code readability, performance, and maintainability.',
      'Analyzed log data to detect anomalies in the API\'s performance and promptly resolve the issues.',
      'Deployed multiple APIs from a Monorepo to optimize version control',
    ],
    from: new Date(2019, 6),
    to: new Date(2020, 2),
  },
  {
    companyName: 'GE',
    title: 'Senior Software Developer',
    technologies: [
      'Javascript',
      'Nodejs',
      'Loopback 3',
      'Angular 4',
      'Typescript',
      'Mongodb',
      'Electron',
      'iOS',
      'Windows',
      'Rest',
      'AWS',
      'Elastic',
      'Cordova',
    ],
    bulletPoints: [
      'Worked on the entire full development lifecycle of an application to ensure a quality product from start to finish.',
      'Built features that enabled the app to communicate with other iterations of the same app.',
      'Indexed large quantities of PDFs to enable a function that could search the PDF files.',
      'Developed a Desktop and Web User Interface with Angular to promote an intuitive User Experience.',
      'Integrated with GE\'s intranet and authorization services to optimize security.',
      'Designed the application to be compatible with Desktop and Web browsers to increase cross-platform usability.',
    ],
    from: new Date(2016, 0),
    to: new Date(2017, 11),
  },
  {
    companyName: 'Continente Ferretero',
    title: 'e-commerce Platform Support',
    description: 'I contributed to the integration of the company\'s e-commerce site with its internal ERP to keep it updated and did maintenance to some frontend features.',
    bulletPoints: [
      'Worked on internal system integration to the companies e-commerce site.',
      'Maintained the e-commerce site information valid and healthy.',
    ],
    technologies: ['Javascript', 'JQuery', '3dCart'],
    from: new Date(2014, 11),
    to: new Date(2015,11)
  },
  {
    companyName: 'Freelance',
    title: 'Lead Developer',
    technologies: [
      'Javascript',
      'React',
      'React Native',
      'Docker',
      'Kubernetes',
      'GCP cloud run',
      'Mongodb Atlas',
      'Angular 7',
      'Loopback 3',
      'Typescript',
      'Rest',
      'Mongodb',
      'Codova',
      'Elastic',
      'Loopback 2',
      'AngularJs',
    ],
    bulletPoints: [
      'Gathered software requirements to determine the most suitable tech stack and implementation strategies for client\'s mobile applications.',
      'Developed a low-level Swift integration to React Native\'s JavaScript runtime that managed card expirations in a modal.',
      'Executed server updates to allow for a compatible integration with a mobile application.',
      'Performed code reviews to ensure optimal code quality that met client specifications and quality assurance protocols.',
      'Spearheaded the design and development of a mobile application.',
    ],
  },
];

export default EXPERIENCE;

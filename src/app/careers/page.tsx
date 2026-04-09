import type { Metadata } from 'next';
import CareersUI from './CareersUI';

export const metadata: Metadata = {
  title: 'Careers - MSquare Software',
  description: 'Join MSquare Software — exciting career opportunities in software development.',
};

const jobs = [
  {
    title: 'Junior Software Developer',
    type: 'Full Time',
    requirements: [
      '1-3 years of experience in full-stack development',
      'Basic understanding of MongoDB, Express.js, Angular, and Node.js',
      'Knowledge of HTML, CSS, JavaScript, and TypeScript',
      'Familiarity with RESTful APIs and JSON'
    ],
    eligibility: [
      'Assist in developing web and mobile applications using MEAN stack',
      'Write clean, maintainable, and efficient code',
      'Understanding of Git and version control systems',
      'Attractive salary package with flexible work environment'
    ],
    technologies: 'MongoDB, Express.js, Angular, Node.js, HTML, CSS, TypeScript',
  },
  {
    title: 'Senior Software Developer / Team Lead',
    type: 'Full Time',
    requirements: [
      '5+ years of experience in full-stack web and mobile development',
      'Expertise in MongoDB, Express.js, Angular, and Node.js',
      'Strong knowledge of RESTful APIs, GraphQL, and cloud deployment (AWS, Azure)',
      'Familiarity with Docker, Kubernetes, and CI/CD pipelines',
      'Hands-on experience in Agile development methodologies'
    ],
    eligibility: [
      'Architect, develop, and maintain web and mobile applications',
      'Lead the development team and conduct code reviews',
      'Experience with Flutter or React Native for cross-platform mobile development',
      'Competitive salary with growth opportunities and leadership roles'
    ],
    technologies: 'MEAN Stack, Docker, Kubernetes, AWS/Azure, GraphQL, React Native',
  }
];

export default function CareersPage() {
  return <CareersUI jobs={jobs} />;
}

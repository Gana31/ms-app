import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { title: 'Custom Software Solution - MSquare Software', description: 'Tailored custom software development services.' };

const features = [
  { title: 'Requirement Analysis', description: 'We start by deeply understanding your business processes, challenges, and goals before writing a single line of code.' },
  { title: 'Agile Development', description: 'Our agile methodology ensures you see progress quickly and can provide feedback at every stage of development.' },
  { title: 'Scalable Architecture', description: 'We build with the future in mind — systems that grow with your business without requiring costly overhauls.' },
  { title: 'Ongoing Support', description: 'Our relationship doesn\'t end at deployment. We provide continuous support, updates, and enhancements as your needs evolve.' },
];

export default function CustomSoftwarePage() {
  return (
    <IndustryUI 
      title="Custom Software Solution"
      subtitle="Bespoke software built precisely for your business needs, from concept to deployment."
      features={features}
      bgImage="/Images/service-2.jpg"
    />
  );
}

import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { title: 'DSA Solution - MSquare Software', description: 'Direct Selling Agent CRM solutions.' };

const features = [
  { title: 'Lead Management', description: 'Capture, track, and convert leads efficiently with our intuitive lead management system built specifically for DSAs.' },
  { title: 'Sales Pipeline', description: 'Visualize your entire sales pipeline at a glance and take action to move deals forward with real-time insights.' },
  { title: 'Commission Tracking', description: 'Automated commission calculations and transparent tracking so your team always knows what they\'ve earned.' },
  { title: 'Mobile-First', description: 'Access your CRM from anywhere with our mobile-optimized platform, perfect for DSAs who are always on the move.' },
];

export default function DSASolutionPage() {
  return (
    <IndustryUI 
      title="Direct Selling Agent (DSA) Solution"
      subtitle="Empowering DSAs with smart tools to manage leads, track sales, and grow their business."
      features={features}
      bgImage="/Images/service-2.jpg"
    />
  );
}

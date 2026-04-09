import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { title: 'Manufacturing Solution - MSquare Software', description: 'Manufacturing ERP and automation solutions.' };

const features = [
  { title: 'ERP Integration', description: 'Fully integrated ERP systems that connect your production floor to your back office — providing real-time visibility into operations.' },
  { title: 'Inventory Management', description: 'Automated inventory tracking from raw materials to finished goods, reducing waste and preventing stockouts.' },
  { title: 'Quality Control', description: 'Built-in quality management tools that ensure your products meet the highest standards before they leave the factory floor.' },
  { title: 'Supply Chain Optimization', description: 'End-to-end supply chain visibility and management tools that help reduce costs and improve delivery times.' },
];

export default function ManufacturingSolutionPage() {
  return (
    <IndustryUI 
      title="Manufacturing Solution"
      subtitle="Smart manufacturing technology to streamline production, inventory, and operations."
      features={features}
      bgImage="/Images/service-2.jpg"
    />
  );
}

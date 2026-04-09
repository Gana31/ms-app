import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { title: 'Banking Solution - MSquare Software', description: 'Banking and financial technology solutions.' };

const features = [
  { title: 'Core Banking Software', description: 'End-to-end core banking solutions built for co-operative banks, Nidhi banks, and credit societies — ensuring seamless operations and regulatory compliance.' },
  { title: 'Learning & Development', description: 'BankLnD empowers banking employees with structured online courses, certifications, and continuous learning programs tailored to the financial sector.' },
  { title: 'Digital Banking', description: 'Modernize your banking experience with digital platforms that improve customer engagement, reduce paperwork, and accelerate transaction processing.' },
  { title: 'Risk & Compliance', description: 'Robust risk management and compliance tracking tools that keep your institution ahead of regulatory requirements and industry standards.' },
];

export default function BankingSolutionPage() {
  return (
    <IndustryUI 
      title="Banking Solution"
      subtitle="Innovative technology solutions tailored for the banking and financial services sector."
      features={features}
      bgImage="/Images/service-2.jpg"
    />
  );
}

import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { title: 'Outdoor Advertising - MSquare Software', description: 'Outdoor advertising and hoarding management solutions.' };

const features = [
  { title: 'Hoarding Management', description: 'Track and manage all your hoarding inventory, bookings, and availability from a single centralized platform.' },
  { title: 'Campaign Planning', description: 'Plan and execute outdoor advertising campaigns with precision, targeting the right locations at the right time.' },
  { title: 'Billing & Invoicing', description: 'Automate billing cycles, generate invoices, and track payments for all your advertising clients effortlessly.' },
  { title: 'Analytics & Reports', description: 'Gain deep insights into campaign performance, ROI, and inventory utilization with comprehensive reporting tools.' },
];

export default function OutdoorAdvertisingPage() {
  return (
    <IndustryUI 
      title="Outdoor Advertising"
      subtitle="Digital solutions for managing outdoor advertising campaigns and hoardings at scale."
      features={features}
      bgImage="/Images/service-2.jpg"
    />
  );
}

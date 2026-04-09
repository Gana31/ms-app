import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Outdoor Advertising - MSquare Software', description: 'Outdoor advertising and hoarding management solutions.' };

const features = [
  { h: 'Hoarding Management', t: 'Track and manage all your hoarding inventory, bookings, and availability from a single centralized platform.' },
  { h: 'Campaign Planning', t: 'Plan and execute outdoor advertising campaigns with precision, targeting the right locations at the right time.' },
  { h: 'Billing & Invoicing', t: 'Automate billing cycles, generate invoices, and track payments for all your advertising clients effortlessly.' },
  { h: 'Analytics & Reports', t: 'Gain deep insights into campaign performance, ROI, and inventory utilization with comprehensive reporting tools.' },
];

export default function OutdoorAdvertisingPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/service-2.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Outdoor Advertising</h1>
          <p className="text-lg leading-relaxed">Digital solutions for managing outdoor advertising campaigns and hoardings at scale.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-[#FF9933]">{f.h}</h3>
              <p className="text-gray-600 leading-relaxed">{f.t}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/contact" className="inline-block bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors font-medium">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}

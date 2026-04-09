import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'DSA Solution - MSquare Software', description: 'Direct Selling Agent CRM solutions.' };

const features = [
  { h: 'Lead Management', t: 'Capture, track, and convert leads efficiently with our intuitive lead management system built specifically for DSAs.' },
  { h: 'Sales Pipeline', t: 'Visualize your entire sales pipeline at a glance and take action to move deals forward with real-time insights.' },
  { h: 'Commission Tracking', t: 'Automated commission calculations and transparent tracking so your team always knows what they\'ve earned.' },
  { h: 'Mobile-First', t: 'Access your CRM from anywhere with our mobile-optimized platform, perfect for DSAs who are always on the move.' },
];

export default function DSASolutionPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/service-2.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Direct Selling Agent (DSA) Solution</h1>
          <p className="text-lg leading-relaxed">Empowering DSAs with smart tools to manage leads, track sales, and grow their business.</p>
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

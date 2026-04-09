import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Manufacturing Solution - MSquare Software', description: 'Manufacturing ERP and automation solutions.' };

const features = [
  { h: 'ERP Integration', t: 'Fully integrated ERP systems that connect your production floor to your back office — providing real-time visibility into operations.' },
  { h: 'Inventory Management', t: 'Automated inventory tracking from raw materials to finished goods, reducing waste and preventing stockouts.' },
  { h: 'Quality Control', t: 'Built-in quality management tools that ensure your products meet the highest standards before they leave the factory floor.' },
  { h: 'Supply Chain Optimization', t: 'End-to-end supply chain visibility and management tools that help reduce costs and improve delivery times.' },
];

export default function ManufacturingSolutionPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/service-2.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Manufacturing Solution</h1>
          <p className="text-lg leading-relaxed">Smart manufacturing technology to streamline production, inventory, and operations.</p>
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

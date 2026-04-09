import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Banking Solution - MSquare Software', description: 'Banking and financial technology solutions.' };

const features = [
  { h: 'Core Banking Software', t: 'End-to-end core banking solutions built for co-operative banks, Nidhi banks, and credit societies — ensuring seamless operations and regulatory compliance.' },
  { h: 'Learning & Development', t: 'BankLnD empowers banking employees with structured online courses, certifications, and continuous learning programs tailored to the financial sector.' },
  { h: 'Digital Banking', t: 'Modernize your banking experience with digital platforms that improve customer engagement, reduce paperwork, and accelerate transaction processing.' },
  { h: 'Risk & Compliance', t: 'Robust risk management and compliance tracking tools that keep your institution ahead of regulatory requirements and industry standards.' },
];

export default function BankingSolutionPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/service-2.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Banking Solution</h1>
          <p className="text-lg leading-relaxed">Innovative technology solutions tailored for the banking and financial services sector.</p>
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

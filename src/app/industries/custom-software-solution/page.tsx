import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Custom Software Solution - MSquare Software', description: 'Tailored custom software development services.' };

const features = [
  { h: 'Requirement Analysis', t: 'We start by deeply understanding your business processes, challenges, and goals before writing a single line of code.' },
  { h: 'Agile Development', t: 'Our agile methodology ensures you see progress quickly and can provide feedback at every stage of development.' },
  { h: 'Scalable Architecture', t: 'We build with the future in mind — systems that grow with your business without requiring costly overhauls.' },
  { h: 'Ongoing Support', t: 'Our relationship doesn\'t end at deployment. We provide continuous support, updates, and enhancements as your needs evolve.' },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/service-2.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Custom Software Solution</h1>
          <p className="text-lg leading-relaxed">Bespoke software built precisely for your business needs, from concept to deployment.</p>
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

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Greenybook - MSquare Software', description: 'Environmental sustainability platform.' };

export default function GreenybookPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/lms-banner.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg leading-relaxed">Connecting like-minded individuals for environmental sustainability.</p>
        </div>
      </section>
      <section className="bg-gray-100 py-10 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Greenybook Platform</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">Greenybook is a unique platform that connects environmentally conscious individuals and organizations, promoting green initiatives and sustainable practices. It provides a space to share ideas, track environmental impact, and collaborate on eco-friendly projects.</p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">Join a growing community committed to building a sustainable future.</p>
              <Link href="https://greenybook.com/" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors font-medium">
                Visit Greenybook
              </Link>
            </div>
            <div className="text-center bg-[#28a745] p-5 rounded-lg">
              <Image src="/Images/clients/greenybook.png" alt="Greenybook" width={400} height={300} className="max-w-full h-auto mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

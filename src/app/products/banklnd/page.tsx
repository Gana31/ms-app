import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BankLnD - MSquare Software',
  description: 'BankLnD is an end-to-end learning and development platform for banking employees.',
};

export default function BankLndPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/lms-banner.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg leading-relaxed">At MSQUARE, we specialize in custom software development, IoT solutions, and flagship products like GymCloudSuite to help businesses achieve their goals in the digital era.</p>
        </div>
      </section>

      <section className="bg-gray-100 py-10 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Learning and Development for the Banking Domain</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">BankLnD is an end-to-end learning and development platform that empowers banking employees through online courses, certifications, and recognition. Tailored specifically for co-operative banks, Nidhi banks, and credit societies, BankLnD offers interactive learning modules that keep your team ahead of industry changes.</p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">For more information on how BankLnD can support your workforce, visit our platform.</p>
              <Link href="https://banklnd.com/home" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors font-medium">
                Visit BankLnD
              </Link>
            </div>
            <div className="text-center">
              <Image src="/Images/banklnd.png" alt="BankLnD" width={600} height={400} className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

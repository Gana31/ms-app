import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'AutomateMySchool - MSquare Software', description: 'Simplify Preprimary School Operations.' };

export default function AutomateSchoolPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/lms-banner.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg leading-relaxed">Simplifying school operations for the digital era.</p>
        </div>
      </section>
      <section className="bg-gray-100 py-10 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Simplify Preprimary School Operations</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">AutomateMySchool is a comprehensive school management platform designed specifically for preprimary schools. It automates administrative tasks, manages student records, tracks attendance, and keeps parents informed — all from one easy-to-use system.</p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">Give your school the tools it needs to thrive in the digital age.</p>
              <Link href="https://automatemyschool.com/" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors font-medium">
                Visit AutomateMySchool
              </Link>
            </div>
            <div className="text-center">
              <Image src="/Images/automatemyschool.jpg" alt="AutomateMySchool" width={600} height={400} className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

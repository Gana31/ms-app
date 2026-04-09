import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'GymCloudSuite - MSquare Software', description: 'Complete Fitness Management Platform.' };

export default function GymCloudSuitePage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/lms-banner.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg leading-relaxed">Complete fitness management solutions for gyms and wellness centers.</p>
        </div>
      </section>
      <section className="bg-gray-100 py-10 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Fitness Management Platform</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">GymCloudSuite is an all-in-one fitness management platform designed to streamline gym operations, enhance member experience, and drive business growth. From member management to billing and scheduling, GymCloudSuite handles it all.</p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">Trusted by fitness centers across India to improve efficiency and client management.</p>
              <Link href="https://gymcloudsuite.com/" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors font-medium">
                Visit GymCloudSuite
              </Link>
            </div>
            <div className="text-center">
              <Image src="/Images/gymcloudesuit.png" alt="GymCloudSuite" width={600} height={400} className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

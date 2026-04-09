import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MSquare Software',
  description: 'Learn about MSquare Software — our vision, mission, and core values.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[50vh] bg-cover bg-center"
        style={{ background: "url('/Images/aboutUs.jpg') no-repeat center center / cover" }}
      />

      {/* About */}
      <section className="container mx-auto px-4 mt-10 text-center">
        <h2 className="text-2xl font-bold">
          About <span className="text-[#ff7f00]">M</span>square
        </h2>
        {[
          'At MSquare Software, we are driven by a passion for technology and a commitment to delivering cutting-edge solutions to empower businesses worldwide. With expertise in software development, cloud-based solutions, and customized ERP platforms, we help organizations seamlessly transform their operations for the digital age.',
          'MSquare Software is a trusted name in delivering enterprise software solutions tailored to the needs of growing businesses. From small startups to large corporations, our software platforms are designed to offer scalability, security, and efficiency.',
          'Our flagship products, such as BankLnd.com, GymCloudSuite.com, BillMyHoarding.com, and MagiXERP, are trusted by businesses for their robust functionality and seamless integration.',
        ].map((p, i) => (
          <p key={i} className="mt-4 text-gray-600 leading-relaxed max-w-4xl mx-auto">{p}</p>
        ))}
      </section>

      {/* Vision / Mission / Values */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-500 leading-relaxed">
              To be a global leader in software innovation, empowering businesses to excel in an increasingly digital world.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">Our Mission</h2>
            <p className="text-gray-500 leading-relaxed">
              To develop world-class software solutions that transform businesses through efficiency, scalability, and long-term value.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">Core Values</h2>
            <ul className="space-y-3 text-gray-600">
              {[
                ['Customer-Centric Innovation:', 'Prioritizing customer needs and continually innovating to meet evolving requirements.'],
                ['Scalability:', 'Building solutions that grow with your business, adaptable for startups and enterprises alike.'],
                ['Excellence:', 'Delivering top-quality products for reliability and high performance.'],
              ].map(([title, desc]) => (
                <li key={title}>
                  <strong className="text-[#ff7f00]">{title}</strong> {desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <Image src="/Images/vission.jpg" alt="Vision Mission" width={600} height={450}
              className="rounded-lg max-w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}

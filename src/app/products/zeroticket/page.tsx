import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'ZeroTicket - MSquare Software', description: 'Ticket & Project Management Platform.' };

export default function ZeroTicketPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/lms-banner.jpg')" }}>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg leading-relaxed">Streamlined ticket and project management for modern teams.</p>
        </div>
      </section>
      <section className="bg-gray-100 py-10 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ticket &amp; Project Management Platform</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">ZeroTicket is a powerful ticket and project management platform that helps teams stay organized, collaborate effectively, and deliver projects on time. From issue tracking to sprint planning, ZeroTicket provides all the tools your team needs to succeed.</p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">Simplify project workflows and increase team productivity with ZeroTicket.</p>
              <Link href="https://zero-ticket.com/" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition-colors font-medium">
                Visit ZeroTicket
              </Link>
            </div>
            <div className="text-center">
              <Image src="/Images/zeroticket.jpg" alt="ZeroTicket" width={600} height={400} className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import ProductUI from '@/components/ProductUI';

export const metadata: Metadata = { title: 'ZeroTicket - MSquare Software', description: 'Ticket & Project Management Platform.' };

export default function ZeroTicketPage() {
  return (
    <ProductUI
      title="ZeroTicket"
      subtitle="Ticket & Project Management Platform"
      description={
        <>
          <p className="mb-4">ZeroTicket is a powerful ticket and project management platform that helps teams stay organized, collaborate effectively, and deliver projects on time. From issue tracking to sprint planning, ZeroTicket provides all the tools your team needs to succeed.</p>
          <p>Simplify project workflows and increase team productivity with ZeroTicket.</p>
        </>
      }
      productImage="/Images/zeroticket.jpg"
      visitLink="https://zero-ticket.com/"
      themeColor="#EF4444"
    />
  );
}

import type { Metadata } from 'next';
import ProductUI from '@/components/ProductUI';

export const metadata: Metadata = {
  title: 'BankLnD - MSquare Software',
  description: 'BankLnD is an end-to-end learning and development platform for banking employees.',
};

export default function BankLndPage() {
  return (
    <ProductUI
      title="BankLnD"
      subtitle="Learning and Development for the Banking Domain"
      description={
        <>
          <p className="mb-4">BankLnD is an end-to-end learning and development platform that empowers banking employees through online courses, certifications, and recognition. Tailored specifically for co-operative banks, Nidhi banks, and credit societies, BankLnD offers interactive learning modules that keep your team ahead of industry changes.</p>
          <p>For more information on how BankLnD can support your workforce, visit our platform.</p>
        </>
      }
      productImage="/Images/banklnd.png"
      visitLink="https://banklnd.com/home"
      themeColor="#FF9933"
    />
  );
}

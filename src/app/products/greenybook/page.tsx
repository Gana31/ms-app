import type { Metadata } from 'next';
import ProductUI from '@/components/ProductUI';

export const metadata: Metadata = { title: 'Greenybook - MSquare Software', description: 'Environmental sustainability platform.' };

export default function GreenybookPage() {
  return (
    <ProductUI
      title="Greenybook"
      subtitle="Environmental Sustainability Platform"
      description={
        <>
          <p className="mb-4">Greenybook is a unique platform that connects environmentally conscious individuals and organizations, promoting green initiatives and sustainable practices. It provides a space to share ideas, track environmental impact, and collaborate on eco-friendly projects.</p>
          <p>Join a growing community committed to building a sustainable future.</p>
        </>
      }
      productImage="/Images/clients/greenybook.png"
      visitLink="https://greenybook.com/"
      themeColor="#10B981"
    />
  );
}

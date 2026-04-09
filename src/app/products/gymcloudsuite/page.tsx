import type { Metadata } from 'next';
import ProductUI from '@/components/ProductUI';

export const metadata: Metadata = { title: 'GymCloudSuite - MSquare Software', description: 'Complete Fitness Management Platform.' };

export default function GymCloudSuitePage() {
  return (
    <ProductUI
      title="GymCloudSuite"
      subtitle="Fitness Management Platform"
      description={
        <>
          <p className="mb-4">GymCloudSuite is an all-in-one fitness management platform designed to streamline gym operations, enhance member experience, and drive business growth. From member management to billing and scheduling, GymCloudSuite handles it all.</p>
          <p>Trusted by fitness centers across India to improve efficiency and client management.</p>
        </>
      }
      productImage="/Images/gymcloudesuit.png"
      visitLink="https://gymcloudsuite.com/"
      themeColor="#A855F7"
    />
  );
}

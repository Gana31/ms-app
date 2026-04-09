import type { Metadata } from 'next';
import ProductUI from '@/components/ProductUI';

export const metadata: Metadata = { title: 'SmartDSACRM - MSquare Software', description: 'SmartDSACRM - CRM for Direct Selling Agents.' };

export default function SmartDSACRMPage() {
  return (
    <ProductUI
      title="SmartDSACRM"
      subtitle="CRM for Direct Selling Agents"
      description={
        <>
          <p className="mb-4">SmartDSACRM is a comprehensive CRM platform built specifically for Direct Selling Agents (DSAs). It streamlines lead management, tracks sales activities, and provides actionable insights to boost productivity and close more deals faster.</p>
          <p>Manage your entire DSA operation from a single, powerful platform.</p>
        </>
      }
      productImage="/Images/smartdsa.jpg"
      visitLink="https://smartdsacrm.com/"
      themeColor="#3B82F6"
    />
  );
}

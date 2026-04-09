import type { Metadata } from 'next';
import ProductUI from '@/components/ProductUI';

export const metadata: Metadata = { title: 'AutomateMySchool - MSquare Software', description: 'Simplify Preprimary School Operations.' };

export default function AutomateSchoolPage() {
  return (
    <ProductUI
      title="AutomateMySchool"
      subtitle="Simplify Preprimary School Operations"
      description={
        <>
          <p className="mb-4">AutomateMySchool is a comprehensive school management platform designed specifically for preprimary schools. It automates administrative tasks, manages student records, tracks attendance, and keeps parents informed — all from one easy-to-use system.</p>
          <p>Give your school the tools it needs to thrive in the digital age.</p>
        </>
      }
      productImage="/Images/automatemyschool.jpg"
      visitLink="https://automatemyschool.com/"
      themeColor="#EAB308"
    />
  );
}

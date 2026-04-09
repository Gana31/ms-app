import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Trademarks - MSquare Software' };

export default function TrademarksPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/service-2.jpg')" }}>
        <div className="container mx-auto"><h1 className="text-4xl font-bold">Trademarks</h1></div>
      </section>
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Trademarks</h2>
        <p className="text-gray-600 leading-relaxed mb-4">MSquare Software and its product names, including BankLnD, SmartDSACRM, GymCloudSuite, ZeroTicket, AutomateMySchool, and MagiXERP, are trademarks of MSquare Software Pvt. Ltd.</p>
        <p className="text-gray-600 leading-relaxed mb-4">These trademarks may not be used without the prior written permission of MSquare Software.</p>
        <p className="text-gray-600 leading-relaxed">
          For trademark inquiries:{' '}
          <a href="mailto:info@msquaresoftware.com" className="text-[#FF9933] hover:underline">info@msquaresoftware.com</a>.
        </p>
      </section>
    </>
  );
}

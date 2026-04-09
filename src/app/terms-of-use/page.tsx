import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Use - MSquare Software' };

export default function TermsPage() {
  return (
    <>
      <section className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/service-2.jpg')" }}>
        <div className="container mx-auto"><h1 className="text-4xl font-bold">Terms of Use</h1></div>
      </section>
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Terms of Use</h2>
        <p className="text-gray-600 leading-relaxed mb-4">By accessing or using MSquare Software&apos;s website and services, you agree to be bound by these Terms of Use.</p>
        {[
          { title: 'Acceptance of Terms', text: 'Your use of our services constitutes acceptance of these terms. If you do not agree, please do not use our services.' },
          { title: 'Intellectual Property', text: 'All content on this website, including text, graphics, logos, and software, is the property of MSquare Software and is protected by applicable intellectual property laws.' },
        ].map((s, i) => (
          <div key={i}>
            <h3 className="text-xl font-bold mb-3 mt-6 text-[#ff7f00]">{s.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{s.text}</p>
          </div>
        ))}
        <h3 className="text-xl font-bold mb-3 mt-6 text-[#ff7f00]">Limitation of Liability</h3>
        <p className="text-gray-600 leading-relaxed">
          MSquare Software shall not be liable for any indirect, incidental, or consequential damages. Contact us at{' '}
          <a href="mailto:info@msquaresoftware.com" className="text-[#FF9933] hover:underline">info@msquaresoftware.com</a>.
        </p>
      </section>
    </>
  );
}

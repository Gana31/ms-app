import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy - MSquare Software' };

export default function PrivacyPage() {
  return (
    <>
      <section className="min-h-[40vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/privacy-2.jpg')" }} />
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
        {[
          { title: null, text: 'At MSquare Software, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.' },
          { title: 'Information We Collect', text: 'We may collect information such as your name, email address, phone number, and company details when you contact us or use our services. We also collect usage data to improve our platforms.' },
          { title: 'How We Use Your Information', text: 'Your information is used to provide and improve our services, communicate with you about updates, and ensure the security of our platforms. We do not sell your personal data to third parties.' },
        ].map((s, i) => (
          <div key={i}>
            {s.title && <h3 className="text-xl font-bold mb-3 mt-6 text-[#ff7f00]">{s.title}</h3>}
            <p className="text-gray-600 leading-relaxed mb-4">{s.text}</p>
          </div>
        ))}
        <h3 className="text-xl font-bold mb-3 mt-6 text-[#ff7f00]">Contact Us</h3>
        <p className="text-gray-600 leading-relaxed">
          If you have any questions, please contact us at{' '}
          <a href="mailto:info@msquaresoftware.com" className="text-[#FF9933] hover:underline">info@msquaresoftware.com</a>.
        </p>
      </section>
    </>
  );
}

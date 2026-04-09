import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - MSquare Software',
  description: 'Contact MSquare Software for custom software solutions and inquiries.',
};

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="text-white text-center py-24 px-12 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/contact.jpg')" }}
      >
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div className="bg-gray-50 p-6 rounded-lg min-h-[300px]">
            {[
              { icon: 'bi bi-geo-alt-fill', label: 'Office Address', value: 'B416, 4th Floor, Gera Imperium Gateway Nashik Phata Metro Station, Pimpri-Chinchwad, Pune, Maharashtra 411034, India' },
              { icon: 'bi bi-telephone-fill', label: 'Phone Number', value: '+91 9765498660' },
              { icon: 'bi bi-envelope-fill', label: 'Email Address', value: 'info@msquaresoftware.com', isEmail: true },
            ].map((item, i) => (
              <div key={i} className={i > 0 ? 'mt-5' : ''}>
                <h4 className="font-bold mb-2">
                  <i className={`${item.icon} text-[#ff7f00] mr-2 text-lg`}></i>
                  {item.label}
                </h4>
                {item.isEmail ? (
                  <p><a href={`mailto:${item.value}`} className="text-gray-800 hover:text-gray-600 break-all">{item.value}</a></p>
                ) : (
                  <p className="text-gray-600">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-2">We would love to work with you!</p>
            <p className="text-gray-600 mb-2">
              <strong>Please mail your requirements to </strong>
              <a href="mailto:info@msquaresoftware.com" className="text-[#FF9933]">info@msquaresoftware.com</a>
              , to hear from our consultants within 24 working hours.
            </p>
            <p className="text-gray-600 mb-4">
              For inquiries about our custom software solutions or to learn more about our products, contact us today.
            </p>
            <Image src="/Images/mailus.png" alt="Contact MSquare Software" width={600} height={400}
              className="max-w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}

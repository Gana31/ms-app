'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const serviceCards = [
  {
    bg: '/Images/home-web-agency-img-03.jpg',
    num: '01',
    title: 'Tailored Enterprise Software',
    preview: 'We offer bespoke software solutions tailored to your business needs.',
    icon: 'fa-lightbulb',
    details: {
      title: 'Custom Software Development',
      desc: 'We offer bespoke software solutions tailored to your business needs, including:',
      items: ['Mahindra', 'Fusion', 'Greeny Book', 'Pralekh', 'Web & Mobile Applications', 'Enterprise Solutions', 'Cloud Integration'],
    },
  },
  {
    bg: '/Images/customize-app.png',
    num: '02',
    title: 'SaaS Platforms',
    preview: 'Leverage IoT to transform and automate your business processes.',
    icon: 'fa-mobile',
    details: {
      title: 'SaaS Platform Development',
      desc: 'Integrate intelligent technology with our IoT solutions:',
      items: ['BankLnd', 'SmartDSACRM', 'GymCloudSuite', 'Greenybook.com', 'ZeroTicket.com', 'AutomateMySchool.com'],
    },
  },
  {
    bg: '/Images/app-dev.jpg',
    num: '03',
    title: 'AI & Blockchain ERP & SAP Implementation',
    preview: 'Innovative solutions for modern product design and development.',
    icon: 'fa-arrow-pointer',
    details: {
      title: 'AI & Blockchain Solutions',
      desc: 'We offer bespoke software solutions tailored to your business needs:',
      items: ['CM Review System', 'Disaster management system'],
    },
  },
];

type TestimonialItem = {
  logo?: string;
  containerBg?: string;
  logoStyle?: React.CSSProperties;
  text: string;
  role: string;
  name: string;
  company: string;
};

const testimonials: TestimonialItem[][] = [
  [
    { logo: '/Images/clients/mahindra-logo.png', logoStyle: { width: 170, height: 50, objectFit: 'contain' }, text: 'We are proud to announce the successful development and launch of the Mahindra Video App and Website, designed exclusively to showcase and promote Mahindra\'s powerful stories, vehicles, and innovations.', role: 'Business Head', name: 'Mr. Jitendra Vasalkar', company: 'Mahindra' },
    { logo: '/Images/clients/fusion.png', logoStyle: { width: 150, height: 50, objectFit: 'contain' }, text: 'Fusion Finance is a smart and comprehensive digital application designed to manage all your monthly payments in one place.', role: 'Sr. Business Analyst', name: 'Ritik Gulabrani', company: 'Fusion Finance' },
    { logo: '/Images/clients/gurukul.png', containerBg: '#754c29', logoStyle: { width: 130, height: 40, objectFit: 'contain' }, text: 'Gurukul LnD has been a game-changer for our employee training programs, offering a comprehensive suite of learning tools and certifications.', role: 'IT Head', name: 'Mayank Rajpal', company: 'Gurukul' },
  ],
  [
    { logo: '/Images/clients/pralekh-logo-white.png', containerBg: '#4a154b', logoStyle: { width: 130, height: 40, objectFit: 'contain' }, text: 'Pralekh\'s innovative solutions have significantly enhanced our workflow efficiency and overall project management.', role: 'Business Owner', name: 'Harsh Tak', company: 'Pralekh' },
    { logo: '/Images/clients/greenybook.png', containerBg: '#28a745', logoStyle: { width: 150, height: 50, objectFit: 'contain' }, text: 'GreenyBook has provided a fantastic platform for us to connect with like-minded individuals and promote environmental sustainability.', role: 'Admin Head', name: 'Saurav Pawar', company: 'GreenyBook' },
    { logo: '/Images/clients/gym.png', logoStyle: { width: 180, height: 50, objectFit: 'contain' }, text: 'GymCloudSuite has significantly improved our gym\'s efficiency and client management. It\'s an essential tool for our operations.', role: 'Owner', name: 'Ashutosh Agrawal', company: 'Power Health Club' },
  ],
  [
    { logo: '/Images/clients/smartdsa.png', logoStyle: { width: 150, height: 50, objectFit: 'contain' }, text: 'DSACRM has greatly enhanced our ability to manage and track sales activities. It\'s an indispensable asset for our DSAs.', role: 'Admin Head', name: 'Jaiprit Singh', company: 'Mintsteer Pvt Ltd' },
  ],
];

export default function ServicesPage() {
  const [testIdx, setTestIdx] = useState(0);

  return (
    <>
      {/* Banner */}
      <section
        className="text-white py-24 px-5 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/Images/service-2.jpg')" }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-5/12">
            <h2 className="text-3xl font-bold text-[#222]">
              MSquare for <br /><span className="text-[#f7931e]">Services</span>
            </h2>
          </div>
          <div className="md:w-7/12">
            <p className="text-gray-600 text-base leading-relaxed">
              Welcome to, where cutting-edge technology meets creative brilliance. We are a dynamic software
              company dedicated to shaping the digital landscape through product development. Our passion for
              seamless user experiences extends to mobile app development, ensuring your brand stays at the
              forefront of innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="container mx-auto px-4 my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-cover bg-center h-[400px] text-white transition-all duration-300 hover:-translate-y-1 group"
              style={{ backgroundImage: `url('${card.bg}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10"></div>

              {/* Default visible — fades out on hover */}
              <div className="absolute top-5 left-5 z-20 flex flex-col transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-5">
                <span className="text-2xl font-bold mb-2">{card.num}</span>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-base">{card.preview}</p>
                <i className={`fa-solid ${card.icon} text-4xl mt-3`}></i>
              </div>

              {/* Hover reveal */}
              <div className="absolute bottom-5 left-5 right-5 z-20 transition-all duration-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-lg font-bold">{card.num}</span>
                <h3 className="text-2xl font-bold mb-2">{card.details.title}</h3>
                <p className="text-sm mb-2">{card.details.desc}</p>
                <ul className="list-none p-0 mb-3">
                  {card.details.items.map((item, j) => (
                    <li key={j} className="text-sm py-0.5">• {item}</li>
                  ))}
                </ul>
                <Link href="/contact" className="text-white text-sm underline hover:text-[#FF9933]">
                  EXPLORE SERVICES
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Heading */}
      <section className="text-center py-12 px-5">
        <h6 className="font-bold uppercase text-[#333] tracking-widest text-sm">TESTIMONIALS</h6>
        <h2 className="text-3xl font-bold text-[#222] mt-2">
          We&apos;re Trusted by <span className="text-orange-500">Clients</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base mt-3">
          Our clients share their experiences of transformation and growth. Unfiltered feedback and the true
          testament to our service quality.
        </p>
      </section>

      {/* Testimonials Carousel */}
      <div className="bg-gradient-to-r from-[#eeeeee] to-[#dcdcdc] py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials[testIdx].map((t, i) => (
              <div key={i}
                className="bg-white p-6 shadow-lg min-h-[330px] flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="mb-3">
                  <div
                    className="flex items-center justify-center p-2 mb-4"
                    style={{ backgroundColor: t.containerBg || 'transparent', width: 'fit-content' }}
                  >
                    {t.logo && (
                      <Image src={t.logo} alt={t.company}
                        width={(t.logoStyle as { width?: number })?.width ?? 150}
                        height={(t.logoStyle as { height?: number })?.height ?? 50}
                        style={t.logoStyle} />
                    )}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
                </div>
                <div>
                  <strong className="text-gray-800">{t.role}</strong>
                  <p className="text-sm mb-0">{t.name}</p>
                  <small className="text-gray-500">{t.company}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => setTestIdx(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-[#ff6600] text-white flex items-center justify-center hover:bg-[#e65c00] transition-colors"
              aria-label="Previous">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              onClick={() => setTestIdx(prev => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-[#ff6600] text-white flex items-center justify-center hover:bg-[#e65c00] transition-colors"
              aria-label="Next">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

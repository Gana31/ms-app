'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const serviceCards = [
  {
    bg: '/Images/home-web-agency-img-03.jpg',
    num: '01',
    title: 'Tailored Enterprise Software',
    preview: 'We offer bespoke software solutions tailored to your business needs.',
    icon: 'fa-regular fa-lightbulb',
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
    preview: 'Leverage smart solutions to transform and automate your business processes.',
    icon: 'fa-solid fa-mobile-screen-button',
    details: {
      title: 'SaaS Platform Development',
      desc: 'Integrate intelligent technology with our solutions:',
      items: ['BankLnd', 'SmartDSACRM', 'GymCloudSuite', 'Greenybook.com', 'ZeroTicket.com', 'AutomateMySchool.com'],
    },
  },
  {
    bg: '/Images/app-dev.jpg',
    num: '03',
    title: 'AI, SAP & Blockchain',
    preview: 'Innovative solutions for modern product design and development.',
    icon: 'fa-solid fa-microchip',
    details: {
      title: 'AI & Enterprise Solutions',
      desc: 'We offer advanced technological infrastructure matched to your scale:',
      items: ['ERP Software', 'CM Review System', 'Disaster management system', 'Data Analytics'],
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ServicesPage() {
  const [testIdx, setTestIdx] = useState(0);

  return (
    <div className="bg-[#fafafa]">
      {/* ── Banner ── */}
      <section className="relative pt-32 pb-48 bg-[#0b0f19] overflow-hidden text-center">
        {/* Decorative Grid and Glow */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF9933]/15 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse"></span>
            <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Expertise</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#ffb86d]">Services.</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* ── Intro ── */}
      <section className="container mx-auto px-6 max-w-7xl -mt-20 relative z-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row gap-10 items-center justify-between border border-gray-100"
        >
          <div className="md:w-5/12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              MSquare for <br />
              <span className="text-[#FF9933]">Services</span>
            </h2>
          </div>
          <div className="md:w-7/12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to where cutting-edge technology intertwines with immense creative brilliance. We are a dynamic 
              engineering team dedicated to transforming your business through meticulous, tailored software architectures 
              and highly performant cross-platform integrations.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Service Cards ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {serviceCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden bg-gray-900 rounded-[2.5rem] h-[480px] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,153,51,0.2)]"
              >
                {/* Background Image logic */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 mix-blend-overlay"
                  style={{ backgroundImage: `url('${card.bg}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-[#FF9933]/0 group-hover:bg-[#FF9933]/20 transition-colors duration-500"></div>

                {/* Number Badge */}
                <div className="absolute top-8 right-8 text-white/20 font-bold text-6xl italic pointer-events-none group-hover:text-white/40 transition-colors">
                  {card.num}
                </div>

                {/* Default Visible Layer */}
                <div className="absolute inset-x-8 bottom-8 z-20 flex flex-col transition-all duration-500 transform group-hover:opacity-0 group-hover:-translate-y-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF9933] text-white flex items-center justify-center text-3xl mb-6 shadow-lg">
                    <i className={card.icon}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{card.preview}</p>
                </div>

                {/* Expanded Hover Layer */}
                <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end transition-all duration-500 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-sm bg-black/60 pt-16">
                  <h3 className="text-2xl font-bold mb-3 text-[#FF9933] shrink-0">{card.details.title}</h3>
                  <p className="text-sm text-gray-200 mb-4 shrink-0">{card.details.desc}</p>
                  
                  {/* Scrollable list container */}
                  <div className="flex-1 overflow-hidden min-h-[100px] mb-6">
                    <ul className="space-y-2 h-full overflow-y-auto pr-2 custom-scrollbar">
                      {card.details.items.map((item, j) => (
                        <li key={j} className="text-sm text-white flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933] mt-1.5 shrink-0"></span> <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 text-white font-bold bg-[#FF9933] w-fit px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
                    Start Project <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 relative">
         <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF9933]/5 rounded-full blur-[100px] -translate-y-1/2"></div>
         
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 mb-4">
              <span className="text-[#FF9933] text-xs font-bold tracking-widest uppercase">Verified Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#ffb86d]">Industry Leaders</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Unfiltered feedback and the true testament to our service quality.
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={testIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {testimonials[testIdx].map((t, i) => (
                  <div key={i} className="bg-white rounded-3xl p-8 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                    <div>
                      <div 
                        className="flex items-center justify-center p-3 mb-8 rounded-xl h-[80px]"
                        style={{ backgroundColor: t.containerBg || '#f8f9fa' }}
                      >
                        {t.logo ? (
                          <Image src={t.logo} alt={t.company} width={150} height={50} style={{...t.logoStyle, maxHeight: '100%'}} />
                        ) : (
                          <span className="font-bold text-gray-400">{t.company}</span>
                        )}
                      </div>
                      <i className="fa-solid fa-quote-left text-4xl text-[#FF9933]/20 mb-4 block"></i>
                      <p className="text-gray-600 text-base leading-relaxed italic mb-8">{t.text}</p>
                    </div>
                    <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                       <div>
                         <strong className="text-gray-900 block font-bold">{t.name}</strong>
                         <span className="text-sm text-[#FF9933] font-medium">{t.role}</span>
                       </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={() => setTestIdx(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-14 h-14 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#FF9933] hover:text-white hover:border-[#FF9933] transition-all shadow-sm"
                aria-label="Previous">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                onClick={() => setTestIdx(prev => (prev + 1) % testimonials.length)}
                className="w-14 h-14 rounded-full bg-[#FF9933] text-white flex items-center justify-center hover:bg-[#ff881a] shadow-[0_0_20px_rgba(255,153,51,0.4)] transition-all"
                aria-label="Next">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

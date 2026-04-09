'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { bg: '/Images/home-startup-slider-bg-01.jpg', h2: 'Driving Business Innovation through Tailored Software Solutions', p: 'Discover Our Solutions' },
  { bg: '/Images/home-startup-slider-bg-02.jpg', h2: 'Scalable High-Impact Solutions', p: 'Tailored Solutions Boosting Performance' },
  { bg: '/Images/home-startup-slider-bg-03.jpg', h2: 'Empowering Business With Software', p: 'Request a Consultation' },
];

const products = [
  { img: '/Images/banklnd.png', name: 'BankLnD', desc: 'Learning and Development for the Banking Domain', href: 'https://banklnd.com/home' },
  { img: '/Images/smartdsa.jpg', name: 'SmartDSACRM', desc: 'CRM for Direct Selling Agents', href: 'https://smartdsacrm.com/' },
  { img: '/Images/gymcloudesuit.png', name: 'GymCloudSuite', desc: 'Fitness Management Platform', href: 'https://gymcloudsuite.com/' },
  { img: '/Images/zeroticket.jpg', name: 'ZeroTicket', desc: 'Ticket & Project Management Platform', href: 'https://zero-ticket.com/' },
  { img: '/Images/automatemyschool.jpg', name: 'Automate My School', desc: 'Simplify Preprimary School Operation', href: 'https://automatemyschool.com/' },
];

const mobileImages = [
  { src: '/Images/rss.jpg', alt: 'RSS App' },
  { src: '/Images/shakti-mandal.jpg', alt: 'Shakti Mandal App' },
  { src: '/Images/fusion-app.jpg', alt: 'Fusion App' },
  { src: '/Images/vikram-login.jpg', alt: 'Vikram Login' },
  { src: '/Images/vikram-tea.jpg', alt: 'Vikram Tea' },
  { src: '/Images/timo-splash.jpg', alt: 'Timo Splash' },
  { src: '/Images/timo-login.jpg', alt: 'Timo Login' },
];

const clients = [
  { src: '/Images/clients/mahindra-logo.png', alt: 'Mahindra' },
  { src: '/Images/clients/fusion.png', alt: 'Fusion' },
  { src: '/Images/clients/gurukul.png', alt: 'Gurukul' },
  { src: '/Images/clients/pralekh-logo-white.png', alt: 'Pralekh', bg: '#4a154b' },
  { src: '/Images/clients/greenybook.png', alt: 'Greenybook' },
  { src: '/Images/clients/1.png', alt: 'Client 1' },
  { src: '/Images/clients/2.png', alt: 'Client 2' },
  { src: '/Images/clients/3.png', alt: 'Client 3' },
  { src: '/Images/clients/4.png', alt: 'Client 4' },
  { src: '/Images/clients/5.png', alt: 'Client 5' },
  { src: '/Images/clients/6.png', alt: 'Client 6' },
  { src: '/Images/clients/logo - Copy.png', alt: 'BharatCapitAZ' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setMobileIdx(p => (p + 1) % mobileImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  // Product Auto Slider
  useEffect(() => {
    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (trackRef.current) {
        scrollAmount += 370;
        if (scrollAmount >= trackRef.current.scrollWidth - trackRef.current.clientWidth) {
          scrollAmount = 0; // Reset to start
        }
        trackRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollProducts = (dir: 'prev' | 'next') => {
    trackRef.current?.scrollBy({ left: dir === 'next' ? 370 : -370, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Hero Slider ── */}
      <section className="w-full relative overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url('${slide.bg}')`,
              display: i === currentSlide ? 'flex' : 'none',
              height: '90vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            {/* Content card */}
            <div className="absolute z-20 w-full px-4 max-w-7xl mx-auto flex items-center h-full">
              <div className="bg-white p-8 shadow-md flex flex-col gap-4 relative md:left-[120px] max-w-[500px]"
                style={{ minHeight: '220px' }}>
                <h2 className="text-[1.8rem] font-bold text-[#333]">{slide.h2}</h2>
                <p className="text-base text-[#555]">{slide.p}</p>
                <Link href="/contact"
                  className="w-[200px] text-center bg-[#FF9933] text-white py-2 font-normal hover:bg-[#cc7a00] transition-colors text-sm">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-[#FF9933]' : 'bg-white/60'}`} />
          ))}
        </div>
      </section>

      {/* ── Our Products ── */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#FF9933]">Our Products</h2>
            <div className="flex gap-2">
              <button onClick={() => scrollProducts('prev')}
                className="w-[42px] h-[42px] rounded-full bg-[#FF9933] text-white text-lg flex items-center justify-center hover:bg-[#cc7a00] transition-colors"
                aria-label="Previous">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button onClick={() => scrollProducts('next')}
                className="w-[42px] h-[42px] rounded-full bg-[#FF9933] text-white text-lg flex items-center justify-center hover:bg-[#cc7a00] transition-colors"
                aria-label="Next">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div ref={trackRef}
              className="flex gap-8 overflow-x-auto pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {products.map((p, i) => (
                <div key={i}
                  className="flex-none w-[340px] bg-white rounded-[20px] p-6 shadow-lg text-center cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_12px_35px_rgba(255,153,51,0.25)] border border-gray-100">
                  <div className="mb-4 overflow-hidden rounded-[15px]">
                    <Image src={p.img} alt={p.name} width={340} height={200}
                      className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">{p.name}</h4>
                  <p className="text-gray-500 text-sm mb-5 min-h-[48px]">{p.desc}</p>
                  <Link href={p.href} target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-[#FF9933] text-white font-semibold rounded-full px-5 py-2.5 text-sm shadow-md hover:bg-[#cc7a00] hover:-translate-y-0.5 transition-all">
                    Visit {p.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ERP Banner ── */}
      <section className="w-full pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-[#F2F2F2] p-12 flex items-center justify-center min-h-[400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
              <div>
                <h5 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>India Ka Apna ERP!</h5>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  GST-ready inventory &amp; accounting software that helps you generate invoices easily,
                  manage your accounts, reconcile bank transactions, track inventory accurately,
                  generate 1000&apos;s of reports &amp; MIS, and file GST returns effortlessly.
                </p>
                <Link href="/products/banklnd"
                  className="inline-block bg-[#FF9933] text-white py-2 px-4 font-medium w-[180px] text-center hover:bg-[#cc7a00] transition-colors">
                  Visit Our Products
                </Link>
              </div>
              <div className="flex justify-center">
                <Image src="/Images/msquare-magix.png" alt="MagiXERP" width={600} height={400}
                  className="w-full max-w-[500px] h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile Experience ── */}
      <section className="bg-[#ebebeb] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-[#FF9933] font-bold mb-1">MOBILE EXPERIENCE</h4>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Mobile apps that enhance visual experience</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                At MSquare Software, we build visually appealing and user-friendly mobile applications,
                as per the latest technology standards.
              </p>
              <div className="flex gap-2">
                <button onClick={() => setMobileIdx(p => (p - 1 + mobileImages.length) % mobileImages.length)}
                  className="w-10 h-10 rounded-full bg-[#888] text-white flex items-center justify-center hover:bg-[#555] transition-colors"
                  aria-label="Previous">
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button onClick={() => setMobileIdx(p => (p + 1) % mobileImages.length)}
                  className="w-10 h-10 rounded-full bg-[#888] text-white flex items-center justify-center hover:bg-[#555] transition-colors"
                  aria-label="Next">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src={mobileImages[mobileIdx].src} alt={mobileImages[mobileIdx].alt}
                width={300} height={500}
                className="max-h-[500px] w-auto object-contain transition-opacity duration-400" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Logos ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h4 className="text-[#FF9933] font-bold mb-6 text-center md:text-left">Trusted by companies</h4>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {clients.map((c, i) => (
              <div key={i} className="flex items-center justify-center"
                style={{ backgroundColor: c.bg || 'transparent', padding: c.bg ? '5px 10px' : '0' }}>
                <Image src={c.src} alt={c.alt} width={150} height={80}
                  className="w-auto h-12 md:h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, Variants } from 'framer-motion';

const baseProducts = [
  { id: 'p1', img: '/Images/banklnd.png', name: 'BankLnD', desc: 'Learning and Development for the Banking Domain', href: 'https://banklnd.com/home' },
  { id: 'p2', img: '/Images/smartdsa.jpg', name: 'SmartDSACRM', desc: 'CRM for Direct Selling Agents', href: 'https://smartdsacrm.com/' },
  { id: 'p3', img: '/Images/gymcloudesuit.png', name: 'GymCloudSuite', desc: 'Fitness Management Platform', href: 'https://gymcloudsuite.com/' },
  { id: 'p4', img: '/Images/zeroticket.jpg', name: 'Ticket & Project Management', desc: 'Internal ticketing & task tracking platform.', href: 'https://zero-ticket.com/' },
  { id: 'p5', img: '/Images/automatemyschool.jpg', name: 'Automate My School', desc: 'Simplify Preprimary School Operations.', href: 'https://automatemyschool.com/' },
];

const slides = [
  { 
    bg: '/Images/home-startup-slider-bg-01.jpg', 
    title: 'Driving Innovation',
    highlight: 'Tailored Software',
    p: 'Empower your enterprise with scalable, modern technology designed to accelerate your growth.' 
  },
  { 
    bg: '/Images/home-startup-slider-bg-02.jpg', 
    title: 'Scalable Solutions',
    highlight: 'High-Impact Results',
    p: 'Transform your operations with enterprise-grade solutions tailored exactly to your unique business needs.' 
  },
  { 
    bg: '/Images/home-startup-slider-bg-03.jpg', 
    title: 'Empowering Businesses',
    highlight: 'With Modern Tech',
    p: 'Partner with us to build out the future of your digital infrastructure natively.' 
  },
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

// Reusable animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Create a triple-length array for seamless infinite manual scrolling
  const infiniteProducts = [...baseProducts, ...baseProducts, ...baseProducts];

  // Auto Slider for Hero
  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Auto Slider for Mobile App screens
  useEffect(() => {
    const t = setInterval(() => setMobileIdx(p => (p + 1) % mobileImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  // Initialize scroll position to the middle array to allow infinite left/right
  useEffect(() => {
    if (trackRef.current) {
      // 340 width + 32 gap = 372px per item
      const itemWidth = 372; 
      const startPos = baseProducts.length * itemWidth;
      trackRef.current.scrollLeft = startPos;
    }
  }, []);

  const slideProducts = (dir: 'next' | 'prev') => {
    if (trackRef.current) {
      const itemWidth = 340 + 32; // width + gap
      const currentScroll = trackRef.current.scrollLeft;
      const targetScroll = dir === 'next' ? currentScroll + itemWidth : currentScroll - itemWidth;
      
      trackRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });

      // Silently reset if we reach the padded edges
      setTimeout(() => {
        if (!trackRef.current) return;
        const middleStart = baseProducts.length * itemWidth;
        const middleEnd = (baseProducts.length * 2) * itemWidth;
        
        if (trackRef.current.scrollLeft <= itemWidth) {
          trackRef.current.scrollLeft += middleStart;
        } else if (trackRef.current.scrollLeft >= middleEnd) {
          trackRef.current.scrollLeft -= middleStart;
        }
      }, 500); // adjust slightly longer than smooth scroll duration
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideProducts('next');
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── Hero Slider ── */}
      <section className="w-full relative overflow-hidden h-[90vh] bg-black">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: i === currentSlide ? 1 : 0, 
              zIndex: i === currentSlide ? 10 : 0
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center"
          >
            {/* Background Image scaling slowly */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.bg}')` }}
              animate={{ scale: i === currentSlide ? 1.05 : 1 }}
              transition={{ duration: 8, ease: "linear" }}
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            
            <div className="w-full px-4 max-w-7xl mx-auto relative z-20">
              <div className="max-w-2xl px-6 lg:px-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: i === currentSlide ? 1 : 0, 
                    y: i === currentSlide ? 0 : 30 
                  }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg tracking-tight">
                    {slide.title} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#ffb86dd4]">
                      {slide.highlight}
                    </span>
                  </h2>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === currentSlide ? 1 : 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mt-6 text-lg md:text-xl text-gray-300 drop-shadow-sm border-l-4 border-[#FF9933] pl-6 leading-relaxed max-w-xl"
                >
                  {slide.p}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 0.9 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="mt-10"
                >
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-[#FF9933] text-white py-4 px-10 rounded-full font-bold hover:bg-[#ff881a] hover:gap-5 transition-all shadow-[0_0_40px_rgba(255,153,51,0.4)]">
                    Start Your Project <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Custom Modern Dashboard Indicators */}
        <div className="absolute bottom-10 left-4 md:left-[50%] md:-translate-x-1/2 flex gap-4 z-30 px-6 lg:px-0 max-w-7xl w-full">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-700 ease-out ${i === currentSlide ? 'w-16 bg-[#FF9933] shadow-[0_0_10px_rgba(255,153,51,0.8)]' : 'w-4 bg-white/30 hover:bg-white/60'}`} />
          ))}
        </div>
      </section>

      {/* ── Our Products ── */}
      <section className="w-full py-24 bg-[#fafafa] relative overflow-hidden">
        {/* Decorative background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-300/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-10 h-1 bg-[#FF9933] rounded-full"></div>
                 <p className="text-[#FF9933] font-bold tracking-widest uppercase text-sm">Portfolio</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Our Flagship Products</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button onClick={() => slideProducts('prev')}
                className="w-[50px] h-[50px] rounded-full bg-white shadow-lg text-gray-700 flex items-center justify-center hover:bg-[#FF9933] hover:text-white transition-colors border border-gray-100"
                aria-label="Previous">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button onClick={() => slideProducts('next')}
                className="w-[50px] h-[50px] rounded-full bg-[#FF9933] shadow-lg shadow-orange-500/30 text-white flex items-center justify-center hover:bg-[#ff881a] transition-colors"
                aria-label="Next">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </motion.div>
          
          <div className="overflow-hidden p-4 -m-4">
            <div ref={trackRef}
              className="flex gap-8 overflow-x-hidden pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {infiniteProducts.map((p, i) => (
                <div 
                  key={`${p.id}-${i}`}
                  className="flex-none w-[340px] bg-white rounded-3xl p-6 shadow-xl border border-gray-100/50 flex flex-col justify-between group overflow-hidden relative"
                  style={{ boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)' }}
                >
                  {/* Subtle Gradient Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-2xl bg-gray-50 aspect-video relative shadow-inner">
                      <Image src={p.img} alt={p.name} fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF9933] transition-colors">{p.name}</h4>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">{p.desc}</p>
                  </div>
                  
                  <div className="relative z-10 pt-4 border-t border-gray-100">
                    <Link href={p.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between text-[#FF9933] font-bold text-sm group/btn hover:text-[#e68a2e] transition-colors">
                      <span>Explore Platform</span>
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover/btn:bg-[#FF9933] group-hover/btn:text-white transition-colors">
                        <i className="fa-solid fa-arrow-right -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ERP Banner ── */}
      <section className="w-full py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#333] rounded-[2rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Background glowing orb */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FF9933]/20 rounded-full blur-[100px]"></div>

            <motion.div variants={fadeUp} className="lg:w-1/2 relative z-10 mb-12 lg:mb-0 text-white pr-0 lg:pr-10">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
                Flagship Edition
              </span>
              <h5 className="text-4xl md:text-5xl font-bold mb-6">India Ka Apna ERP!</h5>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                GST-ready inventory & accounting software. Generate invoices efficiently, 
                reconcile bank transactions instantly, track inventory securely, and file GST returns effortlessly.
              </p>
              <div className="flex gap-4">
                <Link href="/products/banklnd"
                  className="bg-[#FF9933] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#e68a2e] transition-colors shadow-lg hover:shadow-[#FF9933]/40">
                  Discover MagiX
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="lg:w-1/2 flex justify-center relative z-10"
            >
              {/* Product floating mockup */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <Image src="/Images/msquare-magix.png" alt="MagiXERP" width={600} height={400}
                  className="w-full max-w-[550px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Mobile Experience ── */}
      <section className="bg-[#0b0f19] py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-gradient-to-tr from-[#FF9933]/10 via-purple-600/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse"></span>
                <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Next-Gen Mobility</span>
              </div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#ffb86d]">Visual</span> <br/>
                Experiences.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                We build visually appealing, ultra-performant mobile applications that captivate users.
                From native iOS/Android to advanced cross-platform solutions.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex gap-5">
                <button onClick={() => setMobileIdx(p => (p - 1 + mobileImages.length) % mobileImages.length)}
                  className="w-14 h-14 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-[#FF9933] hover:border-[#FF9933] transition-all backdrop-blur-md"
                  aria-label="Previous">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button onClick={() => setMobileIdx(p => (p + 1) % mobileImages.length)}
                  className="w-14 h-14 rounded-full border border-[#FF9933] bg-[#FF9933] text-white flex items-center justify-center hover:bg-[#ff881a] hover:border-[#ff881a] shadow-[0_0_25px_rgba(255,153,51,0.4)] transition-all"
                  aria-label="Next">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </motion.div>
            </motion.div>
            
            <div className="lg:col-span-7 flex justify-center lg:justify-end relative order-1 lg:order-2">
              <div className="relative w-[320px] h-[650px] flex items-center justify-center">
                {/* Decorative glowing backplate behind phone */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-[3rem] transform rotate-3 scale-105 z-0 blur-sm"></div>
                
                <motion.div
                  key={mobileIdx}
                  initial={{ opacity: 0, x: 80, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -80, filter: 'blur(10px)' }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                  className="relative z-10 w-full h-full p-2 bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] shadow-2xl border border-gray-700/50"
                  style={{ boxShadow: '0 30px 60px -10px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.05)' }}
                >
                  <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden">
                    <Image 
                      src={mobileImages[mobileIdx].src} 
                      alt={mobileImages[mobileIdx].alt}
                      fill
                      className="object-cover" 
                    />
                    {/* Simulated phone notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-[1rem]"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Logos ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h4 className="text-gray-400 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gray-300"></span>
              Empowering Industry Leaders
              <span className="w-12 h-px bg-gray-300"></span>
            </h4>
          </motion.div>
        </div>
        
        {/* Infinite CSS Marquee Wrapper */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex animate-marquee gap-14 items-center">
              {/* Duplicate array mapping for seamless infinite loop */}
              {[...clients, ...clients].map((c, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-center flex-shrink-0 group cursor-pointer filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 px-6 py-4 rounded-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white"
                  style={c.bg && c.src.includes('pralekh') ? {} : {}}
                >
                  <div className="relative" style={{ backgroundColor: c.bg || 'transparent', padding: c.bg ? '10px 15px' : '0', borderRadius: '8px' }}>
                    <Image src={c.src} alt={c.alt} width={160} height={80}
                      className="w-auto h-12 md:h-16 object-contain" />
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </>
  );
}

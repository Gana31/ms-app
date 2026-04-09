'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen relative overflow-hidden text-gray-900 pb-24">
      
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center">
         <motion.div 
           animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.1, 0.9, 1] }}
           transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FF9933]/10 rounded-full blur-[120px]"
         />
         <motion.div 
           animate={{ x: [0, -100, 100, 0], y: [0, 100, -50, 0], scale: [1, 1.2, 0.8, 1] }}
           transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px]"
         />
         <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      {/* ── Hero ── */}
      <section className="relative z-10 pt-32 pb-16">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="container mx-auto px-6 max-w-7xl text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-gray-100 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF9933] animate-pulse"></span>
              <span className="text-gray-600 text-xs font-extrabold tracking-widest uppercase">Designing the Future</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Empowering Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#ffb86d]">Through Code.</span>
            </motion.h1>
        </motion.div>
      </section>

      {/* ── Modern Bento Box Grid ── */}
      <section className="relative z-10">
        <motion.div 
           initial="hidden" 
           animate="visible" 
           variants={staggerContainer} 
           className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {/* 1. Our Story (Spans 2 columns) */}
          <motion.div variants={fadeUp} className="md:col-span-2 bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-gray-50 to-[#FF9933]/10 rounded-bl-[100%] z-0 translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700"></div>
             <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#FF9933]/10 text-[#FF9933] flex items-center justify-center text-2xl mb-8">
                   <i className="fa-solid fa-layer-group"></i>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-medium">
                  <p>
                     At MSquare Software, we are driven by a passion for technology and a commitment to delivering cutting-edge solutions to empower businesses worldwide. With expertise in software development, cloud-based solutions, and customized ERP platforms, we help organizations seamlessly transform their operations.
                  </p>
                  <p>
                     Our flagship products, such as <strong className="text-gray-900 border-b-2 border-[#FF9933]/30">BankLnd</strong> and <strong className="text-gray-900 border-b-2 border-[#FF9933]/30">GymCloudSuite</strong>, are trusted by businesses globally for their robust functionality and seamless integration.
                  </p>
                </div>
             </div>
          </motion.div>

          {/* 2. Visual Identity (Spans 1 column) */}
          <motion.div variants={fadeUp} className="md:col-span-1 rounded-[2.5rem] relative overflow-hidden shadow-sm border border-gray-100 group min-h-[400px]">
             <Image src="/Images/vission.jpg" alt="Team" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-[2s] ease-out" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold">Innovation at Work</h3>
             </div>
          </motion.div>

          {/* 3. Vision Card */}
          <motion.div variants={fadeUp} className="md:col-span-1 bg-[#fff5eb] rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
             <div className="w-14 h-14 rounded-full bg-white text-[#FF9933] flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-eye"></i>
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
             <p className="text-gray-600 leading-relaxed">
               To be a global leader in software innovation, empowering businesses to excel in an increasingly digital world.
             </p>
          </motion.div>

          {/* 4. Mission Card */}
          <motion.div variants={fadeUp} className="md:col-span-1 bg-[#f4f2ff] rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
             <div className="w-14 h-14 rounded-full bg-white text-purple-600 flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-rocket"></i>
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
             <p className="text-gray-600 leading-relaxed">
               To develop world-class software solutions that transform businesses through efficiency, scalability, and long-term value.
             </p>
          </motion.div>

          {/* 5. Core Values */}
          <motion.div variants={fadeUp} className="md:col-span-1 bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm group hover:shadow-xl transition-shadow duration-500">
             <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
             <ul className="space-y-6">
               {[
                 ['Innovation', 'Prioritizing customer needs & evolving.'],
                 ['Scalability', 'Building adaptable architecture.'],
                 ['Excellence', 'Delivering top-tier reliability.']
               ].map(([title, desc], i) => (
                 <li key={i} className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#FF9933] mt-2.5 shrink-0"></span>
                    <div>
                      <strong className="block text-gray-900 text-lg">{title}</strong>
                      <span className="text-gray-500 text-sm leading-relaxed">{desc}</span>
                    </div>
                 </li>
               ))}
             </ul>
          </motion.div>

        </motion.div>
      </section>

    </div>
  );
}

'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ContactUI() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      
      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-48 bg-[#0b0f19] overflow-hidden">
        {/* Decorative Grid and Glow */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF9933]/15 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse"></span>
              <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">We're here to help</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Let's Build Something <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#ffb86d]">Extraordinary.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Whether you need a custom software solution, enterprise scaling, or simply want to learn more about our products, our experts are ready.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Details Overlapping Hero ── */}
      <section className="relative z-20 -mt-24 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Card 1: Address */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF9933] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-[#FF9933] group-hover:text-white transition-all shadow-sm">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Headquarters</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                B416, 4th Floor, Gera Imperium Gateway<br/>
                Nashik Phata Metro Station,<br/>
                Pimpri-Chinchwad, Pune<br/>
                Maharashtra 411034, India
              </p>
            </motion.div>

            {/* Card 2: Phone */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF9933] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-[#FF9933] group-hover:text-white transition-all shadow-sm">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-4">
                Speak directly to our technical consultants and sales team.
              </p>
              <a href="tel:+919765498660" className="inline-flex items-center gap-2 text-lg font-bold text-[#FF9933] hover:text-[#e68a2e] transition-colors">
                 +91 9765498660 <i className="fa-solid fa-arrow-right text-sm"></i>
              </a>
            </motion.div>

            {/* Card 3: Email */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF9933] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-[#FF9933] group-hover:text-white transition-all shadow-sm">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-4">
                Mail your requirements and hear from us within 24 working hours.
              </p>
              <a href="mailto:info@msquaresoftware.com" className="inline-flex items-center gap-2 text-lg font-bold text-[#FF9933] hover:text-[#e68a2e] transition-colors break-all">
                 info@msquare.com <i className="fa-solid fa-arrow-right text-sm"></i>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Call to Action / Image Section ── */}
      <section className="bg-white py-24 relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-gradient-to-br from-gray-50 to-orange-50/50 rounded-[3rem] p-10 lg:p-16 border border-orange-100 overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9933]/10 rounded-full blur-[80px]"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                    We would love to <br/>
                    <span className="text-[#FF9933]">work with you!</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
                    Please mail your requirements or software queries to us. Our dedicated consulting team will analyze your needs and provide a tailored digital roadmap.
                  </p>
                  
                  <a href="mailto:info@msquaresoftware.com" 
                    className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold py-4 px-8 rounded-full hover:bg-black transition-transform hover:scale-105 shadow-xl">
                    <i className="fa-regular fa-envelope"></i> Drop us a Line
                  </a>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="flex justify-center"
                >
                  <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}>
                     <Image src="/Images/mailus.png" alt="Contact Us" width={500} height={400} className="w-full max-w-[450px] object-contain drop-shadow-2xl" />
                  </motion.div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}

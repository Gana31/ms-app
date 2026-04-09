'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

type Feature = {
  title: string;
  description: string;
};

type IndustryUIProps = {
  title: string;
  subtitle: string;
  features: Feature[];
  bgImage: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function IndustryUI({ title, subtitle, features, bgImage }: IndustryUIProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Animated Hero Section ── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Parallax & Gradient Overlay */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 border border-[#FF9933]/50 text-[#FF9933] font-semibold text-sm mb-6 backdrop-blur-sm">
              Industry Vertical
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 leading-relaxed max-w-xl">
              {subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities/Features Bento Grid ── */}
      <section className="py-24 bg-gray-50 relative">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
             initial="hidden" 
             whileInView="visible" 
             viewport={{ once: true, margin: "-100px" }}
             variants={staggerContainer}
             className="mb-16 text-center max-w-2xl mx-auto"
          >
             <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Core Capabilities</motion.h2>
             <motion.p variants={fadeUp} className="text-lg text-gray-600">Discover how our bespoke solutions transform operations and accelerate growth within your domain.</motion.p>
          </motion.div>

          <motion.div 
             initial="hidden" 
             whileInView="visible" 
             viewport={{ once: true, margin: "-100px" }}
             variants={staggerContainer}
             className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="group relative bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                <div className="relative z-10">
                   <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FF9933]/10 group-hover:text-[#FF9933] text-gray-400 transition-all duration-300">
                     <i className="fa-solid fa-cube text-2xl"></i>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                   <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Call to Action Banner ── */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-6 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
            >
               {/* Ambient Glows */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF9933]/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

               <div className="relative z-10">
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your workflow?</h2>
                 <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Contact our experts to discuss a tailored implementation for your business.</p>
                 <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#FF9933] hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_40px_-10px_rgba(255,153,51,0.5)] transition-all transform hover:-translate-y-1 hover:scale-105">
                   Get in Touch <i className="fa-solid fa-arrow-right"></i>
                 </Link>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
}

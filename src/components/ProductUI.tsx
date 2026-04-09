'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type ProductUIProps = {
  title: string;
  subtitle: string;
  description: ReactNode;
  productImage: string;
  visitLink: string;
  themeColor: string; // e.g., '#FF9933', '#3B82F6'
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ProductUI({ title, subtitle, description, productImage, visitLink, themeColor }: ProductUIProps) {
  return (
    <div className="bg-slate-50 min-h-[90vh] relative overflow-hidden text-gray-900 flex items-center">
      
      {/* ── Light Mode Animated Bubble Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Bubble 1 (Theme Color) */}
         <motion.div 
           animate={{ x: [0, 80, -40, 0], y: [0, -80, 40, 0], scale: [1, 1.2, 0.9, 1] }}
           transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full blur-[80px] opacity-20"
           style={{ backgroundColor: themeColor }}
         />
         {/* Bubble 2 (Soft Blue) */}
         <motion.div 
           animate={{ x: [0, -100, 50, 0], y: [0, 100, -80, 0], scale: [1, 1.1, 0.8, 1] }}
           transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[100px] opacity-[0.15]"
         />
         {/* Bubble 3 (Soft Yellow/Orange) */}
         <motion.div 
           animate={{ x: [0, 60, -90, 0], y: [0, -60, 90, 0], scale: [1, 1.3, 0.8, 1] }}
           transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-orange-300 rounded-full blur-[120px] opacity-20"
         />
         
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* ── Left Content ── */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
             
             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-2 bg-white/60 backdrop-blur-md shadow-sm"
               style={{ borderColor: `${themeColor}40` }}>
                <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: themeColor }}></span>
                <span className="text-gray-700 text-xs font-bold tracking-widest uppercase">MSquare flagship</span>
             </motion.div>

             <motion.div variants={fadeUp}>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-gray-900">
                  {title}
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: themeColor }}>
                  {subtitle}
                </h3>
             </motion.div>

             <motion.div variants={fadeUp} className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                {description}
             </motion.div>

             <motion.div variants={fadeUp} className="pt-4 flex flex-wrap gap-4">
               <Link href={visitLink} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all transform hover:-translate-y-1 hover:scale-105"
                 style={{ backgroundColor: themeColor, boxShadow: `0 10px 30px -10px ${themeColor}` }}
               >
                 Launch Platform <i className="fa-solid fa-arrow-up-right-from-square"></i>
               </Link>
               <Link href="/contact"
                 className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1"
               >
                 Contact Sales
               </Link>
             </motion.div>

          </motion.div>

          {/* ── Right Float Visual ── */}
          <motion.div 
             initial={{ opacity: 0, x: 50, scale: 0.95 }}
             animate={{ opacity: 1, x: 0, scale: 1 }}
             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
             className="relative"
          >
             <div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white/50 backdrop-blur-xl shadow-2xl group"
                  style={{ boxShadow: `0 25px 50px -12px ${themeColor}30` }}>
                
                {/* Window Controls Mockup */}
                <div className="bg-gray-100/80 backdrop-blur-md px-4 py-3 border-b border-gray-200 flex gap-2 items-center">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   <div className="ml-4 text-xs font-mono text-gray-500">{title.toLowerCase()}.com</div>
                </div>
                
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full bg-white">
                   <Image src={productImage} alt={title} fill style={{ objectFit: 'cover', objectPosition: 'top' }} className="group-hover:scale-105 transition-transform duration-[2s]" />
                </div>
             </div>

             {/* Floating decorative elements around image */}
             <motion.div 
               animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -top-10 -right-10 w-28 h-28 rounded-[2rem] blur-2xl opacity-60 mix-blend-multiply"
               style={{ backgroundColor: themeColor }}
             />
             <motion.div 
               animate={{ y: [15, -15, 15], rotate: [0, -10, 10, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full blur-2xl opacity-50 z-[-1] mix-blend-multiply"
               style={{ backgroundColor: themeColor }}
             />

          </motion.div>

        </div>
      </div>
    </div>
  );
}

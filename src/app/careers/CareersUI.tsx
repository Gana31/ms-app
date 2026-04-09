'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

type Job = {
  title: string;
  type: string;
  requirements: string[];
  eligibility: string[];
  technologies: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function CareersUI({ jobs }: { jobs: Job[] }) {
  return (
    <div className="bg-[#fafafa]">
      
      {/* ── Banner ── */}
      <section className="relative pt-32 pb-48 bg-[#0b0f19] overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF9933]/15 rounded-full blur-[150px] translate-y-1/3 translate-x-1/3"></div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse"></span>
            <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Open Positions</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Shape the Future. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#ffb86d]">Join Our Team.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate engineers, designers, and innovators. Bring your unique perspective and build products that impact thousands of users.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Job Postings ── */}
      <section className="pt-12 pb-24 relative z-20 -mt-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-8">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 group transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  
                  {/* Left Column: Job Details */}
                  <div className="lg:w-7/12">
                     <motion.div variants={fadeUp}>
                       <div className="flex items-center gap-4 mb-4">
                         <span className="bg-orange-50 text-[#FF9933] px-3 py-1 rounded-full text-sm font-bold tracking-wide">
                            {job.type}
                         </span>
                         <span className="text-gray-400 text-sm">Pune, India / Remote</span>
                       </div>
                       <h2 className="text-3xl font-extrabold text-gray-900 mb-6 group-hover:text-[#FF9933] transition-colors">{job.title}</h2>
                     </motion.div>

                     <motion.div variants={fadeUp} className="mb-8">
                       <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                         <i className="fa-solid fa-list-check text-[#FF9933]"></i> Responsibilities & Requirements
                       </h4>
                       <ul className="space-y-3">
                         {job.requirements.map((r, j) => (
                           <li key={j} className="flex items-start text-gray-600">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#FF9933] mt-2 mr-3 shrink-0"></div>
                             <span className="leading-relaxed">{r}</span>
                           </li>
                         ))}
                       </ul>
                     </motion.div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <motion.div variants={fadeUp}>
                           <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Tech Stack</h4>
                           <div className="flex flex-wrap gap-2">
                             {job.technologies.split(', ').map((tech, tIdx) => (
                               <span key={tIdx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-md font-medium">
                                 {tech}
                               </span>
                             ))}
                           </div>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                           <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Eligibility</h4>
                           <ul className="space-y-2">
                             {job.eligibility.map((e, j) => (
                               <li key={j} className="flex items-start text-sm text-gray-600">
                                 <i className="fa-solid fa-check text-green-500 mt-1 mr-2 shrink-0"></i>
                                 <span>{e}</span>
                               </li>
                             ))}
                           </ul>
                        </motion.div>
                     </div>

                     <motion.div variants={fadeUp}>
                        <a href="mailto:info@msquaresoftware.com" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-4 px-10 rounded-full hover:bg-[#FF9933] hover:shadow-[0_10px_20px_rgba(255,153,51,0.3)] transition-all transform hover:-translate-y-1">
                          Apply Now <i className="fa-solid fa-arrow-right"></i>
                        </a>
                     </motion.div>
                  </div>

                  {/* Right Column: Visual */}
                  <motion.div variants={fadeUp} className="hidden lg:block lg:w-5/12 relative">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
                       <Image src="/Images/become-partner.jpg" alt="Join our team" fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                       <div className="absolute bottom-6 left-6 right-6">
                           <p className="text-white font-bold text-lg">Build impactful solutions alongside brilliant minds.</p>
                       </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

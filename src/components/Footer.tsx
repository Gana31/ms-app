import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f19] pt-20 pb-8 mt-auto overflow-hidden border-t border-white/5">
      {/* Decorative Glowing Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF9933]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top CTA Banner */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Ready to transform your business?</h3>
            <p className="text-gray-400 text-lg">Join forward-thinking industry leaders using MSquare Software.</p>
          </div>
          <Link href="/contact" 
            className="px-8 py-4 bg-[#FF9933] text-white rounded-full font-bold hover:bg-[#ff881a] shadow-[0_0_20px_rgba(255,153,51,0.3)] hover:shadow-[0_0_30px_rgba(255,153,51,0.5)] transition-all whitespace-nowrap flex items-center gap-2 group/btn">
            Start Your Journey <i className="fa-solid fa-arrow-right -rotate-45 group-hover/btn:rotate-0 transition-transform"></i>
          </Link>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="p-4 bg-white rounded-xl inline-block mb-6">
              <Image src="/Images/new-txt-logo-removebg-preview.png" alt="MSquare Software"
                width={200} height={75} style={{ objectFit: 'contain', width: 'auto', height: '40px' }} />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Delivering top-quality enterprise engineering products for reliability, high performance, and unmatched digital scalability.
            </p>
            <div className="flex items-center gap-4">
              {[
                { href: 'https://www.facebook.com/MSquareSoftware', icon: 'fa-brands fa-facebook-f' },
                { href: 'https://www.linkedin.com/in/retesh-karampuri-a686595a', icon: 'fa-brands fa-linkedin-in' },
                { href: 'https://www.instagram.com/msquaresoftware', icon: 'fa-brands fa-instagram' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF9933] hover:bg-[#FF9933] transition-all duration-300">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
             <h6 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Company</h6>
             <ul className="space-y-4">
               {[['About Us', '/about'], ['Our Services', '/services'], ['Careers', '/careers'], ['Contact', '/contact']].map(([label, href]) => (
                 <li key={href}>
                   <Link href={href} className="text-gray-400 hover:text-[#FF9933] transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-[#FF9933] transition-all duration-300 group-hover:w-3"></span>
                      {label}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
             <h6 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Products</h6>
             <ul className="space-y-4">
               {[['BankLnD', '/products/banklnd'], ['SmartDSACRM', '/products/smartdsacrm'], ['GymCloudSuite', '/products/gymcloudsuite'], ['ZeroTicket', '/products/zeroticket'], ['AutomateMySchool', '/products/automateschool']].map(([label, href]) => (
                 <li key={href}>
                   <Link href={href} className="text-gray-400 hover:text-[#FF9933] transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-[#FF9933] transition-all duration-300 group-hover:w-3"></span>
                      {label}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
             <h6 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact</h6>
             <ul className="space-y-4 text-gray-400">
               <li className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#FF9933]">
                   <i className="fa-solid fa-location-dot"></i>
                 </div>
                 <span className="text-sm leading-relaxed pt-1">B416, 4th Floor, Gera Imperium Gateway Nashik Phata Metro Station, Pune, India 411034</span>
               </li>
               <li className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#FF9933]">
                   <i className="fa-solid fa-phone"></i>
                 </div>
                 <span className="text-sm">+91 9765498660</span>
               </li>
               <li className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-[#FF9933]">
                   <i className="fa-solid fa-envelope"></i>
                 </div>
                 <span className="text-sm">info@msquaresoftware.com</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
             <i className="fa-solid fa-earth-americas text-gray-400"></i>
             <span>English (India)</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/trademarks" className="hover:text-white transition-colors">Trademarks</Link>
          </div>
          <div>
            <span className="text-gray-400">©{new Date().getFullYear()} MSquare Software. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

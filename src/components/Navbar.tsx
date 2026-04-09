'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const productLinks = [
  { label: 'BankLnd', href: '/products/banklnd' },
  { label: 'SmartDSACRM', href: '/products/smartdsacrm' },
  { label: 'GymCloudSuite', href: '/products/gymcloudsuite' },
  { label: 'Greenybook', href: '/products/greenybook' },
  { label: 'ZeroTicket', href: '/products/zeroticket' },
  { label: 'AutomateMySchool', href: '/products/automateschool' },
];

const companyLinks = [
  { label: 'About MSquare', href: '/about' },
  { label: 'Become A Partner', href: 'https://register.msquaresoftware.com/pages/comman-form/', external: true },
  { label: 'Careers', href: '/careers' },
];

const industryLinks = [
  { label: 'Banking Solution', href: '/industries/banking-solution' },
  { label: 'Manufacturing Solution', href: '/industries/manufacturing-solution' },
  { label: 'Direct Selling Agent (DSA) Solution', href: '/industries/dsa-solution' },
  { label: 'Outdoor Advertising', href: '/industries/outdoor-advertising' },
  { label: 'Custom Software Solution', href: '/industries/custom-software-solution' },
];

type DropdownItem = { label: string; href: string; external?: boolean };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = (name: string) => setOpenDropdown(prev => prev === name ? null : name);
  const isActive = (href: string) => pathname === href;

  const getLinkClass = (active: boolean) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      active ? 'text-[#FF9933]' : 'text-gray-700 hover:text-[#FF9933]'
    }`;

  const dropdownMenu = (items: DropdownItem[], isMobile = false) => {
    const menuContent = (
      <div className={`${isMobile ? 'flex flex-col space-y-1' : 'py-2'}`}>
        {items.map(item => {
          const isItemActive = pathname === item.href;
          const activeClass = isItemActive
            ? 'text-[#FF9933] font-semibold bg-orange-50'
            : 'text-gray-600 hover:bg-orange-50 hover:text-[#FF9933]';
          
          const baseClass = `block px-4 py-2.5 text-sm transition-all duration-200 rounded-md mx-2 ${activeClass}`;

          return item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer"
              onClick={() => { setOpenDropdown(null); setIsOpen(false); }}
              className={baseClass}>
              {item.label}
            </a>
          ) : (
            <Link key={item.href} href={item.href}
              onClick={() => { setOpenDropdown(null); setIsOpen(false); }}
              className={baseClass}>
              {item.label}
            </Link>
          );
        })}
      </div>
    );

    if (isMobile) {
      return (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden bg-gray-50 rounded-lg mt-1 mx-2"
        >
          {menuContent}
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-2 w-[240px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-xl border border-gray-100 z-50 overflow-hidden"
      >
        {menuContent}
      </motion.div>
    );
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-1' : 'bg-white py-3'}`}>
      <nav>
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src="/Images/new-txt-logo-removebg-preview.png" alt="MSquare Software" width={160} height={55}
              style={{ maxHeight: '55px', width: 'auto', objectFit: 'contain' }} className="transition-transform hover:scale-105" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/" className={getLinkClass(isActive('/'))}>Home</Link>
            <Link href="/services" className={getLinkClass(isActive('/services'))}>Service</Link>

            {[
              { key: 'products', label: 'Products', items: productLinks, match: '/products' },
              { key: 'company', label: 'Company', items: companyLinks, match: '/about|/careers' },
              { key: 'industries', label: 'Industries We Serve', items: industryLinks, match: '/industries' },
            ].map(sec => {
              const isSectionActive = sec.items.some(it => pathname === it.href) || pathname.startsWith(sec.match.split('|')[0]) || (sec.match.split('|')[1] ? pathname.startsWith(sec.match.split('|')[1]) : false);
              
              return (
                <div 
                  key={sec.key} 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(sec.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button 
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-[#FF9933] ${isSectionActive ? 'text-[#FF9933]' : 'text-gray-700'}`}
                  >
                    {sec.label} 
                    <motion.i 
                      animate={{ rotate: openDropdown === sec.key ? 180 : 0 }} 
                      className="fa-solid fa-chevron-down text-[10px]"
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === sec.key && dropdownMenu(sec.items)}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link href="/contact" className={getLinkClass(isActive('/contact'))}>Contact Us</Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-800 rounded-md hover:bg-gray-100 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.i 
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-5 space-y-2 max-h-[80vh] overflow-y-auto">
                <Link href="/" onClick={() => setIsOpen(false)} className={`block rounded-lg px-4 ${getLinkClass(isActive('/'))}`}>Home</Link>
                <Link href="/services" onClick={() => setIsOpen(false)} className={`block rounded-lg px-4 ${getLinkClass(isActive('/services'))}`}>Service</Link>

                {[
                  { key: 'products', label: 'Products', items: productLinks },
                  { key: 'company', label: 'Company', items: companyLinks },
                  { key: 'industries', label: 'Industries We Serve', items: industryLinks },
                ].map(sec => (
                  <div key={sec.key} className="relative">
                    <button onClick={() => toggle(sec.key)}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      {sec.label} 
                      <motion.i 
                        animate={{ rotate: openDropdown === sec.key ? 180 : 0 }}
                        className="fa-solid fa-chevron-down text-xs"
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === sec.key && dropdownMenu(sec.items, true)}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-2">
                  <Link href="/contact" onClick={() => setIsOpen(false)} 
                    className="block w-full text-center bg-[#FF9933] text-white rounded-full py-3 text-sm font-semibold hover:bg-[#e68a2e] transition-colors shadow-md">
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

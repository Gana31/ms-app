'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

  const linkClass = (active: boolean) =>
    `px-3 py-2 text-sm font-medium transition-colors duration-300 ${active ? 'text-[#FF9933]' : 'text-[#333]'} hover:text-[#FF9933]`;

  const dropdownMenu = (items: DropdownItem[]) => (
    <div className="absolute top-full left-0 bg-[#fdf6ee] shadow-lg min-w-[200px] z-50 py-1 border border-[#f0e0d0]">
      {items.map(item => {
        const isItemActive = pathname === item.href;
        return item.external ? (
          <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer"
            onClick={() => setOpenDropdown(null)}
            className={`block px-4 py-2 text-sm transition-colors ${isItemActive ? 'text-[#FF9933] font-semibold bg-[#ffe6cc]' : 'text-[#333] hover:bg-[#FF9933] hover:text-white'}`}>
            {item.label}
          </a>
        ) : (
          <Link key={item.href} href={item.href} onClick={() => setOpenDropdown(null)}
            className={`block px-4 py-2 text-sm transition-colors ${isItemActive ? 'text-[#FF9933] font-semibold bg-[#ffe6cc]' : 'text-[#333] hover:bg-[#FF9933] hover:text-white'}`}>
            {item.label}
          </Link>
        )
      })}
    </div>
  );

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="py-2">
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          <Link href="/">
            <Image src="/Images/new-txt-logo.jpg" alt="MSquare Software" width={160} height={55}
              style={{ maxHeight: '55px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className={linkClass(isActive('/'))}>Home</Link>
            <Link href="/services" className={linkClass(isActive('/services'))}>Service</Link>

            {[
              { key: 'products', label: 'Products', items: productLinks, match: '/products' },
              { key: 'company', label: 'Company', items: companyLinks, match: '/about|/careers' },
              { key: 'industries', label: 'Industries We Serve', items: industryLinks, match: '/industries' },
            ].map(sec => {
              // Ensure exact parent matches, checking if nested path is matched!
              const isSectionActive = sec.items.some(it => pathname === it.href) || pathname.startsWith(sec.match.split('|')[0]) || (sec.match.split('|')[1] ? pathname.startsWith(sec.match.split('|')[1]) : false);
              
              return (
                <div key={sec.key} className="relative">
                  <button onClick={() => toggle(sec.key)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-[#FF9933] ${isSectionActive ? 'text-[#FF9933]' : 'text-[#333]'}`}>
                    {sec.label} <i className="fa-solid fa-chevron-down text-xs"></i>
                  </button>
                  {openDropdown === sec.key && dropdownMenu(sec.items)}
                </div>
              );
            })}

            <Link href="/contact" className={linkClass(isActive('/contact'))}>Contact Us</Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-[#333]" onClick={() => setIsOpen(!isOpen)}>
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className={`block ${linkClass(isActive('/'))}`}>Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className={`block ${linkClass(isActive('/services'))}`}>Service</Link>

            {[
              { key: 'products', label: 'Products', items: productLinks },
              { key: 'company', label: 'Company', items: companyLinks },
              { key: 'industries', label: 'Industries We Serve', items: industryLinks },
            ].map(sec => (
              <div key={sec.key}>
                <button onClick={() => toggle(sec.key)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-[#333]">
                  {sec.label} <i className={`fa-solid fa-chevron-${openDropdown === sec.key ? 'up' : 'down'} text-xs`}></i>
                </button>
                {openDropdown === sec.key && (
                  <div className="pl-4 bg-[#fdf6ee]">
                    {sec.items.map((item: DropdownItem) => {
                      const isItemActive = pathname === item.href;
                      return item.external ? (
                        <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm transition-colors ${isItemActive ? 'text-[#FF9933] font-semibold' : 'text-[#333] hover:text-[#FF9933]'}`}>{item.label}</a>
                      ) : (
                        <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm transition-colors ${isItemActive ? 'text-[#FF9933] font-semibold' : 'text-[#333] hover:text-[#FF9933]'}`}>{item.label}</Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className={`block ${linkClass(isActive('/contact'))}`}>Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

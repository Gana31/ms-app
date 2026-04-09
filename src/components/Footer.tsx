import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#303030] px-4 mt-auto">
      {/* Top — Logo + Socials */}
      <div className="py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="ml-6">
            <Image src="/Images/new-txt-logo-removebg-preview.png" alt="MSquare Software"
              width={200} height={75} style={{ objectFit: 'contain', width: '200px', height: '75px' }} />
          </div>
          <div className="flex items-center gap-3">
            <h6 className="text-white text-sm mr-4 mb-0">Follow Us :</h6>
            {[
              { href: 'https://www.facebook.com/MSquareSoftware', icon: 'fa-brands fa-facebook' },
              { href: 'https://www.linkedin.com/in/retesh-karampuri-a686595a', icon: 'fa-brands fa-linkedin-in' },
              { href: 'https://www.instagram.com/msquaresoftware', icon: 'fa-brands fa-instagram' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#474646] flex items-center justify-center text-white text-sm hover:bg-[#FF9933] transition-colors">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <hr className="mt-6 border-gray-600 opacity-30" />
      </div>

      {/* Links */}
      <div className="text-white pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <p className="text-[#A2A3A3] mb-3 text-sm">Delivering top-quality products for reliability and high performance.</p>
            <ul className="space-y-2 text-[#A2A3A3] text-sm">
              <li><i className="fa-solid fa-location-dot mr-2"></i>B416, 4th Floor, Gera Imperium Gateway Nashik Phata Metro Station, Pimpri-Chinchwad, Pune, Maharashtra 411034, India</li>
              <li><i className="fa-solid fa-phone-volume mr-2"></i>+91 9765498660</li>
              <li><i className="fa-regular fa-envelope mr-2"></i>info@msquaresoftware.com</li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-3">Company</h6>
            <ul className="space-y-1">
              {[['About Company', '/about'], ['Our Services', '/services'], ['Careers', '/careers'], ['Contact Us', '/contact']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-[#A2A3A3] text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-3">Our Products</h6>
            <ul className="space-y-1">
              {[['BankLnD', '/products/banklnd'], ['SmartDSACRM', '/products/smartdsacrm'], ['GymCloudSuite', '/products/gymcloudsuite'], ['ZeroTicket', '/products/zeroticket'], ['AutomateMySchool', '/products/automateschool']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-[#A2A3A3] text-sm hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="mt-6 border-gray-600 opacity-30" />
        <div className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-sm">
          <a href="#" className="text-white hover:underline"><i className="fa-solid fa-earth-americas mr-1"></i> English (India)</a>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="text-white hover:underline">Contact MSquare</Link>
            <Link href="/privacy" className="text-white hover:underline">Privacy</Link>
            <Link href="/terms-of-use" className="text-white hover:underline">Terms of Use</Link>
            <Link href="/trademarks" className="text-white hover:underline">Trademarks</Link>
            <span className="text-[#A2A3A3]">©MSquare Software 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

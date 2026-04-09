'use client';

import { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(document.documentElement.scrollTop > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-[80px] right-5 z-50 w-[50px] h-[50px] rounded-full bg-[#FF9933] text-white text-2xl flex items-center justify-center shadow-lg hover:bg-[#f17900] transition-colors"
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up-circle"></i>
        </button>
      )}
      <a
        href="https://wa.me/9765498660"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-[50px] h-[50px] rounded-full bg-[#25D366] text-white text-2xl flex items-center justify-center shadow-lg hover:bg-[#1da851] transition-colors"
        aria-label="WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const isActive = (href: string) => normalizedPath === href || normalizedPath.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f6] border-b border-[#e5e5e5] shadow-minimal">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Wordmark */}
          <Link href="/" className="text-lg font-semibold text-[#1a1a1a] hover:opacity-70 transition-opacity">
            Tony Samour
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={`text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#0d6e6e] focus-visible:outline-offset-2 rounded-md px-3 py-1 ${isActive(item.href) ? 'text-[#0d6e6e] bg-[#f0f9f9] border border-[#0d6e6e]' : 'text-[#1a1a1a] border border-transparent hover:text-[#0d6e6e]'}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#1a1a1a] hover:text-[#0d6e6e] focus-visible:outline-2 focus-visible:outline-[#0d6e6e] focus-visible:outline-offset-2 rounded" aria-label="Toggle navigation menu" aria-expanded={isOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-[#e5e5e5]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} aria-current={isActive(item.href) ? 'page' : undefined} className={`block px-3 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#0d6e6e] focus-visible:outline-offset-2 rounded-md border ${isActive(item.href) ? 'text-[#0d6e6e] bg-[#f0f9f9] border-[#0d6e6e]' : 'text-[#1a1a1a] border-transparent hover:text-[#0d6e6e] hover:bg-[#f0f9f9]'}`}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="absolute -top-full left-0 bg-[#0d6e6e] text-white px-4 py-2 text-sm font-medium rounded focus-visible:top-0 z-50">
        Skip to main content
      </a>
    </header>
  );
}

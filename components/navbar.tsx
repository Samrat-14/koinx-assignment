'use client';

import { useState } from 'react';
import Image from 'next/image';

import logo from '@/public/images/logo.png';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sm:h-[80px] h-[60px] w-full drop-shadow-md z-10 sticky top-0">
      <div className="container w-full h-full flex justify-between items-center !px-6">
        <Image src={logo} alt="logo" priority />
        <ul className="hidden sm:flex items-center gap-8 text-fz-black font-semibold">
          <li>
            <Link href="/crypto-taxes">Crypto Taxes</Link>
          </li>
          <li>
            <Link href="/free-tools">Free Tools</Link>
          </li>
          <li>
            <Link href="/resource-center">Resource Center</Link>
          </li>
          <li className="bg-[#2870EA] h-[40px] rounded-md text-white grid place-content-center px-4">
            <Link href="/get-started">Get Started</Link>
          </li>
        </ul>

        <div className="sm:hidden block">
          <span
            className={isMenuOpen ? 'hidden' : 'block'}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </span>
          <span
            className={isMenuOpen ? 'block' : 'hidden'}
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </span>

          <div
            className={`absolute right-0 top-[60px] bg-white h-[calc(100vh-60px)] transition-all duration-300 overflow-hidden drop-shadow-md ${
              isMenuOpen ? 'w-[270px]' : 'w-0'
            }`}
          >
            <ul className="flex flex-col items-center gap-8 text-fz-black font-semibold mt-10">
              <li onClick={() => setIsMenuOpen(false)}>
                <Link href="/crypto-taxes">Crypto Taxes</Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link href="/free-tools">Free Tools</Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link href="/resource-center">Resource Center</Link>
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#2870EA] h-[40px] rounded-md text-white grid place-content-center px-4"
              >
                <Link href="/get-started">Get Started</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

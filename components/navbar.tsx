import Image from 'next/image';

import logo from '@/public/logo.png';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white h-[80px] w-full drop-shadow-md">
      <div className="container w-full h-full flex justify-between items-center">
        <Image src={logo} alt="logo" />
        <ul className="flex items-center gap-8 text-fz-black font-semibold">
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
      </div>
    </nav>
  );
}

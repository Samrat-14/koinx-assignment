import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import getStartedImg from '@/public/get-started.png';

export default function GetStarted() {
  return (
    <div className="bg-[#0052FE] rounded-lg p-8">
      <p className="font-bold text-center text-2xl text-white px-8 mb-6">
        Get Started with KoinX for FREE
      </p>
      <p className="text-[#f2f2f2] text-sm text-center mb-8">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <Image src={getStartedImg} alt="get-started" className="mx-auto mb-6" />
      <Link
        href="/get-started"
        className="text-fz-black flex gap-2 text-sm font-semibold bg-white rounded-lg h-12 justify-center items-center px-8 m-auto"
      >
        Get Started for FREE
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

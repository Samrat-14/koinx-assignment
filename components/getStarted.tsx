import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import getStartedImg from '@/public/images/get-started.png';

export default function GetStarted() {
  return (
    <div className="bg-[#0052FE] rounded-lg sm:p-8 p-4">
      <div className="flex sm:flex-col flex-col-reverse">
        <div>
          <p className="font-bold text-center sm:text-2xl text-xl text-white sm:px-8 mb-6">
            Get Started with KoinX for FREE
          </p>
          <p className="text-[#f2f2f2] text-sm text-center mb-8">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        <Image src={getStartedImg} alt="get-started" className="mx-auto mb-6" />
      </div>
      <Link
        href="/get-started"
        className="text-fz-black w-fit flex gap-2 text-sm font-semibold bg-white rounded-lg h-12 justify-center items-center px-6 m-auto"
      >
        Get Started for FREE
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

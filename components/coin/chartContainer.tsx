import Image from 'next/image';

import coinImg from '@/app/favicon.ico';
import { Triangle } from 'lucide-react';

export default function ChartContainer() {
  return (
    <div className="section">
      <div className="flex gap-2 items-center mb-10">
        <Image src={coinImg} alt="coin-logo" />
        <h2 className="font-semibold text-2xl">Bitcoin</h2>
        <h3 className="text-[#5D667B]">BTC</h3>
        <span className="ml-8 bg-[#808A9D] rounded-lg p-2 px-4 text-white">
          Rank #1
        </span>
      </div>

      <div>
        <div className="flex gap-4 items-center mb-2">
          <h1 className="text-3xl font-bold mr-4">$46,953.04</h1>
          <span className="bg-[#EBF9F4] rounded-lg p-2 flex gap-2 items-center text-[#14B079]">
            <Triangle stroke="none" size={16} fill="#14B079" />
            2.51%
          </span>
          <span className="text-[#768396] text-sm">(24H)</span>
        </div>
        <span>₹ 39,42,343</span>
      </div>

      <hr className="my-8 border-[#dee1e6]" />

      <div>Chart</div>
    </div>
  );
}

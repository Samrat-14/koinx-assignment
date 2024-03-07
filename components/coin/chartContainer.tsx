import Image from 'next/image';

import TradingViewWidget from './chart';

import { baseApiUrl } from '@/config';
import bitcoinImg from '@/public/icons/bitcoin.png';
import { Triangle } from 'lucide-react';

const fetchCoinPrice = async () => {
  const id = 'bitcoin';
  const res = await fetch(
    `${baseApiUrl}/simple/price?ids=${id}&vs_currencies=inr%2Cusd&include_24hr_change=true`,
    {
      next: { revalidate: 10 * 60 },
    }
  );
  const data = await res.json();

  return data;
};

export default async function ChartContainer() {
  const data = await fetchCoinPrice();

  const usdPrice = data?.bitcoin?.usd as number;
  const inrPrice = data?.bitcoin?.inr as number;

  const usdPriceChangeRaw = data?.bitcoin?.usd_24h_change as number;
  const usdPriceChange = Math.round(usdPriceChangeRaw * 100) / 100;

  return (
    <div className="section sm:!p-6 !p-4">
      <div className="hidden sm:flex gap-2 items-center mb-10">
        <Image src={bitcoinImg} alt="coin-logo" />
        <h2 className="font-semibold text-2xl">Bitcoin</h2>
        <h3 className="text-[#5D667B]">BTC</h3>
        <span className="ml-8 bg-[#808A9D] rounded-lg p-2 px-4 text-white">
          Rank #1
        </span>
      </div>

      <div>
        <div className="flex gap-4 items-center mb-2">
          <h1 className="text-3xl font-bold mr-4">
            ${usdPrice.toLocaleString('en-US')}
          </h1>
          {usdPriceChange > 0 ? (
            <span className="bg-[#EBF9F4] rounded-lg sm:p-2 p-1 flex gap-2 items-center text-[#14B079]">
              <Triangle stroke="none" size={16} fill="#14B079" />
              {usdPriceChange}%
            </span>
          ) : (
            <span className="bg-[#f9e8ea] rounded-lg sm:p-2 p-1 flex gap-2 items-center text-[#F7324C]">
              <Triangle
                stroke="none"
                size={16}
                fill="#F7324C"
                className="rotate-180"
              />
              {usdPriceChange}%
            </span>
          )}
          <span className="text-[#768396] text-sm">(24H)</span>
        </div>
        <span className="font-medium">
          ₹ {inrPrice.toLocaleString('en-IN')}
        </span>
      </div>

      <hr className="my-8 border-[#dee1e6]" />

      <div>
        <div className="mb-4 flex sm:flex-row flex-col justify-between sm:items-center gap-2">
          <h2 className="font-semibold">Bitcoin Price Chart (USD)</h2>
          <ul className="flex sm:gap-6 gap-2 text-[#5D667B] font-medium sm:text-[13px] text-[9px]">
            <li>1H</li>
            <li>24H</li>
            <li className="bg-[#E2ECFE] text-[#0141CF] px-2 rounded-full">
              7D
            </li>
            <li>1M</li>
            <li>3M</li>
            <li>6M</li>
            <li>1Y</li>
            <li>ALL</li>
          </ul>
        </div>
        <div className="aspect-[2] sm:mb-4">
          <TradingViewWidget />
        </div>
      </div>
    </div>
  );
}

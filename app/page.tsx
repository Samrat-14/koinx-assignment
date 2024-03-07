import Carousel from '@/components/carousel';
import Coin from '@/components/coin/coin';
import GetStarted from '@/components/getStarted';
import TrendingCoins from '@/components/trendingCoins';
import { ChevronsRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="container flex gap-2 my-4 text-sm items-center">
        <span className="text-fz-gray">Cryptocurrencies</span>
        <ChevronsRight className="text-fz-gray" strokeWidth={1} size={20} />
        <span className="font-medium">Bitcoin</span>
      </div>

      <section className="container flex gap-4">
        <Coin />

        <div className="w-[427px]">
          <GetStarted />
          <TrendingCoins />
        </div>
      </section>

      <section className="w-full bg-white mt-14">
        <div className="container !py-12">
          <Carousel label="You May Also Like" />
          <Carousel label="Trending Coins" />
        </div>
      </section>
    </>
  );
}

import Carousel from '@/components/carousel';
import Coin from '@/components/coin/coin';
import GetStarted from '@/components/getStarted';
import TrendingCoins from '@/components/trendingCoins';
import { ChevronsRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="container flex gap-2 my-4">
        <span className="text-fz-gray">Cryptocurrencies</span>
        <ChevronsRight className="text-fz-gray" strokeWidth={1} />
        <span>Bitcoin</span>
      </div>

      <section className="container flex gap-4">
        <Coin />

        <div className="w-[427px]">
          <GetStarted />
          <TrendingCoins />
        </div>
      </section>

      <section className="w-full bg-white mt-14">
        <div className="section">
          <Carousel label="You May Also Like" />
          <Carousel label="Trending Coins" />
        </div>
      </section>
    </>
  );
}

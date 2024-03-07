import { ChevronsRight } from 'lucide-react';

import Carousel from '@/components/carousel';
import GetStarted from '@/components/getStarted';
import TrendingCoins from '@/components/trendingCoins';

export default function Home() {
  return (
    <>
      <div className="container flex gap-2 my-4 text-sm items-center">
        <span className="text-fz-gray">Cryptocurrencies</span>
        <ChevronsRight className="text-fz-gray" strokeWidth={1} size={20} />
        <span className="font-medium flex gap-2">
          Visit <i>/coin_name</i> to view the respective coin's details
        </span>
      </div>

      <section className="container flex sm:flex-row flex-col sm:gap-4 gap-8">
        <div className="flex justify-around">
          <div className="w-[50%]">
            <GetStarted />
          </div>
          <div className="hidden sm:block">
            <TrendingCoins />
          </div>
        </div>
      </section>

      <section className="w-full bg-white sm:mt-14 mt-6">
        <div className="sm:hidden block p-2">
          <TrendingCoins />
        </div>
        <div className="hidden sm:block container !py-12">
          <Carousel label="You May Also Like" />
          <Carousel label="Trending Coins" />
        </div>
      </section>
    </>
  );
}

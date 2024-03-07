import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';

import Carousel from '@/components/carousel';
import Coin from '@/components/coin/coin';
import GetStarted from '@/components/getStarted';
import TrendingCoins from '@/components/trendingCoins';

import { fetchCoinData } from '../actions';

export default async function CoinPage({
  params,
}: {
  params: { coinId: string };
}) {
  const data = await fetchCoinData(params.coinId);

  return (
    <>
      <div className="container flex gap-2 my-4 text-sm items-center">
        <span className="text-fz-gray">Cryptocurrencies</span>
        <ChevronsRight className="text-fz-gray" strokeWidth={1} size={20} />
        <span className="font-medium capitalize">{params.coinId}</span>
      </div>

      <div className="container sm:hidden flex gap-2 items-center mb-6">
        <Image
          src={data?.image?.small}
          width={36}
          height={36}
          alt="coin-logo"
        />
        <h2 className="font-semibold text-2xl capitalize">{params.coinId}</h2>
        <h3 className="text-[#5D667B] uppercase">{data?.symbol}</h3>
        <span className="ml-8 bg-[#808A9D] rounded p-1 px-2 text-white">
          Rank #{data?.market_cap_rank}
        </span>
      </div>

      <section className="container flex sm:flex-row flex-col sm:gap-4 gap-8">
        <Coin data={data} />

        <div>
          <GetStarted />
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

import Image from 'next/image';
import { Triangle } from 'lucide-react';

import { fetchTrendingCoins } from '@/app/actions';

const NO_OF_COINS = 3;

export default async function TrendingCoins() {
  const coinData = await fetchTrendingCoins();
  const topTrendingCoins = await coinData.slice(0, NO_OF_COINS);

  return (
    <div className="section mt-4">
      <h1 className="text-2xl font-semibold mb-6">Trending Coins (24h)</h1>

      {topTrendingCoins.map(
        (
          {
            item,
          }: {
            item: {
              name: string;
              thumb: string;
              symbol: string;
              data: { price_change_percentage_24h: { usd: number } };
            };
          },
          index: number
        ) => {
          const priceChange =
            Math.round(item?.data?.price_change_percentage_24h?.usd * 100) /
            100;
          return (
            <div
              key={`${item?.name}-${index}`}
              className="flex gap-2 items-center mt-4"
            >
              <Image
                src={item?.thumb}
                alt=""
                width={26}
                height={26}
                className="rounded-full"
              />
              <p className="font-medium">{`${item?.name}(${item?.symbol})`}</p>
              {priceChange > 0 ? (
                <span className="bg-[#EBF9F4] rounded-lg p-2 flex gap-2 items-center text-[#14B079] font-medium ml-auto w-24 justify-center">
                  <Triangle stroke="none" size={16} fill="#14B079" />
                  {priceChange}%
                </span>
              ) : (
                <span className="bg-[#f9e8ea] rounded-lg p-2 flex gap-2 items-center text-[#F7324C] font-medium ml-auto w-24 justify-center">
                  <Triangle
                    stroke="none"
                    size={16}
                    fill="#F7324C"
                    className="rotate-180"
                  />
                  {priceChange}%
                </span>
              )}
            </div>
          );
        }
      )}
    </div>
  );
}

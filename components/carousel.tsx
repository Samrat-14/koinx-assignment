import img from '@/app/favicon.ico';
import Image from 'next/image';

type CarouselType = {
  label: string;
};

const fetchTrendingCoins = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/search/trending', {
    next: { revalidate: 10 * 60 },
  });
  const data = await res.json();
  const coins = await data.coins;

  return coins;
};

export default async function Carousel({ label }: CarouselType) {
  const coinData = await fetchTrendingCoins();

  return (
    <div className="py-4">
      <h1 className="text-2xl font-semibold">{label}</h1>

      <div className="flex gap-4 overflow-x-scroll mt-6 hide-scroll">
        {coinData.map(
          (
            {
              item,
            }: {
              item: {
                thumb: string;
                symbol: string;
                data: {
                  price: string;
                  price_change_percentage_24h: { usd: number };
                  sparkline: string;
                };
              };
            },
            index: number
          ) => {
            const priceChange =
              Math.round(item?.data?.price_change_percentage_24h?.usd * 100) /
              100;

            const price = Number(item?.data?.price.slice(1));

            return (
              <div
                key={`${item.symbol}-${index}`}
                className="block border-[#E3E3E3] border p-4 rounded-lg min-w-[252px] h-[160px]"
              >
                <div className="flex gap-1 items-center mb-2">
                  <Image
                    src={item?.thumb}
                    alt=""
                    width={26}
                    height={26}
                    className="rounded-full"
                  />
                  <span className="text-[#202020]">{item?.symbol}</span>
                  {priceChange > 0 ? (
                    <span className="bg-[#EBF9F4] px-1 text-xs text-[#32BE88]">
                      {priceChange}%
                    </span>
                  ) : (
                    <span className="bg-[#f9e8ea] px-1 text-xs text-[#E96975]">
                      {priceChange}%
                    </span>
                  )}
                </div>
                {/* <p>${price || Math.round(Math.random() * 100) / 100}</p> */}
                <p className="text-[#171717] font-medium text-xl">${price}</p>

                <div className="w-full h-[60px] relative">
                  <Image
                    src={item?.data?.sparkline}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

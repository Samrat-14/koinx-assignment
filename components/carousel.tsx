'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchTrendingCoins } from '@/app/actions';

type CarouselType = {
  label: string;
};

const SCROLL_OFFSET = 500;

export default function Carousel({ label }: CarouselType) {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTrendingCoins();
      setCoinData(data);
      return;
    };
    fetchData();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (scrollRef.current?.scrollLeft !== undefined) {
      scrollRef.current.scrollLeft += SCROLL_OFFSET * direction;
    }
  };

  return (
    <div className="py-4">
      <h1 className="text-2xl font-semibold">{label}</h1>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll mt-6 hide-scroll scroll-smooth"
        >
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
        <button
          onClick={() => scroll(-1)}
          className="absolute top-[50%] translate-y-[-50%] left-0 translate-x-[-50%] w-10 h-10 rounded-full drop-shadow bg-white p-2"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute top-[50%] translate-y-[-50%] right-0 translate-x-[50%] w-10 h-10 rounded-full drop-shadow bg-white p-2"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

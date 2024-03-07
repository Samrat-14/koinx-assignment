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
      <h1 className="sm:text-2xl text-lg sm:font-semibold font-bold">
        {label}
      </h1>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex sm:gap-4 gap-2 overflow-x-scroll sm:mt-6 mt-2 hide-scroll scroll-smooth"
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
                  className="block border-[#E3E3E3] border sm:p-4 p-2 rounded-lg sm:min-w-[252px] sm:h-[160px] min-w-[158px] h-[100px]"
                >
                  <div className="flex gap-1 items-center sm:mb-2 mb-1">
                    <Image
                      src={item?.thumb}
                      alt=""
                      width={26}
                      height={26}
                      className="rounded-full sm:h-[26px] sm:w-[26px] w-[16px] h-[16px]"
                    />
                    <span className="text-[#202020] sm:text-base text-[10px]">
                      {item?.symbol}
                    </span>
                    {priceChange > 0 ? (
                      <span className="bg-[#EBF9F4] px-1 sm:text-xs text-[8px] text-[#32BE88]">
                        {`${priceChange > 0 ? '+' : ''}${priceChange}%`}
                      </span>
                    ) : (
                      <span className="bg-[#f9e8ea] px-1 sm:text-xs text-[8px] text-[#E96975]">
                        {`${priceChange}%`}
                      </span>
                    )}
                  </div>
                  {/* <p>${price || Math.round(Math.random() * 100) / 100}</p> */}
                  <p className="text-[#171717] font-medium sm:text-xl text-xs">
                    ${price}
                  </p>

                  <div className="w-full h-[40%] relative">
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
          className="absolute top-[50%] translate-y-[-50%] left-0 translate-x-[-50%] sm:w-10 sm:h-10 w-6 h-6 rounded-full drop-shadow bg-white grid place-content-center"
        >
          <ChevronLeft className="sm:w-6 w-4" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute top-[50%] translate-y-[-50%] right-0 translate-x-[50%] sm:w-10 sm:h-10 w-6 h-6 rounded-full drop-shadow bg-white grid place-content-center"
        >
          <ChevronRight className="sm:w-6 w-4" />
        </button>
      </div>
    </div>
  );
}

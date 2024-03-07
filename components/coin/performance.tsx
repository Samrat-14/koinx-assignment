import { Info, Triangle } from 'lucide-react';

type SliderType = {
  low: string;
  high: string;
  lowPrice: string;
  highPrice: string;
  tag?: string;
};

export const fundamentalsData = (data?: any) => [
  {
    title: `${data?.name} Price`,
    text: `$${data?.market_data?.current_price?.usd.toLocaleString('en-US')}`,
  },
  {
    title: '24h Low / 24h High',
    text: `$${data?.market_data?.low_24h?.usd.toLocaleString(
      'en-US'
    )} / $${data?.market_data?.high_24h?.usd.toLocaleString('en-US')}`,
  },
  {
    title: '7d Low / 7d High',
    text: '$16,382.07 / $16,874.12',
  },
  {
    title: 'Trading Volume',
    text: `$${data?.market_data?.total_volume?.usd.toLocaleString('en-US')}`,
  },
  {
    title: 'Market Cap Rank',
    text: `#${data?.market_cap_rank}`,
  },
  {
    title: 'Market Cap',
    text: `$${data?.market_data?.market_cap?.usd.toLocaleString('en-US')}`,
  },
  {
    title: 'Market Cap Dominance',
    text: '38.343%',
  },
  {
    title: 'Volume / Market Cap',
    text: `${data?.market_data?.market_cap_fdv_ratio}`,
  },
  {
    title: 'All-Time High',
    text: '$69,044.77 ',
    downPrice: '-75.6%',
    sub: 'Nov 10, 2021 (about 1 year)',
  },
  {
    title: 'All-Time Low',
    text: '$67.81 ',
    upPrice: '24729.1%',
    sub: 'Jul 06, 2013 (over 9 years)',
  },
];

const Slider = ({ low, high, lowPrice, highPrice, tag }: SliderType) => (
  <div className="flex sm:gap-12 gap-6 items-center justify-between sm:py-6 py-4">
    <div>
      <p className="text-[#44475B] sm:text-sm text-xs mb-2">{low}</p>
      <span className="font-medium sm:text-base text-sm">{lowPrice}</span>
    </div>
    <div className="relative flex-1 h-1 gradient rounded-lg">
      {tag && (
        <span className="absolute top-full left-[75%] translate-x-[-50%] text-[#44475B] sm:text-sm text-xs">
          <Triangle
            strokeWidth={1}
            size={10}
            fill="black"
            className="mx-auto"
          />
          ${tag}
        </span>
      )}
    </div>
    <div className="text-end">
      <p className="text-[#44475B] sm:text-sm text-xs mb-2">{high}</p>
      <span className="font-medium sm:text-base text-sm">{highPrice}</span>
    </div>
  </div>
);

export default function Performance({ data }: { data: any }) {
  return (
    <div className="section mt-4">
      <h1 className="text-2xl font-semibold">Performance</h1>

      <Slider
        low="Today's Low"
        high="Today's High"
        lowPrice={data?.market_data?.low_24h?.usd.toLocaleString('en-US')}
        highPrice={data?.market_data?.high_24h?.usd?.toLocaleString('en-US')}
        tag={data?.market_data?.current_price?.usd.toLocaleString('en-US')}
      />
      <Slider
        low="52W Low"
        high="52W High"
        lowPrice={data?.market_data?.low_24h?.usd?.toLocaleString('en-US')}
        highPrice={data?.market_data?.high_24h?.usd?.toLocaleString('en-US')}
      />

      <div>
        <h2 className="text-lg text-[#44475B] font-semibold flex gap-4 items-center my-4">
          Fundamentals
          <Info
            strokeWidth={1}
            size={20}
            fill="#ABB9BF"
            className="text-white"
          />
        </h2>
        <ul className="grid sm:grid-rows-5 sm:grid-flow-col gap-x-20 sm:mb-8">
          {fundamentalsData(data).map((data) => (
            <li
              key={data.title}
              className="flex items-center justify-between sm:mr-6 h-[54px] border-b-[1px] border-[#D3E0E6]"
            >
              <span className="text-[#768396] text-sm font-medium">
                {data.title}
              </span>
              <div className="text-[#111827] text-[13px] font-medium">
                <p className="text-end">
                  {data.text}
                  <span className="text-[#F7324C]">{data?.downPrice}</span>
                  <span className="text-[#0FBA83]">{data?.upPrice}</span>
                </p>
                <span className="font-normal text-xs">{data?.sub}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

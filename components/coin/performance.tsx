import { Info, Triangle } from 'lucide-react';

type SliderType = {
  low: string;
  high: string;
  lowPrice: string;
  highPrice: string;
  tag?: boolean;
};

export const fundamentalsData = [
  {
    title: 'Bitcoin Price',
    text: '$16,815.46',
  },
  {
    title: '24h Low / 24h High',
    text: '$16,382.07 / $16,874.12',
  },
  {
    title: '7d Low / 7d High',
    text: '$16,382.07 / $16,874.12',
  },
  {
    title: 'Trading Volume',
    text: '$23,249,202,782',
  },
  {
    title: 'Market Cap Rank',
    text: '#1',
  },
  {
    title: 'Market Cap',
    text: '$323,507,290,047',
  },
  {
    title: 'Market Cap Dominance',
    text: '38.343%',
  },
  {
    title: 'Volume / Market Cap',
    text: '0.0718',
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
          $48,637.83
        </span>
      )}
    </div>
    <div className="text-end">
      <p className="text-[#44475B] sm:text-sm text-xs mb-2">{high}</p>
      <span className="font-medium sm:text-base text-sm">{highPrice}</span>
    </div>
  </div>
);

export default function Performance() {
  return (
    <div className="section mt-4">
      <h1 className="text-2xl font-semibold">Performance</h1>

      <Slider
        low="Today's Low"
        high="Today's High"
        lowPrice="46,930.22"
        highPrice="49,384.83"
        tag
      />
      <Slider
        low="52W Low"
        high="52W High"
        lowPrice="16,930.22"
        highPrice="49,784.83"
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
          {fundamentalsData.map((data) => (
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

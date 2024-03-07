import Image from 'next/image';
import { Info } from 'lucide-react';

import documentIcon from '@/public/icons/document.png';
import analyticsIcon from '@/public/icons/analytics.png';
import { fundamentalsData } from './performance';

export default function Sentiment({ data }: { data: any }) {
  return (
    <div className="section mt-4">
      <h1 className="text-2xl font-semibold">Sentiment</h1>
      <div>
        <h2 className="text-lg text-[#44475B] font-semibold flex gap-4 items-center my-4">
          Key Events
          <Info
            strokeWidth={1}
            size={20}
            fill="#ABB9BF"
            className="text-white"
          />
        </h2>
        <div className="flex gap-4 overflow-x-auto scroll-hidden scroll-smooth">
          <div className="sm:min-w-[456px] sm:h-[204px] min-w-[320px] h-[142px] flex sm:p-6 p-3 gap-2 bg-[#E8F4FD] rounded-xl">
            <Image
              src={documentIcon}
              alt=""
              className="sm:w-[44px] sm:h-[44px] w-[30px] h-[30px]"
            />
            <div>
              <p className="text-[#191C1F] font-semibold sm:mb-2 mb-1 sm:text-sm text-xs">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-[#3E5765] sm:text-sm text-[10px]">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
          <div className="sm:min-w-[456px] sm:h-[204px] min-w-[320px] h-[142px] flex sm:p-6 p-3 gap-2 bg-[#EBF9F4] rounded-xl">
            <Image
              src={analyticsIcon}
              alt=""
              className="sm:w-[44px] sm:h-[44px] w-[30px] h-[30px]"
            />
            <div>
              <p className="text-[#191C1F] font-semibold sm:mb-2 mb-1 sm:text-sm text-xs">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-[#3E5765] sm:text-sm text-[10px]">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg text-[#44475B] font-semibold flex gap-4 items-center my-4">
          Analyst Estimates
          <Info
            strokeWidth={1}
            size={20}
            fill="#ABB9BF"
            className="text-white"
          />
        </h2>

        <div className="flex sm:gap-10 gap-4 items-center">
          <div className="h-[120px] w-[120px] rounded-full bg-[#EBF9F4] flex justify-center items-center text-[#0FBA83] font-medium">
            <span className="text-4xl">76</span>%
          </div>
          <div className="w-[60%]">
            <div className="text-[#7C7E8C] grid grid-cols-[55px_1fr]">
              <span className="sm:text-base text-sm">Buy</span>
              <div className="flex gap-2 items-center">
                <p className="bg-[#00B386] w-[76%] h-2 rounded-sm"></p>
                <span className="text-sm">76%</span>
              </div>
            </div>
            <div className="text-[#7C7E8C] grid grid-cols-[55px_1fr] mt-4">
              <span className="sm:text-base text-sm">Hold</span>
              <div className="flex gap-2 items-center">
                <p className="bg-[#C7C8CE] w-[8%] h-2 rounded-sm"></p>
                <span className="text-sm">8%</span>
              </div>
            </div>
            <div className="text-[#7C7E8C] grid grid-cols-[55px_1fr] mt-4">
              <span className="sm:text-base text-sm">Sell</span>
              <div className="flex gap-2 items-center">
                <p className="bg-[#F7324C] w-[16%] h-2 rounded-sm"></p>
                <span className="text-sm">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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

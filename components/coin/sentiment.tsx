import Image from 'next/image';
import { Info } from 'lucide-react';

import documentIcon from '@/public/icons/document.png';
import analyticsIcon from '@/public/icons/analytics.png';

export default function Sentiment() {
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
        <div className="flex gap-4 overflow-x-auto">
          <div className="w-[456px] h-[204px] flex p-6 gap-2 bg-[#E8F4FD] rounded-xl">
            <Image src={documentIcon} alt="" className="w-[44px] h-[44px]" />
            <div className="text-sm">
              <p className="text-[#191C1F] font-semibold mb-2">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-[#3E5765]">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
          <div className="w-[456px] h-[204px] flex p-6 gap-2 bg-[#EBF9F4] rounded-xl">
            <Image src={analyticsIcon} alt="" className="w-[44px] h-[44px]" />
            <div className="text-sm">
              <p className="text-[#191C1F] font-semibold mb-2">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-[#3E5765]">
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

        <div className="flex gap-10 items-center">
          <div className="h-[120px] w-[120px] rounded-full bg-[#EBF9F4] flex justify-center items-center text-[#0FBA83] font-medium">
            <span className="text-4xl">76</span>%
          </div>
          <div>
            <div className="text-[#7C7E8C] grid grid-cols-[55px_1fr]">
              <span className="">Buy</span>
              <div className="flex gap-2 items-center">
                <p className="bg-[#00B386] w-[350px] h-2 rounded-sm"></p>
                <span className="text-sm">76%</span>
              </div>
            </div>
            <div className="text-[#7C7E8C] grid grid-cols-[55px_1fr] mt-4">
              <span className="">Hold</span>
              <div className="flex gap-2 items-center">
                <p className="bg-[#C7C8CE] w-[33px] h-2 rounded-sm"></p>
                <span className="text-sm">8%</span>
              </div>
            </div>
            <div className="text-[#7C7E8C] grid grid-cols-[55px_1fr] mt-4">
              <span className="">Sell</span>
              <div className="flex gap-2 items-center">
                <p className="bg-[#F7324C] w-[66px] h-2 rounded-sm"></p>
                <span className="text-sm">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

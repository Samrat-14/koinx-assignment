import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import holdingMobileImg from '@/public/images/holdingMobile.png';
import trackAnalyticsImg from '@/public/images/trackAnalytics.png';

export default function About({ data }: { data: any }) {
  return (
    <div className="section mt-4">
      <h1 className="text-2xl font-semibold mb-6">About {data?.name}</h1>

      <h2 className="font-bold text-lg mb-2">What is {data?.name}?</h2>
      <p className="text-[#3E424A] sm:font-medium font-normal">
        {data?.name}’s price today is US$
        {data?.market_data?.current_price?.usd.toLocaleString('en-US')}, with a
        24-hour trading volume of $19.14 B.{' '}
        {(data?.symbol as string).toUpperCase()} is +0.36% in the last 24 hours.
        It is currently -7.70% from its 7-day all-time high of $18,366.66, and
        3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating
        supply of 19.24 M BTC and a max supply of 21 M BTC.
      </p>

      <hr className="hidden sm:block my-8 border-[#C9CFDD]" />

      <h2 className="font-bold text-lg sm:mt-0 mt-4 mb-2">
        Lorem ipsum dolor sit amet
      </h2>
      <p className="text-[#3E424A] sm:font-medium font-normal mb-6">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </p>
      <p className="text-[#3E424A] sm:font-medium font-normal mb-6">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p className="text-[#3E424A] sm:font-medium font-normal">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>

      <hr className="hidden sm:block my-8 border-[#C9CFDD]" />

      <h1 className="font-semibold text-2xl sm:mt-0 mt-4 mb-4">
        Already Holding Bitcoin?
      </h1>

      <div className="flex sm:flex-row flex-col gap-8 mb-2">
        <div className="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-md sm:w-[388px] w-full flex gap-8 p-4 items-center">
          <Image
            src={holdingMobileImg}
            alt=""
            className="h-[128px] w-[128px]"
          />
          <div>
            <p className="font-bold text-white sm:text-xl text-lg mb-4">
              Calculate your Profits
            </p>
            <button className="text-sm font-bold bg-white rounded-lg flex gap-2 p-2 px-4">
              Check Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-md sm:w-[388px] w-full flex gap-8 p-4 items-center">
          <Image
            src={trackAnalyticsImg}
            alt=""
            className="h-[128px] w-[128px]"
          />
          <div>
            <p className="font-bold text-white sm:text-xl text-lg mb-4">
              Calculate your tax liability
            </p>
            <button className="text-sm font-bold bg-white rounded-lg flex gap-2 p-2 px-4">
              Check Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <hr className="hidden sm:block my-6 border-[#C9CFDD]" />
      <p className="hidden sm:block text-[#3E424A] font-medium mb-2">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
}

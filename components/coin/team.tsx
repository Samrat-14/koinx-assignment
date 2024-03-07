import Image from 'next/image';

import Carousel from '../carousel';

import johnImg from '@/public/images/john.png';
import elinaImg from '@/public/images/elina.png';
import smithImg from '@/public/images/smith.png';

const teamData = [
  {
    name: 'John Smith',
    image: johnImg,
  },
  {
    name: 'Elina Williams',
    image: elinaImg,
  },
  {
    name: 'John Smith',
    image: smithImg,
  },
];

export default function Team() {
  return (
    <div className="section mt-4">
      <h1 className="text-2xl font-semibold mb-4">Team</h1>
      <p className="text-[#3E424A] font-medium">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <div>
        {teamData.map((team, index) => (
          <div
            key={`${team.name}-${index}`}
            className="bg-[#E8F4FD] px-8 py-4 rounded-lg flex sm:flex-row flex-col sm:gap-8 gap-4 items-center my-6"
          >
            <div className="text-center">
              <Image src={team.image} alt={team.name} />
              <span className="font-semibold text-[15px] text-nowrap">
                {team.name}
              </span>
              <p className="text-xs font-medium text-[#788F9B] text-nowrap">
                Designation here
              </p>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        ))}
      </div>

      <div className="sm:hidden block container">
        <Carousel label="You May Also Like" />
        <Carousel label="Trending Coins" />
      </div>
    </div>
  );
}

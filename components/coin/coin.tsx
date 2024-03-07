import ChartContainer from './chartContainer';
import Performance from './performance';
import Sentiment from './sentiment';
import About from './about';
import Tokenomics from './tokenomics';
import Team from './team';

export default function Coin() {
  return (
    <div className="sm:w-[70%] w-full">
      <ChartContainer />
      <div>
        <nav className="mt-4">
          <ul className="flex items-center sm:gap-12 gap-8 text-[#3E424A] sm:text-base text-sm font-medium border-b-[1px] border-[#D3E0E6] coin-nav overflow-x-auto scroll-hidden text-nowrap">
            <li className="active">Overview</li>
            <li>Fundamentals</li>
            <li>News Insights</li>
            <li>Sentiments</li>
            <li>Team</li>
            <li>Technicals</li>
            <li>Tokenomics</li>
          </ul>
        </nav>
        <Performance />
        <Sentiment />
        <About />
        <Tokenomics />
        <Team />
      </div>
    </div>
  );
}

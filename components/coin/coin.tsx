import ChartContainer from './chartContainer';
import Performance from './performance';
import Sentiment from './sentiment';
import About from './about';
import Tokenoimcs from './tokenoimcs';
import Team from './team';

export default function Coin() {
  return (
    <div className="flex-1">
      <ChartContainer />
      <div>
        <nav className="mt-4">
          <ul className="flex items-center gap-12 text-[#3E424A] font-medium border-b-[1px] border-[#D3E0E6] coin-nav">
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
        <Tokenoimcs />
        <Team />
      </div>
    </div>
  );
}

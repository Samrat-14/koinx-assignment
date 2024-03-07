const donutData = [
  {
    label: 'Crowdsale investors',
    value: 80,
    color: '#0082FF',
  },
  {
    label: 'Foundation',
    value: 20,
    color: '#FAA002',
  },
];

type DonutChartType = {
  data: {
    label: string;
    value: number;
    color: string;
  }[];
};

const DonutChart = ({ data }: DonutChartType) => {
  const firstStop = (80 / 100) * 360;

  return (
    <div className="flex gap-8 items-center">
      <div
        className="w-[180px] aspect-square rounded-full relative"
        style={
          {
            background: `conic-gradient(#0082FF ${firstStop}deg, #FAA002 ${firstStop}deg)`,
          } as React.CSSProperties
        }
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[120px] aspect-square rounded-full" />
      </div>
      <div>
        {data.map((tag) => (
          <p key={tag.label} className="flex gap-2 items-center mb-2">
            <span
              className="block w-3 h-3 rounded-full"
              style={{ background: tag.color } as React.CSSProperties}
            />
            {`${tag.label}: ${tag.value}%`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default function Tokenoimcs() {
  return (
    <div className="section mt-4">
      <h1 className="text-2xl font-semibold mb-6">Tokenomics</h1>

      <h2 className="text-[#1D1D1D] text-xl font-semibold mb-4">
        Initial Distribution
      </h2>

      <DonutChart data={donutData} />

      <p className="text-[#3E424A] font-medium py-4">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
}

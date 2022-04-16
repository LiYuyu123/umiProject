import { RingProgress } from '@ant-design/plots';


const Progress = ({  soc }) => {
  return (
    <>
      <RingProgress
        height={200}
        width={200}
        autoFit={false}
        percent={soc ? soc : 0}
        color={'l(270) 0:#00CA88 1:#96F577'}
        innerRadius={0.85}
        radius={0.98}
        statistic={{
          title: {
            style: { color: '#363636', fontSize: '12px', lineHeight: '14px' },
            formatter: () => '当前SOC',
          },
        }}
      />
    </>
  );
};

export default Progress

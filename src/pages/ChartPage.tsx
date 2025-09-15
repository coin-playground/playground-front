import React from 'react';
import type { LineData } from 'lightweight-charts';
import {LightweightChart} from "../components/LightweightChart.tsx";

const ChartPage: React.FC = () => {
  const sampleData: LineData[] = [
    { time: '2024-01-01', value: 100 },
    { time: '2024-01-02', value: 110 },
    { time: '2024-01-03', value: 105 },
    { time: '2024-01-04', value: 120 },
    { time: '2024-01-05', value: 115 },
    { time: '2024-01-06', value: 130 },
    { time: '2024-01-07', value: 125 },
    { time: '2024-01-08', value: 140 },
    { time: '2024-01-09', value: 135 },
    { time: '2024-01-10', value: 150 },
  ];

  const cryptoData: LineData[] = [
    { time: '2024-01-01', value: 42000 },
    { time: '2024-01-02', value: 43500 },
    { time: '2024-01-03', value: 41800 },
    { time: '2024-01-04', value: 45200 },
    { time: '2024-01-05', value: 44100 },
    { time: '2024-01-06', value: 46800 },
    { time: '2024-01-07', value: 45500 },
    { time: '2024-01-08', value: 48200 },
    { time: '2024-01-09', value: 47300 },
    { time: '2024-01-10', value: 49500 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lightweight Charts 예제</h1>

      <div style={{ marginBottom: '40px' }}>
        <h2>주식 가격 차트</h2>
        <LightweightChart
          data={sampleData}
          width={800}
          height={400}
        />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>암호화폐 가격 차트</h2>
        <LightweightChart
          data={cryptoData}
          width={800}
          height={400}
        />
      </div>
    </div>
  );
};

export default ChartPage;
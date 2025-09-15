import{useEffect, useRef} from 'react';
import {AreaSeries, createChart} from 'lightweight-charts';
import type {IChartApi, ISeriesApi, LineData} from 'lightweight-charts';

interface LightweightChartProps {
    data: LineData[];
    width: number;
    height: number;
}

export const LightweightChart = ({data, width, height} : LightweightChartProps) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const lineSeriesRef = useRef<ISeriesApi<'Area'> | null>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chart = createChart(chartContainerRef.current, {
            width,
            height,
            layout: {
                background: {color: '#ffffff'},
                textColor: '#333',
            },
            grid: {
                vertLines: {color: '#e1e1e1'},
                horzLines: {color: '#e1e1e1'},
            },
            timeScale: {
                borderColor: '#cccccc',
            },
            rightPriceScale: {
                borderColor: '#cccccc',
            },
        });

        const lineSeries = chart.addSeries(AreaSeries, {
            lineColor: '#2962FF',
            topColor: '#2962FF',
            bottomColor: 'rgba(41, 98, 255, 0.28)',
            lineWidth: 1
        });

        chartRef.current = chart;
        lineSeriesRef.current = lineSeries;

        return () => {
            chart.remove();
        };
    }, [width, height]);

    useEffect(() => {
        if (lineSeriesRef.current && data.length > 0) {
            lineSeriesRef.current.setData(data);
        }
    }, [data]);

    return <div ref={chartContainerRef}/>;
};
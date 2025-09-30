import {
    type CandlestickData,
    CandlestickSeries,
    ColorType,
    createChart,
    CrosshairMode,
    type IChartApi,
    type ISeriesApi, LineStyle
} from "lightweight-charts";
import {useEffect, useRef} from "react";

type LightweightChartProps = {
    data: CandlestickData[];
    width?: number;  // optional로 변경
    height?: number; // optional로 변경
};

export const Chart = ({data, width = 800, height = 400} : LightweightChartProps) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const candleSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chart = createChart(chartContainerRef.current, {
            width,
            height,
            layout: {
                textColor: 'black',
                background: { type: ColorType.Solid, color: 'white'}
            },
            crosshair: {
                mode: CrosshairMode.Normal,

                vertLine: {
                    width: 4,
                    color: '#C3BCDB44',
                    style: LineStyle.Solid,
                    labelBackgroundColor: '#9B7DFF',
                },
                horzLine: {
                    color: '#9B7DFF',
                    labelBackgroundColor: '#9B7DFF',
                },
            },
        });

        const candleSeries = chart.addSeries(CandlestickSeries, {
            upColor: '#FF3700',
            downColor: '#2962FF',
            wickUpColor: '#26a69a',
            wickDownColor: '#ef5350'
        });

        chartRef.current = chart;
        candleSeriesRef.current = candleSeries;

        if (data && data.length > 0) {
            candleSeries.setData(data);
        }

        const resizeObserver = new ResizeObserver(entries => {
            if (!entries.length || !chartRef.current) return;

            const { width, height } = entries[0].contentRect;
            chartRef.current.resize(width, height);
        });

        resizeObserver.observe(chartContainerRef.current);

        return () => {
            resizeObserver.disconnect();
            chart.remove();
        };
    }, [data, width, height]);

    return (
        <div
            ref={chartContainerRef}
            className="w-full h-full"
        />
    );
};
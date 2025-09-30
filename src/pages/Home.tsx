import {MovableGrid} from "../components/movableGrid";
import {Chart} from "../components/panels/Chart.tsx";
import {Trade} from "../components/panels/Trade.tsx";
import {useQuery} from "@tanstack/react-query";
import {type DailyCandleData, getDailyCandleChartData} from "../service/chart.ts";

interface CandleChartData {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

export const Home = () => {
    const { data } = useQuery({
        queryKey: ['daily', 'KRW-BTC', 200],
        queryFn: () => getDailyCandleChartData({
            market: 'KRW-BTC',
            count: 200
        }),
        staleTime: 1000 * 60,
        select: (data): CandleChartData[] => data.map((candle: DailyCandleData) => ({
            time: candle.candle_date_time_kst.split('T')[0],
            open: candle.opening_price,
            high: candle.high_price,
            low: candle.low_price,
            close: candle.trade_price,
        })).reverse(),
    });

    return (
        <div>
            <h1>HOME</h1>
            <MovableGrid
                panelTypes={{
                    '차트': () => (
                        <div className="w-full h-[700px]">  {/* 부모에서 높이 지정 */}
                            {data ? <Chart data={data} /> : <div>로딩중...</div>}
                        </div>
                    ),
                    '주문하기' : () => <Trade/>
                }}
            />
        </div>
    );
};
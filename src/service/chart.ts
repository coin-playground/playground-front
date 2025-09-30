export interface DailyCandleData {
    /** 페어(거래쌍)의 코드 (예: "KRW-BTC") */
    market: string;

    /** 캔들 구간의 시작 시각 (UTC 기준) - 형식: yyyy-MM-dd'T'HH:mm:ss */
    candle_date_time_utc: string;

    /** 캔들 구간의 시작 시각 (KST 기준) - 형식: yyyy-MM-dd'T'HH:mm:ss */
    candle_date_time_kst: string;

    /** 시가 - 해당 캔들의 첫 거래 가격 */
    opening_price: number;

    /** 고가 - 해당 캔들의 최고 거래 가격 */
    high_price: number;

    /** 저가 - 해당 캔들의 최저 거래 가격 */
    low_price: number;

    /** 종가 - 해당 페어의 현재 가격 */
    trade_price: number;

    /** 해당 캔들의 마지막 틱이 저장된 시각의 타임스탬프 (ms) */
    timestamp: number;

    /** 해당 캔들 동안의 누적 거래 금액 */
    candle_acc_trade_price: number;

    /** 해당 캔들 동안의 누적 거래된 디지털 자산의 수량 */
    candle_acc_trade_volume: number;

    /** 전일 종가 (UTC 0시 기준) */
    prev_closing_price: number;

    /** 전일 종가 대비 가격 변화 (양수: 상승, 음수: 하락) */
    change_price: number;

    /** 전일 종가 대비 가격 변화율 (예: 0.015 = 1.5% 상승) */
    change_rate: number;

    /** 종가 환산 가격 (converting_price_unit 파라미터 사용 시에만 제공) */
    converted_trade_price?: number;
}

export interface DailyCandleParams {
    /** 조회할 마켓 코드 (기본값: 'KRW-BTC') */
    market?: string;

    /** 조회할 캔들 개수 (기본값: 200, 최대: 200) */
    count?: number;

    /** 조회 기간의 종료 시각 (ISO 8601 형식) */
    to?: string | null;

    /** 종가 환산 통화 (예: 'KRW') */
    converting_price_unit?: string | null;
}

export const getDailyCandleChartData = async (
    {
        market = 'KRW-BTC',
        count = 200,
        to = null,
        converting_price_unit = 'KRW'
    } : DailyCandleParams) : Promise<DailyCandleData[]> => {
    const params = new URLSearchParams({
        market: market,
        count: count.toString(),
    });

    // 선택적 파라미터 추가
    if (to) {
        params.append('to', to);  // URLSearchParams가 자동으로 인코딩
    }
    if (converting_price_unit) {
        params.append('converting_price_unit', converting_price_unit);
    }

    return fetch(`https://api.upbit.com/v1/candles/days?${params.toString()}`).then(res => res.json())
};
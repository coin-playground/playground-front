import {MovableGrid} from "../components/movableGrid";
import {Chart} from "../components/panels/Chart.tsx";
import {Trade} from "../components/panels/Trade.tsx";

export const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <MovableGrid
                panelTypes={{
                    '차트' : () => <Chart/>,
                    '주문하기' : () => <Trade/>
                }}
            />
        </div>
    );
};
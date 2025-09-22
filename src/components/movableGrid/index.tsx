import type {ReactNode} from "react";

type PanelType = '차트' | '호가' | '실시간시세' | '주문하기';

type PanelComponent = () => ReactNode;

type PanelTypes = {
    [K in PanelType]?: PanelComponent;
};

interface MovableGridProps {
    panelTypes: PanelTypes;
}

export const MovableGrid = ({panelTypes}: MovableGridProps) => {

    // 트리를 이용해서 좌표 계산 로직

    return (
        <div>
            {/*  계산한 좌표를 바탕으로 panelTypes에서 받은 패널을 그리는 로직 */}
            {Object.entries(panelTypes).map(([key, Component]) => (
                <Component key={key}/>
            ))}
        </div>
    );
};
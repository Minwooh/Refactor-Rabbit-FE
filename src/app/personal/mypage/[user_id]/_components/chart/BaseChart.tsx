//"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { RadarChart, BarChart, PieChart, LineChart } from "echarts/charts";
import {
    TooltipComponent,
    GridComponent,
    LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import styled from "styled-components";

export type EChartsOption = import("echarts").EChartsOption;

echarts.use([
    RadarChart,
    BarChart,
    PieChart,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    CanvasRenderer,
]);

interface BaseChartProps {
    option: EChartsOption;
    className?: string;
    width?: string;
    height?: string;
}

function BaseChart({
    option,
    className,
    width = "100%",
    height = "100%",
}: BaseChartProps) {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const chart = echarts.init(chartRef.current);

        chart.setOption(option);

        const resizeHandler = () => chart.resize();
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
            chart.dispose();
        };
    }, [option]);

    return (
        <ChartContainer
            ref={chartRef}
            className={className}
            $width={width}
            $height={height}
        />
    );
}

const ChartContainer = styled.div<{ $width: string; $height: string }>`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
`;

export default BaseChart;

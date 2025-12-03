//"use client";
import BaseChart, { EChartsOption } from "./BaseChart";

export type ChartData = { value: number; name: string }[];

interface HalfChartProps {
    data: ChartData;
    colors?: string[];
    inner?: number;
    outer?: number;
    width?: string;
    height?: string;
}

function HalfChart({
    data,
    colors,
    inner,
    outer,
    width,
    height,
}: HalfChartProps) {
    const option: EChartsOption = {
        color: colors,
        legend: { show: false },
        series: [
            {
                name: "신뢰도",
                type: "pie",
                radius: [inner ?? 28, outer ?? 70],
                center: ["50%", "100%"],
                startAngle: 180,
                endAngle: 360,
                label: { show: false, position: "center" },
                labelLine: { show: false },
                itemStyle: {
                    shadowColor: "rgba(0, 0, 0, 0.3)",
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 3,
                },
                data,
            },
        ],
    };

    return <BaseChart option={option} width={width} height={height} />;
}

export default HalfChart;

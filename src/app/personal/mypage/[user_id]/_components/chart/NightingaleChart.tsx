import BaseChart, { EChartsOption } from "./BaseChart";
export type ChartData = { value: number; name: string }[];

interface NightingaleChartProps {
    data: ChartData;
    colors?: string[];
    inner?: number | string;
    outer?: number | string;
}

function NightingaleChart({
    data,
    colors,
    inner,
    outer,
}: NightingaleChartProps) {
    const sum = data.reduce((a, b) => a + b.value, 0);
    const seriesData = sum === 0 ? [] : data;

    const option: EChartsOption = {
        color: colors,
        tooltip: { trigger: "item" },
        legend: {
            show: true,
            orient: "vertical",
            left: 0,
            top: "20%",
            itemWidth: 14,
            itemHeight: 8,
            textStyle: { fontSize: 10, color: "#000" },
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: [inner ?? 15, outer ?? 60],
                center: ["68%", "50%"],
                avoidLabelOverlap: false,
                padAngle: 3,
                itemStyle: { borderRadius: 5 },
                label: { show: false, position: "center" },
                emphasis: {
                    label: { show: true, fontSize: 20, fontWeight: "bold" },
                },
                labelLine: { show: false },
                emptyCircleStyle: { color: "#e0e0e0" },
                data: seriesData,
            },
        ],
    };

    return <BaseChart option={option} />;
}

export default NightingaleChart;

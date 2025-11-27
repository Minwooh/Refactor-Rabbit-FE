//"use client";
import * as echarts from "echarts";
import BaseChart from "./BaseChart";
import { BunnyHolder } from "@/app/_api/bunnyAPI";

interface BarChartProps {
    data: BunnyHolder[];
    colors?: string[];
    width?: string;
    height?: string;
}

const defaultData = [
    { type: "GROWTH", value: 0 },
    { type: "STABLE", value: 0 },
    { type: "VALUE", value: 0 },
    { type: "POPULAR", value: 0 },
    { type: "BALANCE", value: 0 },
    { type: "BASIC", value: 0 },
];

const colors = ["#ff6848", "#ff836a", "#FF9782", "#FFBDAF", "#fecfc6"];

function BarChart({ data, width, height }: BarChartProps) {
    const chartData = defaultData.map((d) => {
        const match = data.find((item) => item.developerType === d.type);
        return { ...d, value: match ? match.percentage : 0 };
    });

    const seriesData = chartData.map((d, i) => ({
        value: d.value,
        itemStyle: { color: colors[i % colors.length] },
    }));

    const option: echarts.EChartsOption = {
        color: colors,
        xAxis: {
            type: "category",
            data: [
                "성장형",
                "안정형",
                "가치형",
                "인기형",
                "밸런스형",
                "기본형",
            ],
            axisLabel: {
                color: "#f5ca4a",
                fontSize: 8,
                fontWeight: "bold",
            },
            axisLine: { lineStyle: { color: "#ffffff" } },
            axisTick: { lineStyle: { color: "#ffffff" } },
        },
        yAxis: {
            type: "value",
        },
        grid: { top: "10px", containLabel: false },
        series: [
            {
                data: seriesData,
                type: "bar",
                barWidth: 20,
            },
        ],
    };

    return <BaseChart option={option} width={width} height={height} />;
}

export default BarChart;

"use client";

import React from "react";
import BaseChart, {
    EChartsOption,
} from "@/app/personal/mypage/[user_id]/_components/chart/BaseChart";
import { Bunny } from "../../_store/bunnyStore";

interface PentagonChartProps {
    data: Bunny;
    width?: string;
    height?: string;
}

const PentagonChart = ({
    data,
    width = "100%",
    height = "100%",
}: PentagonChartProps) => {
    const values = [
        data.growth,
        data.stability,
        data.popularity,
        data.value,
        data.reliability,
    ];

    const option: EChartsOption = {
        radar: {
            indicator: [
                { name: "성장형", max: 100 },
                { name: "안정형", max: 100 },
                { name: "인기형", max: 100 },
                { name: "가치형", max: 100 },
                { name: "밸런스형", max: 100 },
            ],
            center: ["50%", "50%"],
            radius: "65%",
            axisName: {
                color: "#ffffff",
                fontSize: 12,
                fontWeight: "bold",
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(65, 65, 65, 0.8)",
                    width: 1.5,
                },
            },
            splitArea: {
                areaStyle: {
                    color: ["rgba(65, 65, 65, 0.1)", "transparent"],
                    opacity: 0.5,
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(65, 65, 65, 0.9)",
                    width: 2,
                },
            },
        },
        series: [
            {
                name: "능력 지표",
                type: "radar",
                data: [
                    {
                        value: values,
                        name: "능력 지표",
                    },
                ],
                symbol: "circle",
                symbolSize: 6,
                lineStyle: {
                    color: "#909",
                    width: 2,
                },
                areaStyle: {
                    color: "#a017a0bd",
                },
                itemStyle: {
                    color: "#008b61",
                },
            },
        ],
    };

    return <BaseChart option={option} width={width} height={height} />;
};

export default PentagonChart;

"use client";

import React, { useMemo, useState } from "react";
import styled from "styled-components";
import BaseChart, {
    type EChartsOption,
} from "@/app/personal/mypage/[user_id]/_components/chart/BaseChart";

import { ChartData } from "../../_api/bunnyAPI";

interface ChartProps {
    chartData: ChartData | null;
    isLoading?: boolean;
    isMypage?: boolean;
    onPeriodChange?: (period: string) => void;
}

const Chart = ({
    chartData,
    isLoading = false,
    isMypage = false,
    onPeriodChange,
}: ChartProps) => {
    const [activePeriod, setActivePeriod] = useState<"일" | "주" | "월">("일");

    const handlePeriodChange = (period: "일" | "주" | "월") => {
        setActivePeriod(period);
        onPeriodChange?.(period);
    };

    const { xData, yData } = useMemo(() => {
        if (!chartData || !chartData.chart_data_list) {
            return { xData: [] as string[], yData: [] as number[] };
        }

        const sortedData = [...chartData.chart_data_list].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        const dataList = sortedData.slice(-7);

        const xData = dataList.map((item) => {
            const date = new Date(item.date);
            return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
                .getDate()
                .toString()
                .padStart(2, "0")}`;
        });

        const yData = dataList.map((item) => item.closing_price);

        return { xData, yData };
    }, [chartData, activePeriod]);

    const option: EChartsOption = useMemo(
        () => ({
            xAxis: {
                type: "category",
                data: xData,
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.3)",
                    },
                },
                axisLabel: {
                    color: "#fff",
                    fontSize: 10,
                },
            },
            yAxis: {
                type: "value",
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.3)",
                    },
                },
                axisLabel: {
                    color: "#fff",
                    fontSize: 10,
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.1)",
                    },
                },
            },
            grid: {
                left: isMypage ? "6%" : "10%",
                right: isMypage ? "5%" : "10%",
                top: "20%",
                bottom: "15%",
                containLabel: true,
            },
            series: [
                {
                    data: yData,
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        color: "#FFD700",
                        width: 2,
                    },
                    itemStyle: {
                        color: "#FFD700",
                    },
                    areaStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(255, 215, 0, 0.3)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(255, 215, 0, 0.05)",
                                },
                            ],
                        },
                    },
                },
            ],
            tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                borderColor: "#FFD700",
                textStyle: {
                    color: "#fff",
                },
            },
        }),
        [xData, yData, isMypage]
    );

    return (
        <ChartContainer>
            <ButtonContainer $isMypage={isMypage}>
                <PeriodButton
                    $active={activePeriod === "일"}
                    onClick={() => handlePeriodChange("일")}
                >
                    일
                </PeriodButton>
                <PeriodButton
                    $active={activePeriod === "주"}
                    onClick={() => handlePeriodChange("주")}
                >
                    주
                </PeriodButton>
                <PeriodButton
                    $active={activePeriod === "월"}
                    onClick={() => handlePeriodChange("월")}
                >
                    월
                </PeriodButton>
            </ButtonContainer>

            {isLoading ? (
                <LoadingContainer>
                    <LoadingText>차트 로딩중 🐰</LoadingText>
                </LoadingContainer>
            ) : (
                <ChartInner>
                    <BaseChart option={option} width="100%" height="100%" />
                </ChartInner>
            )}
        </ChartContainer>
    );
};

const ChartContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ButtonContainer = styled.div<{ $isMypage: boolean }>`
    display: flex;
    gap: 0.5rem;
    position: absolute;
    top: ${(props) => (props.$isMypage ? "-20px" : "0.5rem")};
    right: ${(props) => (props.$isMypage ? "10px" : "0.5rem")};
    z-index: 10;
`;

const PeriodButton = styled.button<{ $active: boolean }>`
    padding: 0.25rem 0.75rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    ${({ $active }) =>
        $active
            ? `
        background-color: #FFD700;
        color: #333;
        box-shadow: 0 2px 4px rgba(255, 215, 0, 0.3);
      `
            : `
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
      `}
`;

const ChartInner = styled.div`
    width: 100%;
    height: 100%;
    min-height: 200px;
`;

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;
`;

const LoadingText = styled.div`
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
`;

export default Chart;

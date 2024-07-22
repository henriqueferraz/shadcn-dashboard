'use client';

import { seed } from "@/data/seed";
import {
    Bar,
    BarChart as BarGraph,
    ResponsiveContainer,
    XAxis,
    YAxis
} from "recharts";

export default function BarChart() {
    const { barChartData } = seed
    return (
        <ResponsiveContainer width={"100%"} height={250}>
            <BarGraph data={barChartData}>
                <XAxis
                    dataKey={"name"}
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
            </BarGraph>
        </ResponsiveContainer>
    )
}
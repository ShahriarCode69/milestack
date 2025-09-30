"use client";
import { Area, AreaChart, XAxis, CartesianGrid } from "recharts";
import { FaCloud, FaDev } from "react-icons/fa6";
import { Card, CardContent } from "./card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "./chart";

const chartData = [
  { month: "Jan", YourTool: 100, OtherTools: 80 },
  { month: "Feb", YourTool: 120, OtherTools: 96 },
  { month: "Mar", YourTool: 115, OtherTools: 75 },
  { month: "Apr", YourTool: 135, OtherTools: 56 },
  { month: "May", YourTool: 165, OtherTools: 88 },
  { month: "June", YourTool: 150, OtherTools: 70 },
  { month: "July", YourTool: 170, OtherTools: 55 },
];

const chartConfig = {
  YourTool: {
    label: "Your Tool",
    color: "#155dfc", // Blue
    icon: FaDev,
  },
  OtherTools: {
    label: "Other Tools",
    color: "#6b7280", // Gray
    icon: FaCloud,
  },
} satisfies ChartConfig;

export function ChartAreaGradient() {
  return (
    <Card className="w-full border-none">
      <CardContent>
        <ChartContainer config={chartConfig} className="h-96 w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 10,
              right: 10,
            }}
          >
            <CartesianGrid vertical={false} className="opacity-30" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-blue-950" />}
            />
            <defs>
              <linearGradient id="fillYourTool" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#155dfc" stopOpacity={1} />
                <stop offset="95%" stopColor="#1e40af" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillOtherTools" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#e11d48" stopOpacity={1} />
                <stop offset="90%" stopColor="#4c0519" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              dataKey="YourTool"
              type="natural"
              fill="url(#fillYourTool)"
              fillOpacity={0.8}
              stroke="#fff"
              stackId="a"
            />
            <Area
              dataKey="OtherTools"
              type="natural"
              fill="url(#fillOtherTools)"
              fillOpacity={0.8}
              stroke="#fff"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

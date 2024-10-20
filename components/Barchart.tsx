"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
  { month: "January", alerts: 186 },
  { month: "February",  alerts: 305 },
  { month: "March",  alerts: 237 },
  { month: "April",  alerts: 73 },
  { month: "May",  alerts: 209 },
  { month: "June",  alerts: 214 },
]

const chartConfig = {
  desktop: {
    label: "alerts",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card className="w-[350px] lg:w-[500px] ">
      <CardHeader>
        <CardTitle>Alerts</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="alerts" fill="hsl( 271 98.6% 72%)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          total alerts month wise  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          showing total number of unsafe websites visited by your child during last 6 month 
        </div>
      </CardFooter>
    </Card>
  )
}

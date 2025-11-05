"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Eye, MousePointer, Calendar, BarChart as BarChart3, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type Period = "today" | "week" | "month" | "year"

interface MetricData {
  value: number
  change: number
  trend: "up" | "down"
}

interface OverviewData {
  earnings: MetricData
  pageViews: MetricData
  ctr: MetricData
  rpm: MetricData
}

export function DashboardOverview() {
  const [period, setPeriod] = useState<Period>("month")
  const [data, setData] = useState<OverviewData>({
    earnings: { value: 0, change: 0, trend: "up" },
    pageViews: { value: 0, change: 0, trend: "up" },
    ctr: { value: 0, change: 0, trend: "up" },
    rpm: { value: 0, change: 0, trend: "up" },
  })

  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    // Load data from localStorage or generate sample data
    const savedCalculations = localStorage.getItem("adsense-saved-calculations")
    if (savedCalculations) {
      try {
        const calculations = JSON.parse(savedCalculations)
        // Calculate aggregate metrics from saved calculations
        if (calculations.length > 0) {
          const latest = calculations[0]
          setData({
            earnings: {
              value: latest.results.monthlyEarnings,
              change: 12.5,
              trend: "up",
            },
            pageViews: {
              value: Number.parseFloat(latest.pageViews) * 30,
              change: 8.3,
              trend: "up",
            },
            ctr: {
              value: latest.ctr,
              change: -2.1,
              trend: "down",
            },
            rpm: {
              value: latest.results.rpm,
              change: 15.7,
              trend: "up",
            },
          })
        }
      } catch (error) {
        console.error("Failed to load calculations:", error)
      }
    }

    // Generate chart data
    const days = period === "today" ? 24 : period === "week" ? 7 : period === "month" ? 30 : 365
    const generatedData = Array.from({ length: days }, (_, i) => ({
      name: period === "today" ? `${i}:00` : `Day ${i + 1}`,
      earnings: Math.random() * 100 + 50,
      pageViews: Math.random() * 10000 + 5000,
    }))
    setChartData(generatedData)
  }, [period])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toFixed(0)
  }

  const metrics = [
    {
      title: "Total Earnings",
      value: formatCurrency(data.earnings.value),
      change: data.earnings.change,
      trend: data.earnings.trend,
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Page Views",
      value: formatNumber(data.pageViews.value),
      change: data.pageViews.change,
      trend: data.pageViews.trend,
      icon: Eye,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Click-Through Rate",
      value: `${data.ctr.value.toFixed(2)}%`,
      change: data.ctr.change,
      trend: data.ctr.trend,
      icon: MousePointer,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "RPM",
      value: formatCurrency(data.rpm.value),
      change: data.rpm.change,
      trend: data.rpm.trend,
      icon: BarChart3,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Period</span>
        </div>
        <Tabs value={period} onValueChange={(value) => setPeriod(value as Period)}>
          <TabsList>
            <TabsTrigger value="today" className="text-xs">
              Today
            </TabsTrigger>
            <TabsTrigger value="week" className="text-xs">
              Week
            </TabsTrigger>
            <TabsTrigger value="month" className="text-xs">
              Month
            </TabsTrigger>
            <TabsTrigger value="year" className="text-xs">
              Year
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight
          return (
            <Card key={metric.title} className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <div className="flex items-center gap-1">
                      <TrendIcon className={`h-4 w-4 ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                      <span
                        className={`text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {Math.abs(metric.change)}%
                      </span>
                      <span className="text-sm text-muted-foreground">vs last period</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg font-heading">Earnings Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: any) => [`$${value.toFixed(2)}`, "Earnings"]}
              />
              <Area
                type="monotone"
                dataKey="earnings"
                stroke="hsl(var(--accent))"
                fillOpacity={1}
                fill="url(#earningsGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

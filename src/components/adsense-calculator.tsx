"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, DollarSign, Eye, MousePointer, Percent } from "lucide-react"
import { trackCalculation } from "@/components/analytics"

interface CalculationResults {
  dailyEarnings: number
  monthlyEarnings: number
  yearlyEarnings: number
  dailyClicks: number
  monthlyClicks: number
  yearlyClicks: number
  rpm: number
  ecpm: number
}

export function AdSenseCalculator() {
  const [pageViews, setPageViews] = useState<string>("1000")
  const [ctr, setCtr] = useState<string>("1.5")
  const [cpc, setCpc] = useState<string>("0.50")
  const [inputMode, setInputMode] = useState<"pageviews" | "impressions">("pageviews")

  const results = useMemo((): CalculationResults | null => {
    const views = Number.parseFloat(pageViews) || 0
    const clickRate = Number.parseFloat(ctr) / 100 || 0
    const costPerClick = Number.parseFloat(cpc) || 0

    if (views <= 0 || clickRate <= 0 || costPerClick <= 0) {
      return null
    }

    const dailyClicks = views * clickRate
    const dailyEarnings = dailyClicks * costPerClick
    const monthlyEarnings = dailyEarnings * 30
    const yearlyEarnings = dailyEarnings * 365
    const monthlyClicks = dailyClicks * 30
    const yearlyClicks = dailyClicks * 365

    const rpm = (dailyEarnings / views) * 1000
    const ecpm = rpm

    return {
      dailyEarnings,
      monthlyEarnings,
      yearlyEarnings,
      dailyClicks,
      monthlyClicks,
      yearlyClicks,
      rpm,
      ecpm,
    }
  }, [pageViews, ctr, cpc])

  useEffect(() => {
    if (results) {
      trackCalculation(pageViews, ctr, cpc, results)
    }
  }, [results, pageViews, ctr, cpc])

  const formatCurrency = useCallback((amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }, [])

  const formatNumber = useCallback((num: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(num)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Calculator className="h-6 w-6 text-primary" />
            AdSense Revenue Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Calculate your potential Google AdSense earnings based on page views, CTR, and CPC
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs value={inputMode} onValueChange={(value) => setInputMode(value as "pageviews" | "impressions")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pageviews">Page Views</TabsTrigger>
              <TabsTrigger value="impressions">Ad Impressions</TabsTrigger>
            </TabsList>

            <TabsContent value="pageviews" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pageviews" className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    Daily Page Views
                  </Label>
                  <Input
                    id="pageviews"
                    type="number"
                    placeholder="1000"
                    value={pageViews}
                    onChange={(e) => setPageViews(e.target.value)}
                    className="text-lg"
                    min="0"
                    step="1"
                  />
                  <p className="text-xs text-muted-foreground">Number of page views per day</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ctr" className="flex items-center gap-2">
                    <MousePointer className="h-4 w-4 text-primary" />
                    Click-Through Rate (%)
                  </Label>
                  <Input
                    id="ctr"
                    type="number"
                    step="0.1"
                    placeholder="1.5"
                    value={ctr}
                    onChange={(e) => setCtr(e.target.value)}
                    className="text-lg"
                    min="0"
                    max="100"
                  />
                  <p className="text-xs text-muted-foreground">Typical range: 0.5% - 3%</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cpc" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    Cost Per Click ($)
                  </Label>
                  <Input
                    id="cpc"
                    type="number"
                    step="0.01"
                    placeholder="0.50"
                    value={cpc}
                    onChange={(e) => setCpc(e.target.value)}
                    className="text-lg"
                    min="0"
                  />
                  <p className="text-xs text-muted-foreground">Typical range: $0.20 - $2.00</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="impressions" className="space-y-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Ad impressions mode coming soon. Use page views for now.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Daily Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{formatCurrency(results.dailyEarnings)}</div>
              <p className="text-sm text-muted-foreground mt-1">{formatNumber(results.dailyClicks)} clicks per day</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-secondary" />
                Monthly Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{formatCurrency(results.monthlyEarnings)}</div>
              <p className="text-sm text-muted-foreground mt-1">
                {formatNumber(results.monthlyClicks)} clicks per month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Yearly Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{formatCurrency(results.yearlyEarnings)}</div>
              <p className="text-sm text-muted-foreground mt-1">{formatNumber(results.yearlyClicks)} clicks per year</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Percent className="h-5 w-5 text-primary" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">{formatCurrency(results.rpm)}</div>
                  <p className="text-sm text-muted-foreground">RPM</p>
                  <p className="text-xs text-muted-foreground">Revenue per 1000 views</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-secondary">{formatCurrency(results.ecpm)}</div>
                  <p className="text-sm text-muted-foreground">eCPM</p>
                  <p className="text-xs text-muted-foreground">Effective cost per 1000</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-accent">{ctr}%</div>
                  <p className="text-sm text-muted-foreground">CTR</p>
                  <p className="text-xs text-muted-foreground">Click-through rate</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">{formatCurrency(Number.parseFloat(cpc))}</div>
                  <p className="text-sm text-muted-foreground">CPC</p>
                  <p className="text-xs text-muted-foreground">Cost per click</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Important Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Estimates Only</Badge>
            <Badge variant="outline">Actual Results May Vary</Badge>
            <Badge variant="outline">Not Google Official</Badge>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
            <li>• These calculations are estimates based on your inputs and may not reflect actual AdSense earnings</li>
            <li>• Actual earnings depend on factors like niche, audience location, seasonality, and ad placement</li>
            <li>• CTR and CPC values vary significantly across different industries and geographic regions</li>
            <li>• Use this tool for planning purposes only - actual performance may differ substantially</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator, Zap } from "lucide-react"

export function QuickCalculator() {
  const [pageViews, setPageViews] = useState("10000")
  const [ctr, setCtr] = useState("2.5")
  const [cpc, setCpc] = useState("0.75")
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    const views = Number.parseFloat(pageViews) || 0
    const clickRate = Number.parseFloat(ctr) / 100 || 0
    const costPerClick = Number.parseFloat(cpc) || 0

    const dailyClicks = views * clickRate
    const dailyEarnings = dailyClicks * costPerClick
    const monthlyEarnings = dailyEarnings * 30

    setResult(monthlyEarnings)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-heading flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          Quick Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="quick-views" className="text-sm">
            Daily Page Views
          </Label>
          <Input
            id="quick-views"
            type="number"
            value={pageViews}
            onChange={(e) => setPageViews(e.target.value)}
            placeholder="10000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-ctr" className="text-sm">
            CTR (%)
          </Label>
          <Input id="quick-ctr" type="number" value={ctr} onChange={(e) => setCtr(e.target.value)} placeholder="2.5" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-cpc" className="text-sm">
            CPC ($)
          </Label>
          <Input
            id="quick-cpc"
            type="number"
            value={cpc}
            onChange={(e) => setCpc(e.target.value)}
            placeholder="0.75"
            step="0.01"
          />
        </div>

        <Button onClick={calculate} className="w-full" size="sm">
          <Calculator className="h-4 w-4 mr-2" />
          Calculate
        </Button>

        {result !== null && (
          <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
            <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Earnings</p>
            <p className="text-2xl font-bold text-foreground">{formatCurrency(result)}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

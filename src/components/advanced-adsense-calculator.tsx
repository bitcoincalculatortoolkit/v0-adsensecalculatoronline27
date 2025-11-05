"use client"

import { useState, useEffect, useMemo, useCallback, useId } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Eye,
  MousePointer,
  Settings,
  Save,
  Download,
  Target,
  Globe,
  Calendar,
  AlertCircle,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { trackCalculation } from "@/components/analytics"
import { useI18n } from "@/lib/i18n/context"

interface CalculationResults {
  dailyEarnings: number
  monthlyEarnings: number
  yearlyEarnings: number
  dailyClicks: number
  monthlyClicks: number
  yearlyClicks: number
  rpm: number
  ecpm: number
  impressions: number
  fillRate: number
}

interface ChartData {
  name: string
  earnings: number
  clicks: number
  views: number
}

interface SavedCalculation {
  id: number
  date: string
  pageViews: string
  ctr: number
  cpc: number
  niche: string
  geography: string
  results: CalculationResults
}

const NICHE_MULTIPLIERS = {
  finance: 2.5,
  insurance: 2.8,
  legal: 3.2,
  health: 2.0,
  technology: 1.8,
  travel: 1.5,
  lifestyle: 1.2,
  entertainment: 1.0,
  gaming: 0.8,
  general: 1.0,
}

const GEO_MULTIPLIERS = {
  us: 1.0,
  uk: 0.8,
  ca: 0.7,
  au: 0.6,
  de: 0.5,
  fr: 0.4,
  in: 0.2,
  global: 0.6,
}

// Lightweight mini sparkline component for stat tiles
function MiniSparkline({ data }: { data: { i: number; v: number }[] }) {
  const gradientId = useId().replace(/:/g, "")
  return (
    <div className="h-8 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 2, bottom: 0, left: 0, right: 0 }}>
          <defs>
            <linearGradient id={`spark-${gradientId}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.35} />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="v"
            stroke="hsl(var(--accent))"
            strokeWidth={1.75}
            fill={`url(#spark-${gradientId})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function AdvancedAdSenseCalculator() {
  const { t } = useI18n()
  const [pageViews, setPageViews] = useState<string>("10000")
  const [ctr, setCtr] = useState<number[]>([2.5])
  const [cpc, setCpc] = useState<number[]>([0.75])
  const [niche, setNiche] = useState<string>("general")
  const [geography, setGeography] = useState<string>("us")
  const [adDensity, setAdDensity] = useState<number[]>([3])
  const [fillRate, setFillRate] = useState<number[]>([85])
  const [inputMode, setInputMode] = useState<"pageviews" | "impressions">("pageviews")
  const [viewMode, setViewMode] = useState<"basic" | "advanced">("advanced")
  const [showProjections, setShowProjections] = useState(true)
  const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("adsense-calculations")
    if (saved) {
      try {
        setSavedCalculations(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to load saved calculations:", e)
      }
    }
  }, [])

  const results = useMemo((): CalculationResults | null => {
    const views = Number.parseFloat(pageViews) || 0
    const clickRate = ctr[0] / 100 || 0
    const costPerClick = cpc[0] || 0
    const nicheMultiplier = NICHE_MULTIPLIERS[niche as keyof typeof NICHE_MULTIPLIERS] || 1
    const geoMultiplier = GEO_MULTIPLIERS[geography as keyof typeof GEO_MULTIPLIERS] || 1
    const density = adDensity[0] || 1
    const fill = fillRate[0] / 100 || 0.85

    if (views <= 0 || clickRate <= 0 || costPerClick <= 0) {
      return null
    }

    const adjustedCPC = costPerClick * nicheMultiplier * geoMultiplier
    const impressions = views * density * fill
    const dailyClicks = impressions * clickRate
    const dailyEarnings = dailyClicks * adjustedCPC
    const monthlyEarnings = dailyEarnings * 30
    const yearlyEarnings = dailyEarnings * 365
    const monthlyClicks = dailyClicks * 30
    const yearlyClicks = dailyClicks * 365

    const rpm = (dailyEarnings / views) * 1000
    const ecpm = (dailyEarnings / impressions) * 1000

    return {
      dailyEarnings,
      monthlyEarnings,
      yearlyEarnings,
      dailyClicks,
      monthlyClicks,
      yearlyClicks,
      rpm,
      ecpm,
      impressions,
      fillRate: fill * 100,
    }
  }, [pageViews, ctr, cpc, niche, geography, adDensity, fillRate])

  const chartData = useMemo((): ChartData[] => {
    if (!results) return []

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months.map((month, index) => ({
      name: month,
      earnings: results.monthlyEarnings * (0.8 + Math.random() * 0.4), // Add some variance
      clicks: results.monthlyClicks * (0.8 + Math.random() * 0.4),
      views: Number.parseFloat(pageViews) * 30 * (0.8 + Math.random() * 0.4),
    }))
  }, [results, pageViews])

  const pieData = useMemo(() => {
    if (!results) return []
    return [
      { name: "Display Ads", value: results.dailyEarnings * 0.7, color: "#3b82f6" },
      { name: "In-Article", value: results.dailyEarnings * 0.2, color: "#8b5cf6" },
      { name: "Matched Content", value: results.dailyEarnings * 0.1, color: "#06b6d4" },
    ]
  }, [results])

  // Generate light sparkline data for stat tiles
  const genSpark = useCallback((base: number, variance = 0.15, count = 18) => {
    const clampedBase = isFinite(base) ? Math.max(0, base) : 0
    return Array.from({ length: count }, (_, i) => ({
      i,
      v: Math.max(0, clampedBase * (1 - variance + Math.random() * variance * 2)),
    }))
  }, [])

  const rpmSpark = useMemo(() => (results ? genSpark(results.rpm) : []), [results, genSpark])
  const ecpmSpark = useMemo(() => (results ? genSpark(results.ecpm) : []), [results, genSpark])
  const ctrSpark = useMemo(() => genSpark(ctr[0]), [ctr, genSpark])
  const cpcSpark = useMemo(() => genSpark(cpc[0]), [cpc, genSpark])
  const fillSpark = useMemo(() => (results ? genSpark(results.fillRate) : []), [results, genSpark])
  const impressionsSpark = useMemo(() => (results ? genSpark(results.impressions) : []), [results, genSpark])

  useEffect(() => {
    if (results) {
      trackCalculation(pageViews, ctr[0].toString(), cpc[0].toString(), results)
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

  const saveCalculation = () => {
    if (results) {
      const calculation = {
        id: Date.now(),
        date: new Date().toISOString(),
        pageViews,
        ctr: ctr[0],
        cpc: cpc[0],
        niche,
        geography,
        results,
      }
      const updated = [calculation, ...savedCalculations.slice(0, 4)] // Keep last 5
      setSavedCalculations(updated)
      localStorage.setItem("adsense-calculations", JSON.stringify(updated))
    }
  }

  const exportData = () => {
    if (results && chartData) {
      const data = {
        inputs: {
          pageViews,
          ctr: ctr[0],
          cpc: cpc[0],
          niche,
          geography,
          adDensity: adDensity[0],
          fillRate: fillRate[0],
        },
        results,
        chartData,
        timestamp: new Date().toISOString(),
      }
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `adsense-calculation-${Date.now()}.json`
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Clean header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-border">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{t.calculator.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t.calculator.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-muted/30">
            <Label htmlFor="view-mode" className="text-xs font-medium cursor-pointer">
              {t.calculator.advancedMode}
            </Label>
            <Switch
              id="view-mode"
              checked={viewMode === "advanced"}
              onCheckedChange={(checked) => setViewMode(checked ? "advanced" : "basic")}
            />
          </div>

          <Button variant="outline" size="sm" onClick={saveCalculation}>
            <Save className="w-4 h-4 mr-2" />
            {t.common.save}
          </Button>
          <Button variant="outline" size="sm" onClick={exportData}>
            <Download className="w-4 h-4 mr-2" />
            {t.common.export}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Settings sidebar */}
        <div className="xl:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="h-5 w-5 text-muted-foreground" />
                {t.calculator.settings.title}
              </CardTitle>
              <CardDescription className="text-sm">{t.calculator.settings.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs value={inputMode} onValueChange={(value) => setInputMode(value as "pageviews" | "impressions")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="pageviews">{t.calculator.tabs.pageViews}</TabsTrigger>
                  <TabsTrigger value="impressions">{t.calculator.tabs.impressions}</TabsTrigger>
                </TabsList>

                <TabsContent value="pageviews" className="space-y-5 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="pageviews" className="flex items-center gap-2 text-sm font-medium">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      {t.calculator.inputs.pageViews}
                    </Label>
                    <Input
                      id="pageviews"
                      type="number"
                      placeholder={t.calculator.inputs.pageViewsPlaceholder}
                      value={pageViews}
                      onChange={(e) => setPageViews(e.target.value)}
                      className="h-10"
                      min="0"
                      step="1"
                    />
                    <p className="text-xs text-muted-foreground">{t.calculator.inputs.pageViewsDesc}</p>
                  </div>

                  {viewMode === "advanced" && (
                    <>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-sm font-medium">
                          <Target className="h-4 w-4 text-muted-foreground" />
                          {t.calculator.inputs.niche}
                        </Label>
                        <Select value={niche} onValueChange={setNiche}>
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder={t.calculator.inputs.nicheSelect} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="finance">{t.calculator.niches.finance}</SelectItem>
                            <SelectItem value="insurance">{t.calculator.niches.insurance}</SelectItem>
                            <SelectItem value="legal">{t.calculator.niches.legal}</SelectItem>
                            <SelectItem value="health">{t.calculator.niches.health}</SelectItem>
                            <SelectItem value="technology">{t.calculator.niches.technology}</SelectItem>
                            <SelectItem value="travel">{t.calculator.niches.travel}</SelectItem>
                            <SelectItem value="lifestyle">{t.calculator.niches.lifestyle}</SelectItem>
                            <SelectItem value="entertainment">{t.calculator.niches.entertainment}</SelectItem>
                            <SelectItem value="gaming">{t.calculator.niches.gaming}</SelectItem>
                            <SelectItem value="general">{t.calculator.niches.general}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2 text-sm font-medium">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          {t.calculator.inputs.geography}
                        </Label>
                        <Select value={geography} onValueChange={setGeography}>
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder={t.calculator.inputs.geographySelect} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">{t.calculator.regions.us}</SelectItem>
                            <SelectItem value="uk">{t.calculator.regions.uk}</SelectItem>
                            <SelectItem value="ca">{t.calculator.regions.ca}</SelectItem>
                            <SelectItem value="au">{t.calculator.regions.au}</SelectItem>
                            <SelectItem value="de">{t.calculator.regions.de}</SelectItem>
                            <SelectItem value="fr">{t.calculator.regions.fr}</SelectItem>
                            <SelectItem value="in">{t.calculator.regions.in}</SelectItem>
                            <SelectItem value="global">{t.calculator.regions.global}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  <div className="space-y-2 p-4 rounded-lg bg-muted/30">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <MousePointer className="h-4 w-4 text-muted-foreground" />
                      {t.calculator.inputs.ctrLabel.replace("{value}", ctr[0].toString())}
                    </Label>
                    <Slider value={ctr} onValueChange={setCtr} max={10} min={0.1} step={0.1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0.1%</span>
                      <span>{t.calculator.inputs.ctrRange}</span>
                      <span>10%</span>
                    </div>
                  </div>

                  <div className="space-y-2 p-4 rounded-lg bg-muted/30">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      {t.calculator.inputs.cpcLabel.replace("{value}", formatCurrency(cpc[0]))}
                    </Label>
                    <Slider value={cpc} onValueChange={setCpc} max={5} min={0.01} step={0.01} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>$0.01</span>
                      <span>{t.calculator.inputs.cpcRange}</span>
                      <span>$5.00</span>
                    </div>
                  </div>

                  {viewMode === "advanced" && (
                    <>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          {t.calculator.inputs.adDensityLabel.replace("{value}", adDensity[0].toString())}
                        </Label>
                        <Slider
                          value={adDensity}
                          onValueChange={setAdDensity}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          {t.calculator.inputs.fillRateLabel.replace("{value}", fillRate[0].toString())}
                        </Label>
                        <Slider
                          value={fillRate}
                          onValueChange={setFillRate}
                          max={100}
                          min={50}
                          step={5}
                          className="w-full"
                        />
                      </div>
                    </>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {savedCalculations.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t.calculator.recent.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {savedCalculations.slice(0, 3).map((calc) => (
                  <div key={calc.id} className="p-3 bg-muted/30 rounded-lg space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">
                        {formatCurrency(calc.results.monthlyEarnings)}
                        {t.calculator.recent.perMonth}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(calc.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {formatNumber(Number.parseFloat(calc.pageViews))} {t.calculator.recent.views} • {calc.ctr}% CTR • {" "}
                      {formatCurrency(calc.cpc)} CPC
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Results section */}
        <div className="xl:col-span-2 space-y-6">
          {results && (
            <>
              {/* Revenue cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2 font-medium text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {t.calculator.results.daily}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {formatCurrency(results.dailyEarnings)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatNumber(results.dailyClicks)} {t.calculator.results.clicks}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2 font-medium text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      {t.calculator.results.monthly}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {formatCurrency(results.monthlyEarnings)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatNumber(results.monthlyClicks)} {t.calculator.results.clicks}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2 font-medium text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      {t.calculator.results.yearly}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {formatCurrency(results.yearlyEarnings)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatNumber(results.yearlyClicks)} {t.calculator.results.clicks}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {showProjections && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-heading">{t.calculator.results.projection}</CardTitle>
                      <CardDescription className="font-body">{t.calculator.results.projectionDesc}</CardDescription>
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
                          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" className="font-body" />
                          <YAxis stroke="hsl(var(--muted-foreground))" className="font-body" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "8px",
                              fontFamily: "var(--font-sans)",
                            }}
                            formatter={(value: any) => [formatCurrency(value), t.dashboard.chart.earnings]}
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

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 font-heading">
                        {t.calculator.results.breakdown}
                      </CardTitle>
                      <CardDescription className="font-body">{t.calculator.results.breakdownDesc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={120}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="hsl(var(--background))"
                            strokeWidth={2}
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value: any) => [formatCurrency(value), t.calculator.adTypes.dailyRevenue]}
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "8px",
                              fontFamily: "var(--font-sans)",
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="mt-6 space-y-3">
                        {pieData.map((entry, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-4 h-4 rounded-full ring-2 ring-background"
                                style={{ backgroundColor: entry.color }}
                              />
                              <span className="font-medium text-foreground">{entry.name}</span>
                            </div>
                            <div className="text-right">
                              <div className="font-display font-semibold text-foreground">
                                {formatCurrency(entry.value)}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {((entry.value / results.dailyEarnings) * 100).toFixed(0)}%{" "}
                                {t.calculator.adTypes.ofTotal}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 font-heading">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    {t.calculator.results.metrics}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-foreground font-display">
                        {formatCurrency(results.rpm)}
                      </div>
                      <p className="text-sm text-muted-foreground font-body">{t.calculator.results.rpm}</p>
                      <p className="text-xs text-muted-foreground font-body">{t.calculator.results.rpmDesc}</p>
                      <div className="mx-auto max-w-[120px]">
                        <MiniSparkline data={rpmSpark} />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-foreground font-display">
                        {formatCurrency(results.ecpm)}
                      </div>
                      <p className="text-sm text-muted-foreground font-body">{t.calculator.results.ecpm}</p>
                      <p className="text-xs text-muted-foreground font-body">{t.calculator.results.ecpmDesc}</p>
                      <div className="mx-auto max-w-[120px]">
                        <MiniSparkline data={ecpmSpark} />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-foreground font-display">{ctr[0]}%</div>
                      <p className="text-sm text-muted-foreground font-body">{t.calculator.results.ctr}</p>
                      <p className="text-xs text-muted-foreground font-body">{t.calculator.results.ctrDesc}</p>
                      <div className="mx-auto max-w-[120px]">
                        <MiniSparkline data={ctrSpark} />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-foreground font-display">{formatCurrency(cpc[0])}</div>
                      <p className="text-sm text-muted-foreground font-body">{t.calculator.results.cpc}</p>
                      <p className="text-xs text-muted-foreground font-body">{t.calculator.results.cpcDesc}</p>
                      <div className="mx-auto max-w-[120px]">
                        <MiniSparkline data={cpcSpark} />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-foreground font-display">
                        {formatNumber(results.fillRate)}%
                      </div>
                      <p className="text-sm text-muted-foreground font-body">{t.calculator.results.fillRate}</p>
                      <p className="text-xs text-muted-foreground font-body">{t.calculator.results.fillRateDesc}</p>
                      <div className="mx-auto max-w-[120px]">
                        <MiniSparkline data={fillSpark} />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-foreground font-display">
                        {formatNumber(results.impressions)}
                      </div>
                      <p className="text-sm text-muted-foreground font-body">{t.calculator.results.impressionsLabel}</p>
                      <p className="text-xs text-muted-foreground font-body">{t.calculator.results.impressionsDesc}</p>
                      <div className="mx-auto max-w-[120px]">
                        <MiniSparkline data={impressionsSpark} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>

      <Card className="border-border bg-gradient-to-br from-muted/50 to-muted/30">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-accent-foreground" />
            </div>
            <CardTitle className="text-xl font-heading">{t.calculator.disclaimer.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="font-display text-xs px-3 py-1">
              {t.calculator.disclaimer.badges.estimates}
            </Badge>
            <Badge variant="outline" className="font-display text-xs px-3 py-1">
              {t.calculator.disclaimer.badges.vary}
            </Badge>
            <Badge variant="outline" className="font-display text-xs px-3 py-1">
              {t.calculator.disclaimer.badges.notOfficial}
            </Badge>
            <Badge variant="outline" className="font-display text-xs px-3 py-1">
              {t.calculator.disclaimer.badges.planning}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-xs font-bold">1</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground text-sm">{t.calculator.disclaimer.items[1].title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.calculator.disclaimer.items[1].description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-xs font-bold">2</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground text-sm">{t.calculator.disclaimer.items[2].title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.calculator.disclaimer.items[2].description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-xs font-bold">3</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground text-sm">{t.calculator.disclaimer.items[3].title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.calculator.disclaimer.items[3].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-xs font-bold">4</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground text-sm">{t.calculator.disclaimer.items[4].title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.calculator.disclaimer.items[4].description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-xs font-bold">5</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground text-sm">{t.calculator.disclaimer.items[5].title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.calculator.disclaimer.items[5].description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-xs font-bold">6</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground text-sm">{t.calculator.disclaimer.items[6].title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.calculator.disclaimer.items[6].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              {t.calculator.disclaimer.footer}{" "}
              <a
                href="https://www.google.com/adsense"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                google.com/adsense
              </a>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

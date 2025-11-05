"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Save, Search, Trash2, Download, Calendar } from "lucide-react"

interface SavedCalculation {
  id: number
  date: string
  pageViews: string
  ctr: number
  cpc: number
  niche: string
  geography: string
  results: {
    dailyEarnings: number
    monthlyEarnings: number
    yearlyEarnings: number
    rpm: number
  }
}

export function SavedCalculations() {
  const [calculations, setCalculations] = useState<SavedCalculation[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("adsense-saved-calculations")
    if (saved) {
      try {
        setCalculations(JSON.parse(saved))
      } catch (error) {
        console.error("Failed to load calculations:", error)
      }
    }
  }, [])

  const deleteCalculation = (id: number) => {
    const updated = calculations.filter((calc) => calc.id !== id)
    setCalculations(updated)
    localStorage.setItem("adsense-saved-calculations", JSON.stringify(updated))
  }

  const exportCalculation = (calc: SavedCalculation) => {
    const blob = new Blob([JSON.stringify(calc, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `calculation-${calc.id}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const filteredCalculations = calculations.filter(
    (calc) =>
      calc.niche.toLowerCase().includes(searchTerm.toLowerCase()) ||
      calc.geography.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <Save className="h-5 w-5 text-accent" />
            Saved Calculations
          </CardTitle>
          <Badge variant="secondary">{calculations.length} saved</Badge>
        </div>
        <div className="mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by niche or geography..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {filteredCalculations.length === 0 ? (
          <div className="text-center py-12">
            <Save className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground font-body">No saved calculations yet</p>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Use the calculator to create and save your first calculation
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredCalculations.map((calc) => (
              <div
                key={calc.id}
                className="p-4 rounded-lg border border-border hover:border-accent/50 transition-colors bg-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {calc.niche}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {calc.geography.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(calc.date).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Monthly</p>
                        <p className="text-lg font-bold text-foreground">
                          {formatCurrency(calc.results.monthlyEarnings)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Page Views</p>
                        <p className="text-lg font-bold text-foreground">
                          {Number.parseFloat(calc.pageViews).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">CTR</p>
                        <p className="text-lg font-bold text-foreground">{calc.ctr}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">RPM</p>
                        <p className="text-lg font-bold text-foreground">{formatCurrency(calc.results.rpm)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => exportCalculation(calc)}
                      className="h-8 w-8"
                      title="Export"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteCalculation(calc.id)}
                      className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

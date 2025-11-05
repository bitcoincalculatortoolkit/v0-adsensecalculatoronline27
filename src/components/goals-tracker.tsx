"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Target } from "lucide-react"

interface Goal {
  id: string
  title: string
  current: number
  target: number
  unit: string
}

export function GoalsTracker() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: "1", title: "Monthly Revenue", current: 1250, target: 2000, unit: "$" },
    { id: "2", title: "Page Views", current: 75000, target: 100000, unit: "" },
    { id: "3", title: "CTR", current: 2.3, target: 3.0, unit: "%" },
  ])

  const formatValue = (value: number, unit: string) => {
    if (unit === "$") {
      return `$${value.toLocaleString()}`
    }
    if (unit === "%") {
      return `${value.toFixed(1)}%`
    }
    return value.toLocaleString()
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-heading flex items-center gap-2">
          <Target className="h-5 w-5 text-accent" />
          Goals Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100
          const isComplete = progress >= 100

          return (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{goal.title}</span>
                {isComplete && (
                  <Badge variant="default" className="text-xs">
                    Complete
                  </Badge>
                )}
              </div>
              <Progress value={Math.min(progress, 100)} className="h-2" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {formatValue(goal.current, goal.unit)} / {formatValue(goal.target, goal.unit)}
                </span>
                <span>{progress.toFixed(0)}%</span>
              </div>
            </div>
          )
        })}

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Keep tracking your progress to reach your monetization goals
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

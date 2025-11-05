import { memo } from "react"

export const LoadingSpinner = memo(function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 rounded-full border-4 border-muted"></div>
          {/* Animated ring */}
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
        <p className="text-sm text-muted-foreground font-medium">Loading...</p>
      </div>
    </div>
  )
})

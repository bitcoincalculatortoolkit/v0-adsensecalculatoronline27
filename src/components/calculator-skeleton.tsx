import { Skeleton } from "@/components/ui/skeleton"

export const CalculatorSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b">
        <div className="space-y-2">
          <Skeleton className="h-6 w-64 rounded-md" />
          <Skeleton className="h-4 w-80 rounded-md" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-24 rounded-full" />
          <Skeleton className="h-9 w-24 rounded-full" />
          <Skeleton className="h-9 w-24 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left settings card */}
        <div className="space-y-6 xl:col-span-1">
          <div className="rounded-xl border p-5 space-y-5">
            <Skeleton className="h-5 w-48" />
            <div className="space-y-4">
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>

          <div className="rounded-xl border p-5 space-y-3">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-full" />
          </div>
        </div>

        {/* Right results area */}
        <div className="space-y-6 xl:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Skeleton className="h-28 w-full rounded-xl" />
            <Skeleton className="h-28 w-full rounded-xl" />
            <Skeleton className="h-28 w-full rounded-xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Skeleton className="h-80 w-full rounded-xl" />
            <Skeleton className="h-80 w-full rounded-xl" />
          </div>

          <div className="rounded-xl border p-6">
            <Skeleton className="h-5 w-48 mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-7 w-24" />
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border p-6">
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <Skeleton className="h-6 w-64" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-28 rounded-full" />
            </div>
            <Skeleton className="h-24 w-full" />
          </div>
          <Skeleton className="h-36 w-full" />
        </div>
      </div>
    </div>
  )
}

import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface PageHeroProps {
  icon?: LucideIcon
  badge?: string
  title: string | ReactNode
  description: string | ReactNode
  className?: string
}

export function PageHero({ icon: Icon, badge, title, description, className = "" }: PageHeroProps) {
  return (
    <section className={`pt-32 pb-16 px-4 ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-2">
              <Icon className="h-8 w-8 text-accent" />
            </div>
          )}

          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted text-sm font-medium text-foreground">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {badge}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">{title}</h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

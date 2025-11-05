import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface RelatedLink {
  title: string
  description: string
  href: string
  icon?: LucideIcon
}

interface RelatedContentProps {
  title?: string
  description?: string
  links: RelatedLink[]
}

export function RelatedContent({ title = "Related Resources", description, links }: RelatedContentProps) {
  return (
    <Card className="border-accent/20 bg-accent/5">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={index}
                href={link.href}
                className="group flex items-start gap-3 p-4 rounded-lg border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
              >
                {Icon && (
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors flex items-center gap-2">
                    {link.title}
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{link.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

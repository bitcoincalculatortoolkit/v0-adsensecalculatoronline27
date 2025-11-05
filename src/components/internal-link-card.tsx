import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface InternalLinkCardProps {
  title: string
  description: string
  href: string
  linkText?: string
}

export function InternalLinkCard({ title, description, href, linkText = "Learn more" }: InternalLinkCardProps) {
  return (
    <Card className="border-accent/20 hover:border-accent/40 transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group"
        >
          {linkText}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}

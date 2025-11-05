"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb() {
  const pathname = usePathname()

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

    let currentPath = ""
    paths.forEach((path) => {
      currentPath += `/${path}`
      const label = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      breadcrumbs.push({ label, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Don't show breadcrumbs on homepage
  if (pathname === "/") return null

  // Generate JSON-LD schema for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://adsensecalculator.online${item.href}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav aria-label="Breadcrumb" className="pt-20 pb-4 bg-muted/30 border-b border-border/40">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden="true" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-medium flex items-center gap-1.5" aria-current="page">
                    {index === 0 && <Home className="h-4 w-4" aria-hidden="true" />}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm px-1 -mx-1"
                  >
                    {index === 0 && <Home className="h-4 w-4" aria-hidden="true" />}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}

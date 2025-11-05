import { SaaSHeader } from "@/components/saas-header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { DashboardOverview } from "@/components/dashboard-overview"
import { SavedCalculations } from "@/components/saved-calculations"
import { QuickCalculator } from "@/components/quick-calculator"
import { GoalsTracker } from "@/components/goals-tracker"
import { LayoutDashboard } from "lucide-react"

export const metadata = {
  title: "Dashboard - AdSense Calculator",
  description: "Track your AdSense performance and manage your calculations",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SaaSHeader />

      <main className="flex-1">
        <PageHero
          icon={LayoutDashboard}
          badge="Dashboard"
          title="Your AdSense Performance Hub"
          description="Track your AdSense performance, manage calculations, and monitor your revenue goals"
        />

        <section className="pb-16 px-4">
          <div className="container mx-auto space-y-8">
            <DashboardOverview />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <SavedCalculations />
              </div>

              <div className="space-y-8">
                <QuickCalculator />
                <GoalsTracker />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

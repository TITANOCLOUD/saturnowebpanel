import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Integrations } from "@/components/integrations"
import { AIFeatures } from "@/components/ai-features"
import { PanelShowcase } from "@/components/panel-showcase"
import { Benefits } from "@/components/benefits"
import { ComparisonTable } from "@/components/comparison-table"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <AIFeatures />
      <Integrations />
      <PanelShowcase />
      <Benefits />
      <ComparisonTable />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}

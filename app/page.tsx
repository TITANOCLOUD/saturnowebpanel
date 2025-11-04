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
import { SEOContent } from "@/components/seo-content"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEOContent />
      <article itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <section aria-label="Características principales">
          <Features />
        </section>
        <section aria-label="Inteligencia Artificial">
          <AIFeatures />
        </section>
        <section aria-label="Integraciones">
          <Integrations />
        </section>
        <section aria-label="Panel de control">
          <PanelShowcase />
        </section>
        <section aria-label="Ventajas competitivas">
          <Benefits />
        </section>
        <section aria-label="Comparación con competidores">
          <ComparisonTable />
        </section>
        <section aria-label="Precios">
          <Pricing />
        </section>
        <section aria-label="Llamado a la acción">
          <CTA />
        </section>
      </article>
      <Footer />
    </main>
  )
}

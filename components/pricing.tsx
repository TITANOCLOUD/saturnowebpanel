import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfecto para proyectos pequeños",
    features: [
      "5 servidores gestionados",
      "Integración OpenStack básica",
      "Proxmox VE incluido",
      "Backups Acronis (100GB)",
      "1 servidor OVH",
      "Soporte por email",
    ],
  },
  {
    name: "Professional",
    price: "149",
    description: "Ideal para empresas en crecimiento",
    popular: true,
    features: [
      "25 servidores gestionados",
      "OpenStack completo",
      "Proxmox cluster",
      "Backups Acronis (1TB)",
      "5 servidores OVH",
      "Soporte prioritario 24/7",
      "API completa",
      "Migración gratuita",
    ],
  },
  {
    name: "Enterprise",
    price: "399",
    description: "Máxima potencia y control",
    features: [
      "Servidores ilimitados",
      "OpenStack multi-región",
      "Proxmox HA cluster",
      "Backups Acronis ilimitados",
      "Servidores OVH ilimitados",
      "Soporte dedicado 24/7",
      "Consultoría incluida",
      "SLA 99.99%",
      "Configuración personalizada",
      "Auditorías de seguridad",
    ],
  },
]

export function Pricing() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">
            Planes diseñados para <span className="text-primary">cada necesidad</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comienza con el plan que se ajuste a tu negocio y escala según creces. Sin sorpresas, sin costos ocultos.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 space-y-6 ${
                plan.popular ? "border-primary bg-primary/5 shadow-lg shadow-primary/20" : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Más Popular
                </Badge>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </div>

              <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                Comenzar Ahora
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 mt-0.5 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Todos los planes incluyen garantía de devolución de 30 días. Sin preguntas.
        </p>
      </div>
    </section>
  )
}

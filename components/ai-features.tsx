import { Brain, MessageSquare, TrendingUp, Shield, Sparkles, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const aiFeatures = [
  {
    icon: MessageSquare,
    title: "ChatGPT Integrado",
    description: "Ejecuta comandos técnicos, consultas y diagnósticos mediante lenguaje natural.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Brain,
    title: "Claude para Validación",
    description: "Valida lógica, detecta errores y apoya en decisiones críticas de infraestructura.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: TrendingUp,
    title: "IA Predictiva",
    description: "Anticipa fallos, optimiza recursos y previene problemas antes de que ocurran.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Sparkles,
    title: "Automatización Inteligente",
    description: "Tickets inteligentes que se resuelven automáticamente sin intervención humana.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Shield,
    title: "Detección de Anomalías",
    description: "Monitoreo con IA que identifica patrones anormales y amenazas de seguridad.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Zap,
    title: "Optimización Continua",
    description: "Ajusta automáticamente recursos según demanda y patrones de uso históricos.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
]

export function AIFeatures() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Inteligencia Artificial
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">
            IA integrada en el <span className="text-primary">núcleo del sistema</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            ChatGPT y Claude trabajan juntos para automatizar, validar y optimizar tu infraestructura 24/7
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} transition-transform group-hover:scale-110`}
              >
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ventaja Competitiva</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mientras WHMCS y HostBill dependen de módulos externos limitados, SATURNO integra IA como núcleo del
              sistema. Los usuarios y operadores pueden consultar, automatizar y resolver incidentes mediante IA, sin
              intervención humana constante.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

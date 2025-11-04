import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Shield, Zap, TrendingUp } from "lucide-react"

const benefits = [
  {
    badge: "Infraestructura Real",
    icon: Zap,
    title: "Automatización Completa, No Solo Facturación",
    description:
      "A diferencia de WHMCS y HostBill que solo gestionan facturación, SATURNO controla infraestructura, servicios y clientes desde un mismo entorno.",
    features: [
      "Control de clústeres Ceph y Kubernetes",
      "Gestión directa de VPS y firewalls",
      "Backups Proxmox y S3 automatizados",
      "Sin dependencia de paneles externos",
    ],
  },
  {
    badge: "Inteligencia Artificial",
    icon: Shield,
    title: "IA Nativa Integrada en el Núcleo",
    description:
      "ChatGPT ejecuta comandos técnicos y diagnósticos. Claude valida lógica y detecta errores. IA predictiva anticipa fallos y optimiza recursos.",
    features: [
      "Comandos técnicos mediante ChatGPT",
      "Validación de lógica con Claude",
      "IA predictiva para anticipar fallos",
      "Resolución automática de incidentes",
    ],
    highlight: true,
  },
  {
    badge: "Escalabilidad",
    icon: TrendingUp,
    title: "Arquitectura Modular vs Monolítica",
    description:
      "WHMCS y HostBill son sistemas PHP monolíticos. SATURNO usa microservicios independientes que puedes actualizar sin afectar el resto.",
    features: [
      "Módulos independientes (LARA, ASLAM, PENELOPE)",
      "Actualización sin downtime",
      "Escalado horizontal automático",
      "Ideal para cloud distribuido o híbrido",
    ],
  },
]

export function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">
            Ventajas clave de <span className="text-primary">SATURNO</span> frente a WHMCS y HostBill
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            No solo facturación: control total de infraestructura, servicios y clientes con IA integrada
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 space-y-6 ${
                benefit.highlight ? "border-primary bg-primary/5 shadow-lg shadow-primary/20" : "border-border bg-card"
              }`}
            >
              <div>
                <Badge variant={benefit.highlight ? "default" : "secondary"} className="mb-4">
                  <benefit.icon className="h-3 w-3 mr-1" />
                  {benefit.badge}
                </Badge>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>

              <ul className="space-y-3">
                {benefit.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`h-5 w-5 shrink-0 mt-0.5 ${benefit.highlight ? "text-primary" : "text-secondary"}`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Cloud, Database, Lock, Gauge, Layers, Terminal, Cpu, Network } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "LARA - Infraestructura Inteligente",
    description:
      "Crea, modifica y mejora clústeres Ceph y Kubernetes. Administra redes, seguridad y almacenamiento distribuido con automatización completa.",
  },
  {
    icon: Cpu,
    title: "ASLAM - Gestión de Servicios",
    description:
      "Administra VPS, firewalls, bases de datos, redes VPN y backups Proxmox y S3. Control directo sobre hardware y virtualización.",
  },
  {
    icon: Network,
    title: "PENELOPE - Portal de Clientes",
    description:
      "Gestiona usuarios, clientes y portal web de autogestión. Integra métricas en tiempo real, pagos automatizados y soporte inteligente.",
  },
  {
    icon: Database,
    title: "Proxmox Virtualización",
    description:
      "Conexión directa con API de Proxmox. Gestiona nodos, backups y restauraciones sin exponer tus clústeres, funciona local o en cloud.",
  },
  {
    icon: Cloud,
    title: "Integración OVHCloud",
    description:
      "Control total de hardware, red, IPMI y VPS mediante OVH API. Despliegue automatizado y gestión completa de servidores dedicados.",
  },
  {
    icon: Lock,
    title: "Seguridad Zero Trust",
    description:
      "Autenticación multifactor, control granular de permisos por máquina, host o clúster. Cumplimiento ISO 27001, GDPR y PCI DSS.",
  },
  {
    icon: Gauge,
    title: "Monitoreo Unificado",
    description:
      "OpenTelemetry, Prometheus y Grafana integrados. Métricas de CPU, RAM, red y almacenamiento con alertas inteligentes en tiempo real.",
  },
  {
    icon: Terminal,
    title: "API Completa y Extensible",
    description:
      "API REST con JSON, WebSocket y OpenMetrics. Conectores inteligentes para integrar cualquier plataforma externa fácilmente.",
  },
]

export function Features() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">
            Arquitectura modular para <span className="text-primary">infraestructura completa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tres módulos independientes que controlan desde clústeres hasta clientes en un solo entorno
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

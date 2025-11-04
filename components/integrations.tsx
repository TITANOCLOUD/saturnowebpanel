import { Badge } from "@/components/ui/badge"
import { Server, Shield, Cloud, Plug, Lock, CheckCircle2 } from "lucide-react"

const integrationFeatures = [
  {
    icon: Plug,
    title: "Conexión API Directa",
    description: "Conecta Saturno con tu Proxmox mediante API REST. Sin necesidad de exponer tus clusters al exterior.",
  },
  {
    icon: Shield,
    title: "Sin Exposición de Clusters",
    description:
      "Tus clusters permanecen seguros. La conexión se establece de forma controlada sin abrir puertos públicos.",
  },
  {
    icon: Cloud,
    title: "Local o Cloud",
    description:
      "No importa dónde esté tu Proxmox: datacenter local, cloud privado o híbrido. Saturno se adapta a tu infraestructura.",
  },
  {
    icon: Lock,
    title: "Autenticación Segura",
    description: "Tokens API encriptados y autenticación por certificados. Control de permisos granular por usuario.",
  },
]

const connectionSteps = [
  {
    step: "1",
    title: "Genera Token API",
    description: "Crea un token de API en tu Proxmox con los permisos necesarios",
  },
  {
    step: "2",
    title: "Configura en Saturno",
    description: "Ingresa la URL de tu Proxmox y el token en el panel de Saturno",
  },
  {
    step: "3",
    title: "Verifica Conexión",
    description: "Saturno valida la conexión y sincroniza tus recursos automáticamente",
  },
  {
    step: "4",
    title: "Gestiona Todo",
    description: "Administra VMs, contenedores y recursos desde el panel unificado",
  },
]

export function Integrations() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2">
            <Server className="h-3 w-3 mr-1" />
            Integración Proxmox
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">
            Conecta con <span className="text-primary">Proxmox API</span> de forma segura
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            No necesitas exponer tus clusters. Saturno se conecta de forma segura mediante API, sin importar si tu
            infraestructura es local o está en la nube.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {integrationFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Connection Process */}
        <div className="rounded-2xl border border-border bg-muted/30 p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Configuración en 4 pasos simples</h3>
            <p className="text-muted-foreground">
              Conecta tu infraestructura Proxmox en minutos, sin complicaciones técnicas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {connectionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg shadow-primary/20">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < connectionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="mt-12 pt-12 border-t border-border">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Clusters Privados</p>
                  <p className="text-sm text-muted-foreground">Sin exposición pública</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Multi-Ubicación</p>
                  <p className="text-sm text-muted-foreground">Local, cloud o híbrido</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Sincronización Automática</p>
                  <p className="text-sm text-muted-foreground">Recursos actualizados en tiempo real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

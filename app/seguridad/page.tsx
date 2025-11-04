import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, Zap, Users, CreditCard, Globe, Brain } from "lucide-react"

export default function SeguridadPage() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Sistema de Gestión de Seguridad Centralizado",
      description:
        "SATURNO opera sobre un núcleo de seguridad (kernel TG) que controla todos los accesos, permisos y auditorías de forma unificada.",
      details: [
        "Gestión de autenticación, sesiones y roles desde un punto central de control",
        "Cada acción (crear, eliminar, modificar) se traza con logs de seguridad y auditoría",
        "Arquitectura Zero Trust aplicada: ningún servicio confía por defecto en otro",
      ],
      advantage:
        "El kernel actúa como cerebro de seguridad global, evitando brechas por permisos cruzados o errores humanos",
    },
    {
      icon: Lock,
      title: "Conexión Restringida Solo Desde Dentro de la Red",
      description:
        "El sistema no expone puertos de administración al exterior, eliminando vectores clásicos de ataque.",
      details: [
        "Solo se permiten conexiones SSH y RDP lanzadas desde dentro de la red interna",
        "No existen accesos directos a clústeres, servidores ni centros de datos desde Internet",
        "Las conexiones externas son validadas por tokens temporales y firmas digitales",
      ],
      advantage: "Elimina vectores clásicos de ataque como fuerza bruta, bots o scanners automatizados",
    },
    {
      icon: Eye,
      title: "No Exposición de Infraestructura ni Clústeres",
      description: "SATURNO implementa un modelo de aislamiento completo con múltiples capas de protección.",
      details: [
        "Los clústeres Ceph, Proxmox y Kubernetes permanecen ocultos bajo la capa de ASLAM",
        "Solo el panel maestro SATURNO tiene visibilidad interna mediante API autenticadas",
        "Los servidores físicos y virtuales están detrás de firewalls definidos por IA",
      ],
      advantage: "Incluso si un atacante comprometiera el portal, no podría alcanzar el nivel de infraestructura",
    },
    {
      icon: Zap,
      title: "Capacidad Demostrada Frente a Ataques Masivos",
      description:
        "El kernel de seguridad ha sido probado para soportar hasta dos millones de ataques por minuto sin interrupciones.",
      details: [
        "Bloqueos DDoS distribuidos",
        "Intentos de inyección SQL, XSS, CSRF",
        "Ataques de enumeración de usuarios y escalada de privilegios",
      ],
      advantage: "SATURNO mantiene operatividad continua y rendimiento estable incluso bajo estrés extremo",
    },
    {
      icon: Users,
      title: "Diseño Simplista y Seguro para Cualquier Operador",
      description: "El panel fue concebido bajo el principio 'seguridad por simplicidad'.",
      details: [
        "Interfaz limpia, intuitiva y guiada por IA",
        "Cualquier operador o cliente puede gestionar servicios sin riesgo",
        "Los permisos son inteligentes: la IA valida cada acción antes de ejecutarla",
      ],
      advantage: "Evita errores humanos (la causa del 80% de los incidentes de seguridad)",
    },
    {
      icon: CreditCard,
      title: "Integración Segura con Pasarelas de Pago",
      description:
        "SATURNO se comunica directamente con Stripe, ePayco y PayPal usando autenticación OAuth2 y cifrado extremo a extremo.",
      details: [
        "Tokens rotativos de acceso, no almacenados en base de datos",
        "Validación antifraude mediante IA y registros de actividad",
        "Auditoría cruzada entre sistemas financieros y logs del kernel",
      ],
      advantage: "Los pagos se procesan sin riesgo de fuga de datos sensibles y cumplen PCI DSS nativamente",
    },
    {
      icon: Globe,
      title: "Landing Page y Portal 100% Personalizables",
      description: "Cada cliente puede tener una landing page propia sobre el portal PENELOPE.",
      details: [
        "Personalización visual completa sin exponer el backend",
        "SSL automático con Cloudflare, HTTPS forzado y aislamiento de contenido",
        "La landing opera sobre una sandbox controlada",
      ],
      advantage: "Imagen corporativa personalizada con la misma protección del núcleo central",
    },
    {
      icon: Brain,
      title: "Supervisión Continua e Inteligencia Adaptativa",
      description: "La IA integrada (ChatGPT y Claude) monitorea continuamente logs, tráfico y acciones sospechosas.",
      details: [
        "Detecta anomalías (uso inusual de recursos o accesos desde ubicaciones no habituales)",
        "Puede bloquear cuentas, detener VMs o activar firewalls automáticamente",
        "Registra trazabilidad total de eventos con identificadores únicos",
      ],
      advantage: "Convierte al sistema en autodefensivo y predictivo, no solo reactivo",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ventajas de Seguridad del <span className="text-cyan-400">Kernel SATURNO</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Protección empresarial de nivel mundial con arquitectura Zero Trust y supervisión por IA
          </p>
        </div>

        <div className="space-y-12">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-cyan-400/50 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">{feature.description}</p>
                    <ul className="space-y-2 mb-4">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-cyan-400/5 border-l-4 border-cyan-400 p-4 rounded">
                      <p className="text-sm font-medium">
                        <span className="text-cyan-400">➡️ Ventaja:</span> {feature.advantage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Seguridad Probada en Producción</h2>
            <p className="text-muted-foreground mb-6 text-pretty max-w-2xl mx-auto">
              SATURNO ha demostrado su capacidad para resistir hasta 2 millones de ataques por minuto, manteniendo 99.9%
              de uptime y protegiendo infraestructuras críticas de empresas en todo el mundo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2M+</div>
                <div className="text-sm text-muted-foreground">Ataques bloqueados/min</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime garantizado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Brechas de seguridad</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

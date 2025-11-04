import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Layers, Key, Lock, Cloud, Brain, Network, FileCheck } from "lucide-react"

export default function CaracteristicasTecnicasPage() {
  const technicalFeatures = [
    {
      icon: Shield,
      title: "Arquitectura de Seguridad Centralizada",
      subtitle: "Núcleo TG (Titan Guardian)",
      points: [
        "Control total de accesos, permisos, autenticaciones y auditorías",
        "Registro unificado de cada acción en la plataforma",
        "Basado en el principio Zero Trust: ningún módulo o usuario tiene confianza implícita",
        "Gestión de seguridad a nivel de infraestructura, API y aplicación",
        "Monitoreo activo 24/7 por IA",
      ],
    },
    {
      icon: Layers,
      title: "Doble Firewall Inteligente",
      subtitle: "Lógico y Físico",
      points: [
        "Firewall 1 (Nivel Host): filtra el tráfico entrante/saliente de servidores físicos y VMs",
        "Firewall 2 (Nivel Capa de Aplicación / Zero Trust): valida conexiones internas entre módulos",
        "Cada conexión debe pasar por reglas inteligentes supervisadas por IA",
        "Compatible con IPSet, SDN y segmentación por datacenter",
        "Protección dinámica contra DDoS, inyección, brute-force y escaneo de red",
      ],
      advantage: "Ningún flujo de datos se mueve sin pasar por dos capas de control independientes",
    },
    {
      icon: Key,
      title: "Autenticación Avanzada AUT2",
      subtitle: "Control de Acceso Granular",
      points: [
        "MFA (Multi-Factor Authentication) integrado con TOTP y claves hardware",
        "Tokens dinámicos (JWT + HMAC) con expiración automática",
        "Firma digital en cada sesión y acción crítica",
        "Permisos por rol, máquina, host o clúster",
        "Revocación instantánea de credenciales desde el panel maestro",
        "Integración con IA para detección de accesos sospechosos",
      ],
      advantage: "Cada conexión se valida dos veces —por identidad y por contexto",
    },
    {
      icon: Lock,
      title: "Privacidad y Derechos del Usuario",
      subtitle: "Cumplimiento ISO 27001, GDPR y PCI DSS",
      points: [
        "Panel PENELOPE incluye controles de privacidad individual del cliente",
        "El usuario puede ver, exportar o eliminar sus datos personales",
        "Se garantiza el derecho al olvido y la transparencia de información",
        "Datos sensibles cifrados con AES-256 en reposo y TLS 1.3 en tránsito",
        "IA auditora verifica que no existan fugas de datos o accesos indebidos",
      ],
      advantage: "El sistema no solo cumple, supera los estándares internacionales de privacidad",
    },
    {
      icon: Cloud,
      title: "Conexión Directa con Proveedores Cloud",
      subtitle: "Sin Intermediarios",
      integrations: [
        {
          name: "Cloudflare API",
          features: [
            "Control directo de DNS, CDN, WAF y Zero Trust Access",
            "Creación automática de túneles seguros",
            "Regeneración de certificados SSL y políticas de acceso dinámico",
          ],
        },
        {
          name: "OVHCloud API",
          features: [
            "Administración directa de hardware, IPMI, redes y almacenamiento Ceph",
            "Conexión a instancias Proxmox, Ceph y Backup",
            "Sin intermediarios: interacción directa con la API OVH",
          ],
        },
        {
          name: "Acronis API",
          features: [
            "Integración para respaldo, recuperación y disaster recovery",
            "Enlace directo con agentes Acronis en servidores",
            "Restaurar máquinas completas o archivos específicos desde el panel",
          ],
        },
        {
          name: "Microsoft Azure API",
          features: [
            "Conexión con Azure Cloud Services, Storage y Virtual Network",
            "Soporte para importar VMs, snapshots y configuraciones",
            "Sincronización opcional con Azure AD para autenticación híbrida",
          ],
        },
        {
          name: "Amazon AWS API",
          features: [
            "Control de instancias EC2, S3 y Route53",
            "Respaldos automáticos en buckets S3",
            "Túneles directos SATURNO↔AWS para migraciones o multi-cloud",
          ],
        },
      ],
      advantage: "SATURNO actúa como panel maestro multi-cloud, integrando todos los entornos sin plugins externos",
    },
    {
      icon: Brain,
      title: "IA Cognitiva de Seguridad y Monitoreo",
      subtitle: "ChatGPT + Claude",
      points: [
        "Supervisar logs, firewalls, accesos y actividad de usuarios",
        "Detectar comportamientos anómalos o intentos de intrusión",
        "Activar protocolos automáticos de bloqueo o recuperación",
        "Compatible con Prometheus, Grafana, ELK y OpenTelemetry",
        "Autodiagnóstico predictivo del sistema",
      ],
      advantage: "Convierte la seguridad en un sistema inteligente y auto-evolutivo",
    },
    {
      icon: Network,
      title: "Conexiones Seguras y Controladas",
      subtitle: "Acceso Interno Exclusivo",
      points: [
        "Solo conexiones internas SSH y RDP generadas desde dentro de la red",
        "Los accesos externos deben pasar por Cloudflare Tunnel o VPN cifrada",
        "Cada conexión se verifica con tokens temporales y fingerprint del dispositivo",
        "Soporte para bastiones y saltos seguros administrados automáticamente",
      ],
      advantage: "Incluso administradores no pueden acceder a recursos sin autenticación contextual",
    },
    {
      icon: FileCheck,
      title: "Integración Segura con Pasarelas de Pago",
      subtitle: "Stripe, ePayco y PayPal",
      points: [
        "Integración directa bajo autenticación segura",
        "Procesamiento PCI-DSS compliant, sin almacenamiento local de credenciales",
        "Auditoría y trazabilidad de todas las transacciones",
        "IA antifraude analiza patrones de pago y acceso sospechoso",
      ],
      advantage: "Una plataforma 100% comercial y segura, sin exposición de datos financieros",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Características Técnicas del <span className="text-cyan-400">Kernel SATURNO</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Tecnología de vanguardia con arquitectura Zero Trust y supervisión por IA dual
          </p>
        </div>

        <div className="space-y-12">
          {technicalFeatures.map((feature, index) => {
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
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    {feature.subtitle && <p className="text-cyan-400 font-medium mb-4">{feature.subtitle}</p>}

                    {feature.points && (
                      <ul className="space-y-2 mb-4">
                        {feature.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">✓</span>
                            <span className="text-sm text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {feature.integrations && (
                      <div className="space-y-4 mb-4">
                        {feature.integrations.map((integration, idx) => (
                          <div key={idx} className="bg-muted/50 rounded-lg p-4">
                            <h4 className="font-semibold text-cyan-400 mb-2">{integration.name}</h4>
                            <ul className="space-y-1">
                              {integration.features.map((feat, fidx) => (
                                <li key={fidx} className="flex items-start gap-2">
                                  <span className="text-cyan-400 text-xs mt-1">→</span>
                                  <span className="text-xs text-muted-foreground">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {feature.advantage && (
                      <div className="bg-cyan-400/5 border-l-4 border-cyan-400 p-4 rounded">
                        <p className="text-sm font-medium">
                          <span className="text-cyan-400">➡️ Ventaja:</span> {feature.advantage}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Resumen de Capacidades Clave</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-4">
                <div className="text-cyan-400 font-bold mb-2">🔐 Seguridad Central</div>
                <div className="text-sm text-muted-foreground">Kernel TG + Doble Firewall</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-cyan-400 font-bold mb-2">🔑 Autenticación</div>
                <div className="text-sm text-muted-foreground">AUT2 + Zero Trust</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-cyan-400 font-bold mb-2">🧾 Privacidad</div>
                <div className="text-sm text-muted-foreground">GDPR / ISO 27001 / PCI DSS</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-cyan-400 font-bold mb-2">☁️ Cloud Integrations</div>
                <div className="text-sm text-muted-foreground">Cloudflare / OVH / Acronis / Azure / AWS</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-cyan-400 font-bold mb-2">🤖 Inteligencia Artificial</div>
                <div className="text-sm text-muted-foreground">ChatGPT + Claude</div>
              </div>
              <div className="bg-card rounded-lg p-4">
                <div className="text-cyan-400 font-bold mb-2">💳 Pagos Seguros</div>
                <div className="text-sm text-muted-foreground">Stripe / ePayco / PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

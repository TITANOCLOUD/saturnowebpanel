import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Cloud, Shield, Zap, Globe, Lock, Network } from "lucide-react"

export default function CloudflarePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange-500/10 mb-6">
              <Cloud className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Integración con <span className="text-orange-500">Cloudflare</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Control directo de DNS, CDN, WAF y Zero Trust Access desde SATURNO
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Seguridad y Protección Global</h2>
                  <p className="text-muted-foreground mb-4">
                    SATURNO se integra directamente con la API de Cloudflare para proporcionar protección de nivel
                    empresarial sin configuración manual.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">WAF (Web Application Firewall) con reglas personalizadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Protección DDoS automática a nivel de red y aplicación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">SSL/TLS automático con certificados gestionados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Zap className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">CDN y Rendimiento</h2>
                  <p className="text-muted-foreground mb-4">
                    Acelera tu contenido globalmente con la red de Cloudflare de más de 300 centros de datos.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Caché inteligente con purga automática</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Optimización de imágenes y contenido estático</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">HTTP/3 y QUIC para conexiones más rápidas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Globe className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Gestión de DNS</h2>
                  <p className="text-muted-foreground mb-4">
                    Control total de tus registros DNS con propagación instantánea y alta disponibilidad.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Creación y modificación de registros desde SATURNO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">DNS secundario y failover automático</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">DNSSEC para mayor seguridad</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Lock className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Zero Trust Access</h2>
                  <p className="text-muted-foreground mb-4">
                    Implementa acceso seguro sin VPN tradicional usando Cloudflare Access.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Autenticación basada en identidad para aplicaciones internas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Túneles seguros entre Cloudflare y SATURNO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Políticas de acceso granulares por usuario o grupo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Network className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Túneles Cloudflare</h2>
                  <p className="text-muted-foreground mb-4">
                    Conecta tu infraestructura de forma segura sin exponer IPs públicas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Creación automática de túneles desde SATURNO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Conexiones cifradas extremo a extremo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-sm">Regeneración automática de certificados SSL</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ventaja Competitiva</h2>
            <p className="text-muted-foreground text-pretty">
              SATURNO actúa como panel maestro para Cloudflare, permitiéndote gestionar toda tu infraestructura de
              seguridad, rendimiento y DNS desde un único lugar. Sin necesidad de cambiar entre múltiples paneles o
              configurar integraciones manualmente.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

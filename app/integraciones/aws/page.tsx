import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Cloud, Server, Database, Network, Shield, HardDrive } from "lucide-react"

export default function AWSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-500/10 mb-6">
              <Cloud className="w-10 h-10 text-amber-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Integración con <span className="text-amber-500">Amazon AWS</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Control de instancias EC2, S3 y Route53 desde el módulo ASLAM
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Server className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Amazon EC2</h2>
                  <p className="text-muted-foreground mb-4">
                    Gestiona tus instancias EC2 directamente desde SATURNO con control completo.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Crear, iniciar, detener y terminar instancias EC2</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Gestión de AMIs y snapshots de volúmenes EBS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Auto Scaling Groups configurables desde el panel</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <HardDrive className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Amazon S3</h2>
                  <p className="text-muted-foreground mb-4">
                    Integración completa con S3 para almacenamiento y respaldos automáticos.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Respaldos automáticos en buckets S3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Replicación cruzada con Acronis para disaster recovery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Gestión de políticas de ciclo de vida y versionado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Network className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Amazon Route53</h2>
                  <p className="text-muted-foreground mb-4">
                    Gestión de DNS con alta disponibilidad y enrutamiento inteligente.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Creación y modificación de zonas DNS desde SATURNO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Health checks y failover automático</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Enrutamiento geográfico y basado en latencia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Database className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Amazon RDS</h2>
                  <p className="text-muted-foreground mb-4">
                    Gestión de bases de datos relacionales con respaldos automáticos.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Crear y gestionar instancias RDS (MySQL, PostgreSQL, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Snapshots automáticos y restauración point-in-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Multi-AZ deployment para alta disponibilidad</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Túneles Directos y Multi-Cloud</h2>
                  <p className="text-muted-foreground mb-4">
                    Conecta AWS con tu infraestructura de forma segura y eficiente.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Túneles directos SATURNO↔AWS para migraciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">Estrategias multi-cloud con AWS + Azure + OVH</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">VPN Site-to-Site configurada automáticamente</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ventaja Competitiva</h2>
            <p className="text-muted-foreground text-pretty">
              SATURNO se integra directamente con la API de AWS sin intermediarios, permitiéndote gestionar EC2, S3,
              Route53 y RDS desde un panel unificado. Perfecto para arquitecturas multi-cloud que combinan AWS con otras
              plataformas de forma transparente y segura.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

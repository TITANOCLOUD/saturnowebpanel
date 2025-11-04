import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Cloud, Server, Database, Network, Shield, Zap } from "lucide-react"

export default function AzurePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-500/10 mb-6">
              <Cloud className="w-10 h-10 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Integración con <span className="text-blue-500">Microsoft Azure</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Conexión directa con Azure Cloud Services, Storage y Virtual Network
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Server className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Azure Virtual Machines</h2>
                  <p className="text-muted-foreground mb-4">
                    Gestiona tus máquinas virtuales de Azure directamente desde SATURNO con control total.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Importar VMs existentes desde Azure a SATURNO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Crear y configurar nuevas instancias desde el panel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Snapshots y restauración de máquinas completas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Database className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Azure Storage</h2>
                  <p className="text-muted-foreground mb-4">
                    Integración completa con Azure Blob Storage, Files y Disk Storage.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Gestión de contenedores y blobs desde SATURNO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Respaldos automáticos en Azure Storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Replicación geográfica y alta disponibilidad</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Network className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Azure Virtual Network</h2>
                  <p className="text-muted-foreground mb-4">
                    Configura redes virtuales, subredes y conexiones VPN desde un solo lugar.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Creación de VNets y subredes personalizadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Configuración de Network Security Groups (NSG)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Túneles VPN entre Azure y tu infraestructura</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Azure Active Directory</h2>
                  <p className="text-muted-foreground mb-4">
                    Sincronización opcional con Azure AD para autenticación híbrida empresarial.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Single Sign-On (SSO) con Azure AD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Gestión de usuarios y grupos desde SATURNO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Multi-Factor Authentication (MFA) integrado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <Zap className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Migraciones y Multi-Cloud</h2>
                  <p className="text-muted-foreground mb-4">
                    Facilita la migración entre Azure y otras plataformas cloud.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Importar configuraciones completas desde Azure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Estrategias multi-cloud con Azure + AWS + OVH</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-sm">Sincronización de datos entre plataformas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ventaja Competitiva</h2>
            <p className="text-muted-foreground text-pretty">
              SATURNO se conecta directamente con la API de Azure sin intermediarios, permitiéndote gestionar toda tu
              infraestructura Microsoft desde un panel unificado. Ideal para empresas que buscan integrar Azure con
              otras plataformas cloud de forma transparente.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

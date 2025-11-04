import { Check, X, Minus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const comparisonData = [
  {
    feature: "Gestión de infraestructura",
    saturno: "complete",
    whmcs: "none",
    hostbill: "none",
    description: "Clusters, VPS, redes, backups",
  },
  {
    feature: "Integración IA",
    saturno: "complete",
    whmcs: "limited",
    hostbill: "limited",
    description: "ChatGPT + Claude + IA Predictiva",
  },
  {
    feature: "Arquitectura modular",
    saturno: "complete",
    whmcs: "none",
    hostbill: "none",
    description: "Microservicios independientes",
  },
  {
    feature: "Seguridad Zero Trust",
    saturno: "complete",
    whmcs: "limited",
    hostbill: "partial",
    description: "Completa y granular",
  },
  {
    feature: "APIs de infraestructura",
    saturno: "complete",
    whmcs: "limited",
    hostbill: "limited",
    description: "OVH, Proxmox, Cloudflare, Acronis",
  },
  {
    feature: "Panel CSM con métricas",
    saturno: "complete",
    whmcs: "limited",
    hostbill: "partial",
    description: "Tiempo real con PENELOPE",
  },
  {
    feature: "Facturación y pagos",
    saturno: "complete",
    whmcs: "complete",
    hostbill: "complete",
    description: "Stripe, PayPal, ePayco nativos",
  },
  {
    feature: "Monitoreo unificado",
    saturno: "complete",
    whmcs: "none",
    hostbill: "limited",
    description: "IA + Grafana + Prometheus",
  },
  {
    feature: "Business Intelligence",
    saturno: "complete",
    whmcs: "none",
    hostbill: "none",
    description: "WASA BI integrado",
  },
]

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "complete":
      return <Check className="h-5 w-5 text-emerald-500" />
    case "partial":
      return <Minus className="h-5 w-5 text-amber-500" />
    case "limited":
      return <Minus className="h-5 w-5 text-orange-500" />
    case "none":
      return <X className="h-5 w-5 text-red-500" />
    default:
      return null
  }
}

export function ComparisonTable() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Comparativa Global
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-balance">
            SATURNO vs <span className="text-primary">la competencia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comparación detallada de características entre SATURNO, WHMCS y HostBill
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold">Característica</th>
                  <th className="text-center p-4 font-semibold">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-primary">SATURNO</span>
                    </div>
                  </th>
                  <th className="text-center p-4 font-semibold">WHMCS</th>
                  <th className="text-center p-4 font-semibold">HostBill</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div>
                        <div className="font-medium mb-1">{row.feature}</div>
                        <div className="text-sm text-muted-foreground">{row.description}</div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.saturno} />
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.whmcs} />
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.hostbill} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>Completo</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="h-4 w-4 text-amber-500" />
              <span>Parcial</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="h-4 w-4 text-red-500" />
              <span>No disponible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

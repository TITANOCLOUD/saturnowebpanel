import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, CheckCircle2, ArrowRight, Globe, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Integración OVH - Saturno | Servidores Dedicados y Cloud",
  description:
    "Gestiona tus servidores dedicados, VPS y servicios OVH desde Saturno. Control total de tu infraestructura OVH desde un panel unificado.",
  keywords: "ovh, servidores dedicados, vps ovh, cloud ovh, public cloud, kimsufi, soyoustart",
}

export default function OVHPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <Badge variant="outline" className="text-blue-500 border-blue-500/50">
              <Server className="mr-2 h-4 w-4" />
              Integración OVH
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Gestiona OVH desde <span className="text-primary">Saturno</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Controla tus servidores dedicados, VPS, Public Cloud y todos los servicios OVH desde el panel unificado de
              Saturno mediante API oficial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg">
                Conectar OVH
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Documentación
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Server className="h-10 w-10 text-blue-500 mb-2" />
              <CardTitle>Servidores Dedicados</CardTitle>
              <CardDescription>Control total de tus servidores bare-metal</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Gestión de servidores dedicados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Reinstalación de OS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Monitoreo de hardware</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-10 w-10 text-blue-500 mb-2" />
              <CardTitle>Public Cloud</CardTitle>
              <CardDescription>Instancias cloud escalables y flexibles</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Crear y gestionar instancias</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Volúmenes y snapshots</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Redes privadas</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-blue-500 mb-2" />
              <CardTitle>VPS</CardTitle>
              <CardDescription>Servidores virtuales privados de alto rendimiento</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Gestión de VPS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Backups automáticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Monitoreo en tiempo real</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <h2 className="text-3xl font-bold">Potencia tu Infraestructura OVH</h2>
              <p className="text-lg text-muted-foreground">
                Conecta todos tus servicios OVH con Saturno y gestiónalos desde un panel moderno y eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/">Volver al Inicio</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

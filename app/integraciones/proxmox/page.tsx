import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Shield, Zap, CheckCircle2, ArrowRight, Code2, Lock, Cloud } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Integración Proxmox - Saturno | Virtualización Empresarial",
  description:
    "Conecta Proxmox con Saturno para gestionar VMs, contenedores LXC y clusters desde un panel unificado. API segura sin exponer infraestructura.",
  keywords: "proxmox, virtualización, VMs, LXC, contenedores, KVM, cluster proxmox, API proxmox",
}

export default function ProxmoxPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <Badge variant="outline" className="text-orange-500 border-orange-500/50">
              <Server className="mr-2 h-4 w-4" />
              Integración Proxmox
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Gestiona Proxmox desde <span className="text-primary">un Panel Unificado</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Conecta tus clusters Proxmox locales o en cloud con Saturno mediante API segura. Sin necesidad de exponer
              tu infraestructura públicamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg">
                Conectar Proxmox
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Documentación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Server className="h-10 w-10 text-orange-500 mb-2" />
              <CardTitle>Gestión de VMs y Contenedores</CardTitle>
              <CardDescription>
                Crea, modifica y elimina máquinas virtuales y contenedores LXC desde Saturno
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Despliegue automatizado de VMs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Gestión de contenedores LXC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Clonación y templates</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-10 w-10 text-orange-500 mb-2" />
              <CardTitle>Conexión Segura</CardTitle>
              <CardDescription>API encriptada sin necesidad de exponer tus clusters públicamente</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Conexión TLS/SSL encriptada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Tokens de autenticación seguros</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Sin exposición pública requerida</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cloud className="h-10 w-10 text-orange-500 mb-2" />
              <CardTitle>Local o Cloud</CardTitle>
              <CardDescription>Conecta clusters Proxmox en tu datacenter o en proveedores cloud</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Clusters on-premise</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Proxmox en OVH, Hetzner, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Múltiples clusters simultáneos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-orange-500 mb-2" />
              <CardTitle>Monitoreo en Tiempo Real</CardTitle>
              <CardDescription>Visualiza el estado de tus recursos Proxmox instantáneamente</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Métricas de CPU, RAM y disco</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Estado de VMs y contenedores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Alertas automáticas</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-orange-500 mb-2" />
              <CardTitle>Backup Integrado</CardTitle>
              <CardDescription>Programa y gestiona backups de tus VMs desde Saturno</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Backups programados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Restauración rápida</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Integración con Acronis</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code2 className="h-10 w-10 text-orange-500 mb-2" />
              <CardTitle>API Completa</CardTitle>
              <CardDescription>Acceso total a la API de Proxmox desde Saturno</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Todas las funciones de Proxmox</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Automatización con scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Webhooks y eventos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Configuración en 4 Pasos</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      1
                    </div>
                    <CardTitle>Genera un Token API en Proxmox</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    En tu panel Proxmox, ve a Datacenter → Permissions → API Tokens y crea un nuevo token con los
                    permisos necesarios.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2
                    </div>
                    <CardTitle>Conecta en Saturno</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    En Saturno, ve a Integraciones → Proxmox y pega la URL de tu cluster, el token ID y el secret.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      3
                    </div>
                    <CardTitle>Verifica la Conexión</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Saturno probará la conexión y mostrará tus nodos, VMs y contenedores disponibles.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      4
                    </div>
                    <CardTitle>Comienza a Gestionar</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ya puedes crear, modificar y monitorear tus recursos Proxmox desde el panel unificado de Saturno.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <h2 className="text-3xl font-bold">¿Listo para integrar Proxmox?</h2>
              <p className="text-lg text-muted-foreground">
                Conecta tus clusters Proxmox con Saturno en minutos y comienza a gestionar toda tu infraestructura desde
                un solo lugar.
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

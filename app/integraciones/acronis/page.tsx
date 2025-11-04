import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle2, ArrowRight, HardDrive, Clock, Lock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Integración Acronis - Saturno | Backup y Recuperación",
  description:
    "Protege tu infraestructura con Acronis integrado en Saturno. Backups automáticos, recuperación ante desastres y protección ransomware.",
  keywords: "acronis, backup, disaster recovery, ransomware protection, cyber protect, backup cloud",
}

export default function AcronisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <Badge variant="outline" className="text-cyan-500 border-cyan-500/50">
              <Shield className="mr-2 h-4 w-4" />
              Integración Acronis
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Protección Total con <span className="text-primary">Acronis Cyber Protect</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Backups automáticos, recuperación ante desastres y protección contra ransomware. Todo integrado en Saturno
              para proteger tu infraestructura completa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg">
                Conectar Acronis
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
              <HardDrive className="h-10 w-10 text-cyan-500 mb-2" />
              <CardTitle>Backups Automáticos</CardTitle>
              <CardDescription>Protección continua de toda tu infraestructura</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Backups incrementales y diferenciales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Programación flexible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Deduplicación y compresión</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-cyan-500 mb-2" />
              <CardTitle>Recuperación Rápida</CardTitle>
              <CardDescription>Restaura sistemas completos en minutos</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Recuperación bare-metal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Restauración granular de archivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Instant restore desde cloud</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-10 w-10 text-cyan-500 mb-2" />
              <CardTitle>Protección Ransomware</CardTitle>
              <CardDescription>Defensa activa contra amenazas cibernéticas</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Detección de ransomware en tiempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Backups inmutables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">Recuperación automática</span>
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
              <h2 className="text-3xl font-bold">Protege tu Infraestructura Hoy</h2>
              <p className="text-lg text-muted-foreground">
                Integra Acronis Cyber Protect con Saturno y asegura que tu negocio esté protegido contra cualquier
                amenaza.
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

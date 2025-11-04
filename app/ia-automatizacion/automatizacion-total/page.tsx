import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Workflow, Zap, GitBranch, Clock, CheckCircle2, Sparkles } from "lucide-react"

export default function AutomatizacionTotalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">
                <Workflow className="mr-2 h-4 w-4" />
                Automatización Inteligente
              </Badge>

              <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">
                Automatización Total con <span className="text-primary">Workflows IA</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Crea workflows inteligentes que se adaptan automáticamente a tu negocio. Saturno automatiza tareas
                repetitivas, orquesta procesos complejos y aprende de tus patrones operativos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Crear Primer Workflow</Button>
                <Button size="lg" variant="outline">
                  Ver Plantillas
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Workflows Inteligentes</CardTitle>
                <CardDescription>Automatización que aprende y se adapta a tus necesidades</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Creación visual de workflows sin código</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Adaptación automática a cambios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Optimización continua con IA</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Ahorro de Tiempo</CardTitle>
                <CardDescription>Recupera hasta 20 horas semanales automatizando tareas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Provisioning automático de recursos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Escalado dinámico sin intervención</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Respuestas automáticas a incidentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GitBranch className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Orquestación Compleja</CardTitle>
                <CardDescription>Coordina múltiples sistemas y servicios sin esfuerzo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Integración con todas tus plataformas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Flujos condicionales inteligentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Manejo automático de errores</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-y border-border bg-muted/30">
          <div className="container mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Casos de Uso de Automatización</h2>
              <p className="text-xl text-muted-foreground">Automatiza cualquier proceso de tu infraestructura cloud</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Provisioning Automático</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Crea y configura nuevos servidores, VMs y servicios automáticamente cuando se necesiten
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Detección de necesidad de recursos</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Provisioning en múltiples clouds</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Configuración automática completa</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Validación y testing automático</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Respuesta a Incidentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Detecta, diagnostica y resuelve incidentes automáticamente sin intervención humana
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Detección automática de anomalías</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Diagnóstico inteligente de causa raíz</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Aplicación de soluciones conocidas</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Escalado a humanos si es necesario</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gestión de Backups</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Automatiza backups, verificación, retención y recuperación de datos
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Backups programados inteligentes</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Verificación automática de integridad</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Políticas de retención adaptativas</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Recuperación con un clic</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Optimización de Costos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Reduce costos automáticamente identificando y eliminando desperdicios
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Apagado de recursos no utilizados</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Rightsizing automático</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Limpieza de recursos huérfanos</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>Reportes de ahorro automáticos</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Workflow Builder Preview */}
        <section className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Constructor Visual de Workflows</h2>
            <p className="text-xl text-muted-foreground">Crea automatizaciones complejas sin escribir código</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Características del Constructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Interfaz Drag & Drop
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Arrastra y suelta componentes para crear workflows visualmente sin código
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-primary" />
                    Lógica Condicional
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Crea flujos complejos con condiciones, bucles y ramificaciones
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Plantillas IA
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Comienza con plantillas inteligentes que se adaptan a tu caso de uso
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Testing Integrado
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Prueba y valida workflows antes de ponerlos en producción
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted/30">
          <div className="container mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">Automatiza Tu Infraestructura Hoy</h2>
              <p className="text-xl text-muted-foreground">
                Crea tu primer workflow en minutos y empieza a ahorrar tiempo inmediatamente
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Crear Primer Workflow</Button>
                <Button size="lg" variant="outline">
                  Ver Documentación
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

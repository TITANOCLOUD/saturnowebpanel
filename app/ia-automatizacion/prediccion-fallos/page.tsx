import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Activity, Bell, CheckCircle2, TrendingUp } from "lucide-react"

export default function PrediccionFallosPage() {
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
                <Shield className="mr-2 h-4 w-4" />
                Mantenimiento Predictivo
              </Badge>

              <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">
                Predicción de Fallos con <span className="text-primary">IA Preventiva</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Detecta problemas antes de que ocurran. Saturno analiza patrones de comportamiento y métricas de salud
                para predecir fallos con hasta 7 días de anticipación, evitando downtime costoso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Activar Predicción IA</Button>
                <Button size="lg" variant="outline">
                  Ver Casos de Éxito
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.2%</div>
                <CardTitle>Precisión de Predicción</CardTitle>
                <CardDescription>Tasa de acierto en detección de fallos antes de que ocurran</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">7 días</div>
                <CardTitle>Anticipación Promedio</CardTitle>
                <CardDescription>Tiempo de aviso antes de que se materialice un problema</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <CardTitle>Reducción de Downtime</CardTitle>
                <CardDescription>Disminución de tiempo de inactividad no planificado</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* What We Predict */}
        <section className="border-y border-border bg-muted/30">
          <div className="container mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Qué Predecimos</h2>
              <p className="text-xl text-muted-foreground">
                Nuestro sistema de IA monitorea y predice múltiples tipos de fallos
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <AlertTriangle className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Fallos de Hardware</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Degradación de discos duros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Sobrecalentamiento de CPUs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fallos de memoria RAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Problemas de fuentes de poder</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Problemas de Rendimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Saturación de recursos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cuellos de botella de red</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Degradación de bases de datos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Latencia anormal</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Bell className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Anomalías de Seguridad</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Patrones de acceso sospechosos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Intentos de intrusión</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Vulnerabilidades emergentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Certificados por vencer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Cómo Funciona la Predicción</h2>
            <p className="text-xl text-muted-foreground">Sistema de análisis continuo con machine learning avanzado</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold">Monitoreo Continuo</h3>
              <p className="text-muted-foreground">Recopila miles de métricas por segundo de toda tu infraestructura</p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">Análisis de Patrones</h3>
              <p className="text-muted-foreground">
                Identifica comportamientos anormales comparando con históricos y baselines
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">Predicción ML</h3>
              <p className="text-muted-foreground">
                Modelos de machine learning predicen probabilidad y tiempo hasta el fallo
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold">Alertas Proactivas</h3>
              <p className="text-muted-foreground">
                Notifica al equipo con recomendaciones específicas de acción preventiva
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-border bg-muted/30">
          <div className="container mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Beneficios del Mantenimiento Predictivo</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Ahorro de Costos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Evita costos de downtime no planificado y reparaciones de emergencia
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Reduce costos de mantenimiento hasta 30%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Evita pérdidas por downtime no planificado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Optimiza ciclo de vida de hardware</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Mayor Confiabilidad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Mantén tu infraestructura funcionando con máxima disponibilidad
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>99.99% de uptime garantizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Mantenimiento planificado sin sorpresas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Confianza total en tu infraestructura</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Prevén Fallos Antes de que Ocurran</h2>
            <p className="text-xl text-muted-foreground">
              Activa la predicción de fallos y mantén tu infraestructura siempre disponible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Activar Predicción IA</Button>
              <Button size="lg" variant="outline">
                Solicitar Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

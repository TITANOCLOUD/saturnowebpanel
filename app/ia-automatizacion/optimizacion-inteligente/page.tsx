import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingDown, Zap, BarChart3, Cpu, Database, CheckCircle2 } from "lucide-react"

export default function OptimizacionInteligentePage() {
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
                <Brain className="mr-2 h-4 w-4" />
                Inteligencia Artificial
              </Badge>

              <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">
                Optimización Inteligente con <span className="text-primary">IA Avanzada</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Saturno utiliza algoritmos de machine learning para optimizar automáticamente el uso de recursos,
                reducir costos operativos y maximizar el rendimiento de tu infraestructura cloud.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Activar Optimización IA</Button>
                <Button size="lg" variant="outline">
                  Ver Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <TrendingDown className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Reducción de Costos</CardTitle>
                <CardDescription>
                  Ahorra hasta 40% en costos de infraestructura mediante optimización automática
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Apagado automático de recursos no utilizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Rightsizing de instancias basado en uso real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Optimización de almacenamiento y backups</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Rendimiento Máximo</CardTitle>
                <CardDescription>Mejora el rendimiento hasta 3x con distribución inteligente de cargas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Balanceo de carga predictivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Caché inteligente basado en patrones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Optimización de rutas de red</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Análisis Predictivo</CardTitle>
                <CardDescription>Anticipa necesidades futuras con modelos de predicción avanzados</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Predicción de picos de demanda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Escalado automático preventivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Recomendaciones de capacidad</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-y border-border bg-muted/30">
          <div className="container mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Cómo Funciona la Optimización IA</h2>
              <p className="text-xl text-muted-foreground">
                Nuestro motor de IA analiza continuamente tu infraestructura y aplica optimizaciones en tiempo real
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold">Recolección de Datos</h3>
                <p className="text-muted-foreground">
                  Monitorea métricas de CPU, memoria, red, almacenamiento y patrones de uso en tiempo real
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold">Análisis con ML</h3>
                <p className="text-muted-foreground">
                  Algoritmos de machine learning identifican patrones, anomalías y oportunidades de optimización
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold">Recomendaciones</h3>
                <p className="text-muted-foreground">
                  Genera recomendaciones específicas con impacto estimado en costos y rendimiento
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-semibold">Aplicación Automática</h3>
                <p className="text-muted-foreground">
                  Ejecuta optimizaciones automáticamente o con aprobación según tus políticas configuradas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Capacidades de Optimización</h2>
            <p className="text-xl text-muted-foreground">
              Optimización integral de todos los aspectos de tu infraestructura cloud
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Cpu className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Optimización de Compute</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Ajusta automáticamente el tamaño de instancias, distribuye cargas de trabajo y optimiza el uso de CPU
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Rightsizing automático de VMs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Consolidación de cargas de trabajo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Migración a instancias más eficientes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Optimización de Almacenamiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Gestiona inteligentemente el almacenamiento, elimina duplicados y optimiza políticas de backup
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Deduplicación y compresión automática</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tiering inteligente de datos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Limpieza de snapshots obsoletos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/30">
          <div className="container mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">Comienza a Optimizar con IA Hoy</h2>
              <p className="text-xl text-muted-foreground">
                Activa la optimización inteligente y empieza a ahorrar en minutos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Activar Optimización IA</Button>
                <Button size="lg" variant="outline">
                  Hablar con un Experto
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

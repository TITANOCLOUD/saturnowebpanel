import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Book, Code, FileText, Lightbulb, Search, Video } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Documentación - Saturno Cloud | Guías y Tutoriales",
  description:
    "Documentación completa de Saturno Cloud. Guías de inicio rápido, tutoriales, API reference y mejores prácticas para gestión de infraestructura cloud.",
}

export default function DocumentacionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-balance">
                Documentación de <span className="text-primary">Saturno Cloud</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Todo lo que necesitas para comenzar y dominar la gestión de tu infraestructura cloud
              </p>
            </div>

            <div className="mb-12 bg-muted/50 rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold">Documentación en Construcción</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Estamos preparando una documentación completa y detallada para ti. Mientras tanto, explora las secciones
                disponibles y contáctanos si necesitas ayuda específica.
              </p>
              <Button asChild>
                <Link href="/#contacto">Contactar Soporte</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <Card>
                <CardHeader>
                  <Book className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Guía de Inicio Rápido</CardTitle>
                  <CardDescription>Comienza a usar Saturno en minutos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Configuración inicial del panel</li>
                    <li>• Conexión de tu primer proveedor cloud</li>
                    <li>• Creación de tu primera máquina virtual</li>
                    <li>• Configuración de usuarios y permisos</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4 bg-transparent" disabled>
                    Próximamente
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>API Reference</CardTitle>
                  <CardDescription>Integra Saturno con tus sistemas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Autenticación y tokens de API</li>
                    <li>• Endpoints de gestión de recursos</li>
                    <li>• Webhooks y notificaciones</li>
                    <li>• Ejemplos de código en múltiples lenguajes</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4 bg-transparent" disabled>
                    Próximamente
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Video className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Video Tutoriales</CardTitle>
                  <CardDescription>Aprende visualmente paso a paso</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tour completo del panel</li>
                    <li>• Configuración de integraciones</li>
                    <li>• Automatización con IA</li>
                    <li>• Casos de uso reales</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4 bg-transparent" disabled>
                    Próximamente
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Mejores Prácticas</CardTitle>
                  <CardDescription>Optimiza tu infraestructura</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Arquitecturas recomendadas</li>
                    <li>• Seguridad y compliance</li>
                    <li>• Optimización de costos</li>
                    <li>• Alta disponibilidad y disaster recovery</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4 bg-transparent" disabled>
                    Próximamente
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <Search className="w-8 h-8 text-primary mb-2" />
                <CardTitle>¿No encuentras lo que buscas?</CardTitle>
                <CardDescription>Nuestro equipo está aquí para ayudarte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Mientras completamos nuestra documentación, puedes contactarnos directamente para obtener ayuda
                  personalizada con tu implementación.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/#contacto">Solicitar Demo</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href="/nosotros">Conocer el Equipo</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

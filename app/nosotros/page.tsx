import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Globe, Shield, Users, Zap, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Quiénes Somos - Titano Cloud | Líderes en Infraestructura Cloud",
  description:
    "Conoce a Titano Cloud, empresa líder en soluciones de infraestructura cloud en Colombia y LATAM. Innovación, seguridad y excelencia en servicios cloud.",
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Quiénes Somos - <span className="text-primary">Titano Cloud</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Somos pioneros en transformar la gestión de infraestructura cloud en Colombia y América Latina, ofreciendo
              soluciones innovadoras que impulsan el crecimiento de empresas de todos los tamaños.
            </p>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20blanco%20grande-1QKrMvWEPslr3wpfWBbomQbvvIrKsq.png"
                alt="Titano Cloud"
                width={400}
                height={100}
                className="w-auto h-24"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <Target className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Democratizar el acceso a infraestructura cloud de nivel empresarial, proporcionando herramientas
                  potentes y fáciles de usar que permitan a cualquier organización escalar sin límites, con la máxima
                  seguridad y eficiencia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser la plataforma líder en gestión multi-cloud en América Latina, reconocida por nuestra innovación
                  tecnológica, excelencia en servicio y compromiso con el éxito de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Seguridad Primero</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    La protección de los datos y sistemas de nuestros clientes es nuestra máxima prioridad.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Innovación Constante</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Adoptamos las últimas tecnologías para ofrecer soluciones de vanguardia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Enfoque en el Cliente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    El éxito de nuestros clientes es nuestro éxito. Trabajamos como socios estratégicos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Excelencia Operacional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Mantenemos los más altos estándares de calidad en todos nuestros servicios.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Alcance Global</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Conectamos infraestructura en Colombia con los principales proveedores cloud del mundo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Transparencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comunicación clara, precios justos y sin sorpresas en nuestras relaciones comerciales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¿Por Qué Elegirnos?</h2>
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Experiencia Local, Alcance Global</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Entendemos las necesidades específicas del mercado colombiano y latinoamericano, mientras te
                    conectamos con la mejor infraestructura cloud global de AWS, Azure, OVH, Huawei y más.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Tecnología de Vanguardia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nuestro Kernel TG con arquitectura Zero Trust y doble capa de IA representa lo último en seguridad y
                    automatización para infraestructura cloud.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Soporte Especializado 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nuestro equipo de expertos está disponible en todo momento para asegurar que tu infraestructura
                    funcione sin interrupciones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">¿Listo para Transformar tu Infraestructura?</CardTitle>
              <CardDescription className="text-base">
                Únete a las empresas que ya confían en Titano Cloud para gestionar su infraestructura
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#contacto">Solicitar Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/documentacion">Ver Documentación</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}

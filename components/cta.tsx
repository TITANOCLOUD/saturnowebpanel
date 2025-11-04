import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-card/50 p-12 md:p-16 lg:p-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bcd410_1px,transparent_1px),linear-gradient(to_bottom,#00bcd410_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Comienza tu transformación <span className="text-primary">cloud hoy</span>
            </h2>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Únete a cientos de empresas que ya confían en Saturno para gestionar su infraestructura OpenStack,
              Proxmox, Acronis y OVH. Configuración en minutos, soporte experto incluido.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg font-semibold group">
                Prueba Gratuita 14 Días
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent">
                Hablar con Ventas
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No se requiere tarjeta de crédito • Configuración instantánea • Cancela cuando quieras
            </p>
          </div>

          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PanelShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Interfaz Intuitiva y Potente</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Panel de control diseñado para la próxima era de tecnología cloud. Gestiona OpenStack, Proxmox, Acronis y
            OVH desde una sola plataforma.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen12.png-5IkpUUsJrH6tqZdG0SHGE4N7gI06W4.jpeg"
              alt="Saturno Panel - AI + Innovation + Development = Building the Next Era of Cloud Technology"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Feature highlights below the image */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguridad Avanzada</h3>
              <p className="text-muted-foreground">
                Autenticación multifactor y encriptación end-to-end para proteger tus datos empresariales.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rendimiento Optimizado</h3>
              <p className="text-muted-foreground">
                Gestión eficiente de recursos con monitoreo en tiempo real y automatización inteligente.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalización Total</h3>
              <p className="text-muted-foreground">
                Adapta el panel a tus necesidades con temas personalizables y módulos extensibles.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8"
            >
              Solicitar Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

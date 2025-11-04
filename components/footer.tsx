import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/light-logoWHI-RaJggVTFVIll3AgZF80X6q4ZjHDhJO.png"
              alt="TitanoCloud"
              width={160}
              height={45}
              className="h-9 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              La plataforma definitiva para gestionar OpenStack, Proxmox, Acronis y OVH desde un solo panel de control.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>soporte@saturno.cloud</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Infraestructura Global</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Saturno es un desarrollo de <span className="font-semibold text-foreground">Titano Cloud Corporate</span>
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              © 2025 Titano Cloud Corporate. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Button } from "@/components/ui/button"
import { Server, Zap, Shield } from "lucide-react"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Navigation */}
      <nav className="container relative mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20blanco%20grande-1QKrMvWEPslr3wpfWBbomQbvvIrKsq.png"
            alt="Saturno"
            width={400}
            height={100}
            className="h-16 w-auto"
            priority
          />

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Características</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Panel Unificado</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Gestiona todas tus plataformas desde un solo lugar
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Escalabilidad Infinita</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Crece sin límites con infraestructura cloud profesional
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Seguridad Avanzada</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Protección empresarial con 99.9% de uptime garantizado
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Integraciones</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] grid-cols-2 gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Proxmox</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Virtualización completa y gestión de contenedores
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">OpenStack</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Infraestructura cloud de nivel empresarial
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Acronis</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Backup y recuperación ante desastres
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">OVH</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Servidores dedicados y cloud público
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>IA & Automatización</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Optimización Inteligente</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            IA que optimiza recursos y reduce costos automáticamente
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Predicción de Fallos</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Detecta problemas antes de que ocurran
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Automatización Total</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Workflows inteligentes que se adaptan a tu negocio
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Ventajas
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" className="bg-transparent">
            Acceder al Panel
          </Button>
        </div>
      </nav>

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Zap className="h-4 w-4" />
              <span className="font-medium">Tecnología de Última Generación</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              Transforma tu empresa en un <span className="text-primary">Centro de Datos Cloud</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Saturno es el panel de control definitivo que integra{" "}
              <strong className="text-foreground">OpenStack, Proxmox, Acronis y OVH</strong> para convertir cualquier
              empresa en una infraestructura cloud profesional. Gestión avanzada, escalabilidad infinita.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="text-lg font-semibold">
                Comenzar Ahora
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent">
                Ver Demo en Vivo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Soporte 24/7</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-primary/30 bg-card/50 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                {[
                  { name: "OpenStack", color: "bg-red-500/20 text-red-400" },
                  { name: "Proxmox", color: "bg-orange-500/20 text-orange-400" },
                  { name: "Acronis", color: "bg-cyan-500/20 text-cyan-400" },
                  { name: "OVH", color: "bg-blue-500/20 text-blue-400" },
                ].map((platform, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border border-border bg-background/50 p-4">
                    <div className={`h-12 w-12 rounded-lg ${platform.color} flex items-center justify-center`}>
                      <Server className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="font-semibold">{platform.name}</div>
                      <div
                        className="h-2 w-24 rounded bg-muted/50 animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

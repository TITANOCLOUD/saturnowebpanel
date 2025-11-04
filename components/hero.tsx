"use client"

import { Button } from "@/components/ui/button"
import { Server, Zap, Shield, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MultiCloudGallery } from "@/components/multi-cloud-gallery"

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-300 ${isScrolled ? "py-2" : "py-6"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" className="transition-all duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20blanco%20grande-1QKrMvWEPslr3wpfWBbomQbvvIrKsq.png"
                alt="Saturno"
                width={600}
                height={150}
                className={`w-auto transition-all duration-300 ${isScrolled ? "h-12 md:h-14" : "h-20 md:h-24"}`}
                priority
              />
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Características</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/#caracteristicas"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Panel Unificado</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Gestiona todas tus plataformas desde un solo lugar
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/#caracteristicas"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Escalabilidad Infinita</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Crece sin límites con infraestructura cloud profesional
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/seguridad"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Seguridad Avanzada</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Kernel TG con protección de nivel empresarial
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/caracteristicas-tecnicas"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Características Técnicas</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Arquitectura Zero Trust y IA dual
                            </p>
                          </Link>
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
                          <Link
                            href="/integraciones/proxmox"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Proxmox</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Virtualización completa y gestión de contenedores
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/integraciones/openstack"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">OpenStack</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Infraestructura cloud de nivel empresarial
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/integraciones/acronis"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Acronis</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Backup y recuperación ante desastres
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/integraciones/ovh"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">OVH</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Servidores dedicados y cloud público
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/integraciones/cloudflare"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Cloudflare</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              CDN, WAF y Zero Trust Access
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/integraciones/azure"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Microsoft Azure</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Cloud Services y Virtual Network
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/integraciones/aws"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Amazon AWS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">EC2, S3 y Route53</p>
                          </Link>
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
                          <Link
                            href="/ia-automatizacion/optimizacion-inteligente"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Optimización Inteligente</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              IA que optimiza recursos y reduce costos automáticamente
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/ia-automatizacion/prediccion-fallos"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Predicción de Fallos</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Detecta problemas antes de que ocurran
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/ia-automatizacion/automatizacion-total"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Automatización Total</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Workflows inteligentes que se adaptan a tu negocio
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/#ventajas"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Ventajas
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="outline" className="hidden lg:flex bg-transparent" asChild>
              <Link href="/#contacto">Acceder al Panel</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top-2">
              <div className="space-y-2">
                <div className="font-semibold text-sm px-2 py-1">Características</div>
                <Link
                  href="/#caracteristicas"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Panel Unificado
                </Link>
                <Link
                  href="/#caracteristicas"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Escalabilidad Infinita
                </Link>
                <Link
                  href="/seguridad"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Seguridad Avanzada
                </Link>
                <Link
                  href="/caracteristicas-tecnicas"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Características Técnicas
                </Link>
              </div>

              <div className="space-y-2 border-t border-border pt-4">
                <div className="font-semibold text-sm px-2 py-1">Integraciones</div>
                <Link
                  href="/integraciones/proxmox"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Proxmox
                </Link>
                <Link
                  href="/integraciones/openstack"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  OpenStack
                </Link>
                <Link
                  href="/integraciones/acronis"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Acronis
                </Link>
                <Link
                  href="/integraciones/ovh"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  OVH
                </Link>
                <Link
                  href="/integraciones/cloudflare"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cloudflare
                </Link>
                <Link
                  href="/integraciones/azure"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Microsoft Azure
                </Link>
                <Link
                  href="/integraciones/aws"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Amazon AWS
                </Link>
              </div>

              <div className="space-y-2 border-t border-border pt-4">
                <div className="font-semibold text-sm px-2 py-1">IA & Automatización</div>
                <Link
                  href="/ia-automatizacion/optimizacion-inteligente"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Optimización Inteligente
                </Link>
                <Link
                  href="/ia-automatizacion/prediccion-fallos"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Predicción de Fallos
                </Link>
                <Link
                  href="/ia-automatizacion/automatizacion-total"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Automatización Total
                </Link>
              </div>

              <div className="border-t border-border pt-4">
                <Link
                  href="/#ventajas"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ventajas
                </Link>
              </div>

              <div className="border-t border-border pt-4">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                    Acceder al Panel
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div
        className={`container relative mx-auto px-4 py-16 md:py-24 transition-all duration-300 ${isScrolled ? "pt-24" : "pt-32 md:pt-40"}`}
      >
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

          <MultiCloudGallery />
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Server, Zap, Shield, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
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
  const { t } = useLanguage()

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
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

            <NavigationMenu className="hidden lg:flex relative z-50">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground font-medium bg-transparent hover:bg-accent">
                    {t("nav.features")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/#caracteristicas"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{t("nav.unifiedPanel")}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.unifiedPanelDescription")}
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
                            <div className="text-sm font-medium leading-none">{t("nav.infiniteScalability")}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.infiniteScalabilityDescription")}
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
                            <div className="text-sm font-medium leading-none">{t("nav.advancedSecurity")}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.advancedSecurityDescription")}
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
                            <div className="text-sm font-medium leading-none">{t("nav.technicalFeatures")}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.technicalFeaturesDescription")}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground font-medium bg-transparent hover:bg-accent">
                    {t("nav.integrations")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4 bg-background">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/integraciones/proxmox"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Proxmox</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.proxmoxDescription")}
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
                              {t("nav.openstackDescription")}
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
                              {t("nav.acronisDescription")}
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
                              {t("nav.ovhDescription")}
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
                              {t("nav.cloudflareDescription")}
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
                            <div className="text-sm font-medium leading-none">{t("nav.azure")}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.azureDescription")}
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
                            <div className="text-sm font-medium leading-none">{t("nav.aws")}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.awsDescription")}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground font-medium bg-transparent hover:bg-accent">
                    {t("nav.iaAndAutomation")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/ia-automatizacion/optimizacion-inteligente"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{t("nav.intelligentOptimization")}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.intelligentOptimizationDescription")}
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
                            <div className="text-sm font-medium leading-none">{t("nav.failurePrediction")}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.failurePredictionDescription")}
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
                            <div className="text-sm font-medium leading-none">{t("nav.totalAutomation")}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {t("nav.totalAutomationDescription")}
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
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {t("nav.advantages")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/documentacion"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {t("nav.documentation")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/nosotros"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {t("nav.aboutUs")}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden lg:flex items-center gap-2">
              <LanguageSwitcher />
              <Button
                variant="outline"
                className="bg-transparent text-foreground border-foreground/20 hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <Link href="/#contacto">{t("nav.contact")}</Link>
              </Button>
            </div>

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
              <div className="flex justify-center pb-2 border-b border-border">
                <LanguageSwitcher />
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-sm px-2 py-1">{t("nav.features")}</div>
                <Link
                  href="/#caracteristicas"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.unifiedPanel")}
                </Link>
                <Link
                  href="/#caracteristicas"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.infiniteScalability")}
                </Link>
                <Link
                  href="/seguridad"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.advancedSecurity")}
                </Link>
                <Link
                  href="/caracteristicas-tecnicas"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.technicalFeatures")}
                </Link>
              </div>

              <div className="space-y-2 border-t border-border pt-4">
                <div className="font-semibold text-sm px-2 py-1">{t("nav.integrations")}</div>
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
                  {t("nav.azure")}
                </Link>
                <Link
                  href="/integraciones/aws"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.aws")}
                </Link>
              </div>

              <div className="space-y-2 border-t border-border pt-4">
                <div className="font-semibold text-sm px-2 py-1">{t("nav.iaAndAutomation")}</div>
                <Link
                  href="/ia-automatizacion/optimizacion-inteligente"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.intelligentOptimization")}
                </Link>
                <Link
                  href="/ia-automatizacion/prediccion-fallos"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.failurePrediction")}
                </Link>
                <Link
                  href="/ia-automatizacion/automatizacion-total"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.totalAutomation")}
                </Link>
              </div>

              <div className="border-t border-border pt-4">
                <Link
                  href="/#ventajas"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.advantages")}
                </Link>
              </div>

              <div className="border-t border-border pt-4">
                <Link
                  href="/documentacion"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.documentation")}
                </Link>
                <Link
                  href="/nosotros"
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.aboutUs")}
                </Link>
              </div>

              <div className="border-t border-border pt-4">
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-foreground border-foreground/20 hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <Link href="/#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                    {t("nav.contact")}
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
              <span className="font-medium">{t("hero.badge")}</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              {t("hero.title")} <span className="text-primary">{t("hero.titleHighlight")}</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              {t("hero.description")} <strong className="text-foreground">{t("hero.tech")}</strong>{" "}
              {t("hero.description2")}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="text-lg font-semibold">
                {t("hero.startNow")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent">
                {t("hero.liveDemo")}
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">99.9% {t("hero.uptime")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">{t("hero.support")} 24/7</span>
              </div>
            </div>
          </div>

          <MultiCloudGallery />
        </div>
      </div>
    </section>
  )
}

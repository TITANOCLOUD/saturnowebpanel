"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navigation() {
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
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="transition-all duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20blanco%20grande-1QKrMvWEPslr3wpfWBbomQbvvIrKsq.png"
              alt="Saturno"
              width={500}
              height={125}
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-10 md:h-12" : "h-16 md:h-20"}`}
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
                            {t("nav.manageAllPlatforms")}
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
                            {t("nav.growWithoutLimits")}
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
                            {t("nav.businessLevelProtection")}
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
                            {t("nav.zeroTrustArchitecture")}
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
                            {t("nav.fullVirtualization")}
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
                            {t("nav.enterpriseLevelCloud")}
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
                            {t("nav.backupAndDisasterRecovery")}
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
                            {t("nav.dedicatedServers")}
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
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{t("nav.cdnWaf")}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/integraciones/azure"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{t("nav.microsoftAzure")}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t("nav.cloudServices")}
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
                          <div className="text-sm font-medium leading-none">{t("nav.amazonAws")}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {t("nav.ec2S3Route53")}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground font-medium bg-transparent hover:bg-accent">
                  {t("nav.ai")}
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
                            {t("nav.aiAutomaticallyOptimizes")}
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
                            {t("nav.detectProblems")}
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
                            {t("nav.intelligentWorkflows")}
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
                    {t("nav.about")}
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
                {t("nav.microsoftAzure")}
              </Link>
              <Link
                href="/integraciones/aws"
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.amazonAws")}
              </Link>
            </div>

            <div className="space-y-2 border-t border-border pt-4">
              <div className="font-semibold text-sm px-2 py-1">{t("nav.ai")}</div>
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
                {t("nav.about")}
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
  )
}

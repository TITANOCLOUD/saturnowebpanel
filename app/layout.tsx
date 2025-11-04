import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://saturnocloud.net"),
  title: {
    default:
      "Saturno Cloud - Panel de Control Cloud | Alternativa a AWS, Azure, OVH, Huawei | VPS y Datacenter en Colombia",
    template: "%s | Saturno Cloud",
  },
  description:
    "Saturno es el panel de control cloud definitivo con IA integrada. Gestiona AWS, Azure, OVH, Huawei Cloud, Proxmox, OpenStack. VPS, servidores dedicados y datacenter en Colombia. Alternativa superior a WHMCS y HostBill con automatización completa, Zero Trust y sin comisiones ocultas.",
  keywords: [
    // Cloud Providers - International
    "AWS",
    "Amazon Web Services",
    "Azure",
    "Microsoft Azure",
    "OVH Cloud",
    "OVHcloud",
    "Huawei Cloud",
    "Google Cloud Platform",
    "GCP",
    "Alibaba Cloud",
    // Cloud Providers - Regional
    "cloud Colombia",
    "datacenter Colombia",
    "VPS Colombia",
    "servidores Colombia",
    "hosting Colombia",
    // Services
    "panel control cloud",
    "gestión multi-cloud",
    "VPS management",
    "servidor dedicado",
    "datacenter management",
    "cloud hosting",
    "infraestructura cloud",
    // Virtualization
    "Proxmox panel",
    "OpenStack panel",
    "VMware alternativa",
    "virtualización cloud",
    "KVM virtualization",
    // Competitors
    "alternativa WHMCS",
    "alternativa HostBill",
    "alternativa cPanel",
    "alternativa Plesk",
    // Features
    "panel hosting con IA",
    "automatización cloud",
    "Zero Trust cloud",
    "multi-cloud management",
    "cloud automation",
    "AI cloud management",
    // Integrations
    "integración OVH",
    "integración Acronis",
    "integración Cloudflare",
    "API Proxmox",
    "OpenStack API",
    // Business
    "panel reseller hosting",
    "white label hosting",
    "billing hosting",
    "gestión clientes hosting",
  ],
  authors: [{ name: "Titano Cloud Corporate" }],
  creator: "Titano Cloud Corporate",
  publisher: "Titano Cloud Corporate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20saturno.ico-AJE5tl2uBYi270bdX5VYnYzzUomp0I.x-icon",
        type: "image/x-icon",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20saturno.ico-AJE5tl2uBYi270bdX5VYnYzzUomp0I.x-icon",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    shortcut:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20saturno.ico-AJE5tl2uBYi270bdX5VYnYzzUomp0I.x-icon",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20saturno.ico-AJE5tl2uBYi270bdX5VYnYzzUomp0I.x-icon",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: ["es_ES", "en_US"],
    url: "https://saturnocloud.net",
    title: "Saturno Cloud - Panel Multi-Cloud con IA | AWS, Azure, OVH, Huawei | Colombia",
    description:
      "Panel de control cloud con IA para gestionar AWS, Azure, OVH, Huawei Cloud, Proxmox y OpenStack. VPS y datacenter en Colombia. Automatización completa, Zero Trust, sin comisiones.",
    siteName: "Saturno Cloud",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20blanco%20grande-1QKrMvWEPslr3wpfWBbomQbvvIrKsq.png",
        width: 1200,
        height: 630,
        alt: "Saturno - Panel Cloud Multi-Proveedor con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saturno Cloud - Gestión Multi-Cloud con IA",
    description:
      "Panel cloud con IA para AWS, Azure, OVH, Huawei. VPS y datacenter en Colombia. Automatización, Zero Trust y control total.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20blanco%20grande-1QKrMvWEPslr3wpfWBbomQbvvIrKsq.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://saturnocloud.net",
    languages: {
      "es-CO": "https://saturnocloud.net",
      "es-ES": "https://saturnocloud.net/es",
      "en-US": "https://saturnocloud.net/en",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Saturno Cloud",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "127",
              },
              description:
                "Panel de control cloud multi-proveedor con IA integrada. Gestiona AWS, Azure, OVH, Huawei Cloud, Proxmox y OpenStack desde una sola plataforma. VPS y datacenter en Colombia.",
              featureList: [
                "Gestión multi-cloud (AWS, Azure, OVH, Huawei)",
                "Integración directa con Proxmox API",
                "Soporte OpenStack nativo",
                "VPS y servidores dedicados en Colombia",
                "Datacenter management",
                "IA con ChatGPT y Claude",
                "Zero Trust Security",
                "Automatización completa",
                "Sin comisiones ocultas",
                "Business Intelligence integrado",
              ],
              screenshot:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20blanco%20grande-1QKrMvWEPslr3wpfWBbomQbvvIrKsq.png",
              softwareVersion: "1.0",
              author: {
                "@type": "Organization",
                name: "Titano Cloud Corporate",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Titano Cloud Corporate",
              url: "https://saturnocloud.net",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20blanco%20grande-1QKrMvWEPslr3wpfWBbomQbvvIrKsq.png",
              description:
                "Desarrolladores de Saturno, el panel de control cloud multi-proveedor con IA para gestionar AWS, Azure, OVH, Huawei Cloud, Proxmox y OpenStack",
              sameAs: ["https://github.com/TITANOCLOUD"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
                addressLocality: "Colombia",
              },
              areaServed: ["CO", "LATAM", "Worldwide"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Cloud Computing Platform",
              provider: {
                "@type": "Organization",
                name: "Titano Cloud Corporate",
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cloud Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "VPS Colombia",
                      description: "Servidores virtuales privados en Colombia",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Datacenter Management",
                      description: "Gestión completa de datacenter",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Multi-Cloud Management",
                      description: "Gestión de AWS, Azure, OVH, Huawei Cloud",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

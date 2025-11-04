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
    default: "Saturno - Alternativa Superior a WHMCS y HostBill | Panel Cloud con IA",
    template: "%s | Saturno Cloud",
  },
  description:
    "Saturno es la alternativa moderna a WHMCS y HostBill. Panel de control cloud con IA integrada, conexión directa a Proxmox, OpenStack, OVH, Acronis. Zero Trust, sin comisiones ocultas, automatización completa.",
  keywords: [
    "alternativa WHMCS",
    "alternativa HostBill",
    "panel control hosting",
    "panel cloud",
    "Proxmox panel",
    "OpenStack panel",
    "panel hosting con IA",
    "automatización hosting",
    "panel VPS",
    "gestión servidores cloud",
    "billing hosting",
    "WHMCS vs Saturno",
    "HostBill vs Saturno",
    "panel control Proxmox",
    "integración OVH",
    "integración Acronis",
    "Zero Trust hosting",
    "panel hosting seguro",
    "ChatGPT hosting",
    "IA para hosting",
    "automatización datacenter",
    "panel reseller hosting",
    "white label hosting",
    "API Proxmox",
    "gestión VPS automatizada",
  ],
  authors: [{ name: "Titano Cloud Corporate" }],
  creator: "Titano Cloud Corporate",
  publisher: "Titano Cloud Corporate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://saturnocloud.net",
    title: "Saturno - Alternativa Superior a WHMCS y HostBill con IA",
    description:
      "Panel de control cloud moderno con IA integrada. Conexión directa a Proxmox, OpenStack, OVH, Acronis. Sin comisiones ocultas, Zero Trust, automatización completa.",
    siteName: "Saturno Cloud",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20blanco%20grande-1QKrMvWEPslr3wpfWBbomQbvvIrKsq.png",
        width: 1200,
        height: 630,
        alt: "Saturno - Panel Cloud con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saturno - Alternativa Superior a WHMCS y HostBill",
    description:
      "Panel cloud moderno con IA. Integración directa Proxmox, OpenStack, OVH, Acronis. Zero Trust y automatización completa.",
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
      "es-ES": "https://saturnocloud.net",
      "en-US": "https://saturnocloud.net/en",
    },
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
              name: "Saturno",
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
                "Panel de control cloud moderno con IA integrada. Alternativa superior a WHMCS y HostBill con conexión directa a Proxmox, OpenStack, OVH y Acronis.",
              featureList: [
                "Integración directa con Proxmox API",
                "Soporte OpenStack nativo",
                "Integración OVH y Acronis",
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
              description: "Desarrolladores de Saturno, el panel de control cloud moderno con IA",
              sameAs: ["https://github.com/TITANOCLOUD"],
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

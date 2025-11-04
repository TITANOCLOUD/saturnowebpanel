"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const panelSections = [
  {
    title: "Dashboard Principal",
    description:
      "Vista general con métricas en tiempo real, estado de recursos, alertas y acceso rápido a todas las funcionalidades del panel.",
    image: "/modern-cloud-dashboard-with-metrics-and-graphs-dar.jpg",
  },
  {
    title: "Gestión de Máquinas Virtuales",
    description:
      "Crea, configura y administra VMs en Proxmox y OpenStack. Control total sobre recursos, snapshots y migraciones en vivo.",
    image: "/virtual-machine-management-interface-with-server-l.jpg",
  },
  {
    title: "Monitoreo de Recursos",
    description:
      "Visualización detallada de CPU, RAM, almacenamiento y red. Gráficos históricos y alertas personalizables para optimizar el rendimiento.",
    image: "/resource-monitoring-dashboard-with-charts-and-grap.jpg",
  },
  {
    title: "Gestión de Redes",
    description:
      "Configuración avanzada de redes virtuales, VLANs, firewalls y balanceadores de carga. Integración completa con SDN.",
    image: "/network-management-interface-with-topology-diagram.jpg",
  },
  {
    title: "Backups y Recuperación",
    description:
      "Integración con Acronis para backups automáticos, restauración rápida y protección contra ransomware. Políticas de retención flexibles.",
    image: "/backup-management-interface-with-schedule-and-rest.jpg",
  },
  {
    title: "Gestión Multi-Cloud",
    description:
      "Administra recursos en OVH, Cloudflare, Azure y AWS desde una sola interfaz. Sincronización automática y gestión unificada de costos.",
    image: "/multi-cloud-management-dashboard-with-provider-log.jpg",
  },
  {
    title: "Automatización e IA",
    description:
      "Automatización inteligente de tareas, predicción de fallos, optimización de recursos y recomendaciones basadas en machine learning.",
    image: "/ai-automation-dashboard-with-predictions-and-recom.jpg",
  },
  {
    title: "Seguridad y Auditoría",
    description:
      "Panel de seguridad con logs detallados, análisis de vulnerabilidades, gestión de certificados SSL y cumplimiento normativo.",
    image: "/security-audit-dashboard-with-logs-and-compliance-.jpg",
  },
]

export function PanelGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % panelSections.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + panelSections.length) % panelSections.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Explora el Panel SATURNO</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Descubre cada sección del panel de control más avanzado para gestión cloud empresarial
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Gallery */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/20 shadow-2xl shadow-cyan-500/10 bg-slate-900/50">
              <Image
                src={panelSections[currentIndex].image || "/placeholder.svg"}
                alt={panelSections[currentIndex].title}
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full backdrop-blur-sm border border-cyan-500/20 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full backdrop-blur-sm border border-cyan-500/20 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/20">
                <span className="text-sm font-medium">
                  {currentIndex + 1} / {panelSections.length}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-cyan-400">{panelSections[currentIndex].title}</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                {panelSections[currentIndex].description}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-8 grid grid-cols-4 md:grid-cols-8 gap-3">
              {panelSections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-cyan-500 ring-2 ring-cyan-500/50"
                      : "border-slate-700 hover:border-cyan-500/50"
                  }`}
                  aria-label={`Go to ${section.title}`}
                >
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                  {index === currentIndex && <div className="absolute inset-0 bg-cyan-500/20 backdrop-blur-[1px]" />}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8"
            >
              Solicitar Demo Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

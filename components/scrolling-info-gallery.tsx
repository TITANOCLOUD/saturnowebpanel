"use client"

import { useEffect, useState } from "react"
import { Cloud, Shield, Zap, Globe, Database, Lock, TrendingUp, Award } from "lucide-react"

const infoCards = [
  {
    icon: Cloud,
    title: "Multi-Cloud Nativo",
    description: "Gestiona múltiples proveedores cloud desde un solo panel",
    stats: "8+ Proveedores",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description: "Protección de nivel empresarial con cifrado end-to-end",
    stats: "99.9% Seguro",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Rendimiento Extremo",
    description: "Infraestructura optimizada para máxima velocidad",
    stats: "10 ms con Smart Host Routing",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    title: "Presencia Global",
    description: "Datacenters en 5 continentes para mejor cobertura",
    stats: "50+ Ubicaciones",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Almacenamiento Ilimitado",
    description: "Escala tu almacenamiento sin límites ni restricciones",
    stats: "Escalabilidad ∞",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Lock,
    title: "Cumplimiento Total",
    description: "Certificaciones ISO, SOC2, GDPR y más",
    stats: "10+ Certificaciones",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Alta Disponibilidad",
    description: "SLA garantizado con uptime del 99.9%",
    stats: "99.9% Uptime",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Soporte Premium",
    description: "Asistencia técnica 24/7 en español",
    stats: "24/7 Disponible",
    color: "from-rose-500 to-pink-500",
  },
]

export function ScrollingInfoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % infoCards.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  const visibleCards = [
    infoCards[currentIndex],
    infoCards[(currentIndex + 1) % infoCards.length],
    infoCards[(currentIndex + 2) % infoCards.length],
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Infraestructura Cloud de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Clase Mundial
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre las características que hacen de SATURNO la mejor opción para tu empresa
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-6 justify-center items-stretch">
            {visibleCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={`${currentIndex}-${idx}`}
                  className={`
                    flex-1 max-w-sm
                    bg-card border border-border rounded-2xl p-8
                    transition-all duration-700 ease-in-out
                    hover:scale-105 hover:shadow-2xl
                    ${idx === 1 ? "scale-105 shadow-xl" : "scale-95 opacity-70"}
                  `}
                  style={{
                    animation: `slideIn 0.7s ease-out`,
                  }}
                >
                  <div
                    className={`
                    w-16 h-16 rounded-xl mb-6
                    bg-gradient-to-br ${card.color}
                    flex items-center justify-center
                  `}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{card.description}</p>

                  <div
                    className={`
                    inline-block px-4 py-2 rounded-full
                    bg-gradient-to-r ${card.color}
                    text-white font-semibold text-sm
                  `}
                  >
                    {card.stats}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {infoCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${idx === currentIndex ? "w-12 bg-cyan-500" : "w-2 bg-muted-foreground/30"}
                `}
                aria-label={`Ir a tarjeta ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-scroll indicator */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Pasa el cursor sobre las tarjetas para pausar el desplazamiento automático</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

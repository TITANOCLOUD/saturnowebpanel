"use client"

import { useState, useEffect } from "react"
import { Server, Cloud, Database, Shield, Zap, Globe } from "lucide-react"

interface CloudProvider {
  name: string
  description: string
  color: string
  icon: typeof Server
  status: "active" | "syncing" | "ready"
}

const cloudProviders: CloudProvider[] = [
  {
    name: "Azure",
    description: "Microsoft Cloud Platform",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: Cloud,
    status: "active",
  },
  {
    name: "AWS",
    description: "Amazon Web Services",
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    icon: Server,
    status: "active",
  },
  {
    name: "OVH Cloud",
    description: "European Cloud Leader",
    color: "bg-blue-600/20 text-blue-300 border-blue-600/30",
    icon: Database,
    status: "syncing",
  },
  {
    name: "Proxmox",
    description: "Virtualization Platform",
    color: "bg-orange-600/20 text-orange-300 border-orange-600/30",
    icon: Server,
    status: "ready",
  },
  {
    name: "OpenStack",
    description: "Open Source Cloud",
    color: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: Cloud,
    status: "active",
  },
  {
    name: "Google Cloud",
    description: "Google Cloud Platform",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
    icon: Globe,
    status: "ready",
  },
  {
    name: "Acronis",
    description: "Backup & Security",
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    icon: Shield,
    status: "active",
  },
  {
    name: "Unihost",
    description: "Hosting Solutions",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    icon: Zap,
    status: "syncing",
  },
]

export function MultiCloudGallery() {
  const [currentSet, setCurrentSet] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Show 4 providers at a time
  const providersPerPage = 4
  const totalSets = Math.ceil(cloudProviders.length / providersPerPage)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % totalSets)
        setIsAnimating(false)
      }, 500)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [totalSets])

  const currentProviders = cloudProviders.slice(currentSet * providersPerPage, (currentSet + 1) * providersPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "syncing":
        return "bg-yellow-500"
      case "ready":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="relative">
      <div className="relative rounded-2xl border border-primary/30 bg-card/50 p-8 backdrop-blur-sm">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Multi-Cloud Infrastructure</h3>
            <p className="text-sm text-muted-foreground">{cloudProviders.length} proveedores conectados</p>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: totalSets }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSet ? "w-8 bg-primary" : "w-1.5 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Cloud Providers Grid */}
        <div className={`space-y-4 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
          {currentProviders.map((provider, i) => {
            const Icon = provider.icon
            return (
              <div
                key={`${provider.name}-${currentSet}`}
                className={`flex items-center gap-4 rounded-lg border ${provider.color} bg-background/50 p-4 transition-all hover:scale-[1.02] hover:shadow-lg`}
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <div className={`h-12 w-12 rounded-lg ${provider.color} flex items-center justify-center border`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-semibold">{provider.name}</div>
                  <div className="text-xs text-muted-foreground">{provider.description}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getStatusColor(provider.status)} animate-pulse`} />
                  <span className="text-xs text-muted-foreground capitalize">{provider.status}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Footer */}
        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{cloudProviders.length}</div>
            <div className="text-xs text-muted-foreground">Clouds</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">99.9%</div>
            <div className="text-xs text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-500">24/7</div>
            <div className="text-xs text-muted-foreground">Support</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
    </div>
  )
}

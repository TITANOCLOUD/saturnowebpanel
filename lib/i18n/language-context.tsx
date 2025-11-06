"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "es" || saved === "en")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

const translations = {
  es: {
    nav: {
      features: "Características",
      integrations: "Integraciones",
      ai: "IA & Automatización",
      advantages: "Ventajas",
      documentation: "Documentación",
      about: "Nosotros",
      contact: "Contacto",
      accessPanel: "Acceder al Panel",
    },
    hero: {
      badge: "Tecnología de Última Generación",
      title: "Transforma tu empresa en un",
      titleHighlight: "Centro de Datos Cloud",
      description: "Saturno es el panel de control definitivo que integra",
      tech: "OpenStack, Proxmox, Acronis y OVH",
      description2:
        "para convertir cualquier empresa en una infraestructura cloud profesional. Gestión avanzada, escalabilidad infinita.",
      startNow: "Comenzar Ahora",
      liveDemo: "Ver Demo en Vivo",
      uptime: "Uptime",
      support: "Soporte",
    },
    multiCloud: {
      title: "Multi-Cloud Infrastructure",
      clouds: "Clouds",
      cyberProtection: "Ciberprotección",
      virtualization: "Virtualización",
      cloudProviders: "Proveedores Cloud",
      cyberTools: "Herramientas de Ciberprotección y Backup",
      virtualizationSystems: "Sistemas de Virtualización Escalables",
      active: "Activo",
      syncing: "Sincronizando",
      ready: "Listo",
      configured: "Configurado",
    },
    contact: {
      title: "Comenzar Ahora",
      subtitle: "Contáctanos para transformar tu infraestructura",
      name: "Nombre de Usuario",
      email: "Correo Electrónico",
      phone: "Teléfono",
      interests: "Intereses",
      selectInterests: "Selecciona tus intereses",
      privacy: "Acepto la política de tratamiento de datos",
      disclaimer: "Tus datos solo serán utilizados para contacto",
      submit: "Enviar Solicitud",
      success: "Solicitud enviada exitosamente",
    },
    features: {
      multiCloud: "Multi-Cloud",
      automation: "Automatización IA",
      security: "Seguridad Avanzada",
      monitoring: "Monitoreo 24/7",
      backup: "Backup Automático",
      scalability: "Escalabilidad",
      support: "Soporte Experto",
      performance: "Alto Rendimiento",
    },
  },
  en: {
    nav: {
      features: "Features",
      integrations: "Integrations",
      ai: "AI & Automation",
      advantages: "Advantages",
      documentation: "Documentation",
      about: "About Us",
      contact: "Contact",
      accessPanel: "Access Panel",
    },
    hero: {
      badge: "Next Generation Technology",
      title: "Transform your business into a",
      titleHighlight: "Cloud Data Center",
      description: "Saturno is the definitive control panel that integrates",
      tech: "OpenStack, Proxmox, Acronis and OVH",
      description2:
        "to convert any company into a professional cloud infrastructure. Advanced management, infinite scalability.",
      startNow: "Start Now",
      liveDemo: "Watch Live Demo",
      uptime: "Uptime",
      support: "Support",
    },
    multiCloud: {
      title: "Multi-Cloud Infrastructure",
      clouds: "Clouds",
      cyberProtection: "Cyber Protection",
      virtualization: "Virtualization",
      cloudProviders: "Cloud Providers",
      cyberTools: "Cyber Protection & Backup Tools",
      virtualizationSystems: "Scalable Virtualization Systems",
      active: "Active",
      syncing: "Syncing",
      ready: "Ready",
      configured: "Configured",
    },
    contact: {
      title: "Start Now",
      subtitle: "Contact us to transform your infrastructure",
      name: "Username",
      email: "Email Address",
      phone: "Phone",
      interests: "Interests",
      selectInterests: "Select your interests",
      privacy: "I accept the data processing policy",
      disclaimer: "Your data will only be used for contact purposes",
      submit: "Submit Request",
      success: "Request sent successfully",
    },
    features: {
      multiCloud: "Multi-Cloud",
      automation: "AI Automation",
      security: "Advanced Security",
      monitoring: "24/7 Monitoring",
      backup: "Automatic Backup",
      scalability: "Scalability",
      support: "Expert Support",
      performance: "High Performance",
    },
  },
}

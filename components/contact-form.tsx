"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Mail, Phone, Building2, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Here you would integrate with your email service and calendar API
    console.log("[v0] Form submitted:", formData)

    setIsSubmitted(true)
    setIsLoading(false)

    // Scroll to calendar section
    setTimeout(() => {
      document.getElementById("calendar-section")?.scrollIntoView({ behavior: "smooth" })
    }, 500)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">¡Solicitud Enviada!</CardTitle>
              <CardDescription className="text-base mt-2">
                Hemos recibido tu información y te contactaremos pronto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Próximos Pasos:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Recibirás un correo de confirmación en los próximos minutos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Nuestro equipo revisará tu solicitud y te enviará un enlace para agendar una demo personalizada
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Un especialista te contactará en las próximas 24 horas
                    </span>
                  </li>
                </ul>
              </div>

              <div id="calendar-section" className="pt-6 border-t">
                <h3 className="font-semibold text-lg mb-4">Agenda tu Demo Ahora</h3>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-4">
                    ¿Prefieres agendar directamente? Usa nuestro calendario
                  </p>
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <a href="https://calendly.com/saturnocloud/demo" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Demo
                    </a>
                  </Button>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    interest: "",
                    message: "",
                  })
                }}
              >
                Enviar Otra Solicitud
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Solicita una <span className="text-primary">Demo Personalizada</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Descubre cómo Saturno puede transformar la gestión de tu infraestructura cloud
          </p>
        </div>

        <Card className="border-primary/20 shadow-xl">
          <CardHeader>
            <CardTitle>Cuéntanos sobre tu proyecto</CardTitle>
            <CardDescription>
              Completa el formulario y te contactaremos para agendar una demo adaptada a tus necesidades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo *</Label>
                  <Input
                    id="name"
                    placeholder="Juan Pérez"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Corporativo *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@empresa.com"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+57 300 123 4567"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input
                    id="company"
                    placeholder="Mi Empresa SAS"
                    required
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">¿Qué te interesa? *</Label>
                <Select required value={formData.interest} onValueChange={(value) => handleChange("interest", value)}>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multi-cloud">Gestión Multi-Cloud (AWS, Azure, OVH, Huawei)</SelectItem>
                    <SelectItem value="proxmox">Integración con Proxmox</SelectItem>
                    <SelectItem value="openstack">Integración con OpenStack</SelectItem>
                    <SelectItem value="vps-colombia">VPS y Datacenter en Colombia</SelectItem>
                    <SelectItem value="automation">Automatización con IA</SelectItem>
                    <SelectItem value="migration">Migración desde WHMCS/HostBill</SelectItem>
                    <SelectItem value="reseller">Panel Reseller White Label</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Cuéntanos más sobre tu proyecto</Label>
                <Textarea
                  id="message"
                  placeholder="Describe tu infraestructura actual, necesidades específicas, número de servidores, etc."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="font-medium">¿Qué incluye la demo?</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Recorrido personalizado del panel</li>
                  <li>• Demostración de integraciones con tus proveedores</li>
                  <li>• Análisis de tu caso de uso específico</li>
                  <li>• Sesión de preguntas y respuestas</li>
                </ul>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Solicitar Demo
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Al enviar este formulario, aceptas que Saturno Cloud te contacte sobre nuestros servicios
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

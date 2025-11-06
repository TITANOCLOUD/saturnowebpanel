"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="gap-2 text-foreground hover:text-primary"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "es" ? "EN" : "ES"}</span>
    </Button>
  )
}

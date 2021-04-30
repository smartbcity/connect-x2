import { useI18n } from "@smartb/archetypes-ui-providers"

interface Languages {
  fr: string
  en: string
}

export const languages: Languages = {
  fr: "fr-FR", 
  en: "en-US"
}

export const useExtendedI18n = () => {
  return useI18n<Languages>()
}


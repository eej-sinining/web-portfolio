export type Persona = "developer" | "va";

export const PERSONA_STORAGE_KEY = "portfolio-persona";

export function applyPersona(persona: Persona) {
  document.documentElement.setAttribute("data-persona", persona);
}

export function getStoredPersona(): Persona | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(PERSONA_STORAGE_KEY);
  return stored === "developer" || stored === "va" ? stored : null;
}

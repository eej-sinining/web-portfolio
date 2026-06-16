"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  applyPersona,
  getStoredPersona,
  Persona,
  PERSONA_STORAGE_KEY,
} from "@/lib/persona";

interface PersonaContextValue {
  persona: Persona;
  setPersona: (persona: Persona) => void;
  isDeveloper: boolean;
  isVa: boolean;
}

const PersonaContext = createContext<PersonaContextValue | null>(null);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersonaState] = useState<Persona>("developer");

  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-persona");
    setPersonaState(attr === "va" ? "va" : "developer");
  }, []);

  const setPersona = useCallback((next: Persona) => {
    localStorage.setItem(PERSONA_STORAGE_KEY, next);
    applyPersona(next);
    setPersonaState(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PersonaContext.Provider
      value={{
        persona,
        setPersona,
        isDeveloper: persona === "developer",
        isVa: persona === "va",
      }}
    >
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) {
    throw new Error("usePersona must be used within PersonaProvider");
  }
  return ctx;
}

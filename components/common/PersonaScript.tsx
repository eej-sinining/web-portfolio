import { PERSONA_STORAGE_KEY } from "@/lib/persona";

export default function PersonaScript() {
  const script = `
    (function() {
      try {
        var stored = localStorage.getItem("${PERSONA_STORAGE_KEY}");
        var persona = stored === "developer" || stored === "va" ? stored : "developer";
        document.documentElement.setAttribute("data-persona", persona);
      } catch (e) {
        document.documentElement.setAttribute("data-persona", "developer");
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

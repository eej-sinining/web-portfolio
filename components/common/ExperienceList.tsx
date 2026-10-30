import { Experience } from "@/lib/data/experience";

export default function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ol className="space-y-8">
      {items.map((exp) => (
        <li key={`${exp.role}-${exp.period}`} className="grid sm:grid-cols-[9.5rem_1fr] gap-x-6 gap-y-1">
          <p className="text-sm text-subtle sm:pt-0.5">{exp.period}</p>
          <div>
            <h3 className="font-medium text-foreground">{exp.role}</h3>
            {exp.company && <p className="text-sm text-muted italic">{exp.company}</p>}
            <p className="mt-2 text-sm text-muted leading-relaxed">{exp.description}</p>
            {exp.highlights && (
              <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
                {exp.highlights.map((item) => (
                  <li key={item} className="pl-4 relative">
                    <span className="absolute left-0 text-subtle" aria-hidden>
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

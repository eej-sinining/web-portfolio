import PageHeader from "@/components/common/PageHeader";
import { profile } from "@/lib/data/profile";
import { techStack } from "@/lib/data/profile";

export default function AboutPage() {
  return (
    <>
      <PageHeader label="About" title="About Me" />
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-5 text-muted leading-relaxed mb-16">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <h2 className="text-sm font-medium text-foreground mb-8">Technologies</h2>
        <div className="space-y-8">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-mono text-subtle uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm text-muted bg-surface border border-border-subtle rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

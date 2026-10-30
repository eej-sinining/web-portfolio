import Card from "@/components/common/Card";
import { CapIcon } from "@/components/common/icons";
import { education } from "@/lib/data/education";

export default function Education({ className }: { className?: string }) {
  return (
    <Card id="education" title="Education" icon={<CapIcon />} className={className}>
      <ul className="space-y-3">
        {education.map(({ program, school, period }) => (
          <li key={program} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
            <span>
              <span className="block text-sm font-semibold text-foreground">{program}</span>
              <span className="block text-xs text-subtle">{school}</span>
            </span>
            <span className="text-xs font-medium text-muted">{period}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

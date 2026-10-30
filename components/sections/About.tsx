"use client";

import Card from "@/components/common/Card";
import { UserIcon } from "@/components/common/icons";
import { profile } from "@/lib/data/profile";
import { vaProfile } from "@/lib/data/vaProfile";
import { usePersona } from "@/components/common/PersonaProvider";

export default function About({ className }: { className?: string }) {
  const { isDeveloper } = usePersona();
  const paragraphs = isDeveloper ? profile.about : vaProfile.about;

  return (
    <Card id="about" title="About Me" icon={<UserIcon />} className={className}>
      <div className="space-y-3 text-sm text-muted leading-relaxed">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Card>
  );
}

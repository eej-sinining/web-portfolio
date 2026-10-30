"use client";

import Card from "@/components/common/Card";
import { MailIcon } from "@/components/common/icons";
import { profile } from "@/lib/data/profile";
import { vaProfile } from "@/lib/data/vaProfile";
import { usePersona } from "@/components/common/PersonaProvider";

export default function Contact({ className }: { className?: string }) {
  const { isDeveloper } = usePersona();

  const message = isDeveloper
    ? "Email is the best way to reach me. I'm open to freelance and contract work."
    : vaProfile.contactMessage;

  return (
    <Card id="contact" title="Contact" icon={<MailIcon />} className={className}>
      <p className="text-sm text-muted leading-relaxed">{message}</p>
      <a href={`mailto:${profile.email}`} className="chip mt-4 max-w-full break-all">
        <MailIcon className="w-3.5 h-3.5 shrink-0" />
        {profile.email}
      </a>
    </Card>
  );
}

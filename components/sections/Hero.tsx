"use client";

import { profile } from "@/lib/data/profile";
import { vaProfile } from "@/lib/data/vaProfile";
import { socialLinks } from "@/lib/data/socialLink";
import { usePersona } from "@/components/common/PersonaProvider";
import PersonaSwitcher from "@/components/common/PersonaSwitcher";
import ThemeToggle from "@/components/common/ThemeToggle";
import { CapIcon, ChevronRightIcon, DownloadIcon, MailIcon, PinIcon } from "@/components/common/icons";

// GitHub and the résumé are developer-side links; Facebook is how VA clients reach out.
const devLinkLabels = ["LinkedIn", "GitHub", "Resume"];
const vaLinkLabels = ["LinkedIn", "Facebook"];

export default function Hero() {
  const { isDeveloper, setPersona } = usePersona();

  const content = isDeveloper ? profile : vaProfile;
  const role = isDeveloper ? profile.roles[0] : vaProfile.roles[0];
  const linkLabels = isDeveloper ? devLinkLabels : vaLinkLabels;
  const links = socialLinks.filter((l) => linkLabels.includes(l.label));

  return (
    <header className="pt-8 pb-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          <CapIcon className="w-4 h-4 text-subtle" />
          {profile.school}
        </p>
        <div className="flex items-center gap-2">
          <PersonaSwitcher />
          <ThemeToggle />
        </div>
      </div>

      {/* Top padding leaves room for the roaming cursor's first stop. */}
      <h1 id="hero" className="pt-16 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        {profile.name}
      </h1>

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-base font-medium text-foreground">{role}</span>
        <span className="h-4 w-px bg-border" aria-hidden />
        <span className="flex items-center gap-1 text-sm text-subtle">
          <PinIcon className="w-3.5 h-3.5" />
          {profile.location}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-muted px-2.5 py-0.5 text-xs font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {content.availability}
        </span>
      </div>

      <p className="mt-4 max-w-2xl text-sm text-muted leading-relaxed">{content.tagline}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <a href={`mailto:${profile.email}`} className="chip">
          <MailIcon className="w-3.5 h-3.5" />
          {profile.email}
        </a>
        {links.map(({ href, label, icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="chip">
            {label === "Resume" ? (
              <>
                <DownloadIcon className="w-3.5 h-3.5" />
                Résumé
              </>
            ) : (
              <>
                <span className="w-3.5 h-3.5 [&>svg]:w-3.5 [&>svg]:h-3.5">{icon}</span>
                {label}
              </>
            )}
          </a>
        ))}
        <button
          onClick={() => setPersona(isDeveloper ? "va" : "developer")}
          className="chip border-dashed text-subtle hover:text-accent hover:border-accent transition-colors sm:ml-auto"
        >
          {isDeveloper ? "Also a Shopify VA" : "Software engineer side"}
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}

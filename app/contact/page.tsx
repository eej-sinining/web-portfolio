import PageHeader from "@/components/common/PageHeader";
import { profile } from "@/lib/data/profile";
import { socialLinks } from "@/lib/data/socialLink";

export default function ContactPage() {
  return (
    <>
      <PageHeader label="Contact" title="Get in Touch" />
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <p className="text-muted leading-relaxed mb-8">
          Have a project in mind or just want to connect? Reach out through any of these channels.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="card flex items-center justify-between p-5 group mb-4"
        >
          <div>
            <p className="text-xs font-mono text-subtle uppercase tracking-wider">Email</p>
            <p className="text-sm text-foreground mt-1 group-hover:text-accent transition-colors">
              {profile.email}
            </p>
          </div>
          <svg
            className="w-4 h-4 text-subtle group-hover:text-accent transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-4 text-center text-xs text-muted hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

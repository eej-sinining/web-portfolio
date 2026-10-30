import PageHeader from "@/components/common/PageHeader";
import { profile } from "@/lib/data/profile";
import { socialLinks } from "@/lib/data/socialLink";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="Email is the best way to reach me. I'm open to freelance and contract work."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-2">
        <a href={`mailto:${profile.email}`} className="chip">
          {profile.email}
        </a>
        <ul className="mt-4 flex flex-wrap gap-2">
          {socialLinks
            .filter((l) => l.label !== "Gmail")
            .map(({ href, label }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="chip">
                  {label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

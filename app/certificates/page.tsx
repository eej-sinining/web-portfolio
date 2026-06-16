import PageHeader from "@/components/common/PageHeader";
import { certificates } from "@/lib/data/certificate";

export default function CertificatesPage() {
  return (
    <>
      <PageHeader label="Certifications" title="All Certifications" />
      <div className="max-w-3xl mx-auto px-6 pb-20 space-y-2">
        {certificates.map(({ name, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center justify-between p-4 group"
          >
            <span className="text-sm text-muted group-hover:text-foreground transition-colors">
              {name}
            </span>
            <svg
              className="w-4 h-4 text-subtle group-hover:text-accent transition-colors shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        ))}
      </div>
    </>
  );
}

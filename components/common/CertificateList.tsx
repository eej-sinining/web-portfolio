import { certificates } from "@/lib/data/certificate";

export default function CertificateList() {
  return (
    <ul className="space-y-2">
      {certificates.map(({ name, year, issuer, link }) => (
        <li key={name}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-surface-raised px-3 py-2.5 hover:text-accent transition-colors"
          >
            <span className="block text-sm font-medium">
              {name} ({year})
            </span>
            <span className="block text-xs text-subtle">{issuer}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

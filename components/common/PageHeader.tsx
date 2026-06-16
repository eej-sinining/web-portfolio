import Link from "next/link";

interface PageHeaderProps {
  label: string;
  title: string;
  backHref?: string;
}

export default function PageHeader({
  label,
  title,
  backHref = "/",
}: PageHeaderProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-10">
      <Link
        href={backHref}
        className="text-xs font-mono text-subtle hover:text-foreground transition-colors"
      >
        ← Back
      </Link>
      <p className="section-label mt-6 mb-2">{label}</p>
      <h1 className="section-title">{title}</h1>
    </div>
  );
}

import Link from "next/link";

interface PageHeaderProps {
  title: string;
  intro?: string;
  backHref?: string;
}

export default function PageHeader({ title, intro, backHref = "/" }: PageHeaderProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-4">
      <Link href={backHref} className="link text-sm text-subtle hover:text-accent">
        ← {backHref === "/" ? "Home" : "Back"}
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-6">
        {title}
      </h1>
      {intro && <p className="mt-3 text-muted leading-relaxed">{intro}</p>}
    </div>
  );
}

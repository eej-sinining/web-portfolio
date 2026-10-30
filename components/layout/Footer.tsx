import { profile } from "@/lib/data/profile";

const SOURCE_URL = "https://github.com/eej-sinining/web-portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 mt-10">
      <div className="border-t border-border pt-4 flex flex-wrap justify-between gap-2 text-xs text-subtle">
        <p>
          © {year} {profile.name}
        </p>
        <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="link text-subtle hover:text-accent">
          Source on GitHub
        </a>
      </div>
    </footer>
  );
}

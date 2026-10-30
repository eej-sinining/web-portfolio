import { profile } from "@/lib/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 mt-10">
      <div className="border-t border-border pt-4 text-xs text-subtle">
        <p>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}

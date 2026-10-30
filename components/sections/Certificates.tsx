import Card from "@/components/common/Card";
import CertificateList from "@/components/common/CertificateList";
import { BadgeIcon } from "@/components/common/icons";
import { spokenLanguages } from "@/lib/data/education";

export default function Certificates({ className }: { className?: string }) {
  return (
    <Card
      id="certificates"
      title="Certifications"
      icon={<BadgeIcon />}
      viewAllHref="/certificates"
      className={className}
    >
      <CertificateList />
      <p className="mt-3 text-xs text-subtle">
        <span className="font-semibold text-muted">Languages:</span> {spokenLanguages.join(", ")}
      </p>
    </Card>
  );
}

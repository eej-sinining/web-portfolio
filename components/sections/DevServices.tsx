import Card from "@/components/common/Card";
import ServiceList from "@/components/common/ServiceList";
import { ListIcon } from "@/components/common/icons";
import { devServices, devServicesIntro } from "@/lib/data/profile";

export default function DevServices({ className }: { className?: string }) {
  return (
    <Card id="services" title="Freelance" icon={<ListIcon />} className={className}>
      <p className="text-sm text-muted leading-relaxed mb-4">{devServicesIntro}</p>
      <ServiceList services={devServices} />
    </Card>
  );
}

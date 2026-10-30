import Card from "@/components/common/Card";
import ServiceList from "@/components/common/ServiceList";
import { ListIcon } from "@/components/common/icons";
import { vaProfile } from "@/lib/data/vaProfile";

export default function VaServices({ className }: { className?: string }) {
  return (
    <Card id="services" title="Services" icon={<ListIcon />} className={className}>
      <ServiceList services={vaProfile.services} />
    </Card>
  );
}

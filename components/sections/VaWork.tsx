import Card from "@/components/common/Card";
import ServiceList from "@/components/common/ServiceList";
import { StoreIcon } from "@/components/common/icons";
import { vaProfile } from "@/lib/data/vaProfile";

export default function VaWork({ className }: { className?: string }) {
  return (
    <Card id="work" title="Store Work" icon={<StoreIcon />} className={className}>
      <ServiceList
        services={vaProfile.highlights.map(({ name, description }) => ({ title: name, description }))}
      />
    </Card>
  );
}

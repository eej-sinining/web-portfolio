import Card from "@/components/common/Card";
import ChipGroups from "@/components/common/ChipGroups";
import { LayersIcon } from "@/components/common/icons";
import { vaProfile } from "@/lib/data/vaProfile";

export default function VaToolkit({ className }: { className?: string }) {
  return (
    <Card id="toolkit" title="Toolkit" icon={<LayersIcon />} className={className}>
      <ChipGroups groups={vaProfile.toolkit} />
    </Card>
  );
}

import Card from "@/components/common/Card";
import ChipGroups from "@/components/common/ChipGroups";
import { LayersIcon } from "@/components/common/icons";
import { techStack } from "@/lib/data/profile";

export default function TechStack({ className }: { className?: string }) {
  return (
    <Card id="skills" title="Tech Stack" icon={<LayersIcon />} className={className}>
      <ChipGroups groups={techStack} />
    </Card>
  );
}

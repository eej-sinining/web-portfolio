import PageHeader from "@/components/common/PageHeader";
import Card from "@/components/common/Card";
import ChipGroups from "@/components/common/ChipGroups";
import { LayersIcon, UserIcon } from "@/components/common/icons";
import { profile, techStack } from "@/lib/data/profile";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        <Card id="about" title="About Me" icon={<UserIcon />}>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Card>
        <Card id="skills" title="Tech Stack" icon={<LayersIcon />}>
          <ChipGroups groups={techStack} />
        </Card>
      </div>
    </>
  );
}

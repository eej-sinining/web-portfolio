import Card from "@/components/common/Card";
import ProjectList from "@/components/common/ProjectList";
import { FolderIcon } from "@/components/common/icons";
import { projects } from "@/lib/data/project";

const FEATURED_COUNT = 4;

export default function Projects({ className }: { className?: string }) {
  return (
    <Card id="projects" title="Recent Projects" icon={<FolderIcon />} viewAllHref="/projects" className={className}>
      <ProjectList projects={projects.slice(0, FEATURED_COUNT)} layout="grid" />
    </Card>
  );
}

// app/projects/page.tsx
import ProjectCard from "@/components/projectcard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-accent mb-6 text-center">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </section>
  );
}

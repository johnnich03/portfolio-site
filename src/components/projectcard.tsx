import Image from "next/image";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, github, live, screenshot } = project;
  return (
    <article className="rounded-lg shadow-md p-4 bg-card">
      {screenshot && (
        <div className="h-48 relative mb-3">
          <Image src={screenshot} alt={`${title} screenshot`} fill className="object-cover rounded" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-textPrimary">{title}</h3>
      <p className="mt-2 text-sm text-textSecondary">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-borderColor text-textPrimary">{t}</span>)}
      </div>
      <div className="mt-3 flex gap-2">
        {github && <a href={github} target="_blank" rel="noreferrer" className="text-sm text-accent hover:text-accent/80 underline">View on GitHub</a>}
        {live && <a href={live} target="_blank" rel="noreferrer" className="text-sm text-accent hover:text-accent/80 underline">Live Demo</a>}
      </div>
    </article>
  );
}
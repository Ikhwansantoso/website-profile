"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ProjectCard({
  project,
  showCategory = false,
}: {
  project: Project;
  showCategory?: boolean;
}) {
  const { lang, t } = useLanguage();
  const linkClass =
    "text-slate-500 hover:text-brand-600 transition-colors flex items-center gap-2 text-sm font-medium";

  return (
    <div className="p-8 flex-1 flex flex-col">
      <div className="flex justify-between items-start gap-3 mb-3">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
          {project.title}
        </h3>
        {showCategory && (
          <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-medium rounded-full shrink-0">
            {project.category}
          </span>
        )}
      </div>

      <p className="text-slate-600 mb-6 flex-1">{project.description[lang]}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-slate-100 text-xs font-medium rounded-md text-slate-700">
            {tag}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="flex items-center gap-4 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaGithub size={18} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <ExternalLink size={18} /> {t.projects.demo}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

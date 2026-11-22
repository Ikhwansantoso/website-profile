"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.featured}</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all flex flex-col hover:-translate-y-1"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-colors shadow-sm hover:shadow-md"
          >
            {t.projects.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

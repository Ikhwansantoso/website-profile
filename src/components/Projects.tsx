"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
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
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-brand-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-xs font-medium rounded-md text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-600 transition-colors flex items-center gap-2 text-sm font-medium">
                    <FaGithub size={18} /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-600 transition-colors flex items-center gap-2 text-sm font-medium">
                    <ExternalLink size={18} /> Live Demo / App
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-colors shadow-sm hover:shadow-md"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

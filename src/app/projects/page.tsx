"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

// Only show filters for categories that actually have projects.
const categories: ("All" | ProjectCategory)[] = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-1 py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">{t.projects.allTitle}</h1>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.projects.allSubtitle}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-brand-600 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {category === "All" ? t.projects.all : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all flex flex-col hover:-translate-y-1"
              >
                <ProjectCard project={project} showCategory />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">{t.projects.empty}</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-slate-600 font-medium rounded-full hover:bg-slate-50 transition-colors"
            >
              {t.projects.backHome}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

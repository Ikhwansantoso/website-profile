"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const categories = ["All", "Web", "Mobile", "XR", "Game"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="flex-1 py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">All Projects</h1>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive collection of my work across Web, Mobile, XR, and Game Development.
            </p>
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
                {category}
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
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
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
                  
                  <div className="flex items-center gap-4 mt-auto">
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No projects found for this category yet.</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-slate-600 font-medium rounded-full hover:bg-slate-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

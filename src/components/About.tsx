"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Hello! I am a software and web developer originally from Samarinda, currently studying Informatics at Institut Teknologi Sepuluh Nopember (ITS)
              </p>
              <p>
                My work is driven by a deep curiosity about building scalable digital solutions and understanding how humans interact with them.

With a solid foundation in web and enterprise software development, I have had the opportunity to contribute to impactful projects at Telkom Indonesia and serve as a Teaching Assistant (Asdos) at ITS.
              </p>
              <p>
               Alongside core software engineering, I actively explore Extended Reality (XR) and Natural User Interfaces (NUI), blending robust technical development with cutting-edge human-computer interaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Web Development", color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100" },
                  { name: "Mobile (Flutter/Kotlin)", color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" },
                  { name: "Game Dev (Unity)", color: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100" },
                  { name: "Extended Reality (XR)", color: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100" },
                  { name: "Next.js", color: "bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200" },
                  { name: "React", color: "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100" },
                  { name: "Tailwind CSS", color: "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100" },
                  { name: "TypeScript", color: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100" }
                ].map((skill) => (
                  <span key={skill.name} className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-default ${skill.color}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

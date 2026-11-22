"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

type Skill = { name: string; color: string };

// Taken from the CV. Row 1: programming languages, row 2: frameworks & tools.
const skillRows: Skill[][] = [
  [
    { name: "JavaScript", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
    { name: "TypeScript", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { name: "Python", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "PHP", color: "bg-violet-50 text-violet-700 border-violet-200" },
    { name: "Kotlin", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { name: "C", color: "bg-slate-100 text-slate-700 border-slate-300" },
    { name: "HTML", color: "bg-orange-50 text-orange-700 border-orange-200" },
    { name: "CSS", color: "bg-sky-50 text-sky-700 border-sky-200" },
  ],
  [
    { name: "React", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
    { name: "Next.js", color: "bg-slate-100 text-slate-700 border-slate-300" },
    { name: "Tailwind CSS", color: "bg-teal-50 text-teal-700 border-teal-200" },
    { name: "Flutter", color: "bg-sky-50 text-sky-700 border-sky-200" },
    { name: "Jetpack Compose", color: "bg-green-50 text-green-700 border-green-200" },
    { name: "Room Database", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Figma", color: "bg-rose-50 text-rose-700 border-rose-200" },
    { name: "Git & GitHub", color: "bg-red-50 text-red-700 border-red-200" },
  ],
];

/** One endlessly scrolling row of skill chips. Hover pauses it. */
function MarqueeRow({ skills, reverse = false }: { skills: Skill[]; reverse?: boolean }) {
  // The list is repeated so one half is always wider than the card;
  // the animation moves exactly one half (-50%) for a seamless loop.
  const half = [...skills, ...skills];

  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {[...half, ...half].map((skill, i) => (
          <span
            key={i}
            aria-hidden={i >= skills.length}
            className={`mr-3 px-4 py-2 rounded-full text-sm font-medium border whitespace-nowrap cursor-default ${skill.color}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: About text */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Right: moving skills */}
            <div className="bg-white py-8 rounded-2xl shadow-sm border border-slate-200 min-w-0">
              <h3 className="text-xl font-bold mb-6 px-8 text-slate-900">{t.about.skillsTitle}</h3>
              <div className="space-y-4">
                <MarqueeRow skills={skillRows[0]} />
                <MarqueeRow skills={skillRows[1]} reverse />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

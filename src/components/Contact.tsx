"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/i18n/LanguageContext";
import { socials, email, cv } from "@/data/socials";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-brand-50 mb-10 text-lg">
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors"
            >
              <FaGithub size={20} /> GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href={cv.href}
              download={cv.fileName}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors"
            >
              <Download size={20} /> {t.hero.cv}
            </a>
          </div>

          <div className="inline-flex items-center justify-center gap-4 bg-white/10 p-2 pr-6 rounded-full border border-white/20 backdrop-blur-sm flex-wrap max-w-full">
            <div className="bg-white/20 p-3 rounded-full">
              <Mail size={20} />
            </div>
            <span className="font-medium text-brand-50 truncate">{email}</span>
            <button
              onClick={handleCopyEmail}
              className="ml-2 sm:ml-4 text-brand-100 hover:text-white transition-colors"
              title={t.contact.copy}
              aria-label={t.contact.copy}
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

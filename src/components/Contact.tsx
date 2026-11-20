"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ikhwanti1815@gmail.com";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-brand-50 mb-10 text-lg">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://github.com/Ikhwansantoso"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors"
            >
              <FaGithub size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ikhwanmaruf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors"
            >
              <FaLinkedin size={20} /> LinkedIn
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
              title="Copy to clipboard"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Software Engineer",
    "UI/UX Designer",
    "Mobile App Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden bg-white z-0">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-200/80 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/70 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:items-start relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-slate-500 font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
            Halo, Saya
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 leading-tight text-slate-900">
            Muhammad Ikhwan <br />
            Ma'ruf Santoso
          </h1>
          <h3 className="text-lg md:text-xl font-bold mb-8 text-slate-700">
            Saya seorang <br />
            <div className="h-[32px] md:h-[36px] mt-1 flex items-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-brand-500 border-b-4 border-brand-500 pb-1 inline-block whitespace-nowrap"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h3>
          
          <div className="flex gap-6 mb-8 text-slate-400">
            <a href="#" className="hover:text-brand-500 transition-colors"><FaGithub size={26} /></a>
            <a href="#" className="hover:text-brand-500 transition-colors"><FaLinkedin size={26} /></a>
            <a href="#" className="hover:text-brand-500 transition-colors"><FaInstagram size={26} /></a>
            <a href="#" className="hover:text-brand-500 transition-colors"><FaTiktok size={26} /></a>
          </div>

          <p className="text-lg text-slate-600 mb-10 max-w-xl">
            Saya membantu bisnis dan individu mengubah ide menjadi solusi digital yang indah dan berfungsi.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-brand-500 text-white rounded-full font-medium hover:bg-brand-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-500/30"
            >
              Lihat Proyek <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-full font-medium hover:border-brand-500 hover:text-brand-500 transition-colors text-center"
            >
              Kontak Saya
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image & Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full max-w-[320px] md:max-w-[400px] mx-auto lg:ml-auto"
        >
          {/* Main Image Card */}
          <div className="relative rounded-[2.5rem] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl bg-slate-50 flex flex-col">
            
            {/* Placeholder Background */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-200 z-0">
              <span className="text-4xl mb-2">📸</span>
            </div>
            
            {/* 
              Image component with w-full and h-auto to scale proportionally 
              and prevent ANY cropping regardless of the image aspect ratio.
            */}
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              width={800}
              height={1000}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative w-full h-auto z-0" 
              priority 
            />

            {/* Bottom Contact Widget */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between shadow-xl border border-white/60">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden flex items-center justify-center relative shadow-inner">
                    <Image src="/profile.jpg" alt="Avatar" width={40} height={40} className="w-full h-full object-cover object-[center_80%]" priority />
                  </div>
                  <div>
                    <p className="text-slate-900 text-sm font-bold">@ikhwan18_</p>
                    <p className="text-emerald-500 text-[10px] md:text-xs font-semibold flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> Online
                    </p>
                  </div>
                </div>
                <a href="#contact" className="px-3 py-2 bg-brand-600 text-white text-xs font-bold rounded-xl hover:bg-brand-700 shadow-md shadow-brand-600/20 transition-all active:scale-95">
                  Contact
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/4 right-0 w-72 h-72 bg-brand-300/40 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute -z-10 bottom-1/4 -left-12 w-64 h-64 bg-cyan-300/40 rounded-full blur-3xl mix-blend-multiply"></div>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100 text-slate-500 py-8 text-center text-sm border-t border-slate-200">
      <div className="container mx-auto px-6">
        <p>
          &copy; {new Date().getFullYear()} Muhammad Ikhwan Ma&apos;ruf Santoso. {t.footer.rights}
        </p>
        <p className="mt-2 text-slate-400">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}

"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { languages, translations, type Language, type Translation } from "./translations";

const STORAGE_KEY = "lang";
const DEFAULT_LANGUAGE: Language = "id";

// Tiny external store backed by localStorage, so the choice survives reloads
// and stays in sync across tabs.
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved && (languages as string[]).includes(saved) ? (saved as Language) : DEFAULT_LANGUAGE;
}

// The server has no localStorage, so it always renders the default language.
function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

type LanguageContextValue = {
  lang: Language;
  t: Translation;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function setLang(next: Language) {
  localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

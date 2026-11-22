export type Language = "id" | "en";

export const languages: Language[] = ["id", "en"];

export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      contact: "Kontak",
      switchLanguage: "Ganti bahasa",
    },
    hero: {
      greeting: "Halo, Saya",
      iAm: "Saya seorang",
      roles: ["Frontend Developer", "Backend Developer", "Mobile Developer"],
      tagline:
        "Mahasiswa Informatika ITS yang membuat website dan aplikasi Android, mulai dari tampilan sampai sistem di belakangnya.",
      viewProjects: "Lihat Proyek",
      contactMe: "Kontak Saya",
      cv: "CV Saya",
      contact: "Kontak",
    },
    about: {
      title: "Tentang Saya",
      paragraphs: [
        "Halo! Saya Ikhwan, mahasiswa Informatika angkatan 2023 di Institut Teknologi Sepuluh Nopember (ITS), asal Samarinda.",
        "Saya membuat website dan aplikasi mobile. Saya mengerjakan bagian yang dilihat pengguna (frontend) sekaligus sistem dan database di belakangnya (backend).",
        "Saya pernah magang sebagai Junior Developer di PT Telkom Indonesia, membuat website pemantauan K3 (Keselamatan dan Kesehatan Kerja). Saya juga menjadi Asisten Dosen mata kuliah Komputasi Numerik di ITS.",
      ],
      skillsTitle: "Keahlian",
    },
    projects: {
      featured: "Proyek Saya",
      viewAll: "Lihat Semua Proyek",
      allTitle: "Semua Proyek",
      allSubtitle: "Website dan aplikasi mobile yang pernah saya buat.",
      all: "Semua",
      empty: "Belum ada proyek untuk kategori ini.",
      backHome: "Kembali ke Beranda",
      demo: "Lihat Demo",
    },
    contact: {
      title: "Hubungi Saya",
      subtitle:
        "Punya pertanyaan, tawaran magang atau kerja, atau ingin kerja sama? Kirim pesan lewat email atau LinkedIn.",
      copy: "Salin email",
    },
    footer: {
      rights: "Hak cipta dilindungi.",
      builtWith: "Dibuat dengan Next.js, Tailwind CSS & Framer Motion.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      switchLanguage: "Switch language",
    },
    hero: {
      greeting: "Hello, I'm",
      iAm: "I am a",
      roles: ["Frontend Developer", "Backend Developer", "Mobile Developer"],
      tagline:
        "Informatics student at ITS who builds websites and Android apps, from the interface to the system behind it.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      cv: "My CV",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "Hi! I'm Ikhwan, an Informatics student (class of 2023) at Institut Teknologi Sepuluh Nopember (ITS), originally from Samarinda.",
        "I build websites and mobile apps. I work on both the part users see (frontend) and the system and database behind it (backend).",
        "I interned as a Junior Developer at PT Telkom Indonesia, where I built a web-based K3 (Occupational Health and Safety) monitoring system. I also served as a Teaching Assistant for the Numerical Computation course at ITS.",
      ],
      skillsTitle: "Skills",
    },
    projects: {
      featured: "My Projects",
      viewAll: "View All Projects",
      allTitle: "All Projects",
      allSubtitle: "Websites and mobile apps I have built.",
      all: "All",
      empty: "No projects in this category yet.",
      backHome: "Back to Home",
      demo: "Live Demo",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Have a question, an internship or job offer, or want to work together? Send me a message by email or LinkedIn.",
      copy: "Copy email",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, Tailwind CSS & Framer Motion.",
    },
  },
} as const;

export type Translation = (typeof translations)[Language];

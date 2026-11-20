export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "Web" | "Mobile" | "XR" | "Game" | "Other";
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: "turbogaraged.id",
    title: "TurboGarage.id",
    description: "A modern, responsive automotive e-commerce platform designed for buying and selling car spare parts. It features seller catalog management, intuitive shopping carts, smooth checkout, order tracking, and secure user authentication across all devices.",
    tags: ["Next.js", "Tailwind CSS", "JavaScript","React",],
    category: "Web",
    github: "#",
    demo: "https://youtu.be/iq45hMnO_ZQ?si=7xzoxdRwsoLyb9gF",
  },
  {
    id: "telkom-dashboard",
    title: "Telkom K3 Dashboard Evaluation",
    description: "An enterprise dashboard built for Telkom Regional 3 to streamline K3 safety management. It centralizes real-time audit findings, incident logs, and compliance data into an interactive, responsive analytics portal for all internal stakeholders.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/Ikhwansantoso/WEB-SMK3",
    demo: "https://smk3.treg3.com",
  },
  {
    id: "VetCare",
    title: "VetCare",
    description: "An offline-first Android membership app for veterinary clinics and pet shops to replace physical cards. It features digital QR membership cards, pet medical records, automated loyalty points, and voucher redemption—built with Kotlin, Jetpack Compose, Room Database, and MVVM architecture.",
    tags: ["Kotlin", "Android", "Jetpack Compose", "Room Database"],
    category: "Mobile",
    github: "https://github.com/Ikhwansantoso/VetCareClub",
    demo: "https://youtu.be/Xq7tvwEjIm0?si=wwRvbz7GNi4PUrQu",
  },
  {
    id: "ResepKita",
    title: "ResepKita",
    description: "A modern Android cooking guide app delivering structured culinary recipes, ingredients, and step-by-step instructions. Built with Kotlin and Jetpack Compose, it features an interactive card-based layout, smooth navigation, and a responsive mobile user experience.",
    tags: ["Kotlin", "Android", "Jetpack Compose", "Room Database"],
    category: "Mobile",
    github: "https://github.com/Ikhwansantoso/Project-ETS-PPB",
    demo: "https://youtu.be/Srf6_iqUd3U?si=xE-fQ9HBOEYnSxGP",
  },
  {
    id: "project-5",
    title: "Indie Mobile Game",
    description: "A 2D platformer mobile game with engaging mechanics and beautiful pixel art graphics.",
    tags: ["Unity", "C#", "Mobile"],
    category: "Game",
    github: "#",
    demo: "#",
  },
  {
    id: "project-6",
    title: "E-Commerce App",
    description: "A robust mobile application for online shopping, featuring payment gateway integration and order tracking.",
    tags: ["Flutter", "Dart", "Stripe"],
    category: "Mobile",
    github: "#",
    demo: "#",
  }
];

import type { Language } from "@/i18n/translations";

export type ProjectCategory = "Web" | "Mobile" | "XR" | "Game" | "Other";

export type Project = {
  id: string;
  title: string;
  description: Record<Language, string>;
  tags: string[];
  category: ProjectCategory;
  /** Omit to hide the GitHub button. */
  github?: string;
  /** Omit to hide the demo button. */
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "telkom-dashboard",
    title: "SMK3 Dashboard Monitoring – Telkom",
    description: {
      id: "Website pemantauan K3 (Keselamatan dan Kesehatan Kerja) untuk PT Telkom Regional 3. Menampilkan hasil audit, laporan insiden, dan penilaian risiko dalam bentuk grafik, dengan hak akses berbeda untuk karyawan, auditor, dan admin.",
      en: "A K3 (Occupational Health and Safety) monitoring website for PT Telkom Regional 3. It shows audit results, incident reports, and risk assessments as charts, with different access levels for employees, auditors, and admins.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/Ikhwansantoso/WEB-SMK3",
    demo: "https://smk3.treg3.com",
  },
  {
    id: "vetcare",
    title: "VetCare",
    description: {
      id: "Aplikasi Android pengganti kartu member fisik untuk klinik hewan dan pet shop. Ada kartu member berbentuk QR code, catatan kesehatan hewan, poin loyalitas, dan penukaran voucher. Tetap bisa dipakai tanpa internet.",
      en: "An Android app that replaces physical membership cards for vet clinics and pet shops. It has QR code member cards, pet health records, loyalty points, and voucher redemption. It works without an internet connection.",
    },
    tags: ["Kotlin", "Jetpack Compose", "Room Database", "MVVM"],
    category: "Mobile",
    github: "https://github.com/Ikhwansantoso/VetCareClub",
    demo: "https://youtu.be/Xq7tvwEjIm0?si=wwRvbz7GNi4PUrQu",
  },
  {
    id: "resepkita",
    title: "ResepKita",
    description: {
      id: "Aplikasi Android berisi resep masakan, lengkap dengan daftar bahan dan langkah memasak. Resep bisa difilter berdasarkan kategori makanan.",
      en: "An Android recipe app with ingredient lists and step-by-step cooking instructions. Recipes can be filtered by meal category.",
    },
    tags: ["Kotlin", "Jetpack Compose"],
    category: "Mobile",
    github: "https://github.com/Ikhwansantoso/Project-ETS-PPB",
    demo: "https://youtu.be/Srf6_iqUd3U?si=xE-fQ9HBOEYnSxGP",
  },
  {
    id: "turbogarage-id",
    title: "TurboGarage.id",
    description: {
      id: "Website toko online untuk jual beli suku cadang mobil. Penjual bisa mengatur katalog barang, sedangkan pembeli bisa menambahkan barang ke keranjang, checkout, dan melacak pesanan.",
      en: "An online store for buying and selling car spare parts. Sellers can manage their product catalog, while buyers can add items to a cart, check out, and track their orders.",
    },
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    category: "Web",
    demo: "https://youtu.be/iq45hMnO_ZQ?si=7xzoxdRwsoLyb9gF",
  },
];

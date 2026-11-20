export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-500 py-8 text-center text-sm border-t border-slate-200">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Tech Developer Portfolio. All rights reserved.</p>
        <p className="mt-2 text-slate-400">Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import { Menu, X, Languages } from "lucide-react";

const sections = ["home", "about", "services", "calc", "projects", "team", "blog", "contact"] as const;

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navKey: Record<string, keyof any> = {
    home: "navHome", about: "navAbout", services: "navServices", calc: "navCalc",
    projects: "navProjects", team: "navTeam", blog: "navBlog", contact: "navContact",
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-card py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white font-black shadow-elegant">DL</div>
          <div className="flex flex-col leading-tight">
            <span className={`font-display font-black text-sm sm:text-base ${scrolled ? "text-primary" : "text-white"}`}>{t("brand")}</span>
            <span className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>Construction & Property</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled ? "text-foreground hover:text-primary hover:bg-primary/5" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t(navKey[s] as any)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ur" : "en")}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              scrolled ? "border-primary/20 text-primary hover:bg-primary hover:text-white" : "border-white/40 text-white hover:bg-white hover:text-primary"
            }`}
            aria-label="Switch language"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "en" ? "اردو" : "EN"}
          </button>
          <a href="#contact" className="hidden md:inline-flex rounded-full bg-gradient-accent px-4 py-2 text-xs font-bold text-white shadow-elegant hover:scale-105 transition-transform">
            {t("getQuote")}
          </a>
          <button onClick={() => setOpen(!open)} className={`lg:hidden ${scrolled ? "text-primary" : "text-white"}`} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white shadow-elegant animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {sections.map((s) => (
              <a key={s} href={`#${s}`} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-primary/5 hover:text-primary">
                {t(navKey[s] as any)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

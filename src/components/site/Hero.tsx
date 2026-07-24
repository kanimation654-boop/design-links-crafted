import { useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { t, lang } = useI18n();
  const full = t("tagline");
  const [text, setText] = useState("");

  useEffect(() => {
    setText("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 65);
    return () => clearInterval(id);
  }, [full, lang]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Replace with official hero imagery when available */}
      <img src={heroImg} alt="Modern architectural villa by Design Links" className="absolute inset-0 h-full w-full object-cover scale-105 animate-float" width={1920} height={1200} />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Burewala · Punjab · Pakistan
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
            <span className="caret">{text}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            {t("heroSub")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform">
              {t("getQuote")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-7 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-primary transition-colors">
              {t("freeConsult")}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            <Stat n={2000} suffix="+" label="Projects" />
            <Stat n={9} suffix="+" label="Years" />
            <Stat n={3000} suffix="+" label="Clients" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-widest animate-float">
        Scroll ↓
      </div>
    </section>
  );
}

function Stat({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.floor(n / 40));
    const id = setInterval(() => {
      start += step;
      if (start >= n) { setV(n); clearInterval(id); }
      else setV(start);
    }, 30);
    return () => clearInterval(id);
  }, [n]);
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-black text-white">{v}{suffix}</div>
      <div className="text-xs uppercase tracking-widest text-white/70 mt-1">{label}</div>
    </div>
  );
}

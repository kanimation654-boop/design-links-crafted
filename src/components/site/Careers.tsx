import { useI18n } from "@/i18n";
import { Briefcase, ArrowRight } from "lucide-react";

const openings = [
  { title: "Architectural Designer", type: "Full-time · Burewala" },
  { title: "AutoCAD Draftsman", type: "Full-time · Burewala" },
  { title: "Site Supervisor", type: "Contract · Punjab" },
  { title: "Interior Designer", type: "Full-time · Remote/On-site" },
];

export default function Careers() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— Careers —</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black">{t("careersTitle")}</h2>
            <p className="mt-6 text-white/85 leading-relaxed">{t("careersBody")}</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-bold shadow-elegant hover:scale-105 transition-transform">
              {t("applyNow")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          </div>
          <div className="reveal space-y-3">
            {openings.map((o) => (
              <div key={o.title} className="group flex items-center justify-between gap-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-5 hover:bg-white hover:text-primary transition-colors cursor-pointer">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent shrink-0">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-black truncate">{o.title}</div>
                    <div className="text-xs opacity-80">{o.type}</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

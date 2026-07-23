import { useI18n } from "@/i18n";
// Replace with official CEO photograph
import ceoImg from "@/assets/avatar-ceo.jpg";
import { Quote } from "lucide-react";

export default function CEO() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 reveal">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-elegant border-4 border-white">
                {/* Replace with official CEO photo */}
                <img src={ceoImg} alt="CEO Manzoor Ahmad Nazar" className="w-full aspect-square object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 left-4 rounded-2xl bg-gradient-accent px-5 py-3 text-white shadow-elegant">
                <div className="text-[10px] uppercase tracking-widest opacity-90">Founder & CEO</div>
                <div className="text-sm font-black">Design Links</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— {t("ceoTitle")} —</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("ceoName")}</h2>
            <div className="mt-2 text-lg font-semibold text-accent">{t("ceoPos")}</div>
            <div className="mt-6 relative rounded-2xl bg-muted/40 p-6 border-l-4 rtl:border-l-0 rtl:border-r-4 border-accent">
              <Quote className="absolute top-4 right-4 rtl:right-auto rtl:left-4 h-8 w-8 text-accent/20" />
              <p className="text-muted-foreground leading-relaxed">{t("ceoBody")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

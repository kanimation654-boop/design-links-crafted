import { useI18n } from "@/i18n";
import { Award, Heart, Lightbulb, ShieldCheck, Sparkles, Users, Leaf, Handshake, Star, Target, Eye } from "lucide-react";

const values = [
  { icon: Award, label: "Quality" },
  { icon: ShieldCheck, label: "Trust" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Heart, label: "Integrity" },
  { icon: Sparkles, label: "Professionalism" },
  { icon: Users, label: "Customer Satisfaction" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Handshake, label: "Teamwork" },
  { icon: Star, label: "Excellence" },
];

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— {t("aboutTitle")} —</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("aboutLead")}</h2>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground leading-relaxed">{t("aboutBody")}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 reveal">
          <div className="rounded-2xl bg-white p-8 shadow-card border border-border hover:shadow-elegant transition-shadow">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white">
              <Target />
            </div>
            <h3 className="mt-5 text-2xl font-black text-primary">{t("missionTitle")}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{t("missionBody")}</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-card border border-border hover:shadow-elegant transition-shadow">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-accent text-white">
              <Eye />
            </div>
            <h3 className="mt-5 text-2xl font-black text-primary">{t("visionTitle")}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{t("visionBody")}</p>
          </div>
        </div>

        <div className="mt-20 reveal">
          <h3 className="text-center text-2xl sm:text-3xl font-black text-primary">{t("valuesTitle")}</h3>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
            {values.map((v) => (
              <div key={v.label} className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-accent hover:-translate-y-1 hover:shadow-elegant transition-all duration-300">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/5 text-primary group-hover:bg-gradient-accent group-hover:text-white transition-colors">
                  <v.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-center text-foreground">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

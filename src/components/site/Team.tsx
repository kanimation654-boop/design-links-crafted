import { useI18n } from "@/i18n";
import aliHassan from "@/assets/ali-hassan.png.asset.json";
import ahmadTariq from "@/assets/ahmad-tariq.png.asset.json";

const team = [
  {
    name: "Ali Hassan",
    pos: "Senior 3D Architectural Designer",
    img: aliHassan.url,
    desc: "Ali Hassan specializes in creating modern, realistic, and high-quality architectural visualizations. He transforms ideas into elegant interior and exterior designs using advanced 3D design tools and visualization techniques.",
    skills: ["3D House Design", "Interior Design", "Exterior Design", "Architectural Visualization", "Realistic Rendering", "Landscape Visualization", "Presentation Design"],
  },
  {
    name: "Ahmad Tariq",
    pos: "AutoCAD Draftsman & 2D Design Specialist",
    img: ahmadTariq.url,
    desc: "Ahmad Tariq prepares accurate AutoCAD drawings, technical layouts, construction documentation, and detailed 2D plans with precision and professionalism.",
    skills: ["AutoCAD Drawings", "2D Floor Plans", "Working Drawings", "Construction Drawings", "Technical Documentation", "Site Drawings", "Project Drafting"],
  },
];

export default function Team() {
  const { t } = useI18n();
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— Our Team —</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("teamTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{t("teamSub")}</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {team.map((m) => (
            <div key={m.name} className="reveal group rounded-3xl bg-white p-8 shadow-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-start gap-5">
                {/* Replace with official photo */}
                <img src={m.img} alt={m.name} className="h-24 w-24 rounded-2xl object-cover shadow-elegant border-2 border-white ring-2 ring-primary/10 group-hover:ring-accent transition" loading="lazy" />
                <div>
                  <h3 className="text-2xl font-black text-primary">{m.name}</h3>
                  <div className="text-sm font-semibold text-accent">{m.pos}</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {m.skills.map((s) => (
                  <span key={s} className="inline-flex rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

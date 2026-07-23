import { useState } from "react";
import { useI18n } from "@/i18n";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p4 from "@/assets/project4.jpg";
import p5 from "@/assets/project5.jpg";
import p6 from "@/assets/project6.jpg";
import { X } from "lucide-react";

const projects = [
  { img: p2, title: "Modern Family Residence", cat: "Residential" },
  { img: p4, title: "Luxury Villa with Pool", cat: "Villa" },
  { img: p1, title: "Interior Living Space", cat: "Interior" },
  { img: p5, title: "Master Bedroom Suite", cat: "Interior" },
  { img: p6, title: "2D Floor Plan Drafting", cat: "Drawing" },
  { img: p2, title: "Contemporary Facade", cat: "Exterior" },
];

export default function Projects() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— Portfolio —</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("projectsTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{t("projectsSub")}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all"
            >
              <img src={p.img} alt={p.title} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left rtl:text-right translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-[10px] uppercase tracking-widest text-accent font-bold">{p.cat}</div>
                <div className="mt-1 text-lg font-black text-white">{p.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[60] bg-black/85 backdrop-blur flex items-center justify-center p-4 animate-fade-in" onClick={() => setOpen(null)}>
          <button className="absolute top-6 right-6 text-white/80 hover:text-white" onClick={() => setOpen(null)}>
            <X className="h-8 w-8" />
          </button>
          <img src={projects[open].img} alt={projects[open].title} className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-elegant animate-scale-in" />
        </div>
      )}
    </section>
  );
}

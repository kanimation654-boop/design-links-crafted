import { useI18n } from "@/i18n";
import {
  Building2, Home, Building, Ruler, Box, Sofa, TreePine, HardHat, Layers, Key,
  ClipboardCheck, Calculator, Bricks, Package, Map, MapPinned, Landmark,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Architectural Design", desc: "Creative, functional and modern architectural design for any project." },
  { icon: Home, title: "Residential House Design", desc: "Beautiful, comfortable homes tailored to your lifestyle." },
  { icon: Building, title: "Commercial Building Design", desc: "Efficient designs for offices, shops, plazas and more." },
  { icon: Ruler, title: "2D Floor Plans", desc: "Precise, dimensioned floor plans ready for construction." },
  { icon: Box, title: "3D House Design", desc: "Photorealistic 3D renders to visualize your dream before you build." },
  { icon: Sofa, title: "Interior Design", desc: "Elegant interiors that balance aesthetics and function." },
  { icon: TreePine, title: "Exterior Design", desc: "Striking facades and outdoor spaces with lasting appeal." },
  { icon: HardHat, title: "Construction Services", desc: "End-to-end construction with quality workmanship." },
  { icon: Layers, title: "Grey Structure Construction", desc: "Strong, durable grey structures built to code." },
  { icon: Key, title: "Turnkey Construction", desc: "Complete turnkey delivery — you get the keys, we handle everything." },
  { icon: ClipboardCheck, title: "Construction Supervision", desc: "Professional supervision to ensure quality on-site." },
  { icon: Calculator, title: "Construction Cost Estimation", desc: "Accurate cost estimates for confident budgeting." },
  { icon: Bricks, title: "Brick Estimation", desc: "Exact brick quantity calculations for any wall." },
  { icon: Package, title: "Material Estimation", desc: "Detailed material take-offs for the full project." },
  { icon: Map, title: "Town Planning", desc: "Comprehensive town and layout planning services." },
  { icon: MapPinned, title: "Site Planning", desc: "Optimal site layouts that maximize land use." },
  { icon: Landmark, title: "Property Consultancy", desc: "Trusted property advice for buyers, sellers and investors." },
];

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— What We Do —</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("servicesTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{t("servicesSub")}</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${(i % 4) * 40}ms` }}
            >
              <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 h-24 w-24 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-white transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-black text-primary text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

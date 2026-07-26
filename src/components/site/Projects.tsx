import { useMemo, useState } from "react";
import { useI18n } from "@/i18n";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p4 from "@/assets/project4.jpg";
import p5 from "@/assets/project5.jpg";
import p6 from "@/assets/project6.jpg";
import dlHospital from "@/assets/dl-hospital.jpg.asset.json";
import dlVillaDay from "@/assets/dl-villa-day.jpg.asset.json";
import dlVillaDusk from "@/assets/dl-villa-dusk.jpg.asset.json";
import dlModernSingle from "@/assets/dl-modern-single.jpg.asset.json";
import dlArchedVilla from "@/assets/dl-arched-villa.jpg.asset.json";
import dlClassicVilla from "@/assets/dl-classic-villa.jpg.asset.json";

import { X, MapPin } from "lucide-react";

type Category = "Residential" | "Commercial" | "Industrial";

type Project = {
  img: string;
  cat: Category;
  title: { en: string; ur: string };
  location: { en: string; ur: string };
  desc: { en: string; ur: string };
};

const projects: Project[] = [
  {
    img: dlModernSingle.url,
    cat: "Residential",
    title: { en: "Contemporary Single-Storey House", ur: "جدید سنگل اسٹوری ہاؤس" },
    location: { en: "Burewala, Punjab", ur: "بورے والا، پنجاب" },
    desc: {
      en: "Sleek modern elevation with stone cladding, wooden louvers and layered facade lighting.",
      ur: "اسٹون کلیڈنگ، لکڑی کے لوورز اور خوبصورت روشنی کے ساتھ جدید ایلیویشن۔",
    },
  },
  {
    img: dlVillaDay.url,
    cat: "Residential",
    title: { en: "Triple-Storey Modern Villa", ur: "تین منزلہ جدید ولا" },
    location: { en: "Burewala, Punjab", ur: "بورے والا، پنجاب" },
    desc: {
      en: "Elegant three-storey home with stone feature walls, balconies and a designer main gate.",
      ur: "اسٹون فیچر وال، بالکنیوں اور ڈیزائنر مین گیٹ کے ساتھ خوبصورت تین منزلہ گھر۔",
    },
  },
  {
    img: dlVillaDusk.url,
    cat: "Residential",
    title: { en: "Luxury Villa — Evening View", ur: "لگژری ولا — شام کا منظر" },
    location: { en: "Vehari, Punjab", ur: "وہاڑی، پنجاب" },
    desc: {
      en: "Warm dusk render showcasing facade lighting design and premium exterior finishes.",
      ur: "شام کے وقت فسیڈ لائٹنگ ڈیزائن اور اعلیٰ بیرونی فنشنگ کا منظر۔",
    },
  },
  {
    img: dlArchedVilla.url,
    cat: "Residential",
    title: { en: "Arched Facade Family Home", ur: "محرابی اگلے رخ والا فیملی ہوم" },
    location: { en: "Multan, Punjab", ur: "ملتان، پنجاب" },
    desc: {
      en: "Modern-classic elevation with arched windows, stone texture and sloped roof accents.",
      ur: "محرابی کھڑکیوں، اسٹون ٹیکسچر اور ڈھلوان چھت کے ساتھ ماڈرن کلاسک ایلیویشن۔",
    },
  },
  {
    img: dlClassicVilla.url,
    cat: "Residential",
    title: { en: "Spanish Classic Bungalow", ur: "اسپینش کلاسک بنگلہ" },
    location: { en: "Sahiwal, Punjab", ur: "ساہیوال، پنجاب" },
    desc: {
      en: "Classical bungalow with terracotta tiled roof, ornate mouldings and wrought-iron gate.",
      ur: "ٹیراکوٹا ٹائل چھت، نقش و نگار اور لوہے کے گیٹ کے ساتھ کلاسیکل بنگلہ۔",
    },
  },
  {
    img: dlHospital.url,
    cat: "Commercial",
    title: { en: "Multi-Storey Hospital Building", ur: "کثیرالمنزلہ ہسپتال عمارت" },
    location: { en: "Burewala, Punjab", ur: "بورے والا، پنجاب" },
    desc: {
      en: "Three-storey healthcare facility with illuminated signage, pharmacy frontage and clean modern facade.",
      ur: "روشن سائن بورڈ، فارمیسی فرنٹ اور جدید فسیڈ کے ساتھ تین منزلہ ہیلتھ کیئر عمارت۔",
    },
  },
  {
    img: p2,
    cat: "Residential",
    title: { en: "Modern Family Residence", ur: "جدید فیملی رہائش گاہ" },
    location: { en: "Burewala, Punjab", ur: "بورے والا، پنجاب" },
    desc: {
      en: "A contemporary 10-marla home with open living spaces and elegant facade design.",
      ur: "کھلی رہائشی جگہوں اور خوبصورت اگلی ڈیزائن کے ساتھ جدید 10 مرلہ گھر۔",
    },
  },
  {
    img: p4,
    cat: "Residential",
    title: { en: "Luxury Villa with Pool", ur: "سوئمنگ پول کے ساتھ لگژری ولا" },
    location: { en: "Multan, Punjab", ur: "ملتان، پنجاب" },
    desc: {
      en: "1-kanal luxury villa featuring landscaped garden, terrace, and swimming pool.",
      ur: "لینڈ اسکیپ گارڈن، ٹیرس اور سوئمنگ پول کے ساتھ 1 کنال لگژری ولا۔",
    },
  },
  {
    img: p1,
    cat: "Residential",
    title: { en: "Premium Interior Design", ur: "پریمیم انٹیرئیر ڈیزائن" },
    location: { en: "Vehari, Punjab", ur: "وہاڑی، پنجاب" },
    desc: {
      en: "Warm, modern living-room interior with custom cabinetry and ambient lighting.",
      ur: "کسٹم کیبنٹری اور ماحول دوست روشنی کے ساتھ گرم، جدید لیونگ روم۔",
    },
  },
  {
    img: p5,
    cat: "Commercial",
    title: { en: "Boutique Retail Showroom", ur: "بوتیک ریٹیل شوروم" },
    location: { en: "Burewala, Punjab", ur: "بورے والا، پنجاب" },
    desc: {
      en: "Elegant showroom design with feature lighting and premium finishes.",
      ur: "خصوصی روشنی اور اعلیٰ فنشنگ کے ساتھ خوبصورت شوروم ڈیزائن۔",
    },
  },
  {
    img: p6,
    cat: "Commercial",
    title: { en: "Corporate Office Complex", ur: "کارپوریٹ آفس کمپلیکس" },
    location: { en: "Lahore, Punjab", ur: "لاہور، پنجاب" },
    desc: {
      en: "2D & 3D planning for a multi-storey corporate office with modern workspaces.",
      ur: "جدید ورک اسپیس کے ساتھ کثیرالمنزلہ کارپوریٹ آفس کی 2D اور 3D پلاننگ۔",
    },
  },
  {
    img: p2,
    cat: "Commercial",
    title: { en: "Contemporary Plaza Facade", ur: "جدید پلازہ کا اگلا رخ" },
    location: { en: "Sahiwal, Punjab", ur: "ساہیوال، پنجاب" },
    desc: {
      en: "Mixed-use commercial plaza with modern glass facade and retail frontage.",
      ur: "جدید شیشے کے فرنٹ اور ریٹیل جگہ کے ساتھ کمرشل پلازہ۔",
    },
  },
  {
    img: p4,
    cat: "Industrial",
    title: { en: "Manufacturing Warehouse", ur: "مینوفیکچرنگ ویئر ہاؤس" },
    location: { en: "Faisalabad, Punjab", ur: "فیصل آباد، پنجاب" },
    desc: {
      en: "Large-span steel warehouse designed for heavy-duty manufacturing operations.",
      ur: "بھاری مینوفیکچرنگ کے لیے ڈیزائن کردہ بڑا اسٹیل ویئر ہاؤس۔",
    },
  },
  {
    img: p6,
    cat: "Industrial",
    title: { en: "Cold Storage Facility", ur: "کولڈ اسٹوریج سہولت" },
    location: { en: "Burewala, Punjab", ur: "بورے والا، پنجاب" },
    desc: {
      en: "Insulated industrial cold storage unit engineered for agricultural produce.",
      ur: "زرعی پیداوار کے لیے انجینئرڈ انسولیٹڈ کولڈ اسٹوریج یونٹ۔",
    },
  },
  {
    img: p5,
    cat: "Industrial",
    title: { en: "Textile Processing Unit", ur: "ٹیکسٹائل پروسیسنگ یونٹ" },
    location: { en: "Multan, Punjab", ur: "ملتان، پنجاب" },
    desc: {
      en: "Structural design and construction for a modern textile processing facility.",
      ur: "جدید ٹیکسٹائل پروسیسنگ سہولت کے لیے اسٹرکچرل ڈیزائن اور تعمیر۔",
    },
  },
];

const filters: ("All" | Category)[] = ["All", "Residential", "Commercial", "Industrial"];

const filterLabelKey: Record<string, string> = {
  All: "projFilterAll",
  Residential: "projFilterResidential",
  Commercial: "projFilterCommercial",
  Industrial: "projFilterIndustrial",
};

export default function Projects() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<"All" | Category>("All");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.cat === active)),
    [active]
  );

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— Portfolio —</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("projectsTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{t("projectsSub")}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 reveal">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={
                  "px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 " +
                  (isActive
                    ? "bg-primary text-white border-primary shadow-elegant scale-105"
                    : "bg-white text-primary border-primary/20 hover:border-primary hover:bg-primary/5")
                }
              >
                {t(filterLabelKey[f])}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 reveal">
          {filtered.map((p, i) => {
            const title = p.title[lang];
            const loc = p.location[lang];
            const desc = p.desc[lang];
            const catLabel = t(filterLabelKey[p.cat]);
            const idx = projects.indexOf(p);
            return (
              <button
                key={`${p.cat}-${i}`}
                onClick={() => setOpen(idx)}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all text-left rtl:text-right animate-fade-in"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-accent text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-md">
                    {catLabel}
                  </span>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-black text-primary line-clamp-1">{title}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>{loc}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">—</p>
        )}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-elegant animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[open].img}
              alt={projects[open].title[lang]}
              className="w-full max-h-[65vh] object-cover"
            />
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold">
                {t(filterLabelKey[projects[open].cat])}
              </span>
              <h3 className="mt-1 text-2xl font-black text-primary">
                {projects[open].title[lang]}
              </h3>
              <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{projects[open].location[lang]}</span>
              </div>
              <p className="mt-3 text-muted-foreground">{projects[open].desc[lang]}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

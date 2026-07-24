import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ur";

type Dict = Record<string, string>;

const en: Dict = {
  brand: "Design Links",
  brandFull: "Design Links Construction & Property",
  tagline: "Designing Today, Building Tomorrow",
  heroSub: "Professional architecture, construction, interior & exterior design, and property consultancy in Burewala, Punjab, Pakistan.",
  getQuote: "Get Free Quote",
  freeConsult: "Free Consultation",
  navHome: "Home",
  navAbout: "About",
  navServices: "Services",
  navCalc: "Calculators",
  navProjects: "Projects",
  navTeam: "Team",
  navBlog: "Blog",
  navContact: "Contact",
  aboutTitle: "About Us",
  aboutLead: "Building excellence through innovation and integrity.",
  aboutBody: "Design Links Construction & Property is a professional architecture, construction, interior design, exterior design, and property consultancy company based in Burewala, Punjab, Pakistan. Our mission is to provide innovative, modern, functional, and high-quality architectural and construction solutions for residential, commercial, industrial, and institutional projects. We believe every successful project begins with careful planning, creative design, accurate engineering, and professional execution.",
  missionTitle: "Our Mission",
  missionBody: "To deliver high-quality architecture, construction, and property consultancy services with honesty, innovation, professionalism, and customer satisfaction.",
  visionTitle: "Our Vision",
  visionBody: "To become one of Pakistan's leading architecture and construction companies by providing world-class design solutions, modern technology, and outstanding customer service.",
  valuesTitle: "Our Core Values",
  ceoTitle: "Leadership",
  ceoName: "Mehar Naeem Manzoor",
  ceoPos: "Chief Executive Officer",
  ceoBody: "Mehar Naeem Manzoor is the Founder and Chief Executive Officer of Design Links Construction & Property. He leads the company with vision, experience, and dedication. His goal is to deliver innovative architectural solutions, quality construction services, and trusted property consultancy while maintaining the highest professional standards and customer satisfaction.",
  teamTitle: "Meet Our Team",
  teamSub: "Talented specialists behind every successful project.",
  servicesTitle: "Our Services",
  servicesSub: "Complete solutions from concept to construction.",
  calcTitle: "Construction Cost Calculators",
  calcSub: "Estimate materials & costs instantly with our smart tools.",
  projectsTitle: "Projects & Gallery",
  projectsSub: "A glimpse of our recent design and construction work.",
  projFilterAll: "All",
  projFilterResidential: "Residential",
  projFilterCommercial: "Commercial",
  projFilterIndustrial: "Industrial",
  testTitle: "What Our Clients Say",
  blogTitle: "From Our Blog",
  faqTitle: "Frequently Asked Questions",
  careersTitle: "Careers",
  careersBody: "Join a passionate team building the future of Pakistan's architecture. We're always looking for talented designers, architects, engineers, and drafters.",
  applyNow: "Apply Now",
  contactTitle: "Contact Us",
  contactSub: "Let's build something remarkable together.",
  address: "Near Tofha Sweet's, Canal Road, Burewala, Punjab, Pakistan",
  phone: "0300-0699626",
  whatsapp: "0306-8742044",
  email: "designlinksbrw@gmail.com",
  yourName: "Your Name",
  yourEmail: "Your Email",
  yourPhone: "Your Phone",
  yourMessage: "Your Message",
  send: "Send Message",
  sent: "Thank you! We'll get back to you soon.",
  calculate: "Calculate",
  reset: "Reset",
  result: "Result",
  length: "Length (ft)",
  width: "Width (ft)",
  height: "Height (ft)",
  thickness: "Thickness (in)",
  area: "Area (sq ft)",
  rights: "All rights reserved.",
  quickLinks: "Quick Links",
  followUs: "Follow Us",
  contactInfo: "Contact Info",
};

const ur: Dict = {
  brand: "ڈیزائن لنکس",
  brandFull: "ڈیزائن لنکس کنسٹرکشن اینڈ پراپرٹی",
  tagline: "آج ڈیزائن، کل تعمیر",
  heroSub: "بورے والا، پنجاب، پاکستان میں پیشہ ورانہ آرکیٹیکچر، تعمیرات، انٹیریئر اور ایکسٹیریئر ڈیزائن، اور پراپرٹی مشاورت۔",
  getQuote: "مفت تخمینہ حاصل کریں",
  freeConsult: "مفت مشاورت",
  navHome: "ہوم",
  navAbout: "ہمارے بارے میں",
  navServices: "خدمات",
  navCalc: "کیلکولیٹرز",
  navProjects: "پروجیکٹس",
  navTeam: "ٹیم",
  navBlog: "بلاگ",
  navContact: "رابطہ",
  aboutTitle: "ہمارے بارے میں",
  aboutLead: "جدت اور دیانت کے ذریعے بہترین تعمیرات۔",
  aboutBody: "ڈیزائن لنکس کنسٹرکشن اینڈ پراپرٹی بورے والا، پنجاب، پاکستان میں قائم ایک پیشہ ور آرکیٹیکچر، تعمیرات، انٹیریئر ڈیزائن، ایکسٹیریئر ڈیزائن، اور پراپرٹی کنسلٹنسی کمپنی ہے۔ ہمارا مشن رہائشی، تجارتی، صنعتی اور ادارہ جاتی منصوبوں کے لیے جدید، فعال اور اعلیٰ معیار کے حل فراہم کرنا ہے۔",
  missionTitle: "ہمارا مشن",
  missionBody: "ایمانداری، جدت، پیشہ ورانہ مہارت اور کسٹمر کی اطمینان کے ساتھ اعلیٰ معیار کی آرکیٹیکچر، تعمیرات اور پراپرٹی مشاورت کی خدمات فراہم کرنا۔",
  visionTitle: "ہمارا وژن",
  visionBody: "عالمی معیار کے ڈیزائن حل، جدید ٹیکنالوجی اور شاندار کسٹمر سروس فراہم کرکے پاکستان کی سرکردہ آرکیٹیکچر اور کنسٹرکشن کمپنیوں میں سے ایک بننا۔",
  valuesTitle: "ہماری بنیادی اقدار",
  ceoTitle: "قیادت",
  ceoName: "مہر نعیم منظور",
  ceoPos: "چیف ایگزیکٹو آفیسر",
  ceoBody: "مہر نعیم منظور ڈیزائن لنکس کنسٹرکشن اینڈ پراپرٹی کے بانی اور چیف ایگزیکٹو آفیسر ہیں۔ وہ کمپنی کی قیادت وژن، تجربے اور لگن سے کرتے ہیں اور اعلیٰ معیار برقرار رکھتے ہوئے جدید حل فراہم کرنے کے لیے پرعزم ہیں。",
  teamTitle: "ہماری ٹیم سے ملیں",
  teamSub: "ہر کامیاب پروجیکٹ کے پیچھے باصلاحیت ماہرین۔",
  servicesTitle: "ہماری خدمات",
  servicesSub: "تصور سے تعمیر تک مکمل حل۔",
  calcTitle: "کنسٹرکشن کاسٹ کیلکولیٹرز",
  calcSub: "ہمارے سمارٹ ٹولز سے فوری تخمینہ لگائیں۔",
  projectsTitle: "پروجیکٹس اور گیلری",
  projectsSub: "ہمارے حالیہ ڈیزائن اور تعمیراتی کاموں کی جھلک۔",
  testTitle: "ہمارے کلائنٹس کیا کہتے ہیں",
  blogTitle: "ہمارے بلاگ سے",
  faqTitle: "اکثر پوچھے گئے سوالات",
  careersTitle: "کیریئر",
  careersBody: "ہماری پرجوش ٹیم میں شامل ہوں جو پاکستان کے فن تعمیر کا مستقبل بنا رہی ہے۔ ہم ہمیشہ باصلاحیت ڈیزائنرز، آرکیٹیکٹس اور انجینئرز کی تلاش میں ہیں۔",
  applyNow: "درخواست دیں",
  contactTitle: "ہم سے رابطہ کریں",
  contactSub: "آئیں مل کر کچھ شاندار بنائیں۔",
  address: "طوفہ سویٹس کے قریب، کینال روڈ، بورے والا، پنجاب، پاکستان",
  phone: "0300-0699626",
  whatsapp: "0306-8742044",
  email: "designlinksbrw@gmail.com",
  yourName: "آپ کا نام",
  yourEmail: "آپ کا ای میل",
  yourPhone: "آپ کا فون",
  yourMessage: "آپ کا پیغام",
  send: "پیغام بھیجیں",
  sent: "شکریہ! ہم جلد آپ سے رابطہ کریں گے۔",
  calculate: "حساب لگائیں",
  reset: "دوبارہ",
  result: "نتیجہ",
  length: "لمبائی (فٹ)",
  width: "چوڑائی (فٹ)",
  height: "اونچائی (فٹ)",
  thickness: "موٹائی (انچ)",
  area: "رقبہ (مربع فٹ)",
  rights: "جملہ حقوق محفوظ ہیں۔",
  quickLinks: "فوری لنکس",
  followUs: "ہمیں فالو کریں",
  contactInfo: "رابطہ کی معلومات",
};

const dicts: Record<Lang, Dict> = { en, ur };

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: keyof typeof en) => string;
  dir: "ltr" | "rtl";
}>({ lang: "en", setLang: () => {}, t: (k) => en[k], dir: "ltr" });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "ur") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: keyof typeof en) => dicts[lang][k] ?? en[k];
  const dir = lang === "ur" ? "rtl" : "ltr";
  return <I18nContext.Provider value={{ lang, setLang, t, dir }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);

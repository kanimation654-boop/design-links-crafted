import { useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { name: "Muhammad Asif", role: "Homeowner, Burewala", text: "Design Links delivered our dream home with professionalism and beautiful design. Every detail was handled with care." },
  { name: "Fatima Zahra", role: "Investor, Multan", text: "Their 3D visualizations helped us make confident decisions before construction. Highly recommended." },
  { name: "Kashif Iqbal", role: "Builder, Vehari", text: "Accurate estimates, honest advice, and reliable execution. A true partner for construction projects." },
  { name: "Sadia Malik", role: "Interior Client", text: "The interior transformation was beyond our expectations. Modern, functional and elegant." },
];

export default function Testimonials() {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— Testimonials —</span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-black">{t("testTitle")}</h2>

        <div className="mt-14 relative">
          <Quote className="mx-auto h-12 w-12 text-accent/70" />
          <p key={i} className="mt-6 text-xl sm:text-2xl font-medium leading-relaxed animate-fade-in min-h-[7rem]">
            "{items[i].text}"
          </p>
          <div className="mt-6 flex justify-center gap-1">
            {[...Array(5)].map((_, s) => <Star key={s} className="h-5 w-5 fill-accent text-accent" />)}
          </div>
          <div className="mt-4 font-black text-lg">{items[i].name}</div>
          <div className="text-sm text-white/70">{items[i].role}</div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button onClick={() => setI((i - 1 + items.length) % items.length)} className="grid h-11 w-11 place-items-center rounded-full border border-white/30 hover:bg-white hover:text-primary transition">
              <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-accent" : "w-2 bg-white/40"}`} />
              ))}
            </div>
            <button onClick={() => setI((i + 1) % items.length)} className="grid h-11 w-11 place-items-center rounded-full border border-white/30 hover:bg-white hover:text-primary transition">
              <ChevronRight className="h-5 w-5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

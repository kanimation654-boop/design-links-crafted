import { useState } from "react";
import { useI18n } from "@/i18n";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What areas do you serve?", a: "We are based in Burewala, Punjab and serve clients across Pakistan for architecture, construction and property consultancy." },
  { q: "Do you offer 3D house designs?", a: "Yes, we specialize in modern 3D architectural visualization, interior and exterior renders." },
  { q: "Can you handle turnkey construction?", a: "Absolutely. We deliver complete turnkey construction — from grey structure to finishing and handover." },
  { q: "How can I get a cost estimate?", a: "Use our online calculators for quick estimates or contact us for a detailed project quotation and free consultation." },
  { q: "Do you provide construction supervision?", a: "Yes, our team offers professional on-site supervision to ensure quality, safety and timely delivery." },
  { q: "How do I start a project with you?", a: "Simply fill the contact form, WhatsApp us, or call. We offer a free initial consultation to discuss your needs." },
];

export default function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— FAQ —</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("faqTitle")}</h2>
        </div>
        <div className="mt-12 space-y-3 reveal">
          {faqs.map((f, i) => (
            <div key={i} className={`rounded-2xl border transition-all ${open === i ? "border-primary/30 bg-primary/5 shadow-card" : "border-border bg-white"}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left rtl:text-right">
                <span className="font-bold text-foreground pr-4 rtl:pr-0 rtl:pl-4">{f.q}</span>
                <Plus className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

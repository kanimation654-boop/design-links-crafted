import { useState } from "react";
import { useI18n } from "@/i18n";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.name.length > 100) return setErr("Please enter a valid name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setErr("Please enter a valid email.");
    if (!form.message.trim() || form.message.length > 1000) return setErr("Please enter your message.");
    setErr("");
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— Get in Touch —</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("contactTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{t("contactSub")}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 reveal">
            <InfoRow icon={MapPin} label="Address" value={t("address")} />
            <InfoRow icon={Phone} label="Phone" value={t("phone")} href={`tel:${t("phone")}`} />
            <InfoRow icon={MessageCircle} label="WhatsApp" value={t("whatsapp")} href={`https://wa.me/92${t("whatsapp").replace(/[^0-9]/g, "").slice(1)}`} />
            <InfoRow icon={Mail} label="Email" value={t("email")} href={`mailto:${t("email")}`} />

            <div className="mt-4 rounded-2xl overflow-hidden border border-border shadow-card">
              <iframe
                title="Design Links Office Location"
                src="https://www.google.com/maps?q=Burewala,Punjab,Pakistan&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl bg-white p-8 shadow-elegant border border-border reveal">
            <div className="space-y-4">
              <Field label={t("yourName")} value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label={t("yourEmail")} value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
              <Field label={t("yourPhone")} value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("yourMessage")}</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  maxLength={1000}
                  className="mt-1.5 w-full rounded-xl border border-border bg-muted/20 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              {err && <div className="text-sm text-red-600">{err}</div>}
              {sent ? (
                <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 text-green-700 px-4 py-3 animate-fade-in">
                  <CheckCircle2 className="h-5 w-5" /> {t("sent")}
                </div>
              ) : (
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform">
                  <Send className="h-4 w-4" /> {t("send")}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-bold text-foreground break-words">{value}</div>
      </div>
    </>
  );
  const base = "flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card border border-border";
  return href ? (
    <a href={href} className={`${base} hover:shadow-elegant hover:-translate-y-0.5 transition-all`}>{inner}</a>
  ) : (
    <div className={base}>{inner}</div>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={255}
        className="mt-1.5 w-full rounded-xl border border-border bg-muted/20 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

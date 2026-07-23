import { useI18n } from "@/i18n";
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useI18n();
  const links = [
    { href: "#about", key: "navAbout" },
    { href: "#services", key: "navServices" },
    { href: "#calc", key: "navCalc" },
    { href: "#projects", key: "navProjects" },
    { href: "#team", key: "navTeam" },
    { href: "#contact", key: "navContact" },
  ] as const;

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: `https://wa.me/92${t("whatsapp").replace(/[^0-9]/g, "").slice(1)}`, label: "WhatsApp" },
  ];

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent font-black">DL</div>
              <div>
                <div className="font-black">{t("brand")}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Construction & Property</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              {t("brandFull")} — {t("tagline")}.
            </p>
          </div>

          <div>
            <h4 className="font-black">{t("quickLinks")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 hover:text-accent transition-colors">{t(l.key)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black">{t("contactInfo")}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" /><span>{t("address")}</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-accent mt-0.5" />{t("phone")}</li>
              <li className="flex gap-3"><MessageCircle className="h-4 w-4 shrink-0 text-accent mt-0.5" />{t("whatsapp")}</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-accent mt-0.5" />{t("email")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black">{t("followUs")}</h4>
            <div className="mt-4 flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 hover:bg-gradient-accent transition-colors">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 text-xs text-white/60 space-y-1">
              <div>SEO: Architecture Company Pakistan</div>
              <div>Architect in Burewala · 3D House Design</div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {t("brandFull")}. {t("rights")}</div>
          <div>Designing Today, Building Tomorrow.</div>
        </div>
      </div>
    </footer>
  );
}

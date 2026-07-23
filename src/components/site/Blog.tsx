import { useI18n } from "@/i18n";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p6 from "@/assets/project6.jpg";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { img: p2, title: "Top 10 Modern House Design Trends in Pakistan", date: "March 2026", cat: "Architecture" },
  { img: p1, title: "Interior Design Ideas for Small Homes", date: "February 2026", cat: "Interior" },
  { img: p6, title: "How to Estimate Construction Cost Accurately", date: "January 2026", cat: "Guides" },
];

export default function Blog() {
  const { t } = useI18n();
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— Insights —</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("blogTitle")}</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3 reveal">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl bg-white overflow-hidden shadow-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent/10 text-accent font-bold px-2.5 py-1">{p.cat}</span>
                  <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                </div>
                <h3 className="mt-3 font-black text-primary group-hover:text-accent transition-colors">{p.title}</h3>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/i18n";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import CEO from "@/components/site/CEO";
import Services from "@/components/site/Services";
import Calculators from "@/components/site/Calculators";
import Projects from "@/components/site/Projects";
import Team from "@/components/site/Team";
import Testimonials from "@/components/site/Testimonials";
import Blog from "@/components/site/Blog";
import FAQ from "@/components/site/FAQ";
import Careers from "@/components/site/Careers";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFAB from "@/components/site/WhatsAppFAB";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Design Links Construction & Property — Architecture & Construction in Burewala, Pakistan" },
      { name: "description", content: "Premium architecture, construction, 2D/3D house design, interior & exterior design, and property consultancy in Burewala, Punjab, Pakistan. Designing Today, Building Tomorrow." },
      { name: "keywords", content: "Architecture Company Pakistan, Construction Company Pakistan, Architect in Burewala, House Design Pakistan, Interior Designer Pakistan, Exterior Designer Pakistan, Construction Cost Calculator, 2D House Plan, 3D House Design, Building Contractor, Property Consultancy, Modern House Design" },
      { property: "og:title", content: "Design Links Construction & Property" },
      { property: "og:description", content: "Designing Today, Building Tomorrow — Architecture & Construction in Burewala, Pakistan." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Design Links Construction & Property" },
      { name: "twitter:description", content: "Premium architecture and construction in Burewala, Pakistan." },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800;900&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Design Links Construction & Property",
        description: "Architecture, construction, interior & exterior design, and property consultancy.",
        address: { "@type": "PostalAddress", streetAddress: "Near Tofha Sweet's, Canal Road", addressLocality: "Burewala", addressRegion: "Punjab", addressCountry: "Pakistan" },
        telephone: "+92-300-0699626",
        email: "designlinksbrw@gmail.com",
        slogan: "Designing Today, Building Tomorrow",
      }),
    }],
  }),
  component: Home,
});

function Home() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  );
}

function Page() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CEO />
        <Services />
        <Calculators />
        <Projects />
        <Team />
        <Testimonials />
        <Blog />
        <FAQ />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

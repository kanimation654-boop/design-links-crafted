import { useI18n } from "@/i18n";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  const { t } = useI18n();
  const num = "92" + t("whatsapp").replace(/[^0-9]/g, "").slice(1);
  return (
    <a
      href={`https://wa.me/${num}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant animate-pulse-ring hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

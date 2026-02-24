import { siteConfig, newsletterContent } from "@/lib/data";
import NewsletterForm from "@/components/ui/NewsletterForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-narrow mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6 pb-6 border-b border-white/10">
          <div className="md:max-w-xs">
            <h3 className="font-semibold text-white text-sm mb-1">
              {newsletterContent.footerTitle}
            </h3>
            <p className="text-white/50 text-xs">
              {newsletterContent.footerDescription}
            </p>
          </div>
          <div className="md:w-[400px]">
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-300">
            &copy; {currentYear} {siteConfig.name}
          </p>
          <p className="text-gray-500 text-sm mt-1">
            IČO: 07306300
          </p>
        </div>
      </div>
    </footer>
  );
}

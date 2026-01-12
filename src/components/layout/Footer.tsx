import { siteConfig } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-narrow mx-auto px-4 md:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-300">
            © {currentYear} {siteConfig.name}
          </p>
          <p className="text-gray-500 text-sm mt-1">
            IČO: 07306300
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Metadata } from "next";
import OsobniWebContent from "./OsobniWebContent";

export const metadata: Metadata = {
  title: "Osobní web | Filip Oborník",
  description:
    "Profesionální web pro freelancera vytvořený kompletně pomocí vibe codingu. Důkaz, že i bez programování můžete mít web na úrovni.",
  openGraph: {
    title: "Osobní web | Filip Oborník",
    description:
      "Profesionální web pro freelancera vytvořený kompletně pomocí vibe codingu. Důkaz, že i bez programování můžete mít web na úrovni.",
  },
};

export default function OsobniWebProjectPage() {
  return <OsobniWebContent />;
}

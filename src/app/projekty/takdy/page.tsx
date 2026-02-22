import { Metadata } from "next";
import TakdyContent from "./TakdyContent";

export const metadata: Metadata = {
  title: "Takdy.cz | Filip Oborník",
  description:
    "Bezplatná aplikace pro snadné plánování společných setkání. Jako Doodle, ale jednodušší a bez registrace. Vytvořeno pomocí vibe codingu.",
  openGraph: {
    title: "Takdy.cz | Filip Oborník",
    description:
      "Bezplatná aplikace pro snadné plánování společných setkání. Jako Doodle, ale jednodušší a bez registrace. Vytvořeno pomocí vibe codingu.",
  },
};

export default function TakdyProjectPage() {
  return <TakdyContent />;
}

import { Metadata } from "next";
import WebinareContent from "./WebinareContent";

export const metadata: Metadata = {
  title: "Semináře a Workshopy | Filip Oborník",
  description:
    "Praktické workshopy a semináře o AI, vibe codingu a moderních technologiích. Od základů AI pro každého až po pokročilé techniky pro profesionální vývoj.",
  openGraph: {
    title: "Semináře a Workshopy | Filip Oborník",
    description:
      "Praktické workshopy a semináře o AI, vibe codingu a moderních technologiích. Od základů AI pro každého až po pokročilé techniky pro profesionální vývoj.",
  },
};

export default function SeminarePage() {
  return <WebinareContent />;
}

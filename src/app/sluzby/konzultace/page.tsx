import { Metadata } from "next";
import KonzultaceContent from "./KonzultaceContent";

export const metadata: Metadata = {
  title: "Konzultace | Filip Oborník",
  description:
    "Expertní AI a vibe coding konzultace na míru. Pomoc s návrhem produktů, výběrem tech stacku, AI strategií a řešením technických problémů.",
  openGraph: {
    title: "Konzultace | Filip Oborník",
    description:
      "Expertní AI a vibe coding konzultace na míru. Pomoc s návrhem produktů, výběrem tech stacku, AI strategií a řešením technických problémů.",
  },
};

export default function KonzultacePage() {
  return <KonzultaceContent />;
}

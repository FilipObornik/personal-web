import { Metadata } from "next";
import KonzultaceLandingContent from "./KonzultaceLandingContent";

export const metadata: Metadata = {
  title: "Konzultace & Vývoj | Filip Oborník",
  description:
    "Nezávislý technický poradce, který hájí vaše zájmy. Stavební dozor pro váš software projekt. Konzultace od 1 250 Kč/hod.",
  openGraph: {
    title: "Konzultace & Vývoj | Filip Oborník",
    description:
      "Nezávislý technický poradce, který hájí vaše zájmy. Stavební dozor pro váš software projekt.",
  },
};

export default function KonzultaceLandingPage() {
  return <KonzultaceLandingContent />;
}

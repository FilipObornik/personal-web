import { Metadata } from "next";
import PartnerskeProjektyContent from "./PartnerskeProjektyContent";

export const metadata: Metadata = {
  title: "Software projekty | Filip Oborník",
  description:
    "Realizace softwarových projektů s ověřenými partnery. Webové prezentace, mobilní aplikace, AI integrace a firemní systémy na míru.",
  openGraph: {
    title: "Software projekty | Filip Oborník",
    description:
      "Realizace softwarových projektů s ověřenými partnery. Webové prezentace, mobilní aplikace, AI integrace a firemní systémy na míru.",
  },
};

export default function PartnerskeProjektyPage() {
  return <PartnerskeProjektyContent />;
}

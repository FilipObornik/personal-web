import { Metadata } from "next";
import AiImplementaceContent from "./AiImplementaceContent";

export const metadata: Metadata = {
  title: "AI Implementace | Filip Oborník",
  description:
    "Návrh a vývoj AI řešení na míru. Chatboti, automatizace procesů, integrace AI do aplikací a custom řešení pro váš business.",
  openGraph: {
    title: "AI Implementace | Filip Oborník",
    description:
      "Návrh a vývoj AI řešení na míru. Chatboti, automatizace procesů, integrace AI do aplikací a custom řešení pro váš business.",
  },
};

export default function AIImplementacePage() {
  return <AiImplementaceContent />;
}

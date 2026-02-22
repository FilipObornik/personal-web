import { Metadata } from "next";
import TimeTrackingContent from "./TimeTrackingContent";

export const metadata: Metadata = {
  title: "AI Time Tracking | Filip Oborník",
  description:
    "Chytrý nástroj pro sledování času s AI funkcemi pro automatickou kategorizaci. Vibe coded webová aplikace.",
  openGraph: {
    title: "AI Time Tracking | Filip Oborník",
    description:
      "Chytrý nástroj pro sledování času s AI funkcemi pro automatickou kategorizaci. Vibe coded webová aplikace.",
  },
};

export default function TimeTrackingProjectPage() {
  return <TimeTrackingContent />;
}

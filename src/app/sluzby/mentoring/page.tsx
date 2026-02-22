import { Metadata } from "next";
import MentoringContent from "./MentoringContent";

export const metadata: Metadata = {
  title: "Mentoring | Filip Oborník",
  description:
    "Individuální i skupinový mentoring v oblasti AI, vibe codingu a profesionálního vývoje. Dlouhodobá spolupráce přizpůsobená vašim cílům a tempu.",
  openGraph: {
    title: "Mentoring | Filip Oborník",
    description:
      "Individuální i skupinový mentoring v oblasti AI, vibe codingu a profesionálního vývoje. Dlouhodobá spolupráce přizpůsobená vašim cílům a tempu.",
  },
};

export default function MentoringPage() {
  return <MentoringContent />;
}

import { Metadata } from "next";
import MentoringContent from "./MentoringContent";

export const metadata: Metadata = {
  title: "Mentoring AI | Filip Oborník",
  description:
    "Individuální AI mentoring — ne kurz, ale průvodce. Pravidelné sessions přizpůsobené vašim konkrétním výzvám. Cena individuálně.",
  openGraph: {
    title: "Mentoring AI | Filip Oborník",
    description:
      "Individuální AI mentoring — ne kurz, ale průvodce. Pravidelné sessions přizpůsobené vašim konkrétním výzvám.",
  },
};

export default function MentoringPage() {
  return <MentoringContent />;
}

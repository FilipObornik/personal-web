import { Metadata } from "next";
import ProjektyContent from "./ProjektyContent";

export const metadata: Metadata = {
  title: "Portfolio | Filip Oborník",
  description:
    "Projekty, spolupráce a ukázky vibe coded aplikací. Podívejte se na moje portfolio webových a mobilních projektů.",
  openGraph: {
    title: "Portfolio | Filip Oborník",
    description:
      "Projekty, spolupráce a ukázky vibe coded aplikací. Podívejte se na moje portfolio webových a mobilních projektů.",
  },
};

export default function ProjectsPage() {
  return <ProjektyContent />;
}

import { Metadata } from "next";
import VibeCodingHradecContent from "./VibeCodingHradecContent";

export const metadata: Metadata = {
  title: "Vibe Coding Workshop Hradec | Filip Oborník",
  description:
    "Praktický workshop vibe codingu v Hradci Králové. Naučte se tvořit webové aplikace pomocí AI bez znalosti programování.",
  openGraph: {
    title: "Vibe Coding Workshop Hradec | Filip Oborník",
    description:
      "Praktický workshop vibe codingu v Hradci Králové. Naučte se tvořit webové aplikace pomocí AI bez znalosti programování.",
  },
};

export default function WorkshopHradecPage() {
  return <VibeCodingHradecContent />;
}

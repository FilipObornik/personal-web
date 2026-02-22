import { Metadata } from "next";
import TymbeContent from "./TymbeContent";

export const metadata: Metadata = {
  title: "Tymbe | Filip Oborník",
  description:
    "Mobilní aplikace pro flexibilní brigády. Flutter projekt s vedením týmu a produktovou spoluprací.",
  openGraph: {
    title: "Tymbe | Filip Oborník",
    description:
      "Mobilní aplikace pro flexibilní brigády. Flutter projekt s vedením týmu a produktovou spoluprací.",
  },
};

export default function TymbeProjectPage() {
  return <TymbeContent />;
}

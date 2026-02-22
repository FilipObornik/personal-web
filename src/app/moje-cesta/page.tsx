import { Metadata } from "next";
import MojeCestaContent from "./MojeCestaContent";

export const metadata: Metadata = {
  title: "Moje cesta | Filip Oborník",
  description:
    "Profesní cesta Filipa Oborníka - mobilní vývojář, software analytik a AI konzultant. Zkušenosti, vzdělání a kariérní historie.",
  openGraph: {
    title: "Moje cesta | Filip Oborník",
    description:
      "Profesní cesta Filipa Oborníka - mobilní vývojář, software analytik a AI konzultant. Zkušenosti, vzdělání a kariérní historie.",
  },
};

export default function MojeCestaPage() {
  return <MojeCestaContent />;
}

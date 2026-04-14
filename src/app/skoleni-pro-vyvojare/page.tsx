import { Metadata } from "next";
import SkoleniContent from "./SkoleniContent";

export const metadata: Metadata = {
  title: "Školení AI pro vývojáře | Filip Oborník",
  description:
    "Praktické školení pro vývojářské týmy. Žádné slidy o budoucnosti — reálné ukázky toho, co funguje dnes. Od 20 000 Kč.",
  openGraph: {
    title: "Školení AI pro vývojáře | Filip Oborník",
    description:
      "Praktické školení pro vývojářské týmy. Žádné slidy o budoucnosti — reálné ukázky toho, co funguje dnes.",
  },
};

export default function SkoleniPage() {
  return <SkoleniContent />;
}

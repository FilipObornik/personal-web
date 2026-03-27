import { Metadata } from "next";
import VoteClient from "./VoteClient";

export const metadata: Metadata = {
  title: "Workshop Vote | Filip Oborník",
  description: "Hlasování na workshopu",
};

export default function VotePage() {
  return <VoteClient />;
}

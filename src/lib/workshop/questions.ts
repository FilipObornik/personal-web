export interface WorkshopQuestion {
  id: string;
  text: string;
  options: string[];
}

export const workshopQuestions: WorkshopQuestion[] = [
  {
    id: "q1",
    text: "Jak často využíváte AI nástroje při vývoji?",
    options: ["Denně", "Několikrát týdně", "Občas", "Vůbec"],
  },
  {
    id: "q2",
    text: "Jaké typy nástrojů používáte?",
    options: [
      "Chatovací asistenty (ChatGPT, Claude, Gemini)",
      "Pokročilejší coding asistenty (Cursor, Antigravity)",
      "Autonomnější agenti (Claude Code, Codex)",
      "Zatím nic",
    ],
  },
  {
    id: "q3",
    text: "Jaký je váš současný workflow s AI při programování?",
    options: [
      "Nepoužívám AI vůbec",
      "Beru AI jen jako konzultanta na dotazy",
      "Používám asistenty na drobné úpravy",
      "Nechávám AI udělat větší část implementace",
      "Snažím se o co nejvíc automatizovaný proces od návrhu po testy",
    ],
  },
  {
    id: "q4",
    text: "Jak vidíte budoucnost AI ve vývoji?",
    options: [
      "Spíš skepticky, moc to nepomůže",
      "Jako chytré našeptávání pro vývojáře",
      "Jako velmi schopného asistenta, který dokáže řešit konkrétní úkoly",
      "Jako plně autonomní vývoj, který zvládne většinu práce sám",
    ],
  },
];

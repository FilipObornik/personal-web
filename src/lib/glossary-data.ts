import {
  Brain,
  MessageSquare,
  Wrench,
  Bot,
  Code2,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

// ============================================
// TYPES
// ============================================

export type GlossaryCategory =
  | "zaklady"
  | "prompting"
  | "nastroje"
  | "agenti"
  | "vibe-coding"
  | "business";

export interface GlossaryCategoryInfo {
  id: GlossaryCategory;
  label: string;
  icon: LucideIcon;
}

export interface YouTubeVideo {
  id: string;
  title: string;
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  termEn?: string;
  shortDefinition: string;
  fullDescription: string;
  category: GlossaryCategory;
  relatedTermSlugs: string[];
  youtubeVideos: YouTubeVideo[];
  relatedServiceSlugs: string[];
  ctaStyle: "subtle" | "prominent";
  quizDistractors: string[];
}

// ============================================
// CATEGORIES
// ============================================

export const glossaryCategories: GlossaryCategoryInfo[] = [
  { id: "zaklady", label: "Základy AI", icon: Brain },
  { id: "prompting", label: "Prompt Engineering", icon: MessageSquare },
  { id: "nastroje", label: "AI Nástroje", icon: Wrench },
  { id: "agenti", label: "AI Agenti", icon: Bot },
  { id: "vibe-coding", label: "Vibe Coding", icon: Code2 },
  { id: "business", label: "Byznys & Strategie", icon: TrendingUp },
];

// ============================================
// TERMS
// ============================================

export const glossaryTerms: GlossaryTerm[] = [
  // ---- Základy AI ----
  {
    slug: "umela-inteligence",
    term: "Umělá inteligence",
    termEn: "Artificial Intelligence (AI)",
    shortDefinition:
      "Umělá inteligence je obor informatiky zabývající se vytvářením systémů, které dokáží vykonávat úkoly běžně vyžadující lidskou inteligenci, jako je rozpoznávání řeči, rozhodování nebo překlad jazyků.",
    fullDescription:
      "Umělá inteligence (AI) je široký obor informatiky, jehož cílem je vytvářet stroje a software schopné simulovat lidské myšlení a učení. Zahrnuje celou řadu přístupů \u2013 od jednoduchých pravidlových systémů až po sofistikované neuronové sítě, které se dokáží učit z dat.\n\nV praxi se dnes nejčastěji setkáváme s tzv. úzkou umělou inteligencí (narrow AI), která exceluje v jednom konkrétním úkolu \u2013 například v generování textu, rozpoznávání obrázků nebo doporučování obsahu. Obecná umělá inteligence (AGI), která by zvládala libovolný intelektuální úkol jako člověk, zůstává zatím předmětem výzkumu.\n\nPro firmy a jednotlivce je důležité pochopit, že AI není magie, ale nástroj. Správně nasazená umělá inteligence dokáže výrazně zefektivnit práci, automatizovat rutinní úkoly a odhalit vzorce v datech, které by člověk přehlédl.",
    category: "zaklady",
    relatedTermSlugs: ["neuronova-sit", "strojove-uceni", "llm"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "konzultace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Typ počítačového hardwaru navrženého speciálně pro hraní her a 3D grafiku.",
      "Programovací jazyk vyvinutý firmou Google pro tvorbu webových stránek.",
      "Metoda šifrování dat používaná k zabezpečení internetové komunikace.",
    ],
  },
  {
    slug: "neuronova-sit",
    term: "Neuronová síť",
    termEn: "Neural Network",
    shortDefinition:
      "Neuronová síť je matematický model inspirovaný strukturou lidského mozku, který se skládá z propojených vrstev umělých neuronů a dokáže se učit rozpoznávat vzorce v datech.",
    fullDescription:
      "Neuronové sítě jsou základním stavebním kamenem moderní umělé inteligence. Jejich architektura je volně inspirována biologickými neurony v lidském mozku \u2013 skládají se z vrstev vzájemně propojených uzlů (neuronů), které si předávají a transformují informace.\n\nPrincip fungování je překvapivě jednoduchý: data vstupují do vstupní vrstvy, procházejí jednou nebo více skrytými vrstvami, kde se násobí váhami a transformují aktivačními funkcemi, a výsledek se objeví na výstupní vrstvě. Během trénování síť upravuje své váhy tak, aby minimalizovala chybu mezi předpovězeným a skutečným výsledkem.\n\nDnes existují specializované typy neuronových sítí \u2013 konvoluční sítě pro zpracování obrazu, rekurentní sítě pro sekvenční data a transformery, které stojí za velkými jazykovými modely jako ChatGPT nebo Claude. Právě transformerová architektura přinesla průlom v porozumění a generování přirozeného jazyka.",
    category: "zaklady",
    relatedTermSlugs: ["umela-inteligence", "strojove-uceni", "llm"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Fyzická síť propojující servery a počítače v datových centrech po celém světě.",
      "Softwarový nástroj pro vizualizaci a kreslení diagramů firemních procesů.",
      "Typ bezdrátového připojení používaný pro komunikaci mezi chytrými zařízeními v domácnosti.",
    ],
  },
  {
    slug: "llm",
    term: "Velký jazykový model (LLM)",
    termEn: "Large Language Model",
    shortDefinition:
      "Velký jazykový model (LLM) je typ neuronové sítě natrénované na obrovském množství textu, která dokáže generovat, překládat a analyzovat přirozený jazyk s pozoruhodnou přesností.",
    fullDescription:
      "Velké jazykové modely představují jednu z nejvýznamnějších inovací v oblasti AI posledních let. Jedná se o neuronové sítě s miliardami parametrů, natrénované na rozsáhlých textových datech z internetu, knih a dalších zdrojů. Díky tomu rozumí struktuře jazyka a dokáží generovat koherentní a kontextově relevantní text.\n\nLLM fungují na principu predikce dalšího tokenu \u2013 na základě dosavadního kontextu odhadují, jaké slovo (nebo jeho část) by mělo následovat. Přestože je tento princip jednoduchý, v kombinaci s obrovským množstvím tréninkových dat a parametrů vznikají modely schopné plnit složité úkoly: psaní článků, programování, analýza dokumentů nebo kreativní brainstorming.\n\nMezi nejznámější LLM patří GPT-4 od OpenAI (pohání ChatGPT), Claude od Anthropic nebo Gemini od Google. Každý model má své silné stránky a je důležité vybrat ten správný pro konkrétní potřebu. Při práci s LLM je klíčové umět správně formulovat prompty a chápat jejich omezení, jako jsou halucinace nebo zastaralé znalosti.",
    category: "zaklady",
    relatedTermSlugs: [
      "neuronova-sit",
      "token",
      "chatgpt",
      "claude",
      "halucinace",
    ],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "konzultace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Databázový systém pro ukládání a vyhledávání velkých objemů strukturovaných firemních dat.",
      "Cloudová služba pro streamování videa ve vysokém rozlišení.",
      "Fyzický čip navržený speciálně pro šifrování hesel a biometrických údajů.",
    ],
  },
  {
    slug: "strojove-uceni",
    term: "Strojové učení",
    termEn: "Machine Learning",
    shortDefinition:
      "Strojové učení je odvětví umělé inteligence, ve kterém se algoritmy učí z dat a zlepšují svůj výkon bez toho, aby byly explicitně naprogramovány pro každý konkrétní úkol.",
    fullDescription:
      "Strojové učení je základní disciplína, na které stojí většina moderních AI systémů. Na rozdíl od tradičního programování, kde vývojář definuje přesná pravidla, se systémy strojového učení učí vzorce přímo z dat. Algoritmus dostane tréninková data, najde v nich zákonitosti a vytvoří model, který dokáže předpovídat výsledky pro nová, dosud neviděná data.\n\nExistují tři hlavní přístupy: učení s učitelem (supervised learning), kde model trénuje na označených datech; učení bez učitele (unsupervised learning), kde model hledá skryté vzorce v neoznačených datech; a posilované učení (reinforcement learning), kde se model učí metodou pokus-omyl na základě odměn a trestů.\n\nV praxi strojové učení pohání doporučovací systémy (Netflix, Spotify), detekci podvodů v bankách, prediktivní údržbu strojů nebo personalizaci reklam. Pro firmy představuje příležitost, jak z existujících dat vytěžit cenné informace a automatizovat rozhodovací procesy.",
    category: "zaklady",
    relatedTermSlugs: [
      "umela-inteligence",
      "neuronova-sit",
      "fine-tuning",
    ],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Proces, při kterém se roboti učí fyzicky manipulovat s předměty v továrnách.",
      "Metoda výuky programování, kde studenti píší kód bez použití počítače.",
      "Typ antivirového softwaru, který se automaticky aktualizuje z internetu.",
    ],
  },
  {
    slug: "halucinace",
    term: "Halucinace AI",
    termEn: "AI Hallucination",
    shortDefinition:
      "Halucinace AI je jev, kdy jazykový model sebevědomě generuje nepravdivé, vymyšlené nebo zavádějící informace, které vypadají věrohodně, ale nemají oporu v realitě.",
    fullDescription:
      "Halucinace jsou jedním z nejdůležitějších omezení současných velkých jazykových modelů. Protože LLM fungují na principu statistické predikce dalšího slova, mohou generovat text, který zní přesvědčivě, ale obsahuje smyšlené fakty, neexistující citace, vymyšlené události nebo chybné závěry.\n\nHalucinace vznikají z několika důvodů: model se snaží vyplnit mezery ve svých znalostech, tréninkový dataset obsahoval chybné informace, nebo je prompt formulovaný tak, že model tlačí k odpovědi, i když správná odpověď není k dispozici. Zvláště nebezpečné jsou halucinace v odborných oblastech \u2013 právu, medicíně nebo financích.\n\nPro minimalizaci halucinací je důležité ověřovat výstupy AI z nezávislých zdrojů, používat techniky jako RAG (Retrieval-Augmented Generation), které modelu poskytují aktuální a relevantní data, a naučit se rozpoznávat situace, kde je model méně spolehlivý. Kvalitní prompt engineering také výrazně snižuje riziko halucinací.",
    category: "zaklady",
    relatedTermSlugs: ["llm", "rag", "prompt"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "konzultace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Vizuální efekt vznikající při generování obrázků ve špatném rozlišení.",
      "Úmyslné vkládání skrytých zpráv do AI-generovaného obsahu výrobcem modelu.",
      "Chyba v programovém kódu, která způsobuje pád celého AI systému.",
    ],
  },

  // ---- Prompt Engineering ----
  {
    slug: "prompt",
    term: "Prompt",
    shortDefinition:
      "Prompt je textový pokyn nebo instrukce, kterou uživatel zadává AI modelu, aby získal požadovanou odpověď. Kvalita promptu přímo ovlivňuje kvalitu výstupu.",
    fullDescription:
      `Prompt je vstupní text, který říká AI modelu, co má udělat. Může to být jednoduchá otázka, složitá instrukce s příklady, nebo strukturovaný požadavek s definovaným formátem výstupu. Umění psaní efektivních promptů se nazývá prompt engineering a je to jedna z nejcennějších dovedností při práci s AI.\n\nDobrý prompt je specifický, jednoznačný a poskytuje dostatek kontextu. Místo vágního „napiš mi článek" je mnohem efektivnější zadat: „Napiš článek o 500 slovech o výhodách AI v českém maloobchodě, zaměřený na majitele malých prodejen, v profesionálním ale přístupném tónu." Čím přesněji definujete, co chcete, tím lepší výsledek dostanete.\n\nMezi pokročilé techniky promptingu patří few-shot prompting (uvedení příkladů), chain-of-thought (vedení modelu k postupnému uvažování) nebo systémové prompty (nastavení role a pravidel). Zvládnutí těchto technik může dramaticky zvýšit produktivitu při práci s jakýmkoliv AI nástrojem.`,
    category: "prompting",
    relatedTermSlugs: [
      "systemovy-prompt",
      "few-shot-prompting",
      "kontext",
      "token",
    ],
    youtubeVideos: [],
    relatedServiceSlugs: [
      "webinare-a-workshopy",
      "konzultace",
      "mentoring",
    ],
    ctaStyle: "prominent",
    quizDistractors: [
      "Interní databáze, ze které AI model čerpá všechny své odpovědi.",
      "Grafické uživatelské rozhraní pro ovládání AI modelu pomocí tlačítek.",
      "Speciální programovací jazyk vyvinutý pro komunikaci s umělou inteligencí.",
    ],
  },
  {
    slug: "kontext",
    term: "Kontextové okno",
    termEn: "Context Window",
    shortDefinition:
      "Kontextové okno je maximální množství textu (měřené v tokenech), které AI model dokáže najednou zpracovat \u2013 zahrnuje jak váš prompt, tak odpověď modelu.",
    fullDescription:
      `Kontextové okno definuje „paměť" AI modelu v rámci jedné konverzace. Představte si ho jako pracovní plochu stolu \u2013 čím je větší, tím více dokumentů na něj najednou položíte a model s nimi může pracovat. Měří se v tokenech a u moderních modelů dosahuje stovek tisíc tokenů.\n\nVelikost kontextového okna má přímý dopad na to, co s modelem dokážete. S větším oknem můžete analyzovat rozsáhlé dokumenty, vést dlouhé konverzace bez ztráty kontextu nebo zpracovávat složité úkoly vyžadující velké množství vstupních informací. Například Claude nabízí kontextové okno až 200 000 tokenů, což odpovídá přibližně 150 000 slovům.\n\nPři práci s AI je dobré mít na paměti omezení kontextového okna. Pokud konverzace přesáhne jeho kapacitu, model začne „zapomínat" starší části rozhovoru. Proto je důležité strukturovat prompty efektivně a v dlouhých konverzacích průběžně shrnovat klíčové informace.`,
    category: "prompting",
    relatedTermSlugs: ["token", "prompt", "llm"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Velikost obrazovky potřebná pro zobrazení odpovědi AI modelu.",
      "Časový limit, po kterém AI model automaticky ukončí generování odpovědi.",
      "Počet uživatelů, kteří mohou současně komunikovat s jedním AI modelem.",
    ],
  },
  {
    slug: "token",
    term: "Token",
    shortDefinition:
      "Token je základní jednotka textu, kterou AI model zpracovává \u2013 může to být celé slovo, část slova nebo interpunkční znaménko. Jeden token odpovídá přibližně 3\u20134 znakům v češtině.",
    fullDescription:
      `Tokeny jsou základní stavební jednotky, se kterými pracují velké jazykové modely. Před zpracováním se vstupní text rozdělí na tokeny pomocí procesu zvaného tokenizace. V angličtině je jeden token přibližně jedno slovo nebo jeho část (například slovo „understanding" se rozloží na „under" + „standing"). V češtině, kvůli diakritice a delším slovům, je poměr odlišný \u2013 jeden token odpovídá zhruba 3\u20134 znakům.\n\nTokeny jsou důležité ze dvou praktických důvodů. Za prvé určují kapacitu kontextového okna \u2013 model s kontextem 128 000 tokenů dokáže najednou zpracovat přibližně 100 000 slov anglického textu. Za druhé se podle počtu tokenů často účtuje cena za používání API \u2013 platíte za vstupní i výstupní tokeny.\n\nPři optimalizaci nákladů a efektivity práce s AI je užitečné rozumět tokenizaci. Efektivnější prompty (méně tokenů na vstupu) znamenají rychlejší odpovědi a nižší náklady, aniž by se snížila kvalita výstupu.`,
    category: "prompting",
    relatedTermSlugs: ["kontext", "llm", "api"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Digitální měna používaná pro placení za předplatné AI služeb.",
      "Bezpečnostní klíč pro přihlašování do AI aplikací pomocí dvoufázového ověření.",
      "Malý program, který rozšiřuje funkce AI modelu o nové schopnosti.",
    ],
  },
  {
    slug: "systemovy-prompt",
    term: "Systémový prompt",
    termEn: "System Prompt",
    shortDefinition:
      "Systémový prompt je skrytá instrukce, která nastavuje chování, roli a pravidla AI modelu ještě předtím, než uživatel zahájí konverzaci.",
    fullDescription:
      `Systémový prompt je speciální typ instrukce, která se zadává AI modelu na pozadí a definuje jeho „osobnost", pravidla a omezení pro celou konverzaci. Na rozdíl od běžného uživatelského promptu ho koncový uživatel obvykle nevidí \u2013 nastavuje ho vývojář nebo správce AI aplikace.\n\nSystémový prompt může obsahovat pokyny jako: „Jsi odborný asistent pro české pracovní právo. Odpovídej vždy v češtině, uváděj relevantní paragrafy zákoníku práce a upozorni uživatele, že tvé odpovědi nejsou právní poradenství." Tímto způsobem lze AI přizpůsobit pro konkrétní firemní potřeby.\n\nSprávně navržený systémový prompt je klíčem k úspěšnému nasazení AI v byznysu. Definuje hranice, konzistentní tón komunikace a odborné zaměření, čímž zajišťuje, že AI asistent odpovídá relevantně a v souladu se značkou firmy. Je to jedna z prvních věcí, které řešíme při AI implementaci pro klienty.`,
    category: "prompting",
    relatedTermSlugs: ["prompt", "few-shot-prompting", "llm"],
    youtubeVideos: [],
    relatedServiceSlugs: ["konzultace", "ai-implementace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Chybová hláška, kterou AI zobrazí, když nerozumí zadanému dotazu.",
      "Operační systém speciálně navržený pro běh AI modelů na serverech.",
      "Automaticky generovaný souhrn konverzace odesílaný administrátorovi.",
    ],
  },
  {
    slug: "few-shot-prompting",
    term: "Few-shot prompting",
    shortDefinition:
      "Few-shot prompting je technika, při které do promptu zahrnete několik příkladů požadovaného vstupu a výstupu, čímž AI modelu ukážete, jak má úkol zpracovat.",
    fullDescription:
      `Few-shot prompting je jedna z nejúčinnějších technik prompt engineeringu. Spočívá v tom, že modelu poskytnete několik ukázkových párů vstup-výstup, které demonstrují požadovaný formát a styl odpovědi. Model pak tento vzor aplikuje na nový, dosud neviděný vstup.\n\nNapříklad pokud chcete, aby model klasifikoval zákaznické recenze jako pozitivní nebo negativní, místo složitého vysvětlování pravidel mu jednoduše ukážete 3\u20135 příkladů: „Recenze: Skvělý produkt, doporučuji \u2192 Pozitivní" a „Recenze: Nefunguje, peníze vyhozené \u2192 Negativní". Model pochopí vzorec a správně klasifikuje další recenze.\n\nTato technika je zvláště cenná při práci se strukturovanými výstupy, specifickým tónem komunikace nebo doménovým odborným jazykem. Výhodou je, že nevyžaduje žádné technické znalosti \u2013 stačí umět vybrat reprezentativní příklady. Na workshopech ji učíme jako jednu z prvních pokročilých technik, protože okamžitě přináší viditelné zlepšení výsledků.`,
    category: "prompting",
    relatedTermSlugs: ["prompt", "systemovy-prompt", "kontext"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "mentoring"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Metoda, při které AI model trénujete na malém množství vlastních firemních dat.",
      "Rychlá výměna krátkých zpráv mezi uživatelem a AI v reálném čase.",
      "Způsob ověřování, zda AI model odpovídá správně, pomocí testovacích otázek.",
    ],
  },

  // ---- AI Nástroje ----
  {
    slug: "chatgpt",
    term: "ChatGPT",
    shortDefinition:
      "ChatGPT je konverzační AI nástroj od společnosti OpenAI, který využívá velké jazykové modely řady GPT pro generování textu, odpovídání na otázky, psaní kódu a řadu dalších úkolů.",
    fullDescription:
      "ChatGPT od OpenAI je pravděpodobně nejznámější AI nástroj na světě, který od svého spuštění v listopadu 2022 zpopularizoval umělou inteligenci mezi širokou veřejností. Využívá modely řady GPT (aktuálně GPT-4o a novější) a nabízí konverzační rozhraní, ve kterém můžete klást otázky, zadávat úkoly nebo vést dialog na libovolné téma.\n\nChatGPT je výjimečně všestranný \u2013 pomůže vám s psaním textů, analýzou dat, programováním, překladem, brainstormingem i vzděláváním. V placené verzi (Plus/Pro) nabízí přístup k nejnovějším modelům, generování obrázků přes DALL-E, pokročilou analýzu dat a možnost procházení internetu pro aktuální informace.\n\nPro efektivní využití ChatGPT je klíčové zvládnout prompt engineering \u2013 umět jasně formulovat požadavky a poskytovat dostatek kontextu. Na workshopech ukazujeme, jak z ChatGPT vytěžit maximum pro konkrétní firemní potřeby, od zákaznického servisu po tvorbu marketingového obsahu.",
    category: "nastroje",
    relatedTermSlugs: ["llm", "claude", "prompt", "gemini"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "konzultace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Sociální síť pro sdílení konverzací a diskusí o technologiích.",
      "Open-source operační systém navržený pro provoz na chytrých telefonech.",
      "Online platforma pro videochat a videokonference s AI překladem v reálném čase.",
    ],
  },
  {
    slug: "claude",
    term: "Claude",
    shortDefinition:
      "Claude je AI asistent vyvinutý společností Anthropic, známý svou přesností, bezpečností a schopností pracovat s velmi dlouhými texty díky rozsáhlému kontextovému oknu.",
    fullDescription:
      "Claude je pokročilý AI asistent od společnosti Anthropic, která klade důraz na bezpečnost a spolehlivost AI. Model vyniká v analytickém myšlení, práci s dlouhými dokumenty a dodržování složitých instrukcí. Díky kontextovému oknu až 200 000 tokenů dokáže zpracovat celé knihy nebo rozsáhlé databáze dokumentů najednou.\n\nClaude je zvláště silný v úkolech vyžadujících přesnost a nuanci \u2013 právní analýza, odborné psaní, programování nebo zpracování strukturovaných dat. Jeho odpovědi bývají dobře strukturované a model je upřímnější ohledně svých omezení než některé konkurenční nástroje.\n\nPro pokročilé uživatele nabízí Anthropic také Claude Code pro práci s kódem přímo v terminálu a API pro integraci do vlastních aplikací. Claude je skvělou volbou pro firmy, které potřebují spolehlivého AI asistenta pro práci s citlivými nebo odbornými daty.",
    category: "nastroje",
    relatedTermSlugs: ["llm", "chatgpt", "kontext", "claude-code"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "konzultace", "mentoring"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Cloudová platforma pro ukládání a sdílení souborů mezi týmy.",
      "Automatický překladač webových stránek integrovaný do prohlížeče Chrome.",
      "Programovací framework pro tvorbu mobilních aplikací s AI funkcemi.",
    ],
  },
  {
    slug: "gemini",
    term: "Gemini",
    shortDefinition:
      "Gemini je multimodální AI model od Google, který dokáže zpracovávat a generovat text, obrázky, zvuk i video a je integrovaný do ekosystému Google služeb.",
    fullDescription:
      "Gemini je rodina AI modelů vyvinutých společností Google DeepMind. Klíčovou předností Gemini je nativní multimodalita \u2013 model byl od začátku navržen pro práci s různými typy dat: textem, obrázky, zvukem a videem. To mu umožňuje plnit úkoly, které vyžadují porozumění více formátům najednou.\n\nGemini je hluboce integrovaný do ekosystému Google \u2013 najdete ho v Google Workspace (Dokumenty, Tabulky, Gmail), ve vyhledávání i jako samostatného chatbota. Pro uživatele Google služeb to znamená bezproblémovou práci s AI přímo v nástrojích, které už používají denně.\n\nModel je dostupný v několika variantách od nejmenšího Gemini Flash (rychlý a ekonomický) po Gemini Ultra (nejschopnější). Pro firmy, které už provozují infrastrukturu na Google Cloud, je Gemini přirozenou volbou díky snadné integraci a komplexní sadě nástrojů.",
    category: "nastroje",
    relatedTermSlugs: ["llm", "chatgpt", "claude"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Nový typ procesoru navržený Googlem speciálně pro mobilní telefony.",
      "Služba pro automatické zálohování dat z Google účtu na fyzický disk.",
      "Aplikace pro správu a plánování schůzek s AI asistencí od Googlu.",
    ],
  },
  {
    slug: "perplexity",
    term: "Perplexity",
    shortDefinition:
      "Perplexity je AI vyhledávač, který kombinuje vyhledávání na internetu s jazykovým modelem a poskytuje přímé, zdrojované odpovědi místo seznamu odkazů.",
    fullDescription:
      "Perplexity představuje novou generaci vyhledávání, která kombinuje sílu velkých jazykových modelů s přístupem k aktuálním informacím z internetu. Na rozdíl od klasických vyhledávačů, které vrací seznam odkazů, Perplexity přímo odpovídá na vaše otázky a ke každému tvrzení uvádí zdroj, ze kterého čerpal.\n\nHlavní výhodou Perplexity je důvěryhodnost \u2013 díky citacím si můžete snadno ověřit, odkud informace pochází. To řeší jeden z největších problémů běžných chatbotů \u2013 halucinace. Perplexity je ideální pro rešerše, ověřování faktů, sledování novinek v oboru nebo přípravu podkladů pro rozhodování.\n\nPerplexity nabízí bezplatnou verzi i předplacený plán Pro s přístupem k výkonnějším modelům a neomezenému počtu pokročilých dotazů. Pro profesionály, kteří potřebují rychle nacházet přesné a aktuální informace, je to neocenitelný nástroj v každodenní práci.",
    category: "nastroje",
    relatedTermSlugs: ["llm", "rag", "halucinace"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Metrika měřící míru zmatenosti AI modelu při generování odpovědí.",
      "Analytický nástroj pro sledování výkonu webových stránek a SEO optimalizaci.",
      "Platforma pro automatické testování kvality AI modelů před nasazením.",
    ],
  },

  // ---- AI Agenti ----
  {
    slug: "ai-agent",
    term: "AI Agent",
    termEn: "AI Agent",
    shortDefinition:
      "AI agent je autonomní systém poháněný umělou inteligencí, který dokáže samostatně plánovat kroky, používat nástroje a plnit složité úkoly bez průběžného lidského dohledu.",
    fullDescription:
      `AI agenti představují další evoluční stupeň umělé inteligence. Zatímco běžný chatbot odpovídá na jednotlivé dotazy, AI agent dokáže převzít komplexní úkol, rozložit ho na dílčí kroky, samostatně je provádět a přizpůsobovat svůj postup na základě výsledků. Může přitom využívat různé nástroje \u2013 procházet web, pracovat s databázemi, volat API nebo spouštět kód.\n\nPříkladem AI agenta v praxi může být systém, který dostane za úkol „připrav týdenní report o aktivitách konkurence". Agent sám vyhledá relevantní zdroje, shromáždí data, analyzuje je, vytvoří strukturovaný report a odešle ho na e-mail \u2013 to vše bez dalšího zásahu uživatele.\n\nAI agenti mají obrovský potenciál pro automatizaci firemních procesů. Dokáží převzít rutinní úkoly, které dříve vyžadovaly lidskou koordinaci a rozhodování. Při jejich nasazování je klíčové správně definovat hranice jejich autonomie a zajistit lidský dohled nad kritickými rozhodnutími.`,
    category: "agenti",
    relatedTermSlugs: ["umela-inteligence", "api", "rag", "automatizace"],
    youtubeVideos: [],
    relatedServiceSlugs: ["ai-implementace", "konzultace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Fyzický robot s AI, který zastupuje zaměstnance při práci v kanceláři.",
      "Lidský operátor, který na pozadí ovládá chatbota a předstírá umělou inteligenci.",
      "Software pro automatické odpovídání na e-maily pomocí přednastavených šablon.",
    ],
  },
  {
    slug: "rag",
    term: "RAG",
    termEn: "Retrieval-Augmented Generation",
    shortDefinition:
      "RAG (Retrieval-Augmented Generation) je technika, která obohacuje odpovědi AI modelu o informace z externích zdrojů dat, čímž zvyšuje přesnost a aktuálnost odpovědí.",
    fullDescription:
      "RAG řeší jeden z klíčových problémů velkých jazykových modelů \u2013 omezené a potenciálně zastaralé znalosti. Princip je jednoduchý: než model vygeneruje odpověď, systém nejprve vyhledá relevantní informace v externím zdroji dat (firemní dokumenty, databáze, webové stránky) a tyto informace vloží do kontextu modelu jako podkladový materiál.\n\nV praxi to funguje tak, že se uživatelský dotaz nejprve převede na vektorovou reprezentaci a porovná s vektorovými reprezentacemi dokumentů v databázi. Nejrelevantnější dokumenty se přidají ke kontextu a model na jejich základě formuluje odpověď. Díky tomu model odpovídá na základě aktuálních firemních dat, nikoliv pouze na základě svých tréninkových znalostí.\n\nRAG je dnes nejčastěji používaná technika pro budování firemních AI asistentů. Umožňuje vytvořit chatbota, který zná vaše produkty, interní procesy nebo zákaznickou dokumentaci \u2013 bez nutnosti nákladného fine-tuningu celého modelu. Je to jeden z prvních kroků, který s klienty řešíme při AI implementaci.",
    category: "agenti",
    relatedTermSlugs: ["llm", "halucinace", "fine-tuning", "ai-agent"],
    youtubeVideos: [],
    relatedServiceSlugs: ["ai-implementace", "konzultace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Formát souboru pro ukládání a přenos AI modelů mezi různými platformami.",
      "Regulační rámec EU pro hodnocení rizik umělé inteligence.",
      "Typ grafické karty optimalizovaný pro trénování neuronových sítí.",
    ],
  },
  {
    slug: "fine-tuning",
    term: "Fine-tuning",
    shortDefinition:
      "Fine-tuning je proces dotrénování existujícího AI modelu na vlastních specifických datech, čímž se model přizpůsobí konkrétnímu oboru, stylu nebo úkolu.",
    fullDescription:
      `Fine-tuning umožňuje vzít předtrénovaný velký jazykový model a přizpůsobit ho pro specifické potřeby. Místo trénování modelu od nuly (což stojí miliony dolarů) se model dotrénuje na menším datasetu vlastních dat \u2013 například na firemní komunikaci, odborných textech nebo specifickém formátu odpovědí.\n\nProces fine-tuningu upravuje váhy neuronové sítě tak, aby model lépe rozuměl terminologii vašeho oboru, dodržoval požadovaný styl komunikace nebo přesněji řešil konkrétní typy úkolů. Výsledkem je model, který se chová, jako by byl „odborníkem" ve vaší doméně.\n\nJe důležité vědět, kdy fine-tuning použít a kdy stačí jiné přístupy. Pro většinu firemních případů je efektivnější začít s kvalitním prompt engineeringem nebo RAG řešením. Fine-tuning se vyplatí až tehdy, když potřebujete konzistentní specializované chování, které nelze dosáhnout pouze promptem \u2013 například specifický odborný jazyk nebo formát výstupů.`,
    category: "agenti",
    relatedTermSlugs: ["llm", "strojove-uceni", "rag", "api"],
    youtubeVideos: [],
    relatedServiceSlugs: ["ai-implementace", "konzultace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Proces odstraňování chyb a nepřesností z tréninkových dat AI modelu.",
      "Ladění grafického uživatelského rozhraní AI aplikace pro lepší uživatelský zážitek.",
      "Optimalizace rychlosti AI modelu snížením jeho velikosti a počtu parametrů.",
    ],
  },
  {
    slug: "api",
    term: "API",
    termEn: "Application Programming Interface",
    shortDefinition:
      "API je rozhraní, které umožňuje různým softwarovým aplikacím komunikovat mezi sebou. V kontextu AI slouží API k programovému přístupu k jazykovým modelům a jejich integraci do vlastních aplikací.",
    fullDescription:
      "API (Application Programming Interface) je sada pravidel a protokolů, která umožňuje jedné aplikaci využívat funkce jiné aplikace. V kontextu umělé inteligence API umožňuje vývojářům přistupovat k výkonným AI modelům (jako GPT-4, Claude nebo Gemini) přímo z vlastního kódu, bez nutnosti tyto modely provozovat na vlastní infrastruktuře.\n\nV praxi to znamená, že firma může integrovat AI do svého CRM systému, e-shopu nebo interního nástroje. Místo toho, aby zaměstnanci ručně kopírovali texty do ChatGPT, AI zpracovává požadavky automaticky na pozadí \u2013 třeba klasifikuje příchozí e-maily, generuje odpovědi zákazníkům nebo analyzuje data.\n\nPráce s AI API je klíčovou dovedností pro firmy, které chtějí AI nasadit v měřítku. API umožňuje kontrolovat náklady (platíte za spotřebu), zajistit konzistentní chování (přes systémové prompty), integrovat AI do stávajících procesů a automatizovat pracovní postupy. Je to most mezi prototypem v chatovacím okně a skutečným produkčním řešením.",
    category: "agenti",
    relatedTermSlugs: ["ai-agent", "rag", "fine-tuning", "automatizace"],
    youtubeVideos: [],
    relatedServiceSlugs: ["ai-implementace", "konzultace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Zkratka pro pokročilý protokol internetu, nová verze webového standardu.",
      "Mobilní aplikace pro správu a monitorování výkonu AI modelů.",
      "Certifikace pro odborníky v oblasti umělé inteligence udělovaná mezinárodní organizací.",
    ],
  },

  // ---- Vibe Coding ----
  {
    slug: "vibe-coding",
    term: "Vibe Coding",
    shortDefinition:
      "Vibe coding je přístup k tvorbě softwaru, při kterém člověk popisuje v přirozeném jazyce, co chce vytvořit, a AI generuje funkční kód \u2013 programujete konverzací místo psaním kódu.",
    fullDescription:
      "Vibe coding je termín popularizovaný Andrejem Karpathym (spoluzakladatel OpenAI) a popisuje nový způsob tvorby softwaru, kdy vývojář komunikuje s AI v přirozeném jazyce a AI generuje funkční kód. Místo ručního psaní každého řádku kódu popíšete, co chcete vytvořit, a AI se postará o implementaci.\n\nTento přístup demokratizuje tvorbu softwaru \u2013 umožňuje i netechnickým lidem vytvářet webové stránky, aplikace nebo automatizace. Zkušeným vývojářům zase dramaticky zvyšuje produktivitu, protože se mohou soustředit na architekturu a logiku místo syntaxe. Nástroje jako Cursor, Claude Code nebo Lovable dělají vibe coding dostupným pro každého.\n\nVibe coding neznamená, že přestanete potřebovat programátorské myšlení. Stále je důležité umět AI nasměrovat správným směrem, rozumět základním konceptům a ověřit kvalitu výsledného kódu. Ale bariéra vstupu do světa programování se dramaticky snížila \u2013 a to otevírá nové příležitosti pro podnikatele, marketéry i kreativce.",
    category: "vibe-coding",
    relatedTermSlugs: ["cursor", "claude-code", "lovable", "prompt"],
    youtubeVideos: [],
    relatedServiceSlugs: [
      "webinare-a-workshopy",
      "mentoring",
      "konzultace",
    ],
    ctaStyle: "prominent",
    quizDistractors: [
      "Programovací metodologie, při které tým píše kód za doprovodu hudby pro zvýšení kreativity.",
      "Technika testování softwaru založená na náhodném generování vstupních dat.",
      "Styl grafického designu kódu, kde se používají barvy a animace pro lepší čitelnost.",
    ],
  },
  {
    slug: "cursor",
    term: "Cursor",
    shortDefinition:
      "Cursor je AI-powered editor kódu postavený na VS Code, který umožňuje psát, editovat a refaktorovat kód pomocí konverzace s AI přímo v editoru.",
    fullDescription:
      "Cursor je moderní editor kódu, který integruje umělou inteligenci přímo do vývojářského prostředí. Je postavený na základech oblíbeného VS Code, takže podporuje všechny jeho rozšíření a klávesové zkratky, ale přidává výkonné AI funkce \u2013 inline generování kódu, chat s porozuměním celému projektu a automatické opravy chyb.\n\nKlíčovou předností Cursoru je, že AI rozumí kontextu celého vašeho projektu. Když požádáte o změnu, model vidí relevantní soubory, závislosti a strukturu kódu a navrhuje úpravy, které do projektu skutečně zapadají. To ho odlišuje od generických AI chatbotů, kde musíte kód kopírovat tam a zpět.\n\nCursor je ideální nástroj pro vývojáře, kteří chtějí zvýšit svou produktivitu, i pro začátečníky, kteří se učí programovat s pomocí AI. V kombinaci s dobrým prompt engineeringem dokáže Cursor výrazně zrychlit vývoj a snížit počet chyb v kódu.",
    category: "vibe-coding",
    relatedTermSlugs: ["vibe-coding", "claude-code", "lovable"],
    youtubeVideos: [],
    relatedServiceSlugs: ["mentoring", "webinare-a-workshopy"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Blikající ukazatel na obrazovce, který ukazuje pozici pro psaní textu.",
      "Plugin do webového prohlížeče pro automatické vyplňování formulářů pomocí AI.",
      "Online kurz programování, kde studenty vede AI tutor.",
    ],
  },
  {
    slug: "claude-code",
    term: "Claude Code",
    shortDefinition:
      "Claude Code je terminálový nástroj od Anthropic, který umožňuje používat AI model Claude přímo v příkazové řádce pro práci s kódem, správu souborů a automatizaci vývojových úkolů.",
    fullDescription:
      "Claude Code je výkonný nástroj pro vývojáře, který přináší schopnosti AI modelu Claude přímo do terminálu. Na rozdíl od webového chatovacího rozhraní Claude Code pracuje přímo s vašimi soubory a projektem \u2013 může číst kód, navrhovat změny, spouštět příkazy a provádět komplexní vývojové úkoly.\n\nSíla Claude Code spočívá v tom, že funguje jako AI spolupracovník přímo ve vašem vývojovém prostředí. Může analyzovat celý projekt, najít a opravit chyby, implementovat nové funkce, psát testy nebo refaktorovat existující kód. Vše probíhá v terminálu, což vyhovuje vývojářům, kteří preferují příkazovou řádku.\n\nClaude Code je zvláště účinný v kombinaci s verzovacími systémy (Git) a CI/CD pipeline. Dokáže vytvářet commity, řešit merge konflikty nebo připravovat pull requesty. Pro profesionální vývojáře představuje další krok v evoluci AI-asistovaného vývoje softwaru.",
    category: "vibe-coding",
    relatedTermSlugs: ["vibe-coding", "cursor", "claude"],
    youtubeVideos: [],
    relatedServiceSlugs: ["mentoring", "webinare-a-workshopy"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Programovací jazyk vyvinutý společností Anthropic pro tvorbu AI modelů.",
      "Šifrovací systém používaný k zabezpečení komunikace mezi AI modely.",
      "Sada pravidel a konvencí pro psaní čistého a udržitelného zdrojového kódu.",
    ],
  },
  {
    slug: "lovable",
    term: "Lovable",
    shortDefinition:
      "Lovable je AI nástroj pro tvorbu kompletních webových aplikací z textového popisu \u2013 stačí popsat, co chcete, a Lovable vygeneruje funkční aplikaci včetně designu a backendu.",
    fullDescription:
      "Lovable (dříve známý jako GPT Engineer) je revoluční nástroj, který posouvá vibe coding na novou úroveň. Stačí v přirozeném jazyce popsat, jakou webovou aplikaci chcete vytvořit, a Lovable vygeneruje kompletní funkční řešení \u2013 frontend, backend, databázi i design. Výsledek můžete okamžitě publikovat na web.\n\nLovable je ideální pro rychlé prototypování, MVP (minimum viable product) a jednoduché webové aplikace. Podnikatel s nápadem na aplikaci může mít funkční prototyp za hodiny místo týdnů. Nástroj podporuje moderní technologie (React, Tailwind CSS, Supabase) a generovaný kód je čistý a rozšiřitelný.\n\nPro netechnické uživatele Lovable otevírá svět, který byl dříve dostupný pouze vývojářům. Marketér může vytvořit landing page, konzultant interní nástroj pro klienty, učitel vzdělávací aplikaci \u2013 to vše bez psaní jediného řádku kódu. Na workshopech ukazujeme, jak Lovable využít pro rychlé ověření byznysových nápadů.",
    category: "vibe-coding",
    relatedTermSlugs: ["vibe-coding", "cursor", "claude-code"],
    youtubeVideos: [],
    relatedServiceSlugs: [
      "webinare-a-workshopy",
      "mentoring",
      "partnerske-projekty",
    ],
    ctaStyle: "prominent",
    quizDistractors: [
      "Metodologie designu zaměřená na vytváření emocionálně přitažlivých uživatelských rozhraní.",
      "Hodnotící stupnice měřící spokojenost uživatelů s AI chatbotem.",
      "Open-source knihovna pro tvorbu animací a vizuálních efektů na webových stránkách.",
    ],
  },

  // ---- Byznys & Strategie ----
  {
    slug: "ai-transformace",
    term: "AI Transformace",
    termEn: "AI Transformation",
    shortDefinition:
      "AI transformace je strategický proces zavádění umělé inteligence do firemních procesů a rozhodování s cílem zvýšit efektivitu, inovovat produkty a získat konkurenční výhodu.",
    fullDescription:
      "AI transformace je komplexní proces, při kterém firma systematicky integruje umělou inteligenci do svých klíčových procesů, produktů a strategie. Nejde jen o nasazení jednoho AI nástroje \u2013 jde o fundamentální změnu v tom, jak firma pracuje s daty, jak rozhoduje a jak vytváří hodnotu pro zákazníky.\n\nÚspěšná AI transformace začíná pochopením, kde AI přinese největší hodnotu. To zahrnuje audit stávajících procesů, identifikaci opakujících se úkolů vhodných pro automatizaci, analýzu dostupných dat a vyhodnocení připravenosti týmu. Klíčové je začít s pilotními projekty, které rychle prokáží hodnotu, a teprve poté škálovat.\n\nNejvětší překážkou AI transformace nebývá technologie, ale firemní kultura a připravenost lidí. Proto je důležité investovat do vzdělávání zaměstnanců, budovat interní kompetence a zajistit podporu vedení. Firma, která kombinuje správnou technologii se vzdělanými lidmi a jasnou strategií, získává výraznou konkurenční výhodu.",
    category: "business",
    relatedTermSlugs: [
      "automatizace",
      "roi-umele-inteligence",
      "ai-agent",
    ],
    youtubeVideos: [],
    relatedServiceSlugs: [
      "konzultace",
      "ai-implementace",
      "webinare-a-workshopy",
    ],
    ctaStyle: "prominent",
    quizDistractors: [
      "Proces převodu analogových firemních dokumentů do digitální podoby pomocí AI.",
      "Nahrazení všech zaměstnanců firmy autonomními AI systémy do roku 2030.",
      "Jednorázová implementace chatbota na firemní webové stránky.",
    ],
  },
  {
    slug: "automatizace",
    term: "Automatizace s AI",
    termEn: "AI Automation",
    shortDefinition:
      "Automatizace s AI znamená využití umělé inteligence k převzetí rutinních a opakujících se úkolů, které dříve vyžadovaly lidský zásah, čímž se uvolní kapacita pro kreativnější a strategičtější práci.",
    fullDescription:
      "Automatizace s AI jde výrazně dále než tradiční automatizace založená na pevných pravidlech (if-then). Zatímco klasická automatizace zvládne jen přesně definované scénáře, AI-poháněná automatizace dokáže pracovat s nestrukturovanými daty, rozhodovat se v nejasných situacích a přizpůsobovat se měnícím se podmínkám.\n\nPříklady AI automatizace v praxi zahrnují: automatickou kategorizaci a odpovídání na zákaznické e-maily, extrakci dat z faktur a smluv v libovolném formátu, generování reportů z nestrukturovaných dat, personalizaci marketingového obsahu nebo inteligentní plánování schůzek a úkolů.\n\nKlíčem k úspěšné AI automatizaci je správná identifikace procesů vhodných pro automatizaci. Ideální kandidáti jsou úkoly, které jsou časově náročné, opakující se, náchylné k lidské chybě a nevyžadují komplexní strategické myšlení. Postupná automatizace těchto úkolů může firmě ušetřit desítky hodin týdně a výrazně snížit chybovost.",
    category: "business",
    relatedTermSlugs: [
      "ai-agent",
      "ai-transformace",
      "api",
      "roi-umele-inteligence",
    ],
    youtubeVideos: [],
    relatedServiceSlugs: ["ai-implementace", "konzultace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Proces, při kterém AI automaticky vytváří kopie sebe sama pro rychlejší zpracování.",
      "Software pro automatické vypínání a zapínání počítačů podle nastaveného rozvrhu.",
      "Fyzická robotická linka v továrně řízená hlasovými povely v češtině.",
    ],
  },
  {
    slug: "roi-umele-inteligence",
    term: "ROI umělé inteligence",
    termEn: "AI ROI (Return on Investment)",
    shortDefinition:
      "ROI umělé inteligence měří návratnost investice do AI projektů \u2013 porovnává náklady na implementaci a provoz AI řešení s přínosy, jako je úspora času, zvýšení efektivity nebo růst tržeb.",
    fullDescription:
      "Měření ROI umělé inteligence je klíčové pro strategické rozhodování o AI investicích. Na rozdíl od tradičních IT projektů má AI specifická úskalí při vyčíslení přínosů \u2013 některé výhody jsou snadno měřitelné (úspora času, snížení chybovosti), jiné obtížněji kvantifikovatelné (lepší zákaznická zkušenost, rychlejší inovace).\n\nPři výpočtu ROI je důležité zahrnout všechny náklady: licence za AI nástroje, implementaci, integraci se stávajícími systémy, školení zaměstnanců a průběžnou údržbu. Na straně přínosů počítáme ušetřené hodiny práce, snížení nákladů na chyby, zvýšení konverzního poměru, rychlejší time-to-market nebo zlepšení zákaznické spokojenosti.\n\nZkušenost ukazuje, že nejrychlejší ROI přinášejí projekty zaměřené na automatizaci rutinních úkolů a zlepšení interní produktivity. Typicky firmy vidí návratnost investice do AI nástrojů pro produktivitu (ChatGPT, Claude) v řádu týdnů. Komplexnější implementace (firemní AI asistenti, automatizace procesů) se vracejí v řádu měsíců a přinášejí výrazně větší dlouhodobou hodnotu.",
    category: "business",
    relatedTermSlugs: [
      "ai-transformace",
      "automatizace",
      "umela-inteligence",
    ],
    youtubeVideos: [],
    relatedServiceSlugs: ["konzultace", "ai-implementace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Mezinárodní certifikát kvality udělovaný firmám, které úspěšně nasadily AI.",
      "Procentuální podíl AI generovaného obsahu na celkovém firemním obsahu.",
      "Poměr počtu AI nástrojů ku počtu zaměstnanců ve firmě.",
    ],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getGlossaryTermBySlug(
  slug: string
): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(
  category: GlossaryCategory
): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export function getAllGlossaryCategories(): GlossaryCategoryInfo[] {
  return glossaryCategories;
}

export function getRelatedTerms(term: GlossaryTerm): GlossaryTerm[] {
  return term.relatedTermSlugs
    .map((slug) => glossaryTerms.find((t) => t.slug === slug))
    .filter((t): t is GlossaryTerm => t !== undefined);
}

export function getRandomQuizTerms(count: number): GlossaryTerm[] {
  const shuffled = [...glossaryTerms].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function searchGlossaryTerms(query: string): GlossaryTerm[] {
  const lower = query.toLowerCase();
  return glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(lower) ||
      (t.termEn && t.termEn.toLowerCase().includes(lower)) ||
      t.shortDefinition.toLowerCase().includes(lower)
  );
}

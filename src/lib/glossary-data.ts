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
      "Obor informatiky zabývající se vytvářením systémů, které dokáží vykonávat úkoly běžně vyžadující lidskou inteligenci \u2013 rozpoznávání řeči, rozhodování nebo překlad jazyků.",
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
      "Matematický model inspirovaný strukturou lidského mozku, složený z propojených vrstev umělých neuronů, který se dokáže učit rozpoznávat vzorce v datech.",
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
      "Typ neuronové sítě natrénované na obrovském množství textu, která dokáže generovat, překládat a analyzovat přirozený jazyk s pozoruhodnou přesností.",
    fullDescription:
      "Velké jazykové modely představují jednu z nejvýznamnějších inovací v oblasti AI posledních let. Jedná se o neuronové sítě s miliardami parametrů, natrénované na rozsáhlých textových datech z internetu, knih a dalších zdrojů. Díky tomu rozumí struktuře jazyka a dokáží generovat koherentní a kontextově relevantní text.\n\nLLM fungují na principu predikce dalšího tokenu \u2013 na základě dosavadního kontextu odhadují, jaké slovo (nebo jeho část) by mělo následovat. Přestože je tento princip jednoduchý, v kombinaci s obrovským množstvím tréninkových dat a parametrů vznikají modely schopné plnit složité úkoly: psaní článků, programování, analýza dokumentů nebo kreativní brainstorming.\n\nMezi nejznámější LLM patří modely GPT (na kterých stojí ChatGPT), Claude od Anthropic nebo Gemini od Google. Každý model má své silné stránky a je důležité vybrat ten správný pro konkrétní potřebu. Při práci s LLM je klíčové umět správně formulovat prompty a chápat jejich omezení, jako jsou halucinace nebo zastaralé znalosti.",
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
      "Odvětví umělé inteligence, ve kterém se algoritmy učí z dat a zlepšují svůj výkon bez toho, aby byly explicitně naprogramovány pro každý konkrétní úkol.",
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
      "Jev, kdy jazykový model sebevědomě generuje nepravdivé, vymyšlené nebo zavádějící informace, které vypadají věrohodně, ale nemají oporu v realitě.",
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
  {
    slug: "gpt",
    term: "GPT",
    termEn: "Generative Pre-trained Transformer",
    shortDefinition:
      "Řada velkých jazykových modelů od společnosti OpenAI. Nejnovější verze pohánějí ChatGPT a jsou dostupné také přes API pro vývojáře.",
    fullDescription:
      "GPT (Generative Pre-trained Transformer) je rodina velkých jazykových modelů vyvinutých společností OpenAI. Název prozrazuje tři klíčové vlastnosti: model je generativní (vytváří nový obsah), předtrénovaný (naučil se z obrovského množství textových dat) a založený na architektuře transformátor.\n\nOd prvního GPT-1 v roce 2018 prošla řada dramatickým vývojem. GPT-2 překvapil kvalitou generovaného textu, GPT-3 ukázal, že škálování přináší nečekané schopnosti, a GPT-4 se stal prvním skutečně multimodálním modelem řady, schopným pracovat i s obrázky. Každá generace přinesla skokové zlepšení v přesnosti, kreativitě i schopnosti dodržovat instrukce.\n\nPro běžné uživatele je GPT nejdostupnější přes ChatGPT, pro vývojáře přes OpenAI API. Pochopení toho, že GPT je model (mozek) a ChatGPT je aplikace (rozhraní), je důležité pro správné nasazení AI ve firmě \u2013 přes API můžete GPT integrovat do vlastních systémů a procesů.",
    category: "zaklady",
    relatedTermSlugs: ["llm", "chatgpt", "neuronova-sit", "token", "transformer"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "konzultace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Grafický procesor třetí generace používaný pro renderování 3D her.",
      "Globální platební terminál pro bezhotovostní transakce v obchodech.",
      "Otevřený komunikační protokol pro přenos dat mezi cloudovými servery.",
    ],
  },
  {
    slug: "transformer",
    term: "Transformer",
    termEn: "Transformer",
    shortDefinition:
      "Architektura neuronové sítě, která revolucionizovala zpracování jazyka díky mechanismu pozornosti (attention). Je základem prakticky všech moderních jazykových modelů.",
    fullDescription:
      "Transformer je architektura neuronové sítě představená v roce 2017 v přelomovém článku \u201eAttention Is All You Need\u201c od výzkumníků Googlu. Na rozdíl od předchozích architektur (rekurentních sítí) dokáže transformer zpracovávat celé sekvence textu paralelně, což dramaticky urychlilo trénování a umožnilo vytvoření mnohem větších modelů.\n\nKlíčovou inovací transformeru je mechanismus pozornosti (self-attention), který modelu umožňuje při zpracování každého slova \u201evidět\u201c a zvažovat vztahy se všemi ostatními slovy ve větě. Díky tomu model lépe chápe kontext a význam \u2013 rozumí například, že v \u201eJana dala Petrovi knihu, protože ji přečetla\u201c se \u201eji\u201c vztahuje ke knize, ne k Janě.\n\nDnes je transformer základem prakticky všech velkých jazykových modelů \u2013 GPT, Claude, Gemini i dalších. Pochopení této architektury není nutné pro běžné používání AI, ale pomáhá chápat, proč jsou současné modely tak schopné a kde mají své limity.",
    category: "zaklady",
    relatedTermSlugs: ["neuronova-sit", "llm", "gpt", "token", "deep-learning"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Zařízení pro převod střídavého proudu na stejnosměrný v elektrických sítích.",
      "Software pro konverzi souborů z jednoho formátu do druhého.",
      "Typ robota, který se dokáže fyzicky přeměnit z jedné formy na druhou.",
    ],
  },
  {
    slug: "deep-learning",
    term: "Deep learning",
    termEn: "Deep Learning",
    shortDefinition:
      "Podoblast strojového učení, která využívá vícevrstvé neuronové sítě (hluboké sítě) schopné automaticky se učit rozpoznávat složité vzorce v datech.",
    fullDescription:
      "Deep learning (hluboké učení) je oblast strojového učení, která využívá neuronové sítě s mnoha vrstvami \u2013 odtud označení \u201ehluboké\u201c. Zatímco tradiční strojové učení vyžaduje, aby člověk ručně vybral důležité vlastnosti dat (tzv. features), hluboké sítě se tyto vlastnosti naučí rozpoznávat samy.\n\nPrůlom deep learningu nastal kolem roku 2012, kdy hluboké sítě poprvé výrazně překonaly tradiční metody v rozpoznávání obrázků. Od té doby deep learning dominuje v rozpoznávání řeči, překladu jazyků, generování obrazu i textu. Všechny moderní LLM včetně GPT a Claude jsou produkty deep learningu.\n\nPro firmy je důležité vědět, že deep learning vyžaduje velké množství dat a výpočetního výkonu pro trénování, ale natrénované modely se dají efektivně nasadit i na běžném hardwaru. V praxi většina firem netrénuje vlastní deep learning modely, ale využívá předtrénované modely přes API nebo je dolaďuje pomocí fine-tuningu.",
    category: "zaklady",
    relatedTermSlugs: ["strojove-uceni", "neuronova-sit", "llm", "fine-tuning"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Technika učení AI, při které model trénují přes noc (v \u201ehlubokých\u201c hodinách) pro lepší výsledky.",
      "Technika zabezpečení dat pomocí víceúrovňového šifrování.",
      "Přístup k programování, kde se kód organizuje do mnoha vnořených složek a podsložek.",
    ],
  },
  {
    slug: "nlp",
    term: "NLP",
    termEn: "Natural Language Processing",
    shortDefinition:
      "Obor umělé inteligence zaměřený na porozumění, interpretaci a generování přirozeného jazyka počítačem. Stojí za chatboty, překladači i hlasovými asistenty.",
    fullDescription:
      "NLP (Natural Language Processing, zpracování přirozeného jazyka) je obor na pomezí informatiky a lingvistiky, který se zabývá interakcí mezi počítači a lidským jazykem. Cílem je naučit stroje rozumět textu a řeči tak, jak jim rozumí lidé \u2013 včetně kontextu, ironie, emocí a kulturních nuancí.\n\nV praxi NLP zahrnuje celou řadu úloh: analýzu sentimentu (je recenze pozitivní nebo negativní?), rozpoznávání pojmenovaných entit (identifikace jmen, míst, dat v textu), strojový překlad, sumarizaci dokumentů, odpovídání na otázky nebo generování textu. Všechny tyto úlohy dnes výrazně zlepšily velké jazykové modely.\n\nPro firmy je NLP klíčové pro automatizaci práce s textem \u2013 analýza zákaznické zpětné vazby, kategorizace e-mailů, extrakce informací ze smluv nebo chatboty pro zákaznický servis. Díky LLM se NLP stalo přístupným i bez specializovaného týmu datových vědců.",
    category: "zaklady",
    relatedTermSlugs: ["umela-inteligence", "llm", "strojove-uceni", "token"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "ai-implementace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Nový programovací jazyk navržený pro tvorbu jazykových aplikací.",
      "Licence pro komerční využití AI modelů v Evropské unii.",
      "Norma pro licencování a prověrku AI softwaru před uvedením na evropský trh.",
    ],
  },
  {
    slug: "multimodalni-ai",
    term: "Multimodální AI",
    termEn: "Multimodal AI",
    shortDefinition:
      "Typ umělé inteligence schopný zpracovávat a generovat více typů dat najednou \u2013 text, obrázky, zvuk i video \u2013 a kombinovat informace z těchto různých zdrojů.",
    fullDescription:
      "Multimodální AI označuje modely a systémy, které dokáží pracovat s více než jedním typem dat (modalitou). Zatímco dřívější AI modely byly specializované \u2013 jeden pro text, jiný pro obrázky \u2013 moderní multimodální modely jako GPT-4, Claude nebo Gemini zvládají kombinovat různé vstupy a výstupy.\n\nV praxi to znamená, že můžete AI modelu poslat fotografii a zeptat se na ni v textu, nahrát zvukový záznam schůzky a nechat ho analyzovat, nebo popsat obrázek slovy a nechat ho vygenerovat. Model přitom chápe souvislosti mezi modalitami \u2013 na fotce jídla rozpozná ingredience a navrhne recept.\n\nMultimodální schopnosti otevírají firmám nové možnosti automatizace. Analýza produktových fotek, zpracování naskenovaných dokumentů, transkripce a analýza hovorů se zákazníky nebo vizuální kontrola kvality \u2013 to vše dříve vyžadovalo specializované systémy, zatímco dnes stačí jeden multimodální model.",
    category: "zaklady",
    relatedTermSlugs: ["umela-inteligence", "llm", "gemini", "claude"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "konzultace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "AI systém, který běží současně na více zařízeních pro rychlejší zpracování.",
      "Režim práce, ve kterém AI model přepíná mezi různými jazyky podle potřeby.",
      "Technologie pro zobrazování AI výstupů na více obrazovkách najednou.",
    ],
  },
  {
    slug: "embedding",
    term: "Embedding",
    termEn: "Embedding",
    shortDefinition:
      "Matematická reprezentace textu, obrázku nebo jiných dat ve formě vektoru čísel, která zachycuje jejich význam. Umožňuje AI porovnávat podobnost mezi různými obsahy.",
    fullDescription:
      "Embedding (vnoření, vektorová reprezentace) je technika, která převádí text, obrázky nebo jiná data na číselné vektory \u2013 řady čísel, které zachycují jejich význam. Slova s podobným významem mají podobné vektory, což umožňuje AI porovnávat a hledat souvislosti mezi různými obsahy.\n\nV praxi embeddingy pohánějí vyhledávání v AI aplikacích. Když hledáte v dokumentové databázi odpověď na otázku, systém převede váš dotaz na embedding, porovná ho s embeddingy dokumentů a vrátí ty nejrelevantnější. Tento princip je základem RAG (Retrieval-Augmented Generation) a sémantického vyhledávání.\n\nPro firmy jsou embeddingy důležité jako stavební kámen inteligentních vyhledávacích systémů, doporučovacích enginů a firemních AI asistentů. Umožňují vyhledávat nikoliv podle klíčových slov, ale podle významu \u2013 dotaz \u201ejak řešit reklamaci\u201c najde i dokumenty obsahující \u201eproces vyřizování stížností zákazníků\u201c.",
    category: "zaklady",
    relatedTermSlugs: ["rag", "llm", "neuronova-sit", "nlp"],
    youtubeVideos: [],
    relatedServiceSlugs: ["ai-implementace", "konzultace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Proces vkládání AI modulu přímo do hardwaru chytrých zařízení.",
      "Technika skrytí vodoznaku do AI-generovaného textu nebo obrázku.",
      "Metoda propojení AI modelu s externími aplikacemi pomocí pluginů.",
    ],
  },
  {
    slug: "inference",
    term: "Inference",
    termEn: "Inference",
    shortDefinition:
      "Proces, při kterém natrénovaný AI model zpracovává nový vstup a generuje výstup \u2013 tedy samotné \u201epřemýšlení\u201c modelu, když mu položíte otázku nebo zadáte úkol.",
    fullDescription:
      "Inference (odvozování) je fáze, kdy natrénovaný AI model skutečně \u201epracuje\u201c \u2013 přijímá vstupní data a na jejich základě generuje výstup. Zatímco trénování modelu probíhá jednou a vyžaduje obrovský výpočetní výkon, inference probíhá při každém použití modelu a je výrazně rychlejší a levnější.\n\nKdyž pošlete dotaz do ChatGPT nebo Claude, spouštíte inferenci \u2013 model zpracovává vaše slova přes své natrénované váhy a generuje odpověď token po tokenu. Rychlost inference (jak rychle model odpovídá) a její náklady jsou klíčovými faktory při nasazování AI v produkci.\n\nPro firmy plánující AI nasazení je pochopení inference důležité z hlediska nákladů a výkonu. Inference se účtuje podle počtu zpracovaných tokenů (vstupních i výstupních). Optimalizace inference \u2013 výběr správné velikosti modelu, efektivní prompty, cachování častých dotazů \u2013 může výrazně snížit provozní náklady AI řešení.",
    category: "zaklady",
    relatedTermSlugs: ["llm", "token", "api", "fine-tuning", "strojove-uceni"],
    youtubeVideos: [],
    relatedServiceSlugs: ["konzultace", "ai-implementace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Proces, při kterém AI model sám sebe vylepšuje bez lidského zásahu.",
      "Metoda ověřování pravdivosti odpovědí AI modelu porovnáním s databází faktů.",
      "Fáze vývoje, kdy tým testuje AI model před jeho nasazením do produkce.",
    ],
  },
  {
    slug: "computer-vision",
    term: "Computer Vision",
    termEn: "Computer Vision",
    shortDefinition:
      "Oblast umělé inteligence zaměřená na schopnost počítačů \u201evidět\u201c \u2013 rozpoznávat, analyzovat a interpretovat obsah obrázků a videí s porozuměním podobným lidskému zraku.",
    fullDescription:
      "Computer vision (počítačové vidění) je obor AI, který umožňuje počítačům extrahovat smysluplné informace z vizuálních dat \u2013 fotografií, videí, skenů dokumentů nebo streamů z kamer. Zahrnuje úlohy jako rozpoznávání objektů, detekce obličejů, čtení textu z obrázků (OCR) nebo analýza medicínských snímků.\n\nS nástupem deep learningu a multimodálních modelů se computer vision dramaticky zlepšil. Moderní systémy dokáží rozpoznávat tisíce typů objektů, analyzovat scény, popisovat obrázky přirozeným jazykem nebo generovat obrázky z textu. Multimodální modely jako GPT-4 nebo Claude integrují computer vision přímo do konverzačního AI.\n\nPro firmy nabízí computer vision konkrétní aplikace: automatická kontrola kvality ve výrobě, analýza produktových fotek v e-commerce, zpracování naskenovaných dokumentů a faktur, bezpečnostní monitoring nebo analýza vizuálního obsahu na sociálních sítích. Díky dostupnosti přes API moderních modelů je implementace výrazně jednodušší než dříve.",
    category: "zaklady",
    relatedTermSlugs: ["umela-inteligence", "deep-learning", "multimodalni-ai", "neuronova-sit"],
    youtubeVideos: [],
    relatedServiceSlugs: ["konzultace", "ai-implementace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Speciální brýle s AI, které překládají text v reálném čase přímo v zorném poli uživatele.",
      "Software pro úpravu a vylepšování počítačového zraku \u2013 rozlišení monitoru a barevné kalibrace.",
      "Programovací jazyk navržený pro tvorbu grafických uživatelských rozhraní.",
    ],
  },
  {
    slug: "open-source-ai",
    term: "Open Source AI",
    termEn: "Open Source AI",
    shortDefinition:
      "AI modely a nástroje s volně dostupným zdrojovým kódem a váhami, které může kdokoliv zdarma používat, studovat, upravovat a sdílet. Alternativa ke komerčním uzavřeným modelům.",
    fullDescription:
      "Open source AI označuje modely a nástroje, jejichž zdrojový kód (a v případě AI modelů i natrénované váhy) jsou veřejně dostupné. Kdokoliv je může stáhnout, používat, upravovat a nasadit na vlastní infrastruktuře. Mezi nejznámější open source modely patří Llama od Mety, Mistral nebo Qwen.\n\nHlavní výhodou open source AI je nezávislost na jednom dodavateli, možnost úplné kontroly nad daty (data neopouštějí vaše servery) a potenciálně nižší náklady při větším objemu použití. Nevýhodou je potřeba technické expertízy pro nasazení a provoz a mohou mít nižší výkon oproti nejlepším komerčním modelům.\n\nPro firmy je open source AI zajímavou volbou zejména v regulovaných odvětvích (zdravotnictví, finance, státní správa), kde je kritické, aby citlivá data nezasílali externím poskytovatelům. Open source modely lze provozovat zcela on-premise a přizpůsobit specifickým potřebám pomocí fine-tuningu.",
    category: "zaklady",
    relatedTermSlugs: ["llm", "fine-tuning", "umela-inteligence", "api"],
    youtubeVideos: [],
    relatedServiceSlugs: ["konzultace", "ai-implementace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "AI modely, které jsou zdarma k použití, ale jejich kód je tajný a chráněný patentem.",
      "Veřejně dostupná databáze obrázků a textů pro trénování AI modelů.",
      "Komunita dobrovolníků, kteří ručně opravují chyby v odpovědích komerčních AI chatbotů.",
    ],
  },

  // ---- Prompt Engineering ----
  {
    slug: "prompt",
    term: "Prompt",
    shortDefinition:
      "Textový pokyn nebo instrukce zadávaná AI modelu pro získání požadované odpovědi. Kvalita promptu přímo ovlivňuje kvalitu výstupu.",
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
      "Maximální množství textu (měřené v tokenech), které AI model dokáže najednou zpracovat \u2013 zahrnuje jak váš prompt, tak odpověď modelu.",
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
      "Základní jednotka textu, kterou AI model zpracovává \u2013 může to být celé slovo, část slova nebo interpunkční znaménko. V češtině jeden token odpovídá přibližně 3\u20134 znakům.",
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
      "Skrytá instrukce, která nastavuje chování, roli a pravidla AI modelu ještě předtím, než uživatel zahájí konverzaci.",
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
      "Technika, při které do promptu zahrnete několik příkladů požadovaného vstupu a výstupu, čímž AI modelu ukážete, jak má úkol zpracovat.",
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
  {
    slug: "chain-of-thought",
    term: "Chain-of-thought",
    termEn: "Chain-of-Thought Prompting",
    shortDefinition:
      "Technika promptingu, která vede AI model k postupnému logickému uvažování krok za krokem, místo aby skočil rovnou k závěru. Výrazně zlepšuje přesnost u složitějších úloh.",
    fullDescription:
      "Chain-of-thought (CoT, řetězení myšlenek) je technika prompt engineeringu, která vybízí AI model k tomu, aby svůj myšlenkový proces rozložil na jednotlivé kroky. Místo okamžité odpovědi model nejprve \u201epřemýšlí nahlas\u201c \u2013 postupně analyzuje problém, zvažuje možnosti a teprve pak dojde k závěru.\n\nV praxi stačí do promptu přidat instrukci jako \u201epřemýšlej krok za krokem\u201c nebo \u201erozepiš svůj postup\u201c. Model pak například u matematické úlohy nejprve identifikuje, co je zadáno, zformuluje rovnici, krok po kroku ji vyřeší a ověří výsledek. Výzkumy ukazují, že CoT dramaticky zlepšuje přesnost u logických, matematických a analytických úloh.\n\nPro firemní využití je CoT cenný všude, kde potřebujete transparentní rozhodovací proces \u2013 analýza nabídek dodavatelů, hodnocení rizik, plánování projektů nebo řešení technických problémů. Viditelný myšlenkový postup navíc usnadňuje kontrolu a ověření správnosti AI výstupů.",
    category: "prompting",
    relatedTermSlugs: ["prompt", "few-shot-prompting", "llm", "systemovy-prompt"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "mentoring"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Bezpečnostní postup ověřování AI výstupů řetězcem nezávislých lidských kontrolorů.",
      "Technika vizualizace neuronové sítě pomocí řetězu propojených uzlů.",
      "Automatický záznam historie všech dotazů a odpovědí v konverzaci s AI.",
    ],
  },
  {
    slug: "zero-shot",
    term: "Zero-shot prompting",
    termEn: "Zero-shot Prompting",
    shortDefinition:
      "Technika, při které AI model plní úkol pouze na základě instrukce, bez jakýchkoliv příkladů. Model využívá své natrénované znalosti k pochopení, co se od něj očekává.",
    fullDescription:
      "Zero-shot prompting je nejzákladnější způsob práce s AI modelem \u2013 jednoduše popíšete úkol a model ho provede bez toho, abyste mu ukázali jakýkoliv příklad. Když napíšete \u201epřelož do angličtiny: Dnes je hezký den\u201c, model rozumí úkolu díky znalostem získaným při trénování.\n\nZero-shot je protipólem few-shot promptingu, kde modelu poskytnete několik příkladů. Výhodou zero-shot přístupu je jednoduchost a úspora tokenů (a tedy i nákladů). Nevýhodou je, že u specifických nebo neobvyklých úloh může být méně přesný než few-shot, protože model nemá vzor, podle kterého by se řídil.\n\nV praxi je zero-shot ideální pro běžné úkoly (překlady, shrnutí, odpovídání na otázky), kde jsou moderní modely dostatečně schopné i bez příkladů. Pokud výsledky nesplňují očekávání, přidání příkladů (přechod na few-shot) je často nejrychlejší cestou ke zlepšení.",
    category: "prompting",
    relatedTermSlugs: ["prompt", "few-shot-prompting", "token", "llm"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Technika, při které AI model odpovídá okamžitě bez jakéhokoliv přemýšlení.",
      "Bezpečnostní režim AI modelu, kdy odmítá všechny požadavky, které nezná.",
      "Metoda trénování AI, kde se model učí bez připojení k internetu.",
    ],
  },
  {
    slug: "temperature",
    term: "Temperature",
    termEn: "Temperature",
    shortDefinition:
      "Parametr ovlivňující míru kreativity a náhodnosti ve výstupech AI modelu. Nízká teplota produkuje předvídatelné, konzervativní odpovědi; vysoká teplota kreativnější a rozmanitější.",
    fullDescription:
      "Temperature (teplota) je nastavitelný parametr velkých jazykových modelů, který řídí, jak \u201ekreativní\u201c nebo \u201ekonzervativní\u201c budou odpovědi. Hodnota se typicky pohybuje od 0 do 1 (někdy i výše). Při nízké teplotě (blízko 0) model vybírá nejpravděpodobnější slova a generuje předvídatelný, faktický text. Při vysoké teplotě (blízko 1) přidává více náhodnosti, čímž vznikají rozmanitější a kreativnější odpovědi.\n\nV praxi volba teploty závisí na úkolu. Pro extrakci dat z faktur, klasifikaci e-mailů nebo odpovídání na faktické otázky chcete nízkou teplotu \u2013 potřebujete přesnost a konzistenci. Pro brainstorming nápadů, kreativní psaní nebo generování marketingových sloganů je vyšší teplota vhodnější, protože přináší překvapivější a originálnější výstupy.\n\nPochopení temperature je důležité zejména při práci s AI přes API nebo při nastavování firemních AI nástrojů. Správně nastavená teplota může výrazně ovlivnit kvalitu výstupů pro konkrétní úkol \u2013 a přitom jde o jednoduché otočení jednoho čísla.",
    category: "prompting",
    relatedTermSlugs: ["llm", "prompt", "api", "token"],
    youtubeVideos: [],
    relatedServiceSlugs: ["konzultace", "ai-implementace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Fyzická teplota serverů, na kterých běží AI model, měřená v datovém centru.",
      "Metrika měřící rychlost odpovědi AI modelu v milisekundách.",
      "Úroveň zabezpečení konverzace s AI na stupnici od studené po horkou.",
    ],
  },
  {
    slug: "prompt-injection",
    term: "Prompt injection",
    termEn: "Prompt Injection",
    shortDefinition:
      "Bezpečnostní útok, při kterém se útočník snaží přepsat nebo obejít instrukce AI modelu vložením škodlivých pokynů do uživatelského vstupu.",
    fullDescription:
      "Prompt injection je jedna z nejvýznamnějších bezpečnostních hrozeb při nasazování AI v produkčních systémech. Princip je podobný SQL injection v databázích \u2013 útočník se snaží vložit do vstupu instrukce, které změní chování AI modelu. Například zákaznický chatbot s přístupem k interním datům by mohl být zmanipulován k vyzrazení citlivých informací.\n\nExistují dva hlavní typy: přímý prompt injection, kde útočník přímo zadává škodlivé instrukce do chatu, a nepřímý prompt injection, kde jsou škodlivé instrukce skryté v dokumentech nebo webových stránkách, které AI zpracovává. Nepřímý typ je zákeřnější, protože útočník nemusí mít přímý přístup k AI systému.\n\nOchrana proti prompt injection je klíčová při budování firemních AI řešení. Zahrnuje sanitizaci vstupů, oddělení systémových a uživatelských instrukcí, omezení přístupu AI k citlivým datům a průběžné testování odolnosti. Při implementaci AI pro klienty je bezpečnost vždy jedním z prvních témat, která řešíme.",
    category: "prompting",
    relatedTermSlugs: ["prompt", "systemovy-prompt", "ai-agent", "api"],
    youtubeVideos: [],
    relatedServiceSlugs: ["konzultace", "ai-implementace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Technologie pro vstřikování nových znalostí do AI modelu bez nutnosti přetrénování.",
      "Metoda zrychlení odpovědí AI modelu přímým vkládáním dat do jeho paměti.",
      "Způsob přenosu promptů mezi různými AI modely pro zachování konzistence.",
    ],
  },

  // ---- AI Nástroje ----
  {
    slug: "chatgpt",
    term: "ChatGPT",
    shortDefinition:
      "Konverzační AI nástroj od společnosti OpenAI, který využívá velké jazykové modely řady GPT pro generování textu, odpovídání na otázky, psaní kódu a řadu dalších úkolů.",
    fullDescription:
      "ChatGPT od OpenAI je pravděpodobně nejznámější AI nástroj na světě, který od svého spuštění v listopadu 2022 zpopularizoval umělou inteligenci mezi širokou veřejností. Využívá modely řady GPT a nabízí konverzační rozhraní, ve kterém můžete klást otázky, zadávat úkoly nebo vést dialog na libovolné téma.\n\nChatGPT je výjimečně všestranný \u2013 pomůže vám s psaním textů, analýzou dat, programováním, překladem, brainstormingem i vzděláváním. V placené verzi (Plus/Pro) nabízí přístup k nejnovějším modelům, generování obrázků přes DALL-E, pokročilou analýzu dat a možnost procházení internetu pro aktuální informace.\n\nPro efektivní využití ChatGPT je klíčové zvládnout prompt engineering \u2013 umět jasně formulovat požadavky a poskytovat dostatek kontextu. Na workshopech ukazujeme, jak z ChatGPT vytěžit maximum pro konkrétní firemní potřeby, od zákaznického servisu po tvorbu marketingového obsahu.",
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
      "AI asistent vyvinutý společností Anthropic, známý svou přesností, bezpečností a schopností pracovat s velmi dlouhými texty díky rozsáhlému kontextovému oknu.",
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
      "Multimodální AI model od Google, který dokáže zpracovávat a generovat text, obrázky, zvuk i video a je integrovaný do ekosystému Google služeb.",
    fullDescription:
      "Gemini je rodina AI modelů vyvinutých společností Google DeepMind. Klíčovou předností Gemini je nativní multimodalita \u2013 model byl od začátku navržen pro práci s různými typy dat: textem, obrázky, zvukem a videem. To mu umožňuje plnit úkoly, které vyžadují porozumění více formátům najednou.\n\nGemini je hluboce integrovaný do ekosystému Google \u2013 najdete ho v Google Workspace (Dokumenty, Tabulky, Gmail), ve vyhledávání i jako samostatného chatbota. Pro uživatele Google služeb to znamená bezproblémovou práci s AI přímo v nástrojích, které už používají denně.\n\nModel je dostupný v několika variantách \u2013 od rychlých a ekonomických po ty nejschopnější. Pro firmy, které už provozují infrastrukturu na Google Cloud, je Gemini přirozenou volbou díky snadné integraci a komplexní sadě nástrojů.",
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
      "AI vyhledávač, který kombinuje vyhledávání na internetu s jazykovým modelem a poskytuje přímé, zdrojované odpovědi místo seznamu odkazů.",
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
  {
    slug: "midjourney",
    term: "Midjourney",
    shortDefinition:
      "AI nástroj specializovaný na generování vysoce kvalitních obrázků z textového popisu. Vyniká vysokou kvalitou a estetikou vizuálních výstupů.",
    fullDescription:
      "Midjourney je jeden z nejpopulárnějších AI nástrojů pro generování obrázků. Na základě textového popisu (promptu) dokáže vytvořit fotorealistické snímky, ilustrace, koncepty produktů, marketingové vizuály nebo umělecká díla. Ovládá se primárně přes Discord nebo vlastní webové rozhraní.\n\nKvalita výstupů Midjourney je často na první pohled nerozeznatelná od fotografií nebo profesionálních ilustrací. To z něj dělá výkonný nástroj pro marketéry, designéry i podnikatele, kteří potřebují vizuální obsah bez nákladů na fotografa nebo grafika. Stačí popsat, co chcete vidět, a Midjourney to vytvoří.\n\nPři práci s Midjourney je klíčový prompt engineering specifický pro obrazovou generaci \u2013 popis kompozice, stylu, osvětlení a nálady. Stejně jako u textových AI platí: čím přesnější zadání, tím lepší výsledek. Je také důležité znát licenční podmínky pro komerční využití generovaných obrázků.",
    category: "nastroje",
    relatedTermSlugs: ["prompt", "multimodalni-ai", "umela-inteligence"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Navigační aplikace s AI, která plánuje optimální trasy na základě aktuální dopravy.",
      "Meditační aplikace využívající AI k přizpůsobení relaxačních cvičení uživateli.",
      "Platforma pro virtuální cestování, kde AI generuje 3D prostředí reálných míst.",
    ],
  },
  {
    slug: "github-copilot",
    term: "GitHub Copilot",
    termEn: "GitHub Copilot",
    shortDefinition:
      "AI asistent pro programování od GitHubu a OpenAI, integrovaný do editoru kódu. Navrhuje celé bloky kódu, doplňuje funkce a pomáhá řešit programátorské problémy v reálném čase.",
    fullDescription:
      "GitHub Copilot je AI nástroj pro vývojáře vytvořený společností GitHub (vlastněnou Microsoftem) ve spolupráci s OpenAI. Funguje jako inteligentní asistent přímo v editoru kódu \u2013 navrhuje dokončení řádků, generuje celé funkce a pomáhá s řešením problémů na základě komentářů a kontextu aktuálního projektu.\n\nCopilot se liší od obecných chatbotů tím, že rozumí programovacím jazykům a kontextu vašeho kódu. Když píšete funkci, Copilot analyzuje název, parametry, okolní kód a komentáře a navrhne implementaci. Podporuje desítky programovacích jazyků a je integrován do VS Code, JetBrains a dalších populárních editorů.\n\nPro vývojáře představuje Copilot výrazné zvýšení produktivity \u2013 podle studie GitHubu vývojáři s Copilotem dokončují úkoly o 55 % rychleji. Pro firmy je to efektivní způsob, jak zrychlit vývoj a snížit počet rutinních programátorských chyb.",
    category: "nastroje",
    relatedTermSlugs: ["vibe-coding", "cursor", "claude-code", "gpt"],
    youtubeVideos: [],
    relatedServiceSlugs: ["mentoring", "webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Autopilot pro drony a bezpilotní letadla vyvinutý společností GitHub.",
      "Verzovací systém s AI, který automaticky slučuje kód od různých vývojářů bez konfliktů.",
      "Online platforma pro párové programování, kde AI spojuje vývojáře podle dovedností.",
    ],
  },

  // ---- AI Agenti ----
  {
    slug: "ai-agent",
    term: "AI Agent",
    termEn: "AI Agent",
    shortDefinition:
      "Autonomní systém poháněný umělou inteligencí, který dokáže samostatně plánovat kroky, používat nástroje a plnit složité úkoly bez průběžného lidského dohledu.",
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
      "Technika (z anglického Retrieval-Augmented Generation), která obohacuje odpovědi AI modelu o informace z externích zdrojů dat a zvyšuje tak přesnost a aktuálnost odpovědí.",
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
      "Proces dotrénování existujícího AI modelu na vlastních specifických datech, čímž se model přizpůsobí konkrétnímu oboru, stylu nebo úkolu.",
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
      "Rozhraní, které umožňuje různým softwarovým aplikacím komunikovat mezi sebou. V kontextu AI slouží k programovému přístupu k jazykovým modelům a jejich integraci do vlastních aplikací.",
    fullDescription:
      "API (Application Programming Interface) je sada pravidel a protokolů, která umožňuje jedné aplikaci využívat funkce jiné aplikace. V kontextu umělé inteligence API umožňuje vývojářům přistupovat k výkonným AI modelům (jako modely GPT, Claude nebo Gemini) přímo z vlastního kódu, bez nutnosti tyto modely provozovat na vlastní infrastruktuře.\n\nV praxi to znamená, že firma může integrovat AI do svého CRM systému, e-shopu nebo interního nástroje. Místo toho, aby zaměstnanci ručně kopírovali texty do ChatGPT, AI zpracovává požadavky automaticky na pozadí \u2013 třeba klasifikuje příchozí e-maily, generuje odpovědi zákazníkům nebo analyzuje data.\n\nPráce s AI API je klíčovou dovedností pro firmy, které chtějí AI nasadit v měřítku. API umožňuje kontrolovat náklady (platíte za spotřebu), zajistit konzistentní chování (přes systémové prompty), integrovat AI do stávajících procesů a automatizovat pracovní postupy. Je to most mezi prototypem v chatovacím okně a skutečným produkčním řešením.",
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
  {
    slug: "mcp",
    term: "MCP",
    termEn: "Model Context Protocol",
    shortDefinition:
      "Otevřený protokol, který umožňuje AI modelům bezpečně se připojovat k externím datovým zdrojům a nástrojům. Standardizuje způsob, jakým AI agenti komunikují s okolním světem.",
    fullDescription:
      "MCP (Model Context Protocol) je otevřený standard vyvinutý společností Anthropic, který definuje, jak mohou AI modely komunikovat s externími systémy \u2013 databázemi, API, soubory, webovými službami a dalšími nástroji. Funguje jako univerzální konektor mezi AI a okolním světem.\n\nBez MCP musí každá integrace AI s externím systémem být vytvořena na míru, což je nákladné a špatně škálovatelné. MCP standardizuje tuto komunikaci podobně, jako USB standardizoval připojení periferií k počítači. AI model připojený přes MCP může bezpečně číst data, spouštět akce a pracovat s nástroji, aniž by vývojář musel pro každý systém psát vlastní integraci.\n\nMCP je klíčový pro budování AI agentů \u2013 autonomních systémů, které potřebují interagovat s reálným světem. Díky MCP může AI agent například vyhledat informace v CRM, vytvořit záznam v databázi nebo odeslat e-mail, to vše přes standardizované rozhraní s definovanými bezpečnostními pravidly.",
    category: "agenti",
    relatedTermSlugs: ["ai-agent", "api", "claude", "claude-code"],
    youtubeVideos: [],
    relatedServiceSlugs: ["ai-implementace", "konzultace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Hlavní řídicí panel pro monitorování výkonu a spolehlivosti AI modelů v produkci.",
      "Certifikace pro firmy, které splňují minimální standardy pro bezpečné nasazení AI.",
      "Kompresní algoritmus pro zmenšení velikosti AI modelů pro mobilní zařízení.",
    ],
  },
  {
    slug: "agentni-workflow",
    term: "Agentní workflow",
    termEn: "Agentic Workflow",
    shortDefinition:
      "Automatizovaný pracovní postup, ve kterém AI agenti samostatně plánují, koordinují a provádějí sérii kroků k dosažení složitého cíle s minimálním lidským zásahem.",
    fullDescription:
      "Agentní workflow je přístup k automatizaci, kde AI agenti neprovádějí jen jednotlivé izolované úkoly, ale řídí celý pracovní postup od začátku do konce. Agent analyzuje cíl, naplánuje kroky, provede je pomocí dostupných nástrojů, vyhodnotí výsledky a v případě potřeby upraví svůj postup.\n\nPříkladem agentního workflow může být proces zpracování objednávky: agent přijme objednávku, ověří dostupnost zboží v systému, zkontroluje bonitu zákazníka, vytvoří fakturu, odešle potvrzení zákazníkovi a aktualizuje skladový systém. Celý tento řetězec kroků proběhne autonomně, s lidským zásahem pouze při výjimečných situacích.\n\nPro firmy agentní workflow představuje budoucnost automatizace \u2013 místo automatizace jednotlivých kroků automatizujete celé procesy. Klíčové je správně navrhnout, kde agent rozhoduje sám a kde eskaluje na člověka, a zajistit průběžný monitoring a logování pro transparentnost.",
    category: "agenti",
    relatedTermSlugs: ["ai-agent", "automatizace", "api", "mcp"],
    youtubeVideos: [],
    relatedServiceSlugs: ["ai-implementace", "konzultace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Projektová metodologie, kde tým pracuje v krátkých sprintech řízených AI manažerem.",
      "Rozvrh směn pro AI systémy, který určuje, kdy který model pracuje a kdy odpočívá.",
      "Pracovní režim, kdy zaměstnanec střídá práci s AI a bez AI v pravidelných intervalech.",
    ],
  },
  {
    slug: "tool-use",
    term: "Tool use",
    termEn: "Tool Use / Function Calling",
    shortDefinition:
      "Základní schopnost moderních AI modelů používat externí nástroje a funkce \u2013 vyhledávat na webu, spouštět kód, volat API nebo pracovat s databázemi \u2013 pro splnění uživatelského požadavku.",
    fullDescription:
      "Tool use (použití nástrojů, někdy též function calling) je schopnost moderních AI modelů rozpoznat, kdy potřebují externí nástroj, vybrat ten správný a zavolat ho se správnými parametry. Místo pouhého generování textu může model aktivně interagovat s vnějším světem.\n\nV praxi to funguje tak, že vývojář definuje sadu dostupných nástrojů (například \u201evyhledej na webu\u201c, \u201epošli e-mail\u201c, \u201espočítej v tabulce\u201c) a model se sám rozhodne, kdy a který nástroj použít. Když se zeptáte \u201ejaké je dnes počasí v Praze?\u201c, model rozpozná, že potřebuje aktuální data, zavolá nástroj pro vyhledávání a na základě výsledku formuluje odpověď.\n\nTool use je základním stavebním kamenem AI agentů a sofistikovanějších AI aplikací. Bez schopnosti používat nástroje by AI modely byly omezeny pouze na to, co se naučily během trénování. S nástroji se stávají skutečnými asistenty, kteří dokáží interagovat s reálnými systémy a plnit praktické úkoly.",
    category: "agenti",
    relatedTermSlugs: ["ai-agent", "api", "mcp", "agentni-workflow"],
    youtubeVideos: [],
    relatedServiceSlugs: ["ai-implementace", "konzultace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Soubor fyzických periferií (klávesnice, myš) potřebných pro ovládání AI rozhraní.",
      "Doba, po kterou AI model aktivně pracuje na úkolu, měřená v minutách.",
      "Funkce AI, která doporučuje uživateli nejvhodnější softwarové nástroje pro jeho práci.",
    ],
  },

  // ---- Vibe Coding ----
  {
    slug: "vibe-coding",
    term: "Vibe Coding",
    shortDefinition:
      "Přístup k tvorbě softwaru, při kterém člověk popisuje v přirozeném jazyce, co chce vytvořit, a AI generuje funkční kód \u2013 programujete konverzací místo psaním kódu.",
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
      "AI-powered editor kódu postavený na VS Code, který umožňuje psát, editovat a refaktorovat kód pomocí konverzace s AI přímo v editoru.",
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
      "Terminálový nástroj od Anthropic, který umožňuje používat AI model Claude přímo v příkazové řádce pro práci s kódem, správu souborů a automatizaci vývojových úkolů.",
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
      "AI nástroj pro tvorbu kompletních webových aplikací z textového popisu \u2013 stačí popsat, co chcete, a vygeneruje se funkční aplikace včetně designu a backendu.",
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
  {
    slug: "replit",
    term: "Replit",
    shortDefinition:
      "Online vývojové prostředí s integrovanou AI, které umožňuje psát, spouštět a nasazovat aplikace přímo v prohlížeči bez nutnosti instalace.",
    fullDescription:
      "Replit je cloudové vývojové prostředí (IDE), které zpřístupňuje programování komukoliv s přístupem k internetu. Na rozdíl od tradičních nástrojů nevyžaduje instalaci softwaru, konfiguraci prostředí ani vlastní server \u2013 vše běží v prohlížeči. S integrovanou AI (Replit Agent) navíc dokáže generovat kód a celé aplikace z textového popisu.\n\nPro vibe coding je Replit atraktivní díky minimální bariéře vstupu. Stačí otevřít prohlížeč, popsat, co chcete vytvořit, a Replit Agent vygeneruje funkční aplikaci. Podporuje desítky programovacích jazyků a frameworků, automaticky řeší závislosti a umožňuje okamžité nasazení aplikace na veřejnou URL adresu.\n\nReplit je ideální pro prototypování, výuku programování a rychlé ověřování nápadů. Pro podnikatele a netechnické uživatele představuje cestu k vlastním aplikacím bez nutnosti najímat vývojáře. Pro zkušené vývojáře je to praktický nástroj pro rychlé experimenty a spolupráci v reálném čase.",
    category: "vibe-coding",
    relatedTermSlugs: ["vibe-coding", "lovable", "cursor", "claude-code"],
    youtubeVideos: [],
    relatedServiceSlugs: ["mentoring", "webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Služba pro automatické opakování a testování AI promptů s různými parametry.",
      "Hudební platforma využívající AI pro remix a úpravu skladeb.",
      "Plugin do prohlížeče, který překládá programovací kód do přirozeného jazyka.",
    ],
  },
  {
    slug: "v0",
    term: "v0",
    shortDefinition:
      "AI nástroj od společnosti Vercel pro generování webových komponent a rozhraní z textového popisu. Vytváří okamžitě použitelný kód v Reactu s moderním designem.",
    fullDescription:
      "v0 (vyslovováno \u201eví-zero\u201c) je AI nástroj vyvinutý společností Vercel, která stojí za populárním frameworkem Next.js. Specializuje se na generování webových uživatelských rozhraní \u2013 stačí popsat, jak má komponenta nebo stránka vypadat, a v0 vygeneruje čistý kód v Reactu s Tailwind CSS.\n\nSíla v0 spočívá v kvalitě generovaného designu a kódu. Na rozdíl od obecných AI nástrojů je v0 optimalizován pro moderní webový design a best practices front-end vývoje. Výsledné komponenty jsou responzivní, přístupné a připravené k okamžitému použití v produkčním projektu.\n\nPro designéry a marketéry je v0 nástrojem pro rychlé prototypování rozhraní bez závislosti na vývojářích. Pro vývojáře urychluje tvorbu UI komponent \u2013 místo ručního kódování layoutu popíší požadovaný výsledek a v0 připraví základ, který pak jen doladí.",
    category: "vibe-coding",
    relatedTermSlugs: ["vibe-coding", "lovable", "cursor"],
    youtubeVideos: [],
    relatedServiceSlugs: ["mentoring", "webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Senzor pro měření rychlosti větru používaný v chytrých meteorologických stanicích.",
      "Rychlost generování textu AI modelem, měřená ve slovech za sekundu.",
      "Typ robota první generace používaný v automatizovaných výrobních linkách.",
    ],
  },
  {
    slug: "bolt",
    term: "Bolt",
    shortDefinition:
      "AI nástroj od StackBlitz pro generování webových aplikací z textového popisu. Unikátně běží kompletně v prohlížeči díky technologii WebContainers, bez nutnosti cloudových serverů.",
    fullDescription:
      "Bolt (od StackBlitz) je AI nástroj, který umožňuje vytvářet kompletní webové aplikace prostřednictvím konverzace s AI. Podobně jako Lovable nebo Replit, Bolt generuje funkční fullstack aplikace z textového popisu \u2013 ale běží kompletně v prohlížeči díky technologii WebContainers, bez nutnosti cloudových serverů.\n\nVýhodou Boltu je rychlost a dostupnost \u2013 celé vývojové prostředí běží lokálně v prohlížeči, což znamená nižší latenci a možnost pracovat i s omezeným připojením. Bolt podporuje populární frameworky jako React, Next.js, Vue a další a umožňuje iterativní vývoj \u2013 popisujete změny a AI je okamžitě aplikuje.\n\nPro podnikatele a kreativce je Bolt rychlou cestou od nápadu k funkčnímu prototypu. Pro vývojáře je to nástroj pro zrychlení rutinní práce \u2013 scaffolding projektů, generování boilerplate kódu nebo rychlé experimenty s novými technologiemi.",
    category: "vibe-coding",
    relatedTermSlugs: ["vibe-coding", "lovable", "replit", "v0"],
    youtubeVideos: [],
    relatedServiceSlugs: ["mentoring", "webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Napájecí adaptér pro rychlé nabíjení AI-optimalizovaných notebooků.",
      "Jednotka měření rychlosti zpracování dat v AI čipech.",
      "Typ síťového konektoru používaného v datových centrech pro připojení AI serverů.",
    ],
  },
  {
    slug: "windsurf",
    term: "Windsurf",
    shortDefinition:
      "AI editor kódu s autonomním agentem Cascade, který dokáže samostatně provádět složité vícekrokové úpravy kódu. Alternativa ke Cursoru a GitHub Copilotu.",
    fullDescription:
      "Windsurf (dříve známý jako Codeium) je AI editor kódu, který konkuruje Cursoru a GitHub Copilotu. Nabízí inteligentní doplňování kódu, generování funkcí z popisu a schopnost provádět komplexní změny napříč celým projektem. Jeho unikátní funkcí je \u201eCascade\u201c \u2013 AI agent, který dokáže autonomně provádět vícekrokové úkoly.\n\nWindsurf se odlišuje důrazem na plynulý vývojářský zážitek \u2013 AI asistence je hluboce integrována do editoru a aktivuje se přirozeně během psaní kódu. Editor rozumí kontextu celého projektu a navrhuje změny, které jsou konzistentní s existujícím kódem.\n\nPro vývojáře zvažující AI-asistovaný vývoj je Windsurf jednou z hlavních alternativ vedle Cursoru a GitHub Copilotu. Nabízí štědrou bezplatnou verzi, což ho dělá přístupným pro jednotlivce a malé týmy, kteří chtějí vyzkoušet AI-asistované programování.",
    category: "vibe-coding",
    relatedTermSlugs: ["vibe-coding", "cursor", "github-copilot", "claude-code"],
    youtubeVideos: [],
    relatedServiceSlugs: ["mentoring", "webinare-a-workshopy"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Sportovní aplikace využívající AI pro analýzu techniky windsurfingu z videa.",
      "Metoda testování AI modelů, kdy se simuluje zatížení jako \u201evlny\u201c požadavků.",
      "Plugin pro webové prohlížeče, který vizuálně zobrazuje tok dat v AI aplikacích.",
    ],
  },

  // ---- Byznys & Strategie ----
  {
    slug: "ai-transformace",
    term: "AI Transformace",
    termEn: "AI Transformation",
    shortDefinition:
      "Strategický proces zavádění umělé inteligence do firemních procesů a rozhodování s cílem zvýšit efektivitu, inovovat produkty a získat konkurenční výhodu.",
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
      "Využití umělé inteligence k převzetí rutinních a opakujících se úkolů, které dříve vyžadovaly lidský zásah, čímž se uvolní kapacita pro kreativnější a strategičtější práci.",
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
      "Ukazatel návratnosti investice do AI projektů \u2013 porovnává náklady na implementaci a provoz AI řešení s přínosy, jako je úspora času, zvýšení efektivity nebo růst tržeb.",
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
  {
    slug: "ai-safety",
    term: "AI Safety",
    termEn: "AI Safety",
    shortDefinition:
      "Obor, který se zabývá zajištěním, aby systémy umělé inteligence fungovaly bezpečně, spolehlivě a v souladu s lidskými hodnotami, bez nežádoucích nebo škodlivých účinků.",
    fullDescription:
      "AI safety (bezpečnost AI) je multidisciplinární obor zaměřený na to, aby AI systémy fungovaly tak, jak mají, a nezpůsobovaly neúmyslné škody. Zahrnuje technické aspekty (robustnost modelů, odolnost vůči manipulaci, spolehlivost výstupů) i společenské otázky (zaujatost, spravedlnost, transparentnost rozhodování).\n\nV praxi AI safety řeší otázky jako: Jak zajistit, že AI chatbot neposkytne nebezpečné rady? Jak zabránit, aby AI systém diskriminoval určité skupiny lidí? Jak zajistit, že autonomní AI agent neprovede akci s nezvratnými následky? Tyto otázky jsou klíčové zejména při nasazování AI v citlivých oblastech jako zdravotnictví, finance nebo právo.\n\nPro firmy je AI safety důležitá nejen z etických důvodů, ale i z obchodních \u2013 incident s nespolehlivou nebo zaujatou AI může poškodit reputaci a vést k právním následkům. Zodpovědné nasazení AI zahrnuje testování na zaujatost, nastavení bezpečnostních mantinelů, lidský dohled nad kritickými rozhodnutími a průběžný monitoring.",
    category: "business",
    relatedTermSlugs: ["umela-inteligence", "ai-governance", "halucinace", "prompt-injection"],
    youtubeVideos: [],
    relatedServiceSlugs: ["konzultace", "ai-implementace"],
    ctaStyle: "subtle",
    quizDistractors: [
      "Fyzické zabezpečení datových center, kde jsou uloženy AI modely, proti vloupání.",
      "Pojištění proti škodám způsobeným umělou inteligencí nabízené specializovanými pojišťovnami.",
      "Antivirový software chránící AI modely před napadením počítačovými viry.",
    ],
  },
  {
    slug: "ai-governance",
    term: "AI Governance",
    termEn: "AI Governance",
    shortDefinition:
      "Soubor pravidel, politik a procesů pro řízení vývoje a nasazování AI v organizaci. Zajišťuje odpovědné, transparentní a zákonné využívání umělé inteligence.",
    fullDescription:
      "AI governance (řízení AI, správa AI) je framework pravidel a procesů, který definuje, jak firma nebo organizace vyvíjí, nasazuje a monitoruje AI systémy. Zahrnuje interní politiky, role a odpovědnosti, etické zásady a zajištění souladu s legislativou \u2013 zejména s EU AI Act.\n\nV praxi AI governance odpovídá na otázky: Kdo ve firmě schvaluje nasazení nového AI nástroje? Jaká data smíme používat pro trénování? Kdo je zodpovědný, když AI udělá chybu? Jak dokumentujeme rozhodnutí AI systémů? Jak zajistíme ochranu osobních údajů? Tyto otázky jsou stále důležitější s rostoucím využitím AI v byznysu.\n\nEU AI Act přináší pro firmy konkrétní povinnosti podle rizikovosti AI systémů. Firmy, které začnou budovat AI governance dříve, budou lépe připraveny na regulatorní požadavky a zároveň získají důvěru zákazníků a partnerů v odpovědné zacházení s AI.",
    category: "business",
    relatedTermSlugs: ["ai-safety", "ai-transformace", "umela-inteligence"],
    youtubeVideos: [],
    relatedServiceSlugs: ["konzultace", "ai-implementace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Státní úřad zodpovědný za udělování licencí k provozování AI systémů.",
      "Politický systém, ve kterém rozhodnutí vlády činí umělá inteligence místo lidí.",
      "Rada složená z AI modelů, která autonomně řídí strategii technologických firem.",
    ],
  },
  {
    slug: "ai-gramotnost",
    term: "AI gramotnost",
    termEn: "AI Literacy",
    shortDefinition:
      "Schopnost porozumět základním principům umělé inteligence, efektivně používat AI nástroje a kriticky hodnotit jejich výstupy. Klíčová dovednost pro moderní pracovní trh.",
    fullDescription:
      "AI gramotnost je soubor znalostí a dovedností potřebných pro efektivní a zodpovědné využívání umělé inteligence. Neznamená nutně umět programovat nebo rozumět matematice za neuronovými sítěmi \u2013 jde spíše o praktické pochopení toho, co AI umí a neumí, jak s ní efektivně komunikovat a jak kriticky hodnotit její výstupy.\n\nAI gramotnost zahrnuje: porozumění základním konceptům (co je LLM, jak funguje prompt), praktické dovednosti (efektivní formulace promptů, výběr správného nástroje pro daný úkol), kritické myšlení (rozpoznání halucinací, ověřování faktů, pochopení omezení) a etické povědomí (ochrana dat, autorská práva, zodpovědné využívání).\n\nPro firmy je budování AI gramotnosti zaměstnanců strategickou investicí. Týmy s vyšší AI gramotností dokáží lépe identifikovat příležitosti pro využití AI, efektivněji pracovat s AI nástroji a minimalizovat rizika. EU AI Act navíc AI gramotnost explicitně vyžaduje od organizací nasazujících AI systémy.",
    category: "business",
    relatedTermSlugs: ["umela-inteligence", "prompt", "ai-transformace", "halucinace"],
    youtubeVideos: [],
    relatedServiceSlugs: ["webinare-a-workshopy", "mentoring", "konzultace"],
    ctaStyle: "prominent",
    quizDistractors: [
      "Schopnost AI modelu číst a zpracovávat dokumenty v různých jazycích a formátech.",
      "Certifikát prokazující, že zaměstnanec absolvoval základní kurz práce s AI.",
      "Metrika měřící, kolik procent firemní komunikace je generováno umělou inteligencí.",
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

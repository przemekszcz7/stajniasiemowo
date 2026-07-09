export interface OfferItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  details: string[];
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  url: string;
  alt: string;
  category: 'nauka' | 'teren' | 'kuce' | 'stajnia';
  title?: string;
}

export const STABLE_INFO = {
  name: "Stajnia Siemowo",
  owner: "Anna Stróżyńska",
  tagline: "Pasja do koni zaczyna się tutaj",
  description: "Stajnia Siemowo to miejsce stworzone z miłości do koni i jeździectwa. Zapraszamy dzieci, dorosłych oraz wszystkich, którzy chcą rozpocząć swoją przygodę z końmi lub rozwijać swoje umiejętności.",
  summary: "Nauka jazdy konnej dla dzieci i dorosłych. Jazdy dla początkujących oraz zaawansowanych. Dla bardziej doświadczonych jeźdźców organizujemy wyjazdy w teren — blisko lasu i jeziora. W każdą sobotę zapraszamy najmłodszych na oprowadzanki po lesie na kucach.",
  address: "Siemowo, Gostyń gmina, 63-800, Wielkopolska",
  phone: "+48 600 123 456", // placeholder format with clear prompt that it's a contact option or they can use email, we'll make email very prominent and include phone contact option elegantly
  email: "klarakonik80@gmail.com",
  logoUrl: "https://i.ibb.co/rG2GV51y/302437102-524077793050600-2068061118257097690-n.jpg",
  heroBgUrl: "https://i.ibb.co/TxsdxBts/475770887-1166516902140016-4230739752707243189-n.jpg",
  workingHours: "Pon - Sob: 8:00 - 19:00, Sobota (Oprowadzanki): 10:00 - 14:00"
};

export const OFFERS: OfferItem[] = [
  {
    id: "nauka-jazdy",
    title: "Nauka jazdy konnej",
    description: "Zajęcia dla dzieci i dorosłych, zarówno dla osób początkujących, jak i bardziej zaawansowanych.",
    iconName: "Compass",
    badge: "Dla każdego",
    details: [
      "Indywidualne podejście instruktora",
      "Nauka prawidłowego dosiadu i powodowania koniem",
      "Treningi dostosowane do stopnia zaawansowania",
      "Teoria i praktyka pielęgnacji koni"
    ]
  },
  {
    id: "poczatkujacy",
    title: "Jazdy dla początkujących",
    description: "Bezpieczne pierwsze kroki w świecie koni pod czujnym okiem doświadczonego instruktora.",
    iconName: "ShieldCheck",
    badge: "Bezpieczeństwo",
    details: [
      "Jazdy na lonży dla pełnego bezpieczeństwa",
      "Poznanie mowy ciała koni",
      "Łagodne i cierpliwe konie idealne do nauki",
      "Budowanie pewności siebie w siodle"
    ]
  },
  {
    id: "terenowe",
    title: "Jazdy terenowe",
    description: "Dla doświadczonych jeźdźców możliwość wyjazdów w teren po pięknych okolicznych trasach, blisko lasów i jeziora.",
    iconName: "Trees",
    badge: "Przygoda",
    details: [
      "Malownicze trasy wokół Siemowa",
      "Bliskość lasów, łąk i jeziora",
      "Wspaniały relaks na łonie natury",
      "Opieka przewodnika na trasie"
    ]
  },
  {
    id: "oprowadzanki",
    title: "Oprowadzanki dla najmłodszych",
    description: "W każdą sobotę dzieci mogą poznać konie podczas spokojnych przejażdżek na kucach po lesie.",
    iconName: "Sparkles",
    badge: "Dla dzieci",
    details: [
      "Sobotnie spacery po leśnych ścieżkach",
      "Przyjazne, spokojne kucyki",
      "Świetny sposób na zapoznanie malucha z końmi",
      "Bezpieczna asysta instruktora prowadzącego kuca"
    ]
  }
];

export const WHY_US: WhyUsItem[] = [
  {
    id: "indiv",
    title: "Indywidualne podejście do każdego jeźdźca",
    description: "Dbamy o to, aby każdy czuł się komfortowo i uczył się we własnym tempie. Nasze lekcje są szyte na miarę potrzeb każdego ucznia."
  },
  {
    id: "safe",
    title: "Bezpieczna nauka jazdy konnej",
    description: "Bezpieczeństwo jest u nas na pierwszym miejscu. Pracujemy na sprawdzonym sprzęcie, a nasi instruktorzy czuwają nad każdym krokiem."
  },
  {
    id: "calm",
    title: "Kontakt z końmi w spokojnej atmosferze",
    description: "Nasza stajnia to oaza spokoju, z dala od zgiełku miasta. Konie żyją w harmonii z naturą, co przekłada się na ich zrównoważony charakter."
  },
  {
    id: "nature",
    title: "Piękne tereny do jazdy",
    description: "Sąsiadujemy bezpośrednio z malowniczymi lasami i jeziorami, co daje nieograniczone możliwości wyjazdów w zapierające dech w piersiach tereny."
  },
  {
    id: "all-ages",
    title: "Oferta dla dzieci i dorosłych",
    description: "Łączymy pokolenia wokół wspólnej pasji. Mamy konie i programy zajęć odpowiednie zarówno dla małych dzieci, jak i dla dorosłych."
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    url: "https://i.ibb.co/ym7Dkv4z/484478248-1203171778474528-5349830751159715561-n.jpg",
    alt: "Trening jeździecki na ujeżdżalni w Stajni Siemowo",
    category: "nauka",
    title: "Nauka i treningi"
  },
  {
    url: "https://i.ibb.co/1YfytRw1/485302507-1203171818474524-5825139839578129211-n.jpg",
    alt: "Wyjazd w malowniczy teren w otoczeniu natury",
    category: "teren",
    title: "Leśne wyjazdy"
  },
  {
    url: "https://i.ibb.co/N2zTxYSW/484955919-1204200191705020-5415139818980477807-n.jpg",
    alt: "Uczestnicy zajęć przygotowujący konie w stajni",
    category: "stajnia",
    title: "Życie stajni"
  },
  {
    url: "https://i.ibb.co/0HsSWy6/485139717-1204200341705005-4296116545490806733-n.jpg",
    alt: "Dziecko czyszczące kuca przed przejażdżką",
    category: "kuce",
    title: "Kuce i najmłodsi"
  },
  {
    url: "https://i.ibb.co/zTLzQpnM/484999732-1204200328371673-3324317984343924923-n.jpg",
    alt: "Spokojne konie pasące się na zielonych padokach",
    category: "stajnia",
    title: "Nasze padoki"
  },
  {
    url: "https://i.ibb.co/1tByJ73f/468124960-18109810342440999-8615975783979184902-n.jpg",
    alt: "Zimowy lub jesienny klimat w Stajni Siemowo",
    category: "teren",
    title: "Uroki pór roku"
  },
  {
    url: "https://i.ibb.co/4ZbL7FXG/467866136-18109810147440999-3946298674940238514-n.jpg",
    alt: "Koń w stajni o przyjaznym spojrzeniu",
    category: "stajnia",
    title: "Nasi kopytni przyjaciele"
  },
  {
    url: "https://i.ibb.co/gbRzcW84/468215891-18109810438440999-2363148588295129069-n.jpg",
    alt: "Jesienny spacer konny leśną ścieżką",
    category: "teren",
    title: "Ścieżki leśne"
  },
  {
    url: "https://i.ibb.co/F4t9ZxQq/486314902-1209947241130315-6959933201240757932-n.jpg",
    alt: "Zadowolona amazonka na koniu",
    category: "nauka",
    title: "Radość z jazdy"
  },
  {
    url: "https://i.ibb.co/7NB2wC2S/486825858-1209947461130293-4826526580326368002-n.jpg",
    alt: "Koleżeńska atmosfera i wspólna pasja",
    category: "stajnia",
    title: "Jeździecka społeczność"
  }
];

export const SEO_KEYWORDS = [
  "jazda konna Gostyń",
  "stajnia Gostyń",
  "nauka jazdy konnej dla dzieci",
  "jazda konna Wielkopolska",
  "Stajnia Siemowo",
  "Anna Stróżyńska Gostyń",
  "kucyki Gostyń",
  "oprowadzanki po lesie"
];

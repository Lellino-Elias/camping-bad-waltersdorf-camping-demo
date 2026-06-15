import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-bad-waltersdorf";

const campingBadWaltersdorf: CampsiteConfig = {
  name: "Thermenland Camping Bad Waltersdorf",
  shortName: "Thermenland",
  slug: "camping-bad-waltersdorf",
  ort: "Bad Waltersdorf",
  region: "Steiermark",
  brandKind: "Camping",
  regionLong: "Thermen- & Vulkanland · Oststeiermark · Österreich",

  heroVariant: "center",

  claim: "Thermenglück und Oldtimer-Charme im Grünen",
  claimEmphasis: "Oldtimer-Charme",
  emailDetail: "euer Oldtimer-Bus Trude und das Steyr-Cabrio Hedwig",
  intro:
    "Familiär geführt am Safenbach, nur 800 Meter von der Heiltherme entfernt und mit einer Oldtimer-Flotte, die dich durchs Thermenland kutschiert — hier wird Urlaub persönlich genommen.",

  statement: {
    text: "Vom Stellplatz ins Thermalwasser sind es 800 Meter — den Rest erledigt unser Gratistaxi.",
    emphasis: "800 Meter",
  },

  pillars: [
    {
      title: "Thermenwelt vor der Tür",
      text: "Heiltherme (800 m) und H2O-Therme (2,5 km) bringen dich auf kurzem Weg ins warme Wasser — gefahren wirst du gratis.",
      image: { src: `${IMG}/gallery-09c3fb02b1.webp`, alt: "Heiltherme Bad Waltersdorf in der Abenddämmerung" },
    },
    {
      title: "Unsere Oldtimer-Flotte",
      text: "Mit dem Oldie-Bus Trude, dem Steyr-Cabrio Hedwig und dem Oldie-Traktor geht es auf Ausfahrt in die Umgebung.",
      image: { src: `${IMG}/gallery-21f9ecb0a3.webp`, alt: "Historischer Oldtimer-Bus der Familie Rath auf Ausfahrt" },
    },
    {
      title: "Hier kennt man sich noch",
      text: "Die Familien Rath & Pichler kümmern sich persönlich um ihre Gäste — viele kommen Jahr für Jahr wieder.",
      image: { src: `${IMG}/gallery-d1e1990029.webp`, alt: "Gut gelaunte Gäste auf einer Oldtimer-Ausfahrt" },
    },
  ],

  usps: [
    "Ganzjährig geöffnet",
    "800 m zur Heiltherme",
    "Gratis-Taxi zur Therme",
    "98 ebene Stellplätze",
    "Gratis-WLAN",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Drei Thermen, eine Oldtimer-Flotte, ein Platz",
    headingEmphasis: "eine Oldtimer-Flotte",
    intro:
      "Auf 290 m Seehöhe, mitten im milden oststeirischen Thermenland: 98 ebene Stellplätze am Safenbach, von Bäumen umgeben, persönlich von der Familie geführt — und drei Thermen in nächster Nähe.",
  },

  awards: [
    { label: "ADAC Empfohlen 2025" },
    { label: "Ausgezeichnet von camping.info" },
  ],

  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-6b459daee3.webp`, alt: "Die Oldtimer-Busse Trude und Hedwig auf dem Campingplatz Bad Waltersdorf" },
  },

  breather: {
    image: { src: `${IMG}/gallery-ec3f6904ce.webp`, alt: "Hundertwasser-Therme Rogner Bad Blumau im Thermenland" },
    line: "Im Thermenland ist das Wohlfühlen nur einen Katzensprung entfernt.",
  },

  camping: {
    heading: "Der Platz am Safenbach",
    intro:
      "98 ebene, begrünte Stellplätze mit Wasser und Strom, ringsum Bäume und der Safenbach — dazu Shop mit Brötchenservice, Aufenthaltsraum und ein großer Spielplatz.",
    features: [
      {
        title: "98 Plätze im Grünen",
        text: "Ebene, geschotterte und begrünte Stellplätze am romantischen Safenbach, von drei Seiten von Bäumen und Sträuchern umgeben.",
        image: { src: `${IMG}/platz-familie-wiese.webp`, alt: "Familie entspannt auf der grünen Wiese vor dem Wohnmobil am Campingplatz Bad Waltersdorf" },
      },
      {
        title: "ADAC-empfohlene Stellplätze",
        text: "Gepflegte Plätze mit Wasser-, Strom- und teils Abwasseranschluss — vom ADAC empfohlen und auf camping.info top bewertet.",
        image: { src: `${IMG}/award-c7dab8f9e9.png`, alt: "ADAC-empfohlener Stellplatz am Thermenland Camping Bad Waltersdorf mit Wohnmobil und grüner Wiese" },
      },
      {
        title: "Frühstück wie zuhause",
        text: "Im Shop gibt es täglich frische Brötchen, Zeitungen und regionale Spezialitäten vom Bauern — Kernöl, Honig, Geselchtes und mehr.",
        image: { src: `${IMG}/award-954f1c2338.png`, alt: "Gäste beim Frühstück vor ihrem Campingbus" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Unterwegs mit Trude, Hedwig & Co.",
    intro:
      "Das Wochenprogramm führt mit den Oldtimern in die Umgebung, zu Buschenschänken und über die Rad- und Wanderwege, die direkt am Platz vorbeiführen.",
    items: [
      {
        title: "Ausflüge mit dem Oldie-Bus",
        text: "Mit dem restaurierten Oldie-Bus Trude geht es auf gemütliche Ausfahrten durch das Thermen- und Vulkanland.",
        image: { src: `${IMG}/gallery-dcdfd4214f.webp`, alt: "Oldtimer-Bus Trude der Familie Rath beim Buschenschank-Ausflug im Frühling" },
      },
      {
        title: "Oldie-Traktor zum Buschenschank",
        text: "Der Oldtimer-Traktor mit Planwagen kutschiert dich zu den heimischen Buschenschänken der Oststeiermark.",
        image: { src: `${IMG}/gallery-deca660ff1.webp`, alt: "Oldtimer-Traktor mit überdachtem Planwagen am Campingplatz" },
      },
      {
        title: "Geführte Wander- & Radtouren",
        text: "Wunderschöne Rad- und Wanderwege führen direkt am Platz vorbei — durch Apfelgärten und Weinstraßen, gerne auch geführt.",
        image: { src: `${IMG}/gallery-48319c6b5b.webp`, alt: "Geführte Wanderung durch die Apfelgärten bei Bad Waltersdorf" },
      },
      {
        title: "Steirische Buschenschank-Kultur",
        text: "Schlösser, Weinstraßen und urige Buschenschänken in der Umgebung laden zu Ausflügen in die oststeirische Tradition ein.",
        image: { src: `${IMG}/gallery-61b8cc1214.webp`, alt: "Historisches Rauchstubenhaus als Ausflugsziel in der Oststeiermark" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Thermenland",
    modes: [
      { title: "Mit dem Auto", text: "Über die A2 Süd Autobahn bis zur Abfahrt Sebersdorf, dann wenige Minuten nach Bad Waltersdorf — der Campingweg ist beschildert." },
      { title: "Mit der Bahn", text: "Bahnhof Bad Waltersdorf an der Thermenbahn, von dort sind es nur wenige Minuten zum Platz — Abholung auf Anfrage." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Graz liegt rund 60 km entfernt — etwa eine Stunde mit dem Auto." },
    ],
  },

  galerie: {
    heading: "Impressionen aus dem Thermenland",
    headingEmphasis: "Thermenland",
    intro: "Oldtimer-Ausfahrten, Buschenschank-Stimmung und urige Ausflugsziele — ein paar Eindrücke aus dem Camping-Jahr.",
    tag: "Ganzjährig geöffnet",
    images: [
      { src: `${IMG}/gallery-668272c88a.webp`, alt: "Oldtimer-Traktor mit Planwagen auf dem Campingplatz" },
      { src: `${IMG}/gallery-81b02147a3.webp`, alt: "Nostalgischer Greißlerladen als Ausflugsziel in der Region" },
      { src: `${IMG}/gallery-7c33fb9284.webp`, alt: "Historische Bauernstube in einem oststeirischen Museum" },
      { src: `${IMG}/gallery-9d6a3ebb22.webp`, alt: "Kinder spielen auf der Wiese vor dem Wohnmobil am Campingplatz Bad Waltersdorf" },
      { src: `${IMG}/gallery-d9849bcfd7.webp`, alt: "Rogner Bad Blumau Therme mit dem markanten Hundertwasser-Außenpool" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz im Thermenland",
    headingEmphasis: "im Thermenland",
    intro: "Sag uns Zeitraum und Personenzahl — die Familien Rath & Pichler melden sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote: "Hauptsaison 2026 · Stellplatz inkl. 2 Erwachsene · zzgl. Energiebeitrag € 1,50 p. P., Kur- und Fremdenverkehrsabgabe sowie Strom nach Verbrauch",
    highlight: { title: "Gratis-Taxi zur Therme", text: "Zur Heiltherme (800 m) und zur H2O-Therme bringt dich unser Taxi kostenlos." },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Hauptsaison)", perNight: 28.9, perExtraGuest: 9.5 },
      { id: "aktion", label: "Aktion ab 6 Nächte", perNight: 22.9 },
    ],
  },

  kontakt: {
    tel: "+43 664 3117000",
    telHref: "tel:+436643117000",
    mail: "thermenland@camping-bad-waltersdorf.at",
    adresse: "Campingweg 316 · 8271 Bad Waltersdorf · Steiermark",
    coords: { lat: 47.16258, lng: 16.02285 },
  },

  languages: ["DE"],

  nav: [
    { label: "Der Platz", href: "#camping" },
    { label: "Erlebnis", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingBadWaltersdorf;

export type ProjectStackItem = {
  label: string;
  icon: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
  icon: "doc" | "layers" | "bolt";
};

export type ProjectKind = "web" | "cms" | "dashboards" | "tools";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  kind: ProjectKind;
  tags: string[];
  stack: ProjectStackItem[];
  features: ProjectFeature[];
  images: string[];
  href?: string;
  repo?: string;
  year: string;
};

export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "cms", label: "CMS" },
  { id: "dashboards", label: "Dashboards" },
  { id: "tools", label: "Tools" },
] as const;

export type ProjectFilterId = (typeof projectFilters)[number]["id"];

export const projects: Project[] = [
  {
    slug: "garden-room-planner",
    title: "GardenRoomPlanner",
    summary:
      "A browser configurator that designs a garden room in 3D and prices it as the plan changes.",
    description:
      "GardenRoomPlanner is a design tool for homeowners, designers, and builders. Style, footprint, windows, cladding, and furniture all update one 3D model, and a guide price recalculates with every change so a quote does not start in a spreadsheet.",
    category: "Tool · 3D Configurator",
    kind: "tools",
    tags: ["Three.js", "React", "TypeScript"],
    stack: [
      { label: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/FFFFFF" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Live 3D Model",
        description: "Style, doors, and furniture update the room in place.",
        icon: "layers",
      },
      {
        title: "Instant Guide Price",
        description: "Width, finish, and fittings recalculate a quote as you design.",
        icon: "bolt",
      },
      {
        title: "Step-by-step Plan",
        description: "From style through electrics, one catalog at a time.",
        icon: "doc",
      },
    ],
    images: [
      "/images/garden-room-planner/landing.jpg",
      "/images/garden-room-planner/style.png",
      "/images/garden-room-planner/windows.png",
      "/images/garden-room-planner/furniture.png",
      "/images/garden-room-planner/price.png",
    ],
    year: "2024",
  },
  {
    slug: "homelister",
    title: "Homelister",
    summary:
      "A real estate platform for selling with a flat fee and searching homes on a map.",
    description:
      "Homelister is a site for buying and selling homes. Sellers see what a flat fee saves against a percentage commission, then list, stage, and show the house. Buyers search by address and browse listings on a map, with the same flow on desktop and phone.",
    category: "Real Estate Platform",
    kind: "web",
    tags: ["Next.js", "React", "TypeScript"],
    stack: [
      { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/EDEDED" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Flat-fee Selling",
        description: "A fixed fee instead of a percentage of the sale price.",
        icon: "bolt",
      },
      {
        title: "Savings Calculator",
        description: "Slide a home value and see what stays in the seller's pocket.",
        icon: "doc",
      },
      {
        title: "Map Listings",
        description: "Search a city and browse homes for sale on the map.",
        icon: "layers",
      },
    ],
    images: [
      "/images/homelister/mockup.jpg",
      "/images/homelister/hero.jpg",
      "/images/homelister/features.jpg",
      "/images/homelister/stats.jpg",
      "/images/homelister/how-it-works.jpg",
      "/images/homelister/listings.jpg",
    ],
    year: "2023",
  },
  {
    slug: "mulher360",
    title: "Mulher360",
    summary:
      "A wellness site for integrative nutrition, built to book a consultation and explain the care.",
    description:
      "Mulher360 is a site for a women's nutrition practice. It introduces the method, the areas of care, and a four-step path from first contact to follow-up. Visitors can read transformation stories, open common questions, and book a consultation from any page.",
    category: "Wellness Website",
    kind: "web",
    tags: ["Astro", "React", "TypeScript"],
    stack: [
      { label: "Astro", icon: "https://cdn.simpleicons.org/astro/FF5D01" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Consultation Booking",
        description: "A clear path to schedule from the hero and every section.",
        icon: "bolt",
      },
      {
        title: "Care Story",
        description: "Method, approach, and a four-step process on one site.",
        icon: "doc",
      },
      {
        title: "Stories and FAQ",
        description: "Client stories and common questions before the first visit.",
        icon: "layers",
      },
    ],
    images: [
      "/images/mulher360/mockup.jpg",
      "/images/mulher360/hero.png",
      "/images/mulher360/about.png",
      "/images/mulher360/approach.png",
      "/images/mulher360/process.png",
      "/images/mulher360/stories.png",
      "/images/mulher360/faq.png",
    ],
    year: "2024",
  },
  {
    slug: "splinterlands",
    title: "Splinterlands",
    summary:
      "A marketing site for a collectible card game, from the first battle to owning the cards.",
    description:
      "Splinterlands is the public site for a play-to-earn card game. It opens on a play call, then walks through the latest card set, the six elements, and a path from wagon to academy to arena. News sits under the hero so returning players can jump back in.",
    category: "Game Website",
    kind: "web",
    tags: ["React", "TypeScript", "Vite"],
    stack: [
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { label: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
    ],
    features: [
      {
        title: "Play Entry",
        description: "A direct path into the game from the hero and the closing panel.",
        icon: "bolt",
      },
      {
        title: "Card World",
        description: "Sets, elements, and decks explained on the same page.",
        icon: "layers",
      },
      {
        title: "Player Path",
        description: "Wagon, academy, and arena as the first three steps.",
        icon: "doc",
      },
    ],
    images: [
      "/images/splinterlands/mockup.jpg",
      "/images/splinterlands/hero.jpg",
      "/images/splinterlands/conclave.jpg",
      "/images/splinterlands/path.jpg",
      "/images/splinterlands/elements.jpg",
      "/images/splinterlands/adventure.jpg",
    ],
    year: "2024",
  },
  {
    slug: "tcgroll",
    title: "TCGRoll",
    summary:
      "A case-opening platform where virtual packs reveal real trading cards that can ship.",
    description:
      "TCGRoll lets collectors open virtual cases across Pokémon, One Piece, Magic: The Gathering, and Dragon Ball. Each case shows its price, odds, and cards. A library filters the full set, and tokens — topped up by card — are what open the case.",
    category: "TCG Platform",
    kind: "web",
    tags: ["Next.js", "TypeScript", "Stripe"],
    stack: [
      { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/EDEDED" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { label: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
    ],
    features: [
      {
        title: "Virtual Cases",
        description: "Priced cases by game, with odds shown before the open.",
        icon: "bolt",
      },
      {
        title: "Card Library",
        description: "Every card, filtered by game and rarity, with pull rates.",
        icon: "layers",
      },
      {
        title: "Real Shipping",
        description: "Pulled cards can leave the collection and ship to the door.",
        icon: "doc",
      },
    ],
    images: [
      "/images/tcgroll/mockup.jpg",
      "/images/tcgroll/hero.jpg",
      "/images/tcgroll/featured.jpg",
      "/images/tcgroll/pokemon.jpg",
      "/images/tcgroll/one-piece.jpg",
      "/images/tcgroll/magic.jpg",
      "/images/tcgroll/library.jpg",
      "/images/tcgroll/how-it-works.png",
    ],
    year: "2024",
  },
  {
    slug: "puredaki",
    title: "Puredaki",
    summary:
      "A store for custom anime body pillows, browsed by character and shipped discreetly.",
    description:
      "Puredaki is a shop for dakimakura covers and inserts. Fans search by character or an A–Z list, then pick a cover, fabric, and size. The page explains the print, the cloth, and how orders leave in plain packaging.",
    category: "Anime Store",
    kind: "web",
    tags: ["Next.js", "React", "Stripe"],
    stack: [
      { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/EDEDED" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
    ],
    features: [
      {
        title: "Character Catalog",
        description: "Search or step through an A–Z list of covers.",
        icon: "layers",
      },
      {
        title: "Print and Fabric",
        description: "Cover, insert, cloth, and size chosen before checkout.",
        icon: "doc",
      },
      {
        title: "Discreet Shipping",
        description: "Orders leave in plain packaging with no product on the label.",
        icon: "bolt",
      },
    ],
    images: [
      "/images/puredaki/mockup.jpg",
      "/images/puredaki/hero.jpg",
      "/images/puredaki/why.png",
      "/images/puredaki/popular.png",
      "/images/puredaki/characters.png",
      "/images/puredaki/products.png",
      "/images/puredaki/guide.png",
    ],
    year: "2023",
  },
  {
    slug: "animesales",
    title: "AnimeSales",
    summary:
      "An apparel shop for anime streetwear, with sales, series collections, and customer reviews.",
    description:
      "AnimeSales sells tees, hoodies, pants, and sets built around anime series. Shoppers browse by show, catch flash sales, and read photo reviews before they buy. Currency and language sit in the header so the same catalog can sell beyond one market.",
    category: "Apparel Store",
    kind: "web",
    tags: ["Shopify", "React", "TypeScript"],
    stack: [
      { label: "Shopify", icon: "https://cdn.simpleicons.org/shopify/7AB55C" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Shop by Series",
        description: "Collections grouped by anime, from tees to full sets.",
        icon: "layers",
      },
      {
        title: "Flash Sales",
        description: "Marked-down arrivals and limited offers on the homepage.",
        icon: "bolt",
      },
      {
        title: "Photo Reviews",
        description: "Buyers show the fit before the next order.",
        icon: "doc",
      },
    ],
    images: [
      "/images/animesales/mockup.jpg",
      "/images/animesales/hero.jpg",
      "/images/animesales/shop.png",
      "/images/animesales/pants.png",
      "/images/animesales/sale.png",
      "/images/animesales/sets.png",
      "/images/animesales/story.png",
      "/images/animesales/reviews.jpg",
      "/images/animesales/looks.jpg",
    ],
    year: "2025",
  },
  {
    slug: "ishq-gems",
    title: "ISHQ Gems",
    summary:
      "A marketplace for certified gemstones and jewelry, with stores for buyers and sellers.",
    description:
      "ISHQ Gems connects collectors with verified sellers of loose stones and finished jewelry. Buyers browse by gem or piece, read a birthstone guide, and request a quote. Sellers join with a fee structure, secure checkout, and tools to reach buyers outside Sri Lanka.",
    category: "Gemstone Marketplace",
    kind: "web",
    tags: ["Next.js", "TypeScript", "Stripe"],
    stack: [
      { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/EDEDED" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { label: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
    ],
    features: [
      {
        title: "Gem Catalog",
        description: "Stones and jewelry grouped by type, with new arrivals up front.",
        icon: "layers",
      },
      {
        title: "Seller Marketplace",
        description: "Stores, fees, and a path for sellers to reach global buyers.",
        icon: "bolt",
      },
      {
        title: "Stone Guides",
        description: "Birthstone pages with color, hardness, and meaning.",
        icon: "doc",
      },
    ],
    images: [
      "/images/ishq-gems/mockup.jpg",
      "/images/ishq-gems/hero.jpg",
      "/images/ishq-gems/categories.jpg",
      "/images/ishq-gems/arrivals.jpg",
      "/images/ishq-gems/sapphire.png",
      "/images/ishq-gems/heritage.png",
      "/images/ishq-gems/sellers.png",
      "/images/ishq-gems/reviews.png",
      "/images/ishq-gems/footer.png",
    ],
    year: "2024",
  },
  {
    slug: "gameon",
    title: "GameON",
    summary:
      "A gaming store for peripherals, racing gear, and PC parts, priced in rupees with cash on delivery.",
    description:
      "GameON sells mice, keyboards, wheels, monitors, and PC components for players in Pakistan. Categories and brand rows lead into product grids with sale prices, and filters cover price and type. Delivery, cash on delivery, and a weekly deals block sit beside the catalog.",
    category: "Gaming Store",
    kind: "web",
    tags: ["Next.js", "React", "TypeScript"],
    stack: [
      { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/EDEDED" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Gear Catalog",
        description: "Peripherals, racing kits, displays, and PC parts in one shop.",
        icon: "layers",
      },
      {
        title: "Weekly Deals",
        description: "Flash prices and limited-time offers on the product grids.",
        icon: "bolt",
      },
      {
        title: "Local Checkout",
        description: "Nationwide delivery and cash on delivery across Pakistan.",
        icon: "doc",
      },
    ],
    images: [
      "/images/gameon/mockup.jpg",
      "/images/gameon/hero.jpg",
      "/images/gameon/categories.png",
      "/images/gameon/deals.png",
      "/images/gameon/peripherals.png",
      "/images/gameon/driving.png",
      "/images/gameon/displays.png",
      "/images/gameon/components.png",
      "/images/gameon/wheels.png",
      "/images/gameon/reviews.png",
      "/images/gameon/footer.png",
    ],
    year: "2023",
  },
  {
    slug: "zuma",
    title: "Zuma",
    summary:
      "A site for a contemporary Japanese restaurant group, with locations, the story, and a table reservation.",
    description:
      "Zuma introduces the restaurants, the kitchens, and the cities they sit in. Visitors move from the dining story to a location list, then into events and a reservation. The same pages cover the team and the press that sits behind the brand.",
    category: "Restaurant Website",
    kind: "web",
    tags: ["Astro", "React", "TypeScript"],
    stack: [
      { label: "Astro", icon: "https://cdn.simpleicons.org/astro/FF5D01" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Location Finder",
        description: "Restaurants grouped so a guest can find the nearest room.",
        icon: "layers",
      },
      {
        title: "Table Reservation",
        description: "A direct path from the hero to booking a table.",
        icon: "bolt",
      },
      {
        title: "Brand Story",
        description: "The kitchens, the team, and the press on one site.",
        icon: "doc",
      },
    ],
    images: [
      "/images/zuma/mockup.jpg",
      "/images/zuma/locations.jpg",
      "/images/zuma/dining.png",
      "/images/zuma/menu.jpg",
      "/images/zuma/story.jpg",
      "/images/zuma/team.jpg",
      "/images/zuma/press.png",
    ],
    year: "2024",
  },
  {
    slug: "tigertracks",
    title: "TigerTracks",
    summary:
      "A performance marketing site that turns a revenue leak into a diagnostic, then into full-funnel work.",
    description:
      "TigerTracks is the site for a growth team that starts with a strategic diagnostic. Capabilities cover paid media, creative, conversion, analytics, organic, and lifecycle. Case results, an AI tools page, and a path for fund partners sit on the same system.",
    category: "Marketing Agency",
    kind: "web",
    tags: ["Next.js", "React", "TypeScript"],
    stack: [
      { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/EDEDED" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Strategic Diagnostic",
        description: "A first call that looks for where revenue is leaking.",
        icon: "bolt",
      },
      {
        title: "Full-funnel Menu",
        description: "Demand, creative, CRO, analytics, organic, and lifecycle in one view.",
        icon: "layers",
      },
      {
        title: "Proof and Tools",
        description: "Client results beside the AI tools that support the work.",
        icon: "doc",
      },
    ],
    images: [
      "/images/tigertracks/mockup.jpg",
      "/images/tigertracks/hero.jpg",
      "/images/tigertracks/intro.jpg",
      "/images/tigertracks/problem.jpg",
      "/images/tigertracks/capabilities.jpg",
      "/images/tigertracks/results.jpg",
      "/images/tigertracks/platform.jpg",
      "/images/tigertracks/funds.jpg",
      "/images/tigertracks/tools.jpg",
      "/images/tigertracks/menu.jpg",
    ],
    year: "2026",
  },
  {
    slug: "business-assistant",
    title: "Business Assistant",
    summary:
      "An AI support desk that answers order questions from the tools a business already uses.",
    description:
      "Business Assistant is a chat console for customer support. A buyer can ask about an order and get status, ship date, and delivery without leaving the thread. The same assistant reads Shopify, a CRM, the help desk, and internal systems, and can hand the conversation to a person.",
    category: "AI Support Dashboard",
    kind: "dashboards",
    tags: ["React", "TypeScript", "OpenAI"],
    stack: [
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { label: "OpenAI", icon: "https://cdn.simpleicons.org/openai/412991" },
    ],
    features: [
      {
        title: "Order Answers",
        description: "Status, ship date, and delivery pulled into the chat.",
        icon: "bolt",
      },
      {
        title: "Connected Tools",
        description: "Store, CRM, help desk, and internal data on one thread.",
        icon: "layers",
      },
      {
        title: "Human Handoff",
        description: "A path from the assistant to a person when the question needs one.",
        icon: "doc",
      },
    ],
    images: ["/images/business-assistant/assistant.jpg"],
    year: "2026",
  },
  {
    slug: "purchase-order-approval",
    title: "Purchase Order Approval App (SAP)",
    summary:
      "A purchase-order desk that pulls SAP orders into one queue for review on desktop and phone.",
    description:
      "Purchase Order Approval App (SAP) is where a team works pending orders. Each record shows the vendor, amount, dates, line items, and attachments, with approve and reject on the same screen. Approvers can clear the queue from a laptop or from a phone, and the history of each decision stays with the order.",
    category: "Procurement Dashboard",
    kind: "dashboards",
    tags: ["SAP", "React", "TypeScript"],
    stack: [
      { label: "SAP", icon: "https://cdn.simpleicons.org/sap/0FAAFF" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Approval Queue",
        description: "Pending, approved, and rejected orders in one list.",
        icon: "layers",
      },
      {
        title: "Order Review",
        description: "Line items, documents, and notes beside approve and reject.",
        icon: "doc",
      },
      {
        title: "Phone Approvals",
        description: "The same queue on a phone, ready when the desk is not.",
        icon: "bolt",
      },
    ],
    images: ["/images/purchase-order-approval/mockup.jpg"],
    year: "2026",
  },
  {
    slug: "zoho-invoice-generator",
    title: "Zoho Invoice Generator",
    summary:
      "A flow that turns a new order into a Zoho invoice and sends it to the customer.",
    description:
      "Zoho Invoice Generator takes a new order, the customer, the products, and the order data, then builds the invoice in Zoho. Line items, tax, and the total land on one document, and the finished invoice goes out to the customer without a manual step.",
    category: "Billing Tool",
    kind: "tools",
    tags: ["Zoho", "Node.js", "TypeScript"],
    stack: [
      { label: "Zoho", icon: "https://cdn.simpleicons.org/zoho/C8202B" },
      { label: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Order Intake",
        description: "Customer, products, and order data feed one generation step.",
        icon: "layers",
      },
      {
        title: "Invoice Build",
        description: "Quantities, rates, tax, and the total written onto the invoice.",
        icon: "doc",
      },
      {
        title: "Automatic Send",
        description: "The finished invoice goes to the customer as soon as it is ready.",
        icon: "bolt",
      },
    ],
    images: ["/images/zoho-invoice-generator/flow.jpg"],
    year: "2026",
  },
  {
    slug: "linkedin-job-scraper",
    title: "Linkedin Job Scraper",
    summary:
      "A job board that gathers listings into one table you can filter, review, and export.",
    description:
      "Linkedin Job Scraper collects open roles into a single list. Location, job type, and date narrow the results, and each row keeps the title, company, and where the role sits. The same set can be saved to a database or exported as a spreadsheet, a sheet, or JSON.",
    category: "Job Search Tool",
    kind: "tools",
    tags: ["Python", "PostgreSQL", "React"],
    stack: [
      { label: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { label: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    ],
    features: [
      {
        title: "Filtered Search",
        description: "Location, job type, and date posted narrow the list.",
        icon: "layers",
      },
      {
        title: "Role Table",
        description: "Title, company, location, and type on one row.",
        icon: "doc",
      },
      {
        title: "Export",
        description: "Save the set to a database, a spreadsheet, a sheet, or JSON.",
        icon: "bolt",
      },
    ],
    images: ["/images/linkedin-job-scraper/board.jpg"],
    year: "2026",
  },
];

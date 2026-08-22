export const CONTACT = {
  email: "beriorag4@gmail.com",
  github: "https://github.com/birtukan91",
  linkedin: "https://www.linkedin.com/in/birtukan-gebretsadkan-86a96435a/",
  handle: "pyextract",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { value: 94000, decimals: 0, suffix: "+", label: "records extracted" },
  { value: 120, decimals: 0, suffix: "+", label: "pipelines shipped" },
  { value: 99.4, decimals: 1, suffix: "%", label: "field accuracy" },
  { value: 40, decimals: 0, suffix: "+", label: "sites automated" },
];

export const MARQUEE_ITEMS = [
  "Scrapy",
  "Playwright",
  "HTTPX",
  "Pandas",
  "Selectolax",
  "Regex",
  "BeautifulSoup",
  "Asyncio",
  "SQL",
  "Postman",
  "Git / GitHub",
  "Terminal / Bash",
];

export type ServiceIcon = "spider" | "radar" | "target" | "funnel";

export const SERVICES: {
  n: string;
  title: string;
  desc: string;
  stack: string[];
  icon: ServiceIcon;
}[] = [
  {
    n: "01",
    title: "Custom Web Scraping & Automation",
    desc: "Building resilient spiders using Python, Scrapy, Playwright, and HTTPX to extract structured data from complex websites — dynamic pages, pagination, logins and all.",
    stack: ["Python", "Scrapy", "Playwright", "HTTPX"],
    icon: "spider",
  },
  {
    n: "02",
    title: "Hidden API Reverse Engineering",
    desc: "Inspecting backend traffic to extract raw JSON/XML data directly from internal endpoints for high-speed, lightweight data collection — no HTML parsing required.",
    stack: ["HTTPX", "Postman", "JSON", "Asyncio"],
    icon: "radar",
  },
  {
    n: "03",
    title: "B2B Lead Generation & Mining",
    desc: "Gathering targeted business lists (Names, Emails, Phone Numbers, Websites, Addresses) from regional directories and public registries for outbound sales.",
    stack: ["Scrapy", "Selectolax", "Regex", "Pandas"],
    icon: "target",
  },
  {
    n: "04",
    title: "Data Hygiene & Processing",
    desc: "Cleaning, formatting, and deduplicating raw datasets using Selectolax, Regex, and Pandas into CSV, Excel, or database-ready formats your team can plug in immediately.",
    stack: ["Pandas", "Regex", "CSV", "SQL"],
    icon: "funnel",
  },
];

export const PROJECTS = [
  {
    tag: "case_01.py",
    status: "shipped",
    title: "B2B Contractor Lead Generation Pipeline",
    objective:
      "Extracted 1,000+ targeted contractor profiles across Texas for direct sales outreach — names, emails, phones, service areas and licensing data.",
    stack: ["Python", "Scrapy", "Playwright", "Selectolax", "Regex"],
    features: [
      "Automated browser rendering for JavaScript-heavy directory pages",
      "Regex email parsing from unstructured footers and lazy-loaded contact blocks",
      "Deduplication routines across multiple overlapping registries",
    ],
    deliverable: "Clean, CRM-ready CSV dataset with verified contacts.",
    metrics: [
      { value: "1,000+", label: "profiles extracted" },
      { value: "96%", label: "verified emails" },
      { value: "12 hrs", label: "full run time" },
    ],
  },
  {
    tag: "case_02.py",
    status: "shipped",
    title: "Real Estate Directory Data Mining",
    objective:
      "Automated lead extraction from dynamic real estate listings across multiple regions for a regional brokerage analytics team.",
    stack: ["Python", "Playwright", "Asyncio", "Pandas"],
    features: [
      "Managed dynamic pagination and infinite-scroll listing grids",
      "Custom dropdown and map-view handling to surface every listing",
      "Export to structured, multi-sheet Excel workbooks",
    ],
    deliverable: "Structured Excel sheets with a 24-field schema per listing.",
    metrics: [
      { value: "14", label: "regions covered" },
      { value: "8,400+", label: "listings captured" },
      { value: "24", label: "fields per record" },
    ],
  },
  {
    tag: "case_03.py",
    status: "running",
    title: "Competitor Pricing Monitor",
    objective:
      "Continuous price and stock tracking across 3 regional retailers so a mid-size e-commerce client can react to competitor moves within the hour.",
    stack: ["Python", "HTTPX", "Pandas", "SQLite", "Cron"],
    features: [
      "Delta detection — flags only changed prices, not full re-sends",
      "Hourly unattended runs with retry, rotation and alerting",
      "Nightly archival into SQLite for 12-month trend analysis",
    ],
    deliverable: "Live JSON feed + daily CSV digest with price-move alerts.",
    metrics: [
      { value: "500+", label: "SKUs tracked" },
      { value: "hourly", label: "refresh cadence" },
      { value: "99.9%", label: "uptime" },
    ],
  },
];

export const STACK_GROUPS = [
  {
    key: "languages",
    label: "Languages",
    items: ["Python", "SQL"],
  },
  {
    key: "scraping_frameworks",
    label: "Scraping Frameworks",
    items: ["Scrapy", "Playwright", "HTTPX", "BeautifulSoup", "Selectolax"],
  },
  {
    key: "data_processing",
    label: "Data Processing & Utilities",
    items: ["Pandas", "Regex", "JSON", "CSV"],
  },
  {
    key: "dev_tools",
    label: "Development & Tools",
    items: ["VS Code", "Git / GitHub", "Postman", "Terminal / Bash"],
  },
];

export const ABOUT_CHECKLIST = [
  "Eliminating manual data entry for sales & ops teams",
  "Gathering targeted market intelligence on schedule",
  "Fueling outbound campaigns with verified lead lists",
  "Cracking dynamic JavaScript, pagination & hidden endpoints",
  "Delivering deduplicated, CRM-ready datasets",
];

export const PROFILE_YAML = [
  ["role", "Python Data Extraction Specialist"],
  ["focus", "scraping · api reversing · lead gen"],
  ["base", "Texas, US — remote worldwide"],
  ["experience", "5+ yrs building data pipelines"],
  ["clients", "startups · agencies · real estate · B2B SaaS"],
  ["uptime", "pipelines running 24/7 on cron"],
  ["status", "open to new projects"],
];

export const TERMINAL_LINES: { t: string; c?: string; d: number }[] = [
  { t: "$ python pipeline.py --target tx-contractors.us --pages 18", c: "text-gold-bright", d: 500 },
  { t: "[init] fingerprint pool ready · 12 residential proxies", d: 750 },
  { t: "[init] playwright chromium · stealth plugins injected", d: 650 },
  { t: "[GET 200] /contractors?page=1 · 0.42s · 24 cards", d: 850 },
  { t: "[parse] emails:21 · phones:18 · websites:21 → row buffer", d: 700 },
  { t: "[GET 200] /contractors?page=2 · 0.51s · 24 cards", d: 800 },
  { t: "[parse] emails:20 · phones:19 · websites:22 → row buffer", d: 700 },
  { t: "[GET 200] /contractors?page=3 · 0.38s · 24 cards", d: 800 },
  { t: "[anti-bot] challenge detected → solver engaged", c: "text-gold", d: 1000 },
  { t: "[solve] passed in 2.1s · continuing crawl", c: "text-gold", d: 900 },
  { t: "[stream] pages 4–17 … 392 rows buffered", c: "text-faint", d: 950 },
  { t: "[dedupe] 412 raw → 398 unique profiles (14 dropped)", d: 800 },
  { t: "[export] contractors_tx_2026.csv · 398 rows · 9 cols", c: "text-gold-bright", d: 850 },
  { t: "[done] 398 records · 3m 12s · 0 errors ✓", c: "text-gold-bright", d: 600 },
];

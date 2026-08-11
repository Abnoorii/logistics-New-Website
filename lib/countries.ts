export type Country = {
  code: string;
  name: string;
  flag: string;
  hub: string;
};

export const COUNTRIES: Country[] = [
  { code: "AU", name: "Australia", flag: "🇦🇺", hub: "Sydney HQ" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", hub: "Auckland" },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰", hub: "Kowloon" },
  { code: "CN", name: "China", flag: "🇨🇳", hub: "Shanghai · Shenzhen" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", hub: "Ho Chi Minh City" },
  { code: "US", name: "United States", flag: "🇺🇸", hub: "Los Angeles" },
  { code: "TH", name: "Thailand", flag: "🇹🇭", hub: "Bangkok" },
  { code: "DE", name: "Germany", flag: "🇩🇪", hub: "Hamburg" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", hub: "London" },
];

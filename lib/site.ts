export const site = {
  name: "Burle Convention",
  shortName: "Burle Convention",
  tagline: "Where a thousand guests feel like family.",
  description:
    "Burle Convention — a function hall built for a thousand guests in Sadashivpet, Telangana. Weddings, receptions, haldi, mehendi, engagements, and milestone celebrations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://burleconvention.in",
  locale: "en_IN",
  phone: "+919999999999",
  phoneDisplay: "+91 99999 99999",
  email: "hello@burleconvention.in",
  address: {
    locality: "Sadashivpet",
    region: "Telangana",
    postalCode: "502291",
    country: "IN",
  },
  social: {
    instagram: "#",
    youtube: "#",
  },
} as const;

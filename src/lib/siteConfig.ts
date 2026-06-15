export const siteConfig = {
  name: "Archer Roofing",
  tagline: "Precision From Every Angle",
  phone: "603-931-4655",
  phoneHref: "tel:+16039314655",
  email: "nathan@archerroofingnh.com",
  // [NATHAN: SUPPLY] — street address if you get a storefront; otherwise service-area-only
  address: null as string | null,
  city: "Manchester",
  state: "NH",
  zip: "03101",
  hours: "24/7",
  // [NATHAN: SUPPLY] — domain once live
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://archerroofingnh.com",
  googleMapsEmbed: "", // [todo] Google Maps embed URL for contact page
  googleBusinessUrl: "", // [todo] Google Business Profile link
  social: {
    facebook: "", // [NATHAN: SUPPLY]
    instagram: "", // [NATHAN: SUPPLY]
    google: "", // [todo] Google Business Profile
  },
  serviceArea: {
    counties: ["Hillsborough", "Rockingham", "Merrimack"],
    description: "Southern New Hampshire",
  },
  certifications: [
    // [NATHAN: SUPPLY] — which certifications you actually hold
    { name: "GAF Certified", verified: false },
    { name: "Owens Corning", verified: false },
    { name: "CertainTeed", verified: false },
  ],
  license: "Fully Licensed & Insured in NH", // [NATHAN: SUPPLY] exact license #
  insurance: "General Liability + Workers' Comp", // [NATHAN: SUPPLY] exact policy details
  stats: {
    yearsInBusiness: "10+", // [NATHAN: SUPPLY]
    roofsCompleted: "500+", // [NATHAN: SUPPLY]
    googleRating: "5.0", // [todo] real Google rating
    googleReviewCount: "50+", // [todo] real review count
  },
  formEndpoint: process.env.FORM_ENDPOINT || "/api/lead",
} as const;

export type SiteConfig = typeof siteConfig;

export const serviceAreaTowns = [
  { slug: "manchester-nh", name: "Manchester", county: "Hillsborough", landmarks: "Elliot Hospital, Livingston Park, the Millyard district", weather: "Manchester sees heavy nor'easters and ice storms each winter, making roof maintenance critical for homeowners in the Queen City." },
  { slug: "nashua-nh", name: "Nashua", county: "Hillsborough", landmarks: "Mine Falls Park, Nashua River, Broad Street Parkway", weather: "Nashua's position along the Merrimack River corridor brings intense winter storms and spring thaws that can punish aging roofs." },
  { slug: "concord-nh", name: "Concord", county: "Merrimack", landmarks: "the State House, White Park, Concord Hospital", weather: "As the state capital, Concord sits in a corridor that channels cold Arctic air and heavy snowfall — roof ice dams are a persistent issue." },
  { slug: "bedford-nh", name: "Bedford", county: "Hillsborough", landmarks: "Bedford Village Inn, Joppa Hill, Bedford Mall", weather: "Bedford's elevated terrain and older housing stock make it especially vulnerable to wind-driven rain and ice dam formation." },
  { slug: "derry-nh", name: "Derry", county: "Rockingham", landmarks: "Robert Frost Farm, Hood Park, Pinkerton Academy", weather: "Derry experiences the full range of New England weather — from heavy snow loads in winter to summer hailstorms that damage shingles." },
  { slug: "hooksett-nh", name: "Hooksett", county: "Merrimack", landmarks: "Robie's Store, the Hooksett Turnpike toll plaza, Bear Brook State Park", weather: "Hooksett's river-valley location means rapid temperature swings that stress roofing materials and accelerate wear." },
  { slug: "londonderry-nh", name: "Londonderry", county: "Rockingham", landmarks: "Londonderry Rail Trail, Musquash Conservation Area, the Londonderry apple orchards", weather: "Londonderry sees significant snowfall and spring nor'easters that can tear shingles and compromise flashing." },
  { slug: "salem-nh", name: "Salem", county: "Rockingham", landmarks: "Canobie Lake Park, the Rockingham Mall area, America's Stonehenge", weather: "Salem sits on the MA border where coastal storm systems collide with inland cold — a recipe for heavy, wet snow and ice on roofs." },
  { slug: "merrimack-nh", name: "Merrimack", county: "Hillsborough", landmarks: "the Budweiser brewery, Merrimack Premium Outlets, Wasserman Park", weather: "Merrimack's suburban neighborhoods face significant snow loads and occasional summer wind events that test roof integrity." },
  { slug: "goffstown-nh", name: "Goffstown", county: "Hillsborough", landmarks: "Goffstown Village, Uncanoonuc Mountain, the Piscataquog River", weather: "Goffstown's hillside terrain amplifies wind exposure, making roofs particularly vulnerable during storms." },
  { slug: "hudson-nh", name: "Hudson", county: "Hillsborough", landmarks: "Benson Park, Alvirne Hills, the Merrimack River bridge", weather: "Hudson's flat terrain along the Merrimack River sees pooling water during rapid snowmelt — a common trigger for roof leaks." },
  { slug: "amherst-nh", name: "Amherst", county: "Hillsborough", landmarks: "the Amherst Village Green, Ponemah Bog, Baboosic Lake", weather: "Amherst's older colonial-era homes and heavily wooded lots create unique roofing challenges with debris, shade, and ice dams." },
  { slug: "auburn-nh", name: "Auburn", county: "Rockingham", landmarks: "Lake Massabesic, Auburn Village School, Chester Turnpike", weather: "Auburn's lakeside microclimates and wooded properties mean extra moisture exposure and debris accumulation on roofs." },
  { slug: "candia-nh", name: "Candia", county: "Rockingham", landmarks: "Bear Brook State Park, Candia Road Race course, the Candia town center", weather: "Candia's rural, wooded setting means fallen branches and debris are common roof hazards during and after storms." },
  { slug: "litchfield-nh", name: "Litchfield", county: "Hillsborough", landmarks: "the Merrimack River shoreline, Darrah Pond, Chase Brook", weather: "Litchfield's river-adjacent homes face heightened moisture and wind exposure, increasing the risk of storm damage year-round." },
] as const;

export type ServiceAreaTown = (typeof serviceAreaTowns)[number];

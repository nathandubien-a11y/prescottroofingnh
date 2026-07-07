export const siteConfig = {
  name: "Prescott Roofing",
  tagline: "Precision From Every Angle",
  phone: "603-451-2224",
  phoneHref: "tel:+16034512224",
  email: "info@prescottroofingnh.com",
  address: null as string | null,
  city: "Manchester",
  state: "NH",
  zip: "03101",
  hours: "24/7",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://prescottroofingnh.com",
  googleMapsEmbed: "", // [todo] Google Maps embed URL for contact page
  googleBusinessUrl: "", // [todo] Google Business Profile link
  social: {
    facebook: "", // [NATHAN: SUPPLY]
    instagram: "", // [NATHAN: SUPPLY]
    google: "", // [todo] Google Business Profile
  },
  serviceArea: {
    counties: [
      { name: "Hillsborough", state: "NH" },
      { name: "Rockingham", state: "NH" },
      { name: "Merrimack", state: "NH" },
      { name: "Middlesex", state: "MA" },
      { name: "Essex", state: "MA" },
    ],
    description: "Southern New Hampshire & Northern Massachusetts",
  },
  certifications: [
    // [NATHAN: SUPPLY] — which certifications you actually hold
    { name: "GAF Certified", verified: false },
    { name: "Owens Corning", verified: false },
    { name: "CertainTeed", verified: false },
  ],
  license: "Fully Licensed & Insured in NH & MA", // [NATHAN: SUPPLY] exact license #
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
  // New Hampshire
  { slug: "manchester-nh", name: "Manchester", county: "Hillsborough", state: "NH" as const, landmarks: "Elliot Hospital, Livingston Park, the Millyard district", weather: "Manchester sees heavy nor'easters and ice storms each winter, making roof maintenance critical for homeowners in the Queen City." },
  { slug: "nashua-nh", name: "Nashua", county: "Hillsborough", state: "NH" as const, landmarks: "Mine Falls Park, Nashua River, Broad Street Parkway", weather: "Nashua's position along the Merrimack River corridor brings intense winter storms and spring thaws that can punish aging roofs." },
  { slug: "concord-nh", name: "Concord", county: "Merrimack", state: "NH" as const, landmarks: "the State House, White Park, Concord Hospital", weather: "As the state capital, Concord sits in a corridor that channels cold Arctic air and heavy snowfall — roof ice dams are a persistent issue." },
  { slug: "bedford-nh", name: "Bedford", county: "Hillsborough", state: "NH" as const, landmarks: "Bedford Village Inn, Joppa Hill, Bedford Mall", weather: "Bedford's elevated terrain and older housing stock make it especially vulnerable to wind-driven rain and ice dam formation." },
  { slug: "derry-nh", name: "Derry", county: "Rockingham", state: "NH" as const, landmarks: "Robert Frost Farm, Hood Park, Pinkerton Academy", weather: "Derry experiences the full range of New England weather — from heavy snow loads in winter to summer hailstorms that damage shingles." },
  { slug: "hooksett-nh", name: "Hooksett", county: "Merrimack", state: "NH" as const, landmarks: "Robie's Store, the Hooksett Turnpike toll plaza, Bear Brook State Park", weather: "Hooksett's river-valley location means rapid temperature swings that stress roofing materials and accelerate wear." },
  { slug: "londonderry-nh", name: "Londonderry", county: "Rockingham", state: "NH" as const, landmarks: "Londonderry Rail Trail, Musquash Conservation Area, the Londonderry apple orchards", weather: "Londonderry sees significant snowfall and spring nor'easters that can tear shingles and compromise flashing." },
  { slug: "salem-nh", name: "Salem", county: "Rockingham", state: "NH" as const, landmarks: "Canobie Lake Park, the Rockingham Mall area, America's Stonehenge", weather: "Salem sits on the MA border where coastal storm systems collide with inland cold — a recipe for heavy, wet snow and ice on roofs." },
  { slug: "merrimack-nh", name: "Merrimack", county: "Hillsborough", state: "NH" as const, landmarks: "the Budweiser brewery, Merrimack Premium Outlets, Wasserman Park", weather: "Merrimack's suburban neighborhoods face significant snow loads and occasional summer wind events that test roof integrity." },
  { slug: "goffstown-nh", name: "Goffstown", county: "Hillsborough", state: "NH" as const, landmarks: "Goffstown Village, Uncanoonuc Mountain, the Piscataquog River", weather: "Goffstown's hillside terrain amplifies wind exposure, making roofs particularly vulnerable during storms." },
  { slug: "hudson-nh", name: "Hudson", county: "Hillsborough", state: "NH" as const, landmarks: "Benson Park, Alvirne Hills, the Merrimack River bridge", weather: "Hudson's flat terrain along the Merrimack River sees pooling water during rapid snowmelt — a common trigger for roof leaks." },
  { slug: "amherst-nh", name: "Amherst", county: "Hillsborough", state: "NH" as const, landmarks: "the Amherst Village Green, Ponemah Bog, Baboosic Lake", weather: "Amherst's older colonial-era homes and heavily wooded lots create unique roofing challenges with debris, shade, and ice dams." },
  { slug: "auburn-nh", name: "Auburn", county: "Rockingham", state: "NH" as const, landmarks: "Lake Massabesic, Auburn Village School, Chester Turnpike", weather: "Auburn's lakeside microclimates and wooded properties mean extra moisture exposure and debris accumulation on roofs." },
  { slug: "candia-nh", name: "Candia", county: "Rockingham", state: "NH" as const, landmarks: "Bear Brook State Park, Candia Road Race course, the Candia town center", weather: "Candia's rural, wooded setting means fallen branches and debris are common roof hazards during and after storms." },
  { slug: "litchfield-nh", name: "Litchfield", county: "Hillsborough", state: "NH" as const, landmarks: "the Merrimack River shoreline, Darrah Pond, Chase Brook", weather: "Litchfield's river-adjacent homes face heightened moisture and wind exposure, increasing the risk of storm damage year-round." },
  // Northern Massachusetts
  { slug: "lowell-ma", name: "Lowell", county: "Middlesex", state: "MA" as const, landmarks: "the National Historical Park, UMass Lowell, the Merrimack River canal system", weather: "Lowell's dense urban landscape and historic mill buildings face heavy snow loads and ice buildup that stress residential roofs throughout the Merrimack Valley." },
  { slug: "lawrence-ma", name: "Lawrence", county: "Essex", state: "MA" as const, landmarks: "the Great Stone Dam, Lawrence Heritage State Park, the Merrimack River", weather: "Lawrence's river-valley position channels intense winter storms and rapid freeze-thaw cycles that take a toll on roofing materials." },
  { slug: "methuen-ma", name: "Methuen", county: "Essex", state: "MA" as const, landmarks: "Searles Castle, Forest Lake, the Loop shopping district", weather: "Methuen sits just south of the NH border where nor'easters deliver heavy snow and ice — a constant challenge for residential roofs." },
  { slug: "haverhill-ma", name: "Haverhill", county: "Essex", state: "MA" as const, landmarks: "Winnekenni Castle, the Bradford Rail Trail, the Merrimack River waterfront", weather: "Haverhill's hilltop neighborhoods and river-valley homes face strong winds and heavy precipitation that accelerate roof wear." },
  { slug: "andover-ma", name: "Andover", county: "Essex", state: "MA" as const, landmarks: "Phillips Academy, the Addison Gallery, Harold Parker State Forest", weather: "Andover's wooded residential neighborhoods see significant tree debris and ice dam issues during New England's harsh winters." },
  { slug: "north-andover-ma", name: "North Andover", county: "Essex", state: "MA" as const, landmarks: "Lake Cochichewick, Stevens Estate, Weir Hill Reservation", weather: "North Andover's lakeside properties and older colonial homes are especially vulnerable to moisture damage and ice dam formation." },
  { slug: "dracut-ma", name: "Dracut", county: "Middlesex", state: "MA" as const, landmarks: "Long Pond, Lakeview Junior Senior High, Richardson Farm", weather: "Dracut's suburban landscape along the NH border sees the full force of New England winter storms, making roof maintenance essential." },
  { slug: "tewksbury-ma", name: "Tewksbury", county: "Middlesex", state: "MA" as const, landmarks: "Tewksbury State Hospital grounds, Long Street Farm, Livingston Park", weather: "Tewksbury's flat terrain is exposed to wind-driven rain and heavy snowfall that can compromise shingle integrity over time." },
  { slug: "chelmsford-ma", name: "Chelmsford", county: "Middlesex", state: "MA" as const, landmarks: "Heart Pond, Chelmsford Center, the Bruce Freeman Rail Trail", weather: "Chelmsford's mix of older and newer homes face the full spectrum of New England weather — from ice dams to summer hail damage." },
  { slug: "tyngsborough-ma", name: "Tyngsborough", county: "Middlesex", state: "MA" as const, landmarks: "the Tyngsborough Bridge, Long Pond, Mascuppic Lake", weather: "Tyngsborough sits right at the NH border where the Merrimack River corridor funnels winter storms, creating heavy snow and ice loads on roofs." },
] as const;

export type ServiceAreaTown = (typeof serviceAreaTowns)[number];

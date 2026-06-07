import { PassionDetails } from "./types";

export interface EventDetails {
  id: string;
  name: string;
  category: string;
  location: string;
  vibe: string;
  description: string;
  season: string;
}

export const categoriesData: PassionDetails[] = [
  {
    id: "sport",
    title: "Sport",
    tagline: "Monaco GP, Roland Garros, Wimbledon",
    description: "Uncompromised grandstands and private access to the world's most fiercely contested sporting battles.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIuJjbMlmwN_CwH82Kwoq8R66A9GfkbYsgf3swIuRt-LbZsOuaYPtRA00iqztaTw98HwLXRlYTMkST0veYk1Z95jfucL6c5iCmv10s8Y4fl2N9mD6I45kg4rH7XUpUsaf_fRbzVk4M-v_B1z-zSfHUA2M-fxLX8fva1-SfEv5OTluIeh2InlSltXf5KZy4YBsMbJvXN08Kuo6seXnc2Foi6bLsPiQXCC5sWHIJdCKfZ170KnzfVmSZSQgEbL3mNNQXk6Soc4JN71FjLIg",
    highlights: [
      {
        title: "Monaco Grand Prix Superyacht",
        description: "Board a flawless 60m superyacht moored directly at Port Hercule's elite Tabac corner. Michelin-starred lunch, unlimited reserve champagne, and driver meet-and-greets.",
        location: "Port Hercule, Monaco",
        vibe: "Electrifying Elegance"
      },
      {
        title: "Roland Garros Presidential Lounge",
        description: "Front-row center seats on Court Philippe-Chatrier with exclusive all-day access to the President's Lounge and private tennis legend forums.",
        location: "Paris, France",
        vibe: "Clay-Court Prestige"
      },
      {
        title: "The Wimbledon Ultimate Access",
        description: "Debenture seats on Centre Court paired with private, serene dining inside the members-only lounge and post-championship garden events.",
        location: "London, England",
        vibe: "Classic Lawn Heritage"
      }
    ]
  },
  {
    id: "culture",
    title: "Culture",
    tagline: "Venice Carnival, Kyoto Sakura, Dia de los Muertos",
    description: "Deep, sacred, and protected traditions revealed in their most immaculate and pristine manifestations.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkW61RWnTEepQ5bZqbaqIXZdaIki4Lyw8FI5AAWbjjgiKutrmjH2xiA6c59x-7jFrWfej_U0OaYS6RMdHDqwM6tza7h6imzxcxNVgEY_lvuRLdCEjn-0cyXXj-6vq1063Tva8YGb1B8Cz9M6LQHiOcoe0Mv05CzoZ7Ti-XWclRiJ836BjQzPUiDb33y5T7Ltkl8fbo5NvSGOKUfBYUsUJuwz8P6nzke7XArYvJ7XEopbdbOhdj43NejwroLh1orGiiV-ce6LvDrkgKjCg",
    highlights: [
      {
        title: "Il Ballo del Doge - Venice Carnival",
        description: "The crown jewel of Venice Carnival. Fully customized historical costumes fitted in private ateliers, followed by front-row candlelit seating at Palazzo Pisani Moretta.",
        location: "Venice, Italy",
        vibe: "Hypnotic Historical Mystery"
      },
      {
        title: "Kyoto Temple Cherry Blossom Night",
        description: "The gates of a legendary 12th-century zen temple swing open strictly for you. Wander under glowing blossoms in total silence, met with a private tea ritual.",
        location: "Kyoto, Japan",
        vibe: "Pristine Contemplative Calm"
      },
      {
        title: "Sacred Dia de los Muertos Circle",
        description: "An intimate, private invitation to coordinate with a multigenerational family custom in Oaxaca, sharing private recipes, mystical altars, and deep stories.",
        location: "Oaxaca, Mexico",
        vibe: "Vibrant Spiritual Depth"
      }
    ]
  },
  {
    id: "music",
    title: "Music",
    tagline: "Vienna New Year, Coachella VIP, Opera Highlights",
    description: "Resonating across architectural masterpieces with perfect spatial presence and elite circle seating.",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      {
        title: "Vienna Golden Musikverein Concert",
        description: "Historically impossible tickets achieved seamlessly. Front row parterre seating for the legendary New Year's Concert, followed by a grand palace gala.",
        location: "Vienna, Austria",
        vibe: "Imperial Gold Symphony"
      },
      {
        title: "Arena di Verona Crown Boxes",
        description: "Private 19th-century royal tier boxes at the monumental Roman amphitheater. Pre-opera champagne tours behind the majestic stone stage.",
        location: "Verona, Italy",
        vibe: "Open-Air Opera Sovereignty"
      },
      {
        title: "Exclusive Retreat Backstage Accents",
        description: "Ultra-private luxury villa retreats overlooking premium music events, with direct golf cart transport directly to backstage artist pavilions.",
        location: "California Desert, USA",
        vibe: "Boutique Oasis Harmony"
      }
    ]
  },
  {
    id: "nature",
    title: "Nature",
    tagline: "Patagonia Eclipse, Aurora glass domes, Private Serengeti",
    description: "Vast, raw, unyielding celestial events witnessed from the pinnacle of remote, safe isolation.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-0XtLFq6XmKy6_Rn75z_ctX657uUsg-kkVEU4SfuSyLqkTmuPPu6FRwMH51R_6gOmHE056tE8Ys3rweAqnmg-e_FYw2c803nRJsI6cOKhn5ZkyxQR-WIqzWaDr5v45wWdG8fkqM_Eh9YSIGGVM1o2BKehb9gMI6GOcWNOrQdU1hOgFhyIat6t6whDRbSjq8Oi1x-HtbUq655A8Y4wYYM2ywPI_K2-Mplvw71TffxmaTYGUJM7_2xlxDmXYoeCwcMJBfky7fqzdLK6IiM",
    highlights: [
      {
        title: "Celestial Dome Eclipse over Patagonia",
        description: "A private geodesic luxury glaze dome camp in the absolute line of totality. Private astrophysicist guide and gourmet vintage wine pairings.",
        location: "Patagonia, Chile",
        vibe: "Awe-Inspiring Immensity"
      },
      {
        title: "Arctic Fjord Northern Lights Charter",
        description: "Sail on an ultra-luxury icebreaker yacht into Svalbard's dark midnight fjords, viewing the Aurora Borealis cascade from hot outdoor infinity pools.",
        location: "Svalbard, Norway",
        vibe: "Cosmic Silent Radiance"
      },
      {
        title: "Serengeti Deep Helicopter Safari",
        description: "Fly over the great migration in a custom quiet helicopter, landing atop private volcanic crests for champagne sunset and untouched luxury glamping.",
        location: "Serengeti, Tanzania",
        vibe: "Uncharted Majestic Wilderness"
      }
    ]
  },
  {
    id: "competitions",
    title: "Competitions",
    tagline: "Mille Miglia Rally, America's Cup, Pebble Beach",
    description: "Join the legendary gentleman driver circles or charter historic sailboats in pristine seas.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC_9WD1YPTZimsnAX_7e-bsjSsnUw7sy27HbqdlVgbHbhvXZUE_U7rAv4gLLgy7THRaTyqqWFj4Ar2TAZD6JmnKdbKZKHEk3KSm45gqPMFjaVHUW3gEjAe1aQgzzuGwp9hL3KsOBchBg1xm0z1pCaZiRQEQsBPukxPWUWTH9gQOC8A6Sx8ANfQesR3EO2HvYuGjQfRdaAn28WYSrS8Aq62jCNR71ZQgeosromdO_mNQj6TPSksOKoU-qiHRU06x4rHBuGmm49V2JXzZjo",
    highlights: [
      {
        title: "Mille Miglia Historic Flight",
        description: "Charter and drive an authentic, fully certified 1954 Ferrari 250 Monza through vintage Italian roads with active mechanics trailing you on call all week.",
        location: "Brescia to Roma, Italy",
        vibe: "Petrol Vintage Romance"
      },
      {
        title: "America's Cup Foil Chancer",
        description: "Uncompromised vantage point from a chartered 80ft sailing superyacht chasing the high-speed carbon racing multihulls.",
        location: "Barcelona, Spain",
        vibe: "High-Speed Sea Drama"
      },
      {
        title: "Pebble Beach Concours d'Elegance VIP",
        description: "Judge's inner-circle breakfast, private preview of classic multi-million dollar masterworks, and grand ocean lawn private tables.",
        location: "California, USA",
        vibe: "Flawless Chronology"
      }
    ]
  },
  {
    id: "gala",
    title: "Gala",
    tagline: "Met Gala dressing, Cannes VIP, Oscars Celebration",
    description: "Walk the ultimate red carpets and retire to high-society celebration suites.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNPXrvzuKUURIsIEFG3ThG5T9ygikyDMjmNBVh_1xhfL78UM3by6k0qxppgm20zJx8LH4rX9d6kGdYdCnHRtbZXoEF0ElHVI6YYAqhKspjPFzUiHiBLJ5Gr-nLlXkQ3NyImQ0t3Gyg9MTDFTh7BNORjhAg-vJA9qFgyhPC4wdBiYxLgVDhoLaQRQaJ-epJ0iCZVMyztrtYNeQ_B52B09E89_WEDM3SL8nxqt-qI0SYpoBdfiQBLQ4_unCtU6IUNf8WmUdVbOCL2LdAgTg",
    highlights: [
      {
        title: "Cannes Red Carpet Premiere",
        description: "A customized invite to the Palais des Festivals main competition screening. Walk the crimson run with premier fashion house stylists and customized Chopard jewelry.",
        location: "Cannes, France",
        vibe: "Cinematic High Couture"
      },
      {
        title: "Met Gala Sponsor Invitation",
        description: "Access to the tightly secured annual Metropolitan Museum ball. Private curator pre-tour, elite dining circle, and private couture fittings.",
        location: "New York City, USA",
        vibe: "Avant-Garde Opulence"
      },
      {
        title: "Vanity Fair Oscar Party Entry",
        description: "Pass through strict security directly into the most iconic Academy Awards after-party, sharing space with the actual evening winners.",
        location: "Beverly Hills, USA",
        vibe: "Hollywood Legacy Stardust"
      }
    ]
  }
];

export const allEventsData: EventDetails[] = [
  // --- SPORT ---
  {
    id: "sport_atp_monte_carlo",
    name: "ATP Masters Monte Carlo",
    category: "sport",
    location: "Monte Carlo, Monaco",
    vibe: "Harborside Clay Courts",
    description: "Savor the elegant spring sun right alongside the pristine clay courts of the Monaco Country Club, complete with royal box privileges.",
    season: "April"
  },
  {
    id: "sport_roland_garros",
    name: "Roland Garros",
    category: "sport",
    location: "Paris, France",
    vibe: "Presidential Clay Honor",
    description: "Premium Court Philippe-Chatrier seats with all-day luxury catering, garden suites, and private tennis legend meetups.",
    season: "May - June"
  },
  {
    id: "sport_monaco_gp",
    name: "Monaco Grand Prix",
    category: "sport",
    location: "Monte Carlo, Monaco",
    vibe: "Superyacht Tier One",
    description: "Watch the world's fastest racing machines brush trackside borders directly from the private deck of an elite 60m superyacht in Port Hercule.",
    season: "May"
  },
  {
    id: "sport_wimbledon",
    name: "Wimbledon",
    category: "sport",
    location: "London, United Kingdom",
    vibe: "Royal Debenture Heritage",
    description: "Settle into prestigious Centre Court Debenture seats, complete with white-glove members-only catering and post-champion garden lawns.",
    season: "July"
  },
  {
    id: "sport_afcon",
    name: "Africa Cup of Nations",
    category: "sport",
    location: "Host Nation, Africa",
    vibe: "Elite Continent Stadium",
    description: "Witness the pulsating, vibrant pinnacle of African football battlefronts with absolute luxury box arrangements.",
    season: "Varies"
  },
  {
    id: "sport_f1_monza",
    name: "Formula 1 Monza",
    category: "sport",
    location: "Monza, Italy",
    vibe: "Temple of Speed Paddock",
    description: "Exclusive Formula One Paddock Club placement inside Milan's historic high-speed forest circuit, surrounded by legendary Tifosi passion.",
    season: "September"
  },
  {
    id: "sport_f1_las_vegas",
    name: "Formula 1 Las Vegas",
    category: "sport",
    location: "Las Vegas, United States",
    vibe: "Neon Vegas Strip Lounge",
    description: "An incredible high-voltage night race down the glittering illuminated Las Vegas Strip, experienced from private skyboxes.",
    season: "November"
  },
  {
    id: "sport_nba_finals",
    name: "NBA Finals",
    category: "sport",
    location: "Qualified Representative Cities",
    vibe: "Courtside Wooden Crest",
    description: "Unparalleled floor credentials standard. Feel the floorboards shake and talk strategies directly with global basketball legends.",
    season: "June"
  },
  {
    id: "sport_super_bowl",
    name: "Super Bowl",
    category: "sport",
    location: "Host City, United States",
    vibe: "Luxury Dome Pavilion",
    description: "The crown jewel of American sport. Private luxury boxes outfitted with premium cocktail bars and legendary half-time mainstage passes.",
    season: "February"
  },
  {
    id: "sport_nba_all_star",
    name: "NBA All-Star Game",
    category: "sport",
    location: "Host City, United States",
    vibe: "Global Basketball Stars",
    description: "The absolute premium cross-section of cultural celebrities, global musicians, and elite basketball court masters.",
    season: "February"
  },
  {
    id: "sport_indian_wells",
    name: "Indian Wells",
    category: "sport",
    location: "California Desert, United States",
    vibe: "Luxury Oasis Courts",
    description: "The Fifth Grand Slam. Scenic mountain-valley views flanking sun-washed tennis arenas with VIP garden restaurant booths.",
    season: "March"
  },
  {
    id: "sport_indy_500",
    name: "Indianapolis 500",
    category: "sport",
    location: "Indiana, United States",
    vibe: "Brickyard Pagoda Suites",
    description: "Steeped in 110 years of uncompromised speed culture. Stand trackside on the legendary yard of bricks in VIP Pagoda clubs.",
    season: "May"
  },
  {
    id: "sport_uefa_euro",
    name: "UEFA European Championship",
    category: "sport",
    location: "Host Cities, Europe",
    vibe: "Premium European Climax",
    description: "Enjoy supreme skybox hospitality as European kingdoms battle for historical football immortality.",
    season: "June - July"
  },
  {
    id: "sport_copa_america",
    name: "Copa America",
    category: "sport",
    location: "Host Cities, Americas",
    vibe: "Fierce Football Passion",
    description: "Experience the intense, high-energy football masterclasses of South America, curated with secure premium suite privileges.",
    season: "June - July"
  },
  {
    id: "sport_us_open",
    name: "US Open",
    category: "sport",
    location: "New York City, United States",
    vibe: "Arthur Ashe Luxury Suite",
    description: "Savor premium late-night tennis matches under the dramatic lights of Arthur Ashe Stadium inside of the Presidential Circle.",
    season: "August - September"
  },
  {
    id: "sport_copa_libertadores",
    name: "Copa Libertadores Final",
    category: "sport",
    location: "Latin America Host Venue",
    vibe: "Latin Football Obsession",
    description: "The ultimate club champion showdown in South America. Feel the ground vibrate from unyielding stadium anthems.",
    season: "November"
  },
  {
    id: "sport_champions_league",
    name: "UEFA Champions League Final",
    category: "sport",
    location: "Host Capital, Europe",
    vibe: "Golden European Standard",
    description: "The absolute highest pinnacle of standard club football on earth. Fully inclusive executive level tickets and pre-game galas.",
    season: "May - June"
  },
  {
    id: "sport_italian_open",
    name: "Italian Open Rome",
    category: "sport",
    location: "Rome, Italy",
    vibe: "Imperial Marble Court",
    description: "Nestled within the breathtaking, historic marble statues of the Foro Italico. Exceptional Italian fine culinary lounges.",
    season: "May"
  },
  {
    id: "sport_motogp_mugello",
    name: "MotoGP Mugello",
    category: "sport",
    location: "Tuscany, Italy",
    vibe: "Tuscan Speed Symphony",
    description: "Loud, high-octane racing over the scenic rolling hills of Tuscany, featuring exclusive pit lane guides and team hospitality.",
    season: "June"
  },
  {
    id: "sport_quai_54",
    name: "Quai 54",
    category: "sport",
    location: "Paris, France",
    vibe: "Couture Streetball Culture",
    description: "The world's premier global streetball tournament, set directly underneath the Eiffel Tower with major fashion icons and musicians.",
    season: "July"
  },
  {
    id: "sport_f1_singapore",
    name: "Formula 1 Singapore",
    category: "sport",
    location: "Marina Bay, Singapore",
    vibe: "Marina Bay Sky Lounge",
    description: "Dazzling night race under thousands of high-tech luminaries, paired with the legendary corporate suites at the Marina Bay Sands.",
    season: "September"
  },
  {
    id: "sport_f1_abu_dhabi",
    name: "Formula 1 Abu Dhabi",
    category: "sport",
    location: "Yas Marina, UAE",
    vibe: "Sunset Yas Viceroy Superyacht",
    description: "The dazzling sunset Grand Prix season finale. Watch drivers speed beneath the Yas Viceroy hotel from our sleek superyacht.",
    season: "November - December"
  },
  {
    id: "sport_padel_finals",
    name: "Premier Padel Finals",
    category: "sport",
    location: "Host City",
    vibe: "High-Speed Court Glass",
    description: "Experience the fastest-growing executive racquet sport inside the ultimate showcase center court cage with private view lounges.",
    season: "December"
  },
  {
    id: "sport_fifa_world_cup",
    name: "FIFA World Cup",
    category: "sport",
    location: "Global Arenas",
    vibe: "Globe Heritage Sovereign",
    description: "The most iconic sport event in human history. Flawless hospitality arrangements across premium corporate complexes.",
    season: "Varies"
  },
  {
    id: "sport_atp_finals",
    name: "ATP Finals",
    category: "sport",
    location: "Turin, Italy",
    vibe: "Elite Court Top Eight",
    description: "The final battleground for the world's absolute top 8 singles players. High-energy, visually spectacular modern court design.",
    season: "November"
  },
  {
    id: "sport_motogp_valencia",
    name: "MotoGP Valencia",
    category: "sport",
    location: "Valencia, Spain",
    vibe: "Iberian Grand Finale",
    description: "The thrilling double-wheel masterworks finale under warm Spanish autumn skies, complete with VIP tower seats.",
    season: "November"
  },
  {
    id: "sport_rucker_park",
    name: "Rucker Park",
    category: "sport",
    location: "Harlem, New York City",
    vibe: "Harlem Court Legends",
    description: "Private executive-arranged grandstands at Harlem's legendary proving court, viewing the world's slickest future NBA stars.",
    season: "July - August"
  },

  // --- CULTURE ---
  {
    id: "culture_ice_st_moritz",
    name: "The ICE St. Moritz",
    category: "culture",
    location: "St. Moritz, Switzerland",
    vibe: "Glacial Frozen Concours",
    description: "The ultimate intersection of automotive perfection and alpine high society. Classic sports cars racing on frozen mountain lakes.",
    season: "February"
  },
  {
    id: "culture_venice_carnival",
    name: "Venice Carnival",
    category: "culture",
    location: "Venice, Italy",
    vibe: "Candlelit Venetian Magic",
    description: "Slip silently across dark canals in historic wooden water-taxis, outfitted in handmade, authentic couture carnival masks.",
    season: "February"
  },
  {
    id: "culture_holi",
    name: "Holi",
    category: "culture",
    location: "Mathura & Vrindavan, India",
    vibe: "Vibrant Mystical Colors",
    description: "The sacred celebration of colors, love and triumph, viewed with private guide sanctuaries inside historical temple grounds.",
    season: "March"
  },
  {
    id: "culture_highland_games",
    name: "Highland Games",
    category: "culture",
    location: "Braemar, Scotland",
    vibe: "Royal Sovereign Highland",
    description: "Steeped in Scottish royal tradition. View the majestic heavy athletic events in the presence of the Royal British Family.",
    season: "September"
  },
  {
    id: "culture_oktoberfest",
    name: "Oktoberfest",
    category: "culture",
    location: "Munich, Germany",
    vibe: "Private Schützenzelt Box",
    description: "Historically solid private table reservations inside the elite, highly sought-after traditional brewers tents with custom roasted delicacies.",
    season: "September - October"
  },
  {
    id: "culture_dia_muertos",
    name: "Dia de los Muertos",
    category: "culture",
    location: "Oaxaca, Mexico",
    vibe: "Sacred Altar Luminance",
    description: "Walk under glowing candlelit cemetery paths and join private ofrenda ancestral banquets hosted by prominent local artisans.",
    season: "November"
  },
  {
    id: "culture_chinese_lantern",
    name: "Chinese Lantern Festival",
    category: "culture",
    location: "Pingxi, Taiwan",
    vibe: "Ethereal Glowing Sky",
    description: "Watch tens of thousands of warm paper lanterns carrying personal letters ascend into dark mountain night clouds.",
    season: "February"
  },
  {
    id: "culture_songkran",
    name: "Songkran",
    category: "culture",
    location: "Chiang Mai, Thailand",
    vibe: "Sacred Water Cleansing",
    description: "The traditional Thai New Year. Participate in elegant private temple cleansing rituals matching local cultural circles.",
    season: "April"
  },
  {
    id: "culture_midsommar",
    name: "Midsommar",
    category: "culture",
    location: "Dalarna, Sweden",
    vibe: "Pagan Flora Radiance",
    description: "Wander fields of wild wildflowers under the beautiful, uncurtained midnight sun. Private meadow dining and classic folk string tunes.",
    season: "June"
  },
  {
    id: "culture_rio_carnival",
    name: "Rio Carnival",
    category: "culture",
    location: "Rio de Janeiro, Brazil",
    vibe: "Camarote Luxury Front-Row",
    description: "The high-vibration samba capital of humankind. High-end secure Camarote lounges suspended right above the dramatic Sambadrome strip.",
    season: "February - March"
  },
  {
    id: "culture_feria_abril",
    name: "Feria de Abril",
    category: "culture",
    location: "Seville, Spain",
    vibe: "Andalusian Casetas VIP",
    description: "Participate in Seville's exclusive, highly guarded private family casetas, featuring traditional flamenco attire and horse-carriage parades.",
    season: "April"
  },

  // --- MUSIC ---
  {
    id: "music_sanremo",
    name: "Sanremo Festival",
    category: "music",
    location: "Sanremo, Italy",
    vibe: "Ariston Historical Glamour",
    description: "The historic cradle of Italian songwriting. Elite gallery rows at the Teatro Ariston paired with private palazzo celebrity cocktails.",
    season: "February"
  },
  {
    id: "music_glastonbury",
    name: "Glastonbury",
    category: "music",
    location: "Pris, United Kingdom",
    vibe: "Worthy View Luxury Yurt",
    description: "Premium heli-transport onto the historic Somerset hills, combined with high-fashion Worthy View luxury tipis and backstage credentials.",
    season: "June"
  },
  {
    id: "music_miami_spring_break",
    name: "Miami Spring Break Music",
    category: "music",
    location: "Miami Beach, United States",
    vibe: "Ultra Oceanside Cabanas",
    description: "Private penthouse ocean cabanas right over the ultimate global EDM lineups at bayfront complexes.",
    season: "March"
  },
  {
    id: "music_coachella",
    name: "Coachella",
    category: "music",
    location: "California Desert, United States",
    vibe: "Exclusive Safari Airstream",
    description: "Reside inside gorgeous luxury safari tents directly in the festival perimeter. Artists lounge wristbands standard.",
    season: "April"
  },
  {
    id: "music_tomorrowland",
    name: "Tomorrowland",
    category: "music",
    location: "Boom, Belgium",
    vibe: "Mansion VIP DreamVille",
    description: "Private high-end group mansions built inside your own VIP DreamVille sector, featuring standard butler service and skybox visual views.",
    season: "July"
  },

  // --- NATURE ---
  {
    id: "nature_northern_lights",
    name: "Northern Lights",
    category: "nature",
    location: "Tromsø, Norway",
    vibe: "Aurora Fjord Luxury Cabin",
    description: "Stare at the pulsating lime-green stellar cosmic canvas from your private glass-roof luxury cabin floating over the fjords.",
    season: "November - March"
  },
  {
    id: "nature_swim_orcas",
    name: "Swim with Orcas",
    category: "nature",
    location: "Skjervøy, Norway",
    vibe: "Arctic Wet-Suit Snorkel",
    description: "Glance eye-to-eye underwater with elite pods of massive killer whales and humpbacks chasing migrating herring under dark skies.",
    season: "November - January"
  },
  {
    id: "nature_polar_bears",
    name: "Polar Bears in Svalbard",
    category: "nature",
    location: "Svalbard, Norway",
    vibe: "Chartered Polar Vessel",
    description: "Sail on an elite private icebreaker deep within the uncurtained Arctic ice pack to view polar bears hunting in raw silence.",
    season: "June - August"
  },
  {
    id: "nature_snow_leopard",
    name: "Snow Leopard Pursuit",
    category: "nature",
    location: "Ladakh, India",
    vibe: "Highland Heated Yurts",
    description: "Traverse 4,000m Himalayan ridges guided by legendary local trackers to locate the elusive, beautiful 'ghost of the mountains'.",
    season: "January - March"
  },
  {
    id: "nature_black_panther",
    name: "Black Panther Safari",
    category: "nature",
    location: "Kabini, India",
    vibe: "Deep Jungle Teak Villa",
    description: "Track the beautiful, melanistic phantom leopard of Kabini forest alongside award-winning National Geographic guides.",
    season: "October - May"
  },
  {
    id: "nature_hanami",
    name: "Hanami & Sakura",
    category: "nature",
    location: "Tokyo & Kyoto, Japan",
    vibe: "Emperor Sakura Boat",
    description: "Private wooden boat sails beneath illuminated weeping cherry blossom trees reflecting off ancient castle canals.",
    season: "March - April"
  },
  {
    id: "nature_komodo_dragons",
    name: "Komodo Dragons",
    category: "nature",
    location: "Komodo National Park, Indonesia",
    vibe: "Phinisi Wooden Liveboard",
    description: "Board an absolute state-of-the-art wood phinisi sailing yacht to walk along pink sand beaches alongside prehistoric dragons.",
    season: "May - September"
  },
  {
    id: "nature_manta_rays",
    name: "Manta Rays Night",
    category: "nature",
    location: "Kona, Hawaii",
    vibe: "Subsurface Luminescence",
    description: "Witness dozens of spectacular 14ft manta rays performing underwater somersaults right beneath your private illuminated marine rafts.",
    season: "August - October"
  },
  {
    id: "nature_golden_eagle",
    name: "Golden Eagle Festival",
    category: "nature",
    location: "Altai Mountains, Mongolia",
    vibe: "Nomadic Steppe Heritage",
    description: "Join the legendary Kazakh horsemen on the wind-bitten steppes, demonstrating elite eagle-hunting bonds on horseback.",
    season: "October"
  },
  {
    id: "nature_great_migration",
    name: "Great Migration",
    category: "nature",
    location: "Massai Mara, Kenya",
    vibe: "Mara River Front Camp",
    description: "Observe thousands of wildebeest plunge dramatically across river canyons from a ultra-exclusive cliff-edge safari setup.",
    season: "July - September"
  },
  {
    id: "nature_perseid_meteor",
    name: "Perseid Meteor Shower",
    category: "nature",
    location: "Atacama Desert, Chile",
    vibe: "Observatory Star Domes",
    description: "Pristine clear dry mountain heights. Lay on custom premium velvet daybeds as hundreds of space meteors streak the clean sky.",
    season: "August"
  },
  {
    id: "nature_foliage",
    name: "Vermont Autumn Foliage",
    category: "nature",
    location: "Vermont, United States",
    vibe: "Scenic Private Helicopter",
    description: "Soar in a luxurious quiet helicopter over a cascading sea of yellow, gold, and crimson forests, landing at private vineyard lunches.",
    season: "September - October"
  },
  {
    id: "nature_andean_condor",
    name: "Andean Condor Flight",
    category: "nature",
    location: "Colca Canyon, Peru",
    vibe: "High Canyon Vista Dome",
    description: "Stand at the edge of the world's deepest canyon, feeling the wind as massive 3m Andean condors soar directly overhead.",
    season: "March - June"
  },
  {
    id: "nature_whale_sharks_mexico",
    name: "Whale Sharks Mexico",
    category: "nature",
    location: "Isla Holbox, Mexico",
    vibe: "Sleek Deep Sea Yacht",
    description: "Snorkel in warm turquoise ocean streams alongside the world's largest gentle ocean giants in complete private boat safety.",
    season: "June - September"
  },
  {
    id: "nature_sea_turtle",
    name: "Sea Turtle Hatching",
    category: "nature",
    location: "Riviera Maya, Mexico",
    vibe: "Beach Conservation Patrol",
    description: "Join professional marine biologists under moonlit night sands to help release endangered newly hatched sea turtle pups safely into the waves.",
    season: "August - October"
  },
  {
    id: "nature_jaguar_pantanal",
    name: "Jaguar Hunting Pantanal",
    category: "nature",
    location: "Pantanal, Brazil",
    vibe: "Custom River Catamaran",
    description: "Embark on quiet electric skiffs along tropical river borders to photograph massive jaguars hunting caymans on the river banks.",
    season: "July - October"
  },
  {
    id: "nature_bald_eagle",
    name: "Bald Eagle Gathering",
    category: "nature",
    location: "Haines, Alaska",
    vibe: "Snowy Fjord Safari Camp",
    description: "Observe thousands of bald eagles gathering along the Chilkat River against majestic glaciers in freezing Alaskan winter.",
    season: "November"
  },
  {
    id: "nature_sperm_whales",
    name: "Sperm Whales",
    category: "nature",
    location: "Dominica, Caribbean",
    vibe: "Royal Blue Marine Permittee",
    description: "Extremely restricted underwater permit. Float in deep, silent royal blue ocean canyons next to slumbering sperm whale families.",
    season: "December - April"
  },
  {
    id: "nature_siberian_tiger",
    name: "Siberian Tiger Sanctuary",
    category: "nature",
    location: "Far East, Russia/China border",
    vibe: "Protected Forest Camera Lodge",
    description: "Under extremely secure government trackers, monitor live camera traps and search for tracks of the gorgeous Siberian Tiger.",
    season: "February"
  },
  {
    id: "nature_whale_sharks_aus",
    name: "Whale Sharks Australia",
    category: "nature",
    location: "Ningaloo Reef, Australia",
    vibe: "Outback Coral Yachting",
    description: "Dive directly from pristine outback dunes into crystal clear warm reef lines, immediately swimming next to spotted filter giants.",
    season: "April - July"
  },
  {
    id: "nature_whale_watching_aus",
    name: "Humpback Migration Australia",
    category: "nature",
    location: "Hervey Bay, Australia",
    vibe: "Aquatic Glass View Deck",
    description: "Watch dozens of highly social humpbacks breach, play, and sing adjacent to a high-end luxury marine catamaran.",
    season: "August - October"
  },
  {
    id: "nature_momijigari",
    name: "Momijigari Autumn Maps",
    category: "nature",
    location: "Nikko & Hakone, Japan",
    vibe: "Traditional Onsen Villa",
    description: "Admire magnificent scarlet maple leaves falling silently into natural steaming hot volcanic springs inside of a centuries-old ryokan.",
    season: "November"
  },

  // --- COMPETITIONS ---
  {
    id: "comp_hyrox_milan",
    name: "HYROX Milan",
    category: "competitions",
    location: "Milan, Italy",
    vibe: "Premium Red Carpet Fit",
    description: "Secure elite double-athlete slots in the stunning Italian fashion hub fitness showdown, complete with priority warm-up access.",
    season: "October"
  },
  {
    id: "comp_hyrox_rome",
    name: "HYROX Rome",
    category: "competitions",
    location: "Rome, Italy",
    vibe: "Eternal City Endurance",
    description: "Push premium strength milestones inside the monumental, highly energized Italian capital arena with local sports massage doctors.",
    season: "April"
  },
  {
    id: "comp_hyrox_ny",
    name: "HYROX New York",
    category: "competitions",
    location: "New York City, United States",
    vibe: "Manhattan Athletic Peak",
    description: "Race alongside prominent Wall Street executives and endurance masterminds in America's highest-vibe venue.",
    season: "June"
  },
  {
    id: "comp_hyrox_paris",
    name: "HYROX Paris",
    category: "competitions",
    location: "Paris, France",
    vibe: "Haute Couture Fitness",
    description: "Challenge yourself inside the spectacular Parisian exposition halls, followed by a curated high-protein French dinner.",
    season: "November"
  },
  {
    id: "comp_hyrox_vienna",
    name: "HYROX Vienna",
    category: "competitions",
    location: "Vienna, Austria",
    vibe: "Imperial Capital Race",
    description: "Seamless VIP race coordinates inside the majestic Austrian capital arenas, complete with elite timing tracking.",
    season: "February"
  },
  {
    id: "comp_hyrox_miami",
    name: "HYROX Miami",
    category: "competitions",
    location: "Miami, United States",
    vibe: "Oceanside Sweat Arena",
    description: "Vibrant oceanside atmosphere meets maximum fitness. Premium post-race luxury yacht celebration cocktails.",
    season: "March"
  },
  {
    id: "comp_hyrox_malaga",
    name: "HYROX Malaga",
    category: "competitions",
    location: "Malaga, Spain",
    vibe: "Andalusia Fit Summit",
    description: "Combine premium Mediterranean sun, tapas, and beachside recovery with Spain's leading fitness race tournament.",
    season: "November"
  },
  {
    id: "comp_ny_marathon",
    name: "New York Marathon",
    category: "competitions",
    location: "New York City, United States",
    vibe: "Five-Borough Triumph",
    description: "Skip years-long lotteries. Secure direct VIP starting tier placement and private recovery lounges looking over Central Park.",
    season: "November"
  },
  {
    id: "comp_boston_marathon",
    name: "Boston Marathon",
    category: "competitions",
    location: "Boston, United States",
    vibe: "Boylstone Street Legacy",
    description: "Elite qualification or direct VIP ambassador spots on the historically prestigious Hopkinton-to-Boston asphalt trail.",
    season: "April"
  },
  {
    id: "comp_etape_du_tour",
    name: "L'Etape du Tour",
    category: "competitions",
    location: "French Alps, France",
    vibe: "Alpine Cycle Sovereign",
    description: "Ride the exact Tour de France mountain stages on fully closed roads, with professional team mechanics and elite support cars.",
    season: "July"
  },
  {
    id: "comp_utmb",
    name: "Ultra Trail du Mont Blanc",
    category: "competitions",
    location: "Chamonix, France",
    vibe: "Mont Blanc Summit Trail",
    description: "The absolute pinnacle of global mountain trail running. Exclusive chalet accommodations and professional alpine massage therapists.",
    season: "August"
  },
  {
    id: "comp_rome_marathon",
    name: "Rome Marathon",
    category: "competitions",
    location: "Rome, Italy",
    vibe: "Colosseum Finish Line",
    description: "Sprint past the majestic Colosseum, St. Peter's, and Roman ruins on an entirely custom-paved priority track course.",
    season: "March"
  },
  {
    id: "comp_marathon_sables",
    name: "Marathon des Sables",
    category: "competitions",
    location: "Sahara Desert, Morocco",
    vibe: "Sahara Dune Challenge",
    description: "The legendary, extreme 250km self-sufficient desert footrace, backed by our elite private logistics, safety, and recovery tents.",
    season: "April"
  },
  {
    id: "comp_athens_marathon",
    name: "Athens Marathon",
    category: "competitions",
    location: "Athens, Greece",
    vibe: "Historic Marathon Origin",
    description: "Run the original path from the town of Marathon to the historic Panathenaic Stadion, following ancient footsteps.",
    season: "November"
  },

  // --- GALA ---
  {
    id: "gala_paris_couture",
    name: "Paris Haute Couture Week",
    category: "gala",
    location: "Paris, France",
    vibe: "Haute Couture Front Row",
    description: "Settle into highly restricted VIP seating at Chanels and Diors, with fully personal styling and vintage salon access.",
    season: "January & July"
  },
  {
    id: "gala_red_cross",
    name: "Monaco Red Cross Gala",
    category: "gala",
    location: "Monte Carlo, Monaco",
    vibe: "Salle des Etoiles Tuxedo",
    description: "One of the most exclusive high-society events in Europe. Dine in the grand company of the Monaco Royal Family.",
    season: "July"
  },
  {
    id: "gala_vienna_ball",
    name: "Vienna Opera Ball",
    category: "gala",
    location: "Vienna, Austria",
    vibe: "Imperial Waltz Box",
    description: "An incredibly elegant night of white ties, tiaras and classical waltzing inside the transformed Vienna State Opera.",
    season: "February"
  },
  {
    id: "gala_ny_fashion_week",
    name: "New York Fashion Week",
    category: "gala",
    location: "New York City, United States",
    vibe: "Chelsea Pier Showcases",
    description: "Walk past strict guest lists directly into premier private designer galleries, followed by elite off-site celebrity afterparties.",
    season: "February & September"
  },
  {
    id: "gala_met_gala",
    name: "Met Gala",
    category: "gala",
    location: "New York City, United States",
    vibe: "Metropolitan Inner Ring",
    description: "Extremely secure, elite sponsor-hosted seats inside fashion's most iconic and majestic annual museum ball.",
    season: "May"
  },
  {
    id: "gala_oscar_night",
    name: "Oscar Night",
    category: "gala",
    location: "Los Angeles, United States",
    vibe: "Dolby Theatre VIP Gallery",
    description: "Attend the legendary annual Academy Awards presentation inside the Dolby Theatre, experiencing the ultimate film legacy.",
    season: "March"
  },
  {
    id: "gala_vanity_fair",
    name: "Vanity Fair Oscar Party",
    category: "gala",
    location: "Beverly Hills, United States",
    vibe: "Hollywood Elite Stardust",
    description: "Obtain access permissions for the most tightly-secured and exclusive film party of the hemisphere, directly adjacent to winners.",
    season: "March"
  },
  {
    id: "gala_nobel_prize",
    name: "Nobel Prize Ceremony",
    category: "gala",
    location: "Stockholm, Sweden",
    vibe: "Banquet of Blue Hall",
    description: "Celebrate human masterworks as you attend the official Nobel dinner, surrounded by legendary laureates and Scandinavian royalty.",
    season: "December"
  },
  {
    id: "gala_milan_fashion_week",
    name: "Milan Fashion Week",
    category: "gala",
    location: "Milan, Italy",
    vibe: "Duomo Afterparty Suite",
    description: "Witness luxury Italian runway presentation debuts from front row cushions, followed by private brand-sponsored villa dinners.",
    season: "February & September"
  },
  {
    id: "gala_venice_film_festival",
    name: "Venice Film Festival",
    category: "gala",
    location: "Venice Lido, Italy",
    vibe: "Lido Pier Red Carpet",
    description: "Arrive at premiere red carpets in sleek vintage mahogany speedboats, retiring to beautiful historic Grand Canal palazzos.",
    season: "August - September"
  },
  {
    id: "gala_cannes",
    name: "Cannes Film Festival & Gala",
    category: "gala",
    location: "Cannes, France",
    vibe: "Croisette Luxury Suite",
    description: "Attend official competition world premieres on the French Riviera, and enjoy direct seats at the legendary amfAR high-fashion charity gala.",
    season: "May"
  }
];

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Expedition, Playbook, Benefit } from './types';

export const EXPEDITIONS: Expedition[] = [
  {
    id: 'exp-iceland',
    category: 'Ice',
    title: 'Iceland',
    location: 'Arctic Ridge & Glacial Caves',
    date: 'March 2027',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=1600', // Northern lights over Icelandic peaks
    description: 'A deep immersion into the winter wonderland of the North. Hike fields of active volcanic steam, descend into deep blue ice tunnels, and wait for the Aurora beneath frozen obsidian heights.',
    highlights: ['Glacier walking with local crampon experts', 'Hidden geothermal hot pools', 'Underground lava tube photography', 'Fringe-season aurora spotting away from tourists']
  },
  {
    id: 'exp-morocco',
    category: 'Sand',
    title: 'Morocco',
    location: 'Merzouga Erg & Nomad Crossings',
    date: 'January 2028',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1600', // Merzouga desert camels/dunes at sunset/sunrise
    description: 'Cross the high-altitude Atlas peaks and descend into the pure silence of the Sahara. Navigate cresting dunes on foot, share stories around acacia embers, and sleep under a raw sky undefiled by city lights.',
    highlights: ['Astronomy study with mountain experts', 'Bespoke desert camp with linen wool tents', 'Saharian microclimate exploration', 'Ancient clay Kasbah architectural studies']
  },
  {
    id: 'exp-madeira',
    category: 'Islands',
    title: 'Madeira',
    location: 'Pico do Arieiro & Laurel Canopy',
    date: 'May 2027',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1600', // Iconic mountain peak path of Pico do Arieiro above clouds in Madeira
    description: 'Trace the levadas through high altitude rainforests before breaking above the clouds at Pico do Arieiro. This sub-tropical island offers sheer vertical sea cliffs, massive microclimate changes, and cascades hidden in deep valleys.',
    highlights: ['Cloud-level ridge line hikes', 'Canyon stream scrambling', 'Laurel ancient forest navigation (UNESCO)', 'Lighthouse sunset stargazing']
  },
  {
    id: 'exp-cyclades',
    category: 'Waves',
    title: 'Cyclades',
    location: 'Sarakiniko Labyrinths & Volcanic Seas',
    date: 'June 2027',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1600', // Sarakiniko Beach, Milos white rocks
    description: 'Explore the volcanic cradle of Milos on foot and sail private support catamarans. Trace lunar white cliffs of Sarakiniko and find forgotten Hellenistic ruins overlooking direct, endless marine horizons.',
    highlights: ['Lunar limestone shore trekking', 'Sailing remote coastal sea tunnels', 'Tasting volcanic soils through local cuisine', 'Deep listening meditation on empty windwards']
  },
  {
    id: 'exp-lake-como',
    category: 'Mirrors',
    title: 'Lake Como',
    location: 'Villa del Balbianello & Alpine Basins',
    date: 'August 2027',
    image: 'https://images.unsplash.com/photo-1555568581-4b943f1cb0eb?auto=format&fit=crop&q=80&w=1600', // Picturesque lakeside town of Varenna with colorful houses, mountain slopes, and the blue water of Lake Como
    description: 'View the lake through the eyes of early 19th-century hikers. Cross high alpine mule trails, stay in stone farming cottages upper-basin, and cruise deep waters via authentic wooden runabouts to isolated shoreline steps.',
    highlights: ['Private garden exploration at Balbianello', 'Ridge-line trail from Como to Bellagio', 'Artisanal wooden boating', 'Forest grazing and peak panoramas']
  },
  {
    id: 'exp-corals-soon',
    category: 'Corals',
    title: 'Corals Expedition',
    location: 'Remote Marine Sanctuaries',
    date: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600', // Marine coral reef
    description: 'An upcoming journey deep into pristine coral reefs and remote marine reserves. Sign up to the waitlist to receive priority notices.',
    isComingSoon: true,
    highlights: []
  },
  {
    id: 'exp-peaks-soon',
    category: 'Peaks',
    title: 'Peaks Expedition',
    location: 'High-Altitude Ridge Climbs',
    date: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600', // High mountain peaks
    description: 'A mountain climbing journey designed for those seeking clarity above the clouds. Untouched ridges and base lodges await.',
    isComingSoon: true,
    highlights: []
  },
  {
    id: 'exp-wildlife-soon',
    category: 'Wildlife',
    title: 'Wildlife Expedition',
    location: 'Untamed Animal Horizons',
    date: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80&w=1600', // Majestic polar bear in Arctic Svalbard snow landscape
    description: 'Deep immersion into animal habitats, tracing ancient migration routes under seasonal weather.',
    isComingSoon: true,
    highlights: []
  },
  {
    id: 'exp-foliage-soon',
    category: 'Foliage',
    title: 'Foliage Expedition',
    location: 'Temperate Canopy Paths',
    date: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1600', // Lush, dense tropical green foliage and plants in the Amazon Rainforest
    description: 'Delve into primeval forests where trees tell thousand-year old stories and vegetation consumes the horizon.',
    isComingSoon: true,
    highlights: []
  }
];

export const PLAYBOOKS: Playbook[] = [
  {
    id: 'play-como',
    title: 'Lake Como Playbook',
    category: 'Mirrors',
    price: 0,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800', // Beautiful elevated view of Lake Como, shoreline town, and mountains
    description: 'Our comprehensive planning manual for the alpine basin of Como. Outlines the perfect hiking path, private ferry access, and lesser-known villages.',
    features: [
      'Interactive geo-points (GPX files included)',
      'Direct contact numbers to classic wooden water taxis',
      'The Sentiero del Viandante complete trail sequence',
      'Quiet mountain rifugios mapping'
    ]
  },
  {
    id: 'play-madeira',
    title: 'Madeira Playbook',
    category: 'Islands',
    price: 49,
    image: 'https://images.unsplash.com/photo-1541013719417-099f89d3e41a?auto=format&fit=crop&q=80&w=800', // Beautiful dramatic sea cliffs of Ponta de Sao Lourenco in Madeira
    description: 'A thoughtful guide covering the sub-tropical ridge walks and UNESCO laurel forests of Madeira.',
    features: [
      'Microclimate logistics and safety guidelines',
      'Off-peak waterfall trail scheduling',
      'Rustic ocean-view farm stays',
      'Coastal road maps and rental options'
    ]
  },
  {
    id: 'play-iceland',
    title: 'Iceland Playbook',
    category: 'Ice',
    price: 79,
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=800', // Majestic green aurora borealis northern lights in Iceland landscape
    description: 'Designed for cold-altitude exploration covering glacial caves, active volcanic fields, and hot springs.',
    features: [
      'Seasonal ring road safety indices',
      'Self-drive geothermal field routing',
      'Advanced gear assembly specifications',
      'Stargazing locations catalog'
    ]
  },
  {
    id: 'play-cyclades',
    title: 'Cyclades Playbook',
    category: 'Waves',
    price: 49,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800', // Sarakiniko Beach Milos white volcanic rocks and turquoise sea
    description: 'The master planning blueprint for a deep sea and land-crossing trip around Milos and Sifnos.',
    features: [
      'Isolated beach coves list only reachable by foot',
      'Island hopping wooden ferries and schedules',
      'Caves and sea stack exploration routes',
      'Tavernas serving genuine zero-mile dishes'
    ]
  },
  {
    id: 'play-morocco',
    title: 'Morocco Playbook',
    category: 'Sand',
    price: 79,
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=800', // Merzouga dunes Sahara desert camels
    description: 'A thoughtful guide for deep sand voyages and High Atlas mountain passes.',
    features: [
      'Atlas mountain weather transition graphs',
      'Traditional desert camps contacts list',
      'Stargazing and navigation techniques',
      'Souk market direct sourcing guide'
    ]
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Priority Booking',
    description: 'Members receive direct pre-booking invites to all upcoming expeditions 30 days before public announcement.',
    icon: 'Sparkles'
  },
  {
    title: 'Early Access',
    description: 'Guaranteed slots on limited-personnel scouting trips led directly by our founders and travel designers.',
    icon: 'Compass'
  },
  {
    title: 'All Playbooks Included',
    description: 'Full, instant digital access to every single destination Playbook, including all future updates and releases.',
    icon: 'BookOpen'
  },
  {
    title: 'Annual Offlight Gala Dinner',
    description: 'An invitation to our intimate end-of-year dinner held in a remote mountain chalet, reuniting travelers and photographers.',
    icon: 'Utensils'
  }
];

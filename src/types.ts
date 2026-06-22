/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ViewPage = 
  | 'home' 
  | 'expeditions' 
  | 'playbooks' 
  | 'studio' 
  | 'membership' 
  | 'field-tested' 
  | 'local-knowledge' 
  | 'offlight-mode' 
  | 'curated-memories';

export interface Expedition {
  id: string;
  category: 'Ice' | 'Sand' | 'Islands' | 'Waves' | 'Mirrors' | 'Corals' | 'Peaks' | 'Wildlife' | 'Foliage';
  title: string;
  location: string;
  date: string;
  image: string;
  isComingSoon?: boolean;
  description: string;
  highlights: string[];
}

export interface Playbook {
  id: string;
  title: string;
  category: string;
  price: number; // 0 for free
  image: string;
  description: string;
  features: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ContactSubmission {
  firstName: string;
  lastName: string;
  age: string;
  nationality: string;
  email: string;
  countryCode: string;
  phone: string;
  interests: string[];
  reference: string;
}

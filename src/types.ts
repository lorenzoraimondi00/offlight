export interface WaitlistMember {
  name: string;
  city: string;
  country: string;
  passion: string;
  position: number;
  joinedAt: string;
}

export interface WaitlistStats {
  users: WaitlistMember[];
  totalCount: number;
  passionCounts: Record<string, number>;
}

export interface PassionDetails {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  highlights: {
    title: string;
    description: string;
    location: string;
    vibe: string;
  }[];
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface CustomJourney {
  id: string;
  title: string;
  description: string;
  passion: string;
  itinerary: string;
  createdOn: string;
}

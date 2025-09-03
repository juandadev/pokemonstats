export type RoadmapStatus = 'in-progress' | 'planned' | 'completed' | 'skipped';

type RoadmapCategory =
  | 'Core Features'
  | 'Effectiveness Chart'
  | 'Pokémon Data'
  | 'Competitive'
  | 'Accessibility'
  | 'Quality & Insights';

export type Roadmap = {
  id: number;
  title: string;
  description: string;
  status: RoadmapStatus;
  category: RoadmapCategory;
  estimatedCompletion: string;
  priority: 'high' | 'medium' | 'low';
  features: string[];
};

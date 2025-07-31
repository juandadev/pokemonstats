import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon,
  StarIcon,
  ZapIcon,
} from 'lucide-react';
import { clsx } from 'clsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type RoadmapStatus = 'Done' | 'In Progress' | 'Planned';

type RoadmapCategory =
  | 'Core Features'
  | 'UI/UX Improvements'
  | 'Advanced Features'
  | 'Performance & Technical';

type RoadmapPhase = 1 | 2 | 3;

type Roadmap = {
  title: string;
  description: string;
  status: RoadmapStatus;
  category: RoadmapCategory;
  phase: RoadmapPhase;
};

const ROADMAP: Roadmap[] = [
  {
    title: 'Replace Bootstrap & React Bootstrap with Tailwind CSS & shadcn/ui',
    description:
      'Complete overhaul of styling for better performance and customization',
    status: 'Done',
    category: 'Performance & Technical',
    phase: 1,
  },
  {
    title: 'Remove axios library and use native fetch API',
    description: 'Switching to native fetch to reduce bundle size',
    status: 'Done',
    category: 'Performance & Technical',
    phase: 1,
  },
  {
    title: 'Hero section',
    description: 'New illustration and layout for a more engaging hero section',
    status: 'Done',
    category: 'Core Features',
    phase: 1,
  },
  {
    title: 'Fix empty evolution chain display for Pokémon without evolutions',
    description: 'Ensuring proper handling of Pokémon that do not evolve',
    status: 'Done',
    category: 'Performance & Technical',
    phase: 3,
  },
  {
    title: 'Pokemon card',
    description:
      'New card layout with rich colors based on Pokemon type and better visuals',
    status: 'Done',
    category: 'Core Features',
    phase: 1,
  },
  {
    title: 'Complete missing typescript types',
    description: 'Adding types for all components and utilities',
    status: 'Done',
    category: 'Performance & Technical',
    phase: 1,
  },
  {
    title: 'Refactor evolution details display',
    description:
      'Fix broken evolution details display for Pokémon evolution chains',
    status: 'Done',
    category: 'Performance & Technical',
    phase: 1,
  },
  {
    title:
      'Auto select Pokémon type in type effectiveness calculator when searching for Pokémon',
    description:
      'Improving user experience by auto-selecting type based on Pokémon search',
    status: 'Done',
    category: 'Advanced Features',
    phase: 2,
  },
  {
    title: 'Add sticky header for selected Pokémon',
    description: 'Keeping selected Pokémon visible while scrolling',
    status: 'Done',
    category: 'UI/UX Improvements',
    phase: 2,
  },
  {
    title: 'Move Pokemon data to a context provider',
    description:
      'Centralizing Pokémon data management for better state handling',
    status: 'Done',
    category: 'Performance & Technical',
    phase: 1,
  },
  {
    title: 'Create a landing page with a waitlist',
    description:
      'Building a landing page to collect emails so users can be notified when the site is back online',
    status: 'Done',
    category: 'Core Features',
    phase: 1,
  },
  {
    title: 'Scroll to top button',
    description: 'Adding a button to quickly scroll back to the search bar',
    status: 'Planned',
    category: 'UI/UX Improvements',
    phase: 3,
  },
  {
    title: 'Dual type effectiveness support',
    description:
      'Allowing users to select up to two types for effectiveness calculations',
    status: 'Done',
    category: 'Advanced Features',
    phase: 2,
  },
  {
    title: 'Extend effectiveness chart to defender mode',
    description:
      'Adding defender mode to the type effectiveness calculator with dual type support',
    status: 'Done',
    category: 'Advanced Features',
    phase: 2,
  },
  {
    title: 'Support for special modifier in effectiveness calculations',
    description:
      'Adding special moves, passive abilities and other exceptions that changes the type effectiveness for a more accurate calculation',
    status: 'Planned',
    category: 'Advanced Features',
    phase: 2,
  },
  {
    title: 'X button to clear search input',
    description: 'Adding a clear button to the search input for easier resets',
    status: 'Planned',
    category: 'UI/UX Improvements',
    phase: 3,
  },
  {
    title: 'Display Pokémon base stats in the Pokemon card',
    description: 'Adding base stats to the Pokémon card for quick reference',
    status: 'Done',
    category: 'Advanced Features',
    phase: 2,
  },
  {
    title: 'Select a Pokemon from the evolution chain for a quick search',
    description:
      'Allowing users to click on any Pokémon in the evolution chain to search for it directly',
    status: 'Planned',
    category: 'Advanced Features',
    phase: 2,
  },
  {
    title: 'Expandable evolution details',
    description:
      'Adding an expandable section to show detailed evolution requirements and methods that goes beyond leveling up or using evolution stones',
    status: 'Done',
    category: 'Advanced Features',
    phase: 2,
  },
  {
    title: 'Improve loading states and error handling',
    description:
      'Adding better loading indicators and error messages for a smoother user experience',
    status: 'Planned',
    category: 'Performance & Technical',
    phase: 3,
  },
  {
    title: 'Analytics integration',
    description:
      'Adding analytics tools to track user interactions for search queries, page views, and heatmaps to improve the user experience',
    status: 'Planned',
    category: 'Performance & Technical',
    phase: 3,
  },
  {
    title: 'Integrate "More" page for additional info',
    description:
      "Adding a dedicated page for more detailed information about what's coming next, contributors, special thanks, and project updates",
    status: 'Planned',
    category: 'Core Features',
    phase: 1,
  },
  {
    title: 'A11y improvements',
    description:
      'Improving accessibility features for better usability by keyboard and screen readers',
    status: 'Planned',
    category: 'Core Features',
    phase: 1,
  },
  {
    title: 'Refactor codebase for better maintainability',
    description:
      'Improving code structure, organization, and documentation for easier future development and contributions',
    status: 'In Progress',
    category: 'Performance & Technical',
    phase: 3,
  },
  {
    title: 'Performance optimizations',
    description:
      'Implementing various performance improvements such as code splitting, lazy loading, and optimizing images for faster load times',
    status: 'In Progress',
    category: 'Performance & Technical',
    phase: 3,
  },
  {
    title: 'Dark mode support',
    description:
      'Adding a dark mode toggle for better user experience in low-light environments',
    status: 'Planned',
    category: 'UI/UX Improvements',
    phase: 3,
  },
  {
    title: 'Scrape Pokemon data',
    description:
      'Gather all available data from APIs and other sources to have static data for faster loading and offline support',
    status: 'Planned',
    category: 'Performance & Technical',
    phase: 3,
  },
  {
    title: 'PWA support',
    description:
      'Implementing Progressive Web App features for offline support and app-like experience',
    status: 'Planned',
    category: 'Performance & Technical',
    phase: 3,
  },
  {
    title: 'I18n support',
    description:
      'Adding internationalization support to make the app accessible in Spanish',
    status: 'Planned',
    category: 'Core Features',
    phase: 1,
  },
  {
    title: 'Improve mobile layout',
    description:
      'Enhancing the mobile layout for better usability on smaller screens',
    status: 'In Progress',
    category: 'Core Features',
    phase: 1,
  },
];

const itemsOrder = { Done: 1, 'In Progress': 2, Planned: 3 };

export default function ProjectProgress() {
  const completedItemsLength = ROADMAP.filter(
    (item) => item.status === 'Done'
  ).length;
  const inProgressItemsLength = ROADMAP.filter(
    (item) => item.status === 'In Progress'
  ).length;
  const plannedItemsLength = ROADMAP.filter(
    (item) => item.status === 'Planned'
  ).length;

  const coreFeatures = ROADMAP.filter(
    (item) => item.category === 'Core Features'
  ).sort((a, b) => itemsOrder[a.status] - itemsOrder[b.status]);
  const uiImprovements = ROADMAP.filter(
    (item) => item.category === 'UI/UX Improvements'
  ).sort((a, b) => itemsOrder[a.status] - itemsOrder[b.status]);
  const advancedFeatures = ROADMAP.filter(
    (item) => item.category === 'Advanced Features'
  ).sort((a, b) => itemsOrder[a.status] - itemsOrder[b.status]);
  const technicalImprovements = ROADMAP.filter(
    (item) => item.category === 'Performance & Technical'
  ).sort((a, b) => itemsOrder[a.status] - itemsOrder[b.status]);

  const phase1Items = ROADMAP.filter((item) => item.phase === 1);
  const completedPhase1Items = phase1Items.filter(
    (item) => item.status === 'Done'
  );

  const phase2Items = ROADMAP.filter((item) => item.phase === 2);
  const completedPhase2Items = phase2Items.filter(
    (item) => item.status === 'Done'
  );

  const phase3Items = ROADMAP.filter((item) => item.phase === 3);
  const completedPhase3Items = phase3Items.filter(
    (item) => item.status === 'Done'
  );

  const statusVariants = {
    Done: {
      containerClassName: 'bg-green-50 border-green-200',
      Icon: () => (
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircleIcon className="w-4 h-4 text-white" />
        </div>
      ),
      Label: () => (
        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
          Done
        </div>
      ),
    },
    'In Progress': {
      containerClassName: 'bg-blue-50 border-blue-200',
      Icon: () => (
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      ),
      Label: () => (
        <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
          In Progress
        </div>
      ),
    },
    Planned: {
      containerClassName: 'bg-gray-50 border-gray-200',
      Icon: () => (
        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
          <ClockIcon className="w-4 h-4 text-white" />
        </div>
      ),
      Label: () => (
        <div className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full font-medium">
          Planned
        </div>
      ),
    },
  };

  return (
    <Card className="mb-16 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardContent className="py-4 px-3 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ClockIcon className="w-4 h-4" />
            Live Development Progress
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What We&apos;re Building
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track our progress as we rebuild Pokemon Stats from the ground up.
            Here&apos;s what&apos;s completed, in progress, and coming next.
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-700 mb-1">
              {completedItemsLength}
            </div>
            <div className="text-sm text-green-600 font-medium">Completed</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-700 mb-1">
              {inProgressItemsLength}
            </div>
            <div className="text-sm text-blue-600 font-medium">In Progress</div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-gray-700 mb-1">
              {plannedItemsLength}
            </div>
            <div className="text-sm text-gray-600 font-medium">Planned</div>
          </div>
        </div>

        {/* Progress Categories */}
        <Accordion
          type="single"
          collapsible
          defaultValue="core-features"
          className="space-y-8"
        >
          {/* Core Features */}
          <AccordionItem value="core-features">
            <AccordionTrigger>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ZapIcon className="w-5 h-5 text-yellow-500" />
                Core Features
              </h3>
            </AccordionTrigger>
            <AccordionContent className="grid gap-3 pb-3">
              {coreFeatures.map((item) => {
                const Status = statusVariants[item.status];

                return (
                  <div
                    key={`${item.category} ${item.title}`}
                    className={clsx(
                      'flex items-center gap-3 p-3 border rounded-lg',
                      Status.containerClassName
                    )}
                  >
                    <Status.Icon />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {item.description}
                      </div>
                    </div>
                    <Status.Label />
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>

          {/* UI/UX Improvements */}
          <AccordionItem value="ux-improvements">
            <AccordionTrigger>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-purple-500" />
                UI/UX Improvements
              </h3>
            </AccordionTrigger>
            <AccordionContent className="grid gap-3 pb-3">
              {uiImprovements.map((item) => {
                const Status = statusVariants[item.status];

                return (
                  <div
                    key={`${item.category} ${item.title}`}
                    className={clsx(
                      'flex items-center gap-3 p-3 border rounded-lg',
                      Status.containerClassName
                    )}
                  >
                    <Status.Icon />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {item.description}
                      </div>
                    </div>
                    <Status.Label />
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>

          {/* Advanced Features */}
          <AccordionItem value="advanced-features">
            <AccordionTrigger>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-yellow-500" />
                Advanced Features
              </h3>
            </AccordionTrigger>
            <AccordionContent className="grid gap-3 pb-3">
              {advancedFeatures.map((item) => {
                const Status = statusVariants[item.status];

                return (
                  <div
                    key={`${item.category} ${item.title}`}
                    className={clsx(
                      'flex items-center gap-3 p-3 border rounded-lg',
                      Status.containerClassName
                    )}
                  >
                    <Status.Icon />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {item.description}
                      </div>
                    </div>
                    <Status.Label />
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>

          {/* Performance & Technical */}
          <AccordionItem value="technical-improvements">
            <AccordionTrigger>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ZapIcon className="w-5 h-5 text-green-500" />
                Performance & Technical
              </h3>
            </AccordionTrigger>
            <AccordionContent className="grid gap-3">
              {technicalImprovements.map((item) => {
                const Status = statusVariants[item.status];

                return (
                  <div
                    key={`${item.category} ${item.title}`}
                    className={clsx(
                      'flex items-center gap-3 p-3 border rounded-lg',
                      Status.containerClassName
                    )}
                  >
                    <Status.Icon />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {item.description}
                      </div>
                    </div>
                    <Status.Label />
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Progress Timeline */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              🚀 Estimated Launch Timeline
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="text-sm font-medium text-blue-600 mb-1">
                  Phase 1 - Core Features
                </div>
                <div className="text-xs text-gray-600">2-3 weeks</div>
                <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${
                        (completedPhase1Items.length * 100) / phase1Items.length
                      }%`,
                    }}
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-purple-600 mb-1">
                  Phase 2 - Advanced Features
                </div>
                <div className="text-xs text-gray-600">3-4 weeks</div>
                <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{
                      width: `${
                        (completedPhase2Items.length * 100) / phase2Items.length
                      }%`,
                    }}
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-green-600 mb-1">
                  Phase 3 - Polish & Launch
                </div>
                <div className="text-xs text-gray-600">1-2 weeks</div>
                <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: `${
                        (completedPhase3Items.length * 100) / phase3Items.length
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Target Launch:</strong> Early September 2025 • Follow on
              Twitter for daily updates!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

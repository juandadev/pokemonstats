export type Locale = 'en' | 'es';

export type PokeAPILanguage = 'en' | 'es';

export interface LocaleConfig {
  code: Locale;
  name: string;
  flag: string;
  pokeAPICode: PokeAPILanguage;
}

export interface BounceRate {
  label: string;
  description: string;
}

export interface Translations {
  common: {
    buttons: {
      close: string;
      back: string;
      details: string;
      clear: string;
    };
    labels: {
      none: string;
      loading: string;
    };
  };
  navigation: {
    home: string;
    roadmap: string;
    specialThanks: string;
    privacyPolicy: string;
    sections: {
      navigation: string;
      legal: string;
    };
    accessibility: {
      menu: string;
    };
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    buttons: {
      github: string;
      support: string;
    };
    illustration: {
      credit: string;
      artist: string;
    };
  };
  search: {
    placeholder: string;
    label: string;
    noResults: {
      title: string;
      suggestion: string;
    };
    instructions: {
      navigate: string;
      select: string;
    };
  };
  pokemonCard: {
    tabs: {
      overview: string;
      baseStats: string;
      moves: string;
    };
  };
  stats: {
    names: {
      hp: string;
      attack: string;
      defense: string;
      specialAttack: string;
      specialDefense: string;
      speed: string;
      total: string;
    };
    types: {
      normal: string;
      fire: string;
      water: string;
      electric: string;
      grass: string;
      ice: string;
      fighting: string;
      poison: string;
      ground: string;
      flying: string;
      psychic: string;
      bug: string;
      rock: string;
      ghost: string;
      dragon: string;
      dark: string;
      steel: string;
      fairy: string;
    };
  };
  moves: {
    selectGame: string;
    sections: {
      machines: string;
      levelUp: string;
    };
    labels: {
      power: string;
      pp: string;
      accuracy: string;
    };
    instruction: string;
    games: Record<string, string>;
  };
  effectiveness: {
    title: string;
    subtitle: {
      single: string;
      dual: string;
    };
    modes: {
      offensive: {
        title: string;
        description: string;
      };
      defensive: {
        title: string;
        description: string;
      };
    };
    categories: {
      superEffective: string;
      notVeryEffective: string;
      noEffect: string;
      weakTo: string;
      resistantTo: string;
      immuneTo: string;
    };
    instructions: string;
    mobileInstruction: string;
    dualTypeAnalysis: string;
    initial: {
      title: string;
      description: string;
    };
    selectedTypes: {
      title: string;
      dualType: string;
      noTypesSelected: string;
    };
  };
  evolutions: {
    title: string;
    modalTitle: string;
    modalDescription: string;
    footer: string;
    triggers: {
      'base-form': string;
      'level-up': string;
      'use-item': string;
      trade: string;
      'three-critical-hits': string;
      'mega-evolution': string;
      gmax: string;
      default: string;
    };
    details: {
      gender: {
        female: string;
        male: string;
      };
      heldItem: string;
      requiredItem: string;
      knownMove: string;
      knownMoveType: string;
      location: string;
      minAffection: string;
      minBeauty: string;
      minHappiness: string;
      minLevel: string;
      needsOverworldRain: string;
      needsOverworldRainValue: string;
      needsOverworldRainNote: string;
      partySpecies: string;
      partyType: string;
      relativePhysicalStats: string;
      relativePhysicalStatsValues: {
        attackGreater: string;
        attackLess: string;
        attackEqual: string;
      };
      timeOfDay: string;
      timeOfDayValues: {
        day: string;
        night: string;
      };
      tradeSpecies: string;
      turnUpsideDown: string;
      turnUpsideDownValue: string;
      weather: string;
    };
  };
  pages: {
    notFound: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      action: string;
      followProgress: string;
      actionCard: {
        title: string;
        goHome: string;
        followProgress: string;
      };
      socialButtons: {
        twitter: string;
        github: string;
      };
      factsSection: {
        title: string;
        intro: string;
      };
      facts: {
        pikachuName: {
          title: string;
          description: string;
        };
        typeEffectiveness: {
          title: string;
          description: string;
        };
        firstGames: {
          title: string;
          description: string;
        };
      };
    };
    roadmap: {
      badge: string;
      title: string;
      description: string;
      backButton: string;
      stats: {
        completed: string;
        inProgress: string;
        planned: string;
      };
      status: {
        completed: string;
        inProgress: string;
        planned: string;
        skipped: string;
      };
      priority: {
        high: string;
        medium: string;
        low: string;
      };
      categories: {
        qualityInsights: string;
        coreFeatures: string;
        effectivenessChart: string;
        pokemonData: string;
        accessibility: string;
        competitive: string;
      };
      keyFeatures: string;
      items: {
        analyticsInsights: {
          title: string;
          description: string;
          estimatedCompletion: string;
          features: string[];
        };
        searchHistory: {
          title: string;
          description: string;
          estimatedCompletion: string;
          features: string[];
        };
        advancedBattleModifiers: {
          title: string;
          description: string;
          estimatedCompletion: string;
          features: string[];
        };
        evolutionDetailsByGame: {
          title: string;
          description: string;
          estimatedCompletion: string;
          features: string[];
        };
        generationsRegions: {
          title: string;
          description: string;
          estimatedCompletion: string;
          features: string[];
        };
        multilingualSupport: {
          title: string;
          description: string;
          estimatedCompletion: string;
          features: string[];
        };
        fullAccessibility: {
          title: string;
          description: string;
          estimatedCompletion: string;
          features: string[];
        };
        competitiveBattlingHub: {
          title: string;
          description: string;
          estimatedCompletion: string;
          features: string[];
        };
        teamBuilder: {
          title: string;
          description: string;
          estimatedCompletion: string;
          features: string[];
        };
      };
      contribute: {
        title: string;
        description: string;
        cards: {
          code: {
            title: string;
            description: string;
          };
          design: {
            title: string;
            description: string;
          };
          ideas: {
            title: string;
            description: string;
          };
        };
        buttons: {
          github: string;
          issues: string;
        };
      };
      footer: {
        backButton: string;
        thanksButton: string;
      };
    };
    thanks: {
      badge: string;
      title: string;
      description: string;
      backButton: string;
      inspirations: {
        title: string;
        description: string;
      };
      tools: {
        title: string;
        description: string;
      };
      cta: {
        title: string;
        description: string;
        cards: {
          code: {
            title: string;
            description: string;
          };
          coffee: {
            title: string;
            description: string;
          };
          star: {
            title: string;
            description: string;
          };
        };
        buttons: {
          github: string;
          coffee: string;
        };
      };
      footer: {
        backButton: string;
        roadmapButton: string;
      };
    };
    privacy: {
      badge: string;
      title: string;
      backButton: string;
      lastUpdated: string;
      effective: string;
      intro: string;
      databuddyIntro: string;
      collect: {
        title: string;
        subtitle: string;
        items: {
          pageViews: BounceRate;
          session: BounceRate;
          interactions: BounceRate;
          outboundLinks: BounceRate;
          engagement: BounceRate;
          performance: BounceRate;
          bounceRate: BounceRate;
        };
        helpsTitle: string;
        helps: {
          design: string;
          painPoints: string;
          features: string;
          performance: string;
        };
        footer: string;
      };
      security: {
        title: string;
        items: {
          noPersonalData: string;
          aggregated: string;
          notIdentified: string;
        };
      };
      contact: {
        title: string;
        description: string;
        cards: {
          email: { title: string };
          updates: { title: string; description: string };
        };
        button: string;
      };
    };
  };
  footer: {
    disclaimer: {
      title: string;
      text: string;
    };
    links: {
      roadmap: string;
      thanks: string;
      github: string;
      issues: string;
      support: string;
      pokeapi: string;
    };
    madeBy: string;
    copyright: string;
  };
}

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

export type TranslationKey = NestedKeyOf<Translations>;

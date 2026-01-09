export type Locale = 'en' | 'es';

export type PokeAPILanguage = 'en' | 'es';

export interface LocaleConfig {
  code: Locale;
  name: string;
  flag: string;
  pokeAPICode: PokeAPILanguage;
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
  };
  evolutions: {
    title: string;
    modalTitle: string;
    modalDescription: string;
    footer: string;
  };
  pages: {
    notFound: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      action: string;
      followProgress: string;
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
      backLink: string;
      stats: {
        completed: string;
        inProgress: string;
        planned: string;
      };
      keyFeatures: string;
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
        viewThanks: string;
      };
    };
    thanks: {
      badge: string;
      title: string;
      description: string;
      backLink: string;
      sections: {
        inspirations: {
          title: string;
          description: string;
        };
        tools: {
          title: string;
          description: string;
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
        viewRoadmap: string;
      };
    };
    privacy: {
      badge: string;
      title: string;
      backLink: string;
      lastUpdated: string;
      effective: string;
      email: string;
      sections: {
        infoCollect: {
          title: string;
          intro: string;
          metrics: {
            pageViews: string;
            session: string;
            interactions: string;
            outboundLinks: string;
            engagement: string;
            performance: string;
            bounceRate: string;
          };
        };
        dataUse: {
          title: string;
          items: {
            design: string;
            painPoints: string;
            features: string;
            performance: string;
          };
        };
        privacy: {
          title: string;
          description: string;
        };
        security: {
          title: string;
          items: {
            noPersonalData: string;
            aggregated: string;
            anonymous: string;
          };
        };
        questions: {
          title: string;
          emailButton: string;
        };
        updates: {
          title: string;
          contactButton: string;
        };
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

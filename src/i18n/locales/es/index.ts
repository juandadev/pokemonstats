import { Translations } from '@/i18n';

// Temporary minimal Spanish translations for testing
// Full translations will be added in Phase 4
const translations: Translations = {
  common: {
    buttons: {
      close: 'Cerrar',
      back: 'Volver',
      details: 'Detalles',
      clear: 'Limpiar',
    },
    labels: {
      none: 'Ninguno',
      loading: 'Cargando...',
    },
  },
  navigation: {
    home: 'Inicio',
    roadmap: 'Hoja de Ruta',
    specialThanks: 'Agradecimientos',
    privacyPolicy: 'Política de Privacidad',
    sections: {
      navigation: 'Navegación',
      legal: 'Legal',
    },
    accessibility: {
      menu: 'Menú de navegación plegable',
    },
  },
  hero: {
    badge: 'Datos de Pokédex en Vivo',
    title: 'Estadísticas Pokémon',
    subtitle:
      'Explora rápidamente debilidades, evoluciones y más. Un compañero limpio de Pokédex hecho para entrenadores casuales.',
    buttons: {
      github: 'Estrella en GitHub',
      support: 'Apoyar Proyecto',
    },
    illustration: {
      credit: 'Ilustración por',
      artist: 'Altarichiru',
    },
  },
  search: {
    placeholder: 'Buscar Pokémon...',
    label: 'Pokémon',
    noResults: {
      title: 'No se encontraron Pokémon',
      suggestion: 'Intenta buscar "pikachu" o "charizard"',
    },
    instructions: {
      navigate: 'Usa ↑↓ para navegar',
      select: 'Presiona Enter para seleccionar',
    },
  },
  pokemonCard: {
    tabs: {
      overview: 'Vista General',
      baseStats: 'Estadísticas Base',
      moves: 'Movimientos',
    },
  },
  stats: {
    names: {
      hp: 'PS',
      attack: 'Ataque',
      defense: 'Defensa',
      specialAttack: 'Ataque Esp.',
      specialDefense: 'Defensa Esp.',
      speed: 'Velocidad',
      total: 'Total',
    },
    types: {
      normal: 'Normal',
      fire: 'Fuego',
      water: 'Agua',
      electric: 'Eléctrico',
      grass: 'Planta',
      ice: 'Hielo',
      fighting: 'Lucha',
      poison: 'Veneno',
      ground: 'Tierra',
      flying: 'Volador',
      psychic: 'Psíquico',
      bug: 'Bicho',
      rock: 'Roca',
      ghost: 'Fantasma',
      dragon: 'Dragón',
      dark: 'Siniestro',
      steel: 'Acero',
      fairy: 'Hada',
    },
  },
  moves: {
    selectGame:
      'Selecciona una versión del juego para mostrar la lista de movimientos',
    sections: {
      machines: 'Máquinas',
      levelUp: 'Por Nivel',
    },
    labels: {
      power: 'Poder',
      pp: 'PP',
      accuracy: 'precisión',
    },
    instruction:
      'Selecciona una versión del juego para mostrar la lista de movimientos',
  },
  effectiveness: {
    title: 'Tabla de Efectividad de Tipos',
    subtitle: {
      single: 'Selecciona hasta 2 tipos para ver efectividad (tipo único)',
      dual: 'Selecciona hasta 2 tipos para ver efectividad (tipo dual)',
    },
    modes: {
      offensive: {
        title: 'Atacante',
        description: '¿Qué puedo golpear?',
      },
      defensive: {
        title: 'Defensor',
        description: '¿Qué me golpea?',
      },
    },
    categories: {
      superEffective: 'Súper Efectivo Contra (2×)',
      notVeryEffective: 'No Muy Efectivo Contra (0.5×)',
      noEffect: 'Sin Efecto (0×)',
      weakTo: 'Débil a (4× - 2×)',
      resistantTo: 'Resistente a (0.5 - 0.25×)',
      immuneTo: 'Inmune a (0×)',
    },
    instructions:
      'Desplázate horizontalmente • Toca para seleccionar hasta 2 tipos',
    mobileInstruction:
      'Desplázate horizontalmente • Toca para seleccionar hasta 2 tipos',
    dualTypeAnalysis:
      '🔥 Análisis de Tipo Dual: Mostrando efectividad combinada de',
    initial: {
      title: 'Selecciona tipos arriba para ver efectividad',
      description:
        'Elige 1 tipo para análisis de tipo único o 2 tipos para análisis de tipo dual',
    },
  },
  evolutions: {
    title: 'Cadena de Evolución',
    modalTitle: 'Cómo evolucionar a',
    modalDescription: 'Diferentes métodos disponibles en todos los juegos',
    footer:
      '¿Encontraste algo incorrecto, desactualizado o faltante? Reporta un problema aquí para que podamos mantener esta información precisa para todos 🙌',
  },
  pages: {
    notFound: {
      badge: '404 - Página No Encontrada',
      title: '404',
      subtitle: '¡Oops! ¡Este Pokémon escapó! 🏃‍♂️💨',
      description:
        'La página que buscas parece haberse alejado a la hierba alta.',
      action: 'Ir a Inicio',
      followProgress: 'O sigue nuestro progreso de desarrollo:',
      socialButtons: {
        twitter: 'X / Twitter',
        github: 'GitHub',
      },
      factsSection: {
        title: 'Mientras estás aquí... 🤔',
        intro: '¿Sabías estos datos curiosos sobre Pokémon?',
      },
      facts: {
        pikachuName: {
          title: 'Nombre de Pikachu',
          description:
            'Pikachu viene de "pika" (el sonido de una chispa eléctrica) y "chu" (el sonido de un ratón).',
        },
        typeEffectiveness: {
          title: 'Efectividad de Tipos',
          description:
            'Hay 324 combinaciones únicas de tipos duales posibles, pero solo 171 existen en la serie principal de juegos.',
        },
        firstGames: {
          title: 'Primeros Juegos',
          description:
            'Los primeros juegos de Pokémon, Rojo y Verde, se lanzaron en Japón en 1996, pero Verde nunca se lanzó internacionalmente.',
        },
      },
    },
    roadmap: {
      badge: 'Hoja de Ruta del Proyecto',
      title: '¿Qué Sigue?',
      description:
        'Nuestra hoja de ruta para Estadísticas Pokémon después del lanzamiento oficial...',
      backLink: 'Volver a Estadísticas Pokémon',
      stats: {
        completed: 'Completado',
        inProgress: 'En Progreso',
        planned: 'Planeado',
      },
      keyFeatures: 'Características Clave:',
      contribute: {
        title: '¿Quieres Contribuir?',
        description:
          '¡Estadísticas Pokémon es un proyecto de código abierto!...',
        cards: {
          code: {
            title: 'Contribuciones de Código',
            description: 'Ayuda a construir nuevas características',
          },
          design: {
            title: 'Diseño y UX',
            description: 'Mejora la experiencia del usuario',
          },
          ideas: {
            title: 'Ideas y Retroalimentación',
            description: 'Comparte tus sugerencias',
          },
        },
        buttons: {
          github: 'Ver en GitHub',
          issues: 'Reportar Problemas',
        },
      },
      footer: {
        viewThanks: 'Ver Agradecimientos',
      },
    },
    thanks: {
      badge: 'Agradecimientos Especiales',
      title: '¡Gracias!',
      description:
        'Estadísticas Pokémon no sería posible sin estos increíbles recursos y personas...',
      backLink: 'Volver a Estadísticas Pokémon',
      sections: {
        inspirations: {
          title: 'Inspiraciones y Referencias',
          description:
            'Proyectos y recursos increíbles que inspiraron este trabajo...',
        },
        tools: {
          title: 'Herramientas y Tecnologías',
          description:
            'Herramientas y tecnologías increíbles que hicieron posible este proyecto...',
        },
      },
      contribute: {
        title: '¿Quieres Ser Destacado Aquí?',
        description: 'Hay muchas maneras de apoyar Estadísticas Pokémon...',
        cards: {
          code: {
            title: 'Contribuir Código',
            description: 'Ayuda a construir nuevas características',
          },
          coffee: {
            title: 'Cómprame un Café',
            description: 'Apoya el desarrollo',
          },
          star: {
            title: 'Estrella en GitHub',
            description: 'Muestra tu aprecio',
          },
        },
        buttons: {
          github: 'Contribuir en GitHub',
          coffee: 'Cómprame un Café',
        },
      },
      footer: {
        viewRoadmap: 'Ver Hoja de Ruta del Proyecto',
      },
    },
    privacy: {
      badge: 'Privacidad y Seguridad',
      title: 'Política de Privacidad',
      backLink: 'Volver a Estadísticas Pokémon',
      lastUpdated: 'Última actualización: Septiembre 2025',
      effective: 'Efectivo: Septiembre 2025',
      email: 'juanda.martinezn@gmail.com',
      sections: {
        infoCollect: {
          title: 'Información que Recopilamos',
          intro: 'Este es el tipo de datos que Databuddy recopila:',
          metrics: {
            pageViews: 'Vistas de Página',
            session: 'Sesión',
            interactions: 'Interacciones',
            outboundLinks: 'Enlaces Salientes',
            engagement: 'Compromiso',
            performance: 'Rendimiento',
            bounceRate: 'Tasa de Rebote',
          },
        },
        dataUse: {
          title: 'Todo esto me ayuda a:',
          items: {
            design: 'Mejorar el diseño y la usabilidad',
            painPoints: 'Encontrar puntos de dolor o áreas confusas',
            features: 'Agregar nuevas características basadas en el uso real',
            performance: 'Mantener el rendimiento fluido',
          },
        },
        privacy: {
          title: 'Sin anuncios, sin reventa, sin seguimiento oculto...',
          description:
            'Recopilo solo lo necesario para mejorar tu experiencia.',
        },
        security: {
          title: 'Seguridad y Protección de Datos',
          items: {
            noPersonalData:
              'No se almacenan direcciones IP, correos electrónicos o identificadores personales.',
            aggregated: 'Todos los análisis son agregados y anonimizados.',
            anonymous:
              'No puedes ser identificado personalmente con estos datos.',
          },
        },
        questions: {
          title: '¿Preguntas Sobre Privacidad?',
          emailButton: 'Envíanos un Correo',
        },
        updates: {
          title: 'Actualizaciones de Política',
          contactButton: 'Contactar Equipo de Privacidad',
        },
      },
    },
  },
  footer: {
    disclaimer: {
      title: 'Descargo de Responsabilidad',
      text: 'Pokémon y todos los nombres respectivos son marcas comerciales de Nintendo, Game Freak y The Pokémon Company. Este proyecto es hecho por fans y no está afiliado con ellos.',
    },
    links: {
      roadmap: 'Hoja de Ruta del Proyecto',
      thanks: 'Agradecimientos',
      github: 'Ver Código Fuente',
      issues: 'Reportar un Problema',
      support: 'Apoyar Proyecto',
      pokeapi: 'Documentos de PokéAPI',
    },
    madeBy: 'Hecho con 💚 por Juan Daniel Martínez',
    copyright: '© 2021-{year} Pokemon Stats. Todos los derechos reservados.',
  },
};

export default translations;

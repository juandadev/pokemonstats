import { Translations } from '@/i18n';

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
    roadmap: 'Qué Sigue?',
    specialThanks: 'Créditos',
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
    badge: 'Datos en Vivo',
    title: 'Pokémon Stats',
    subtitle:
      'Explora rápidamente debilidades, evoluciones y más. Una Pokédex hecha para entrenadores casuales.',
    buttons: {
      github: 'Repo en GitHub',
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
      overview: 'General',
      baseStats: 'Estadísticas',
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
      machines: 'Por Máquinas',
      levelUp: 'Por Nivel',
    },
    labels: {
      power: 'Poder',
      pp: 'PP',
      accuracy: 'precisión',
    },
    instruction:
      'Selecciona una versión del juego para mostrar la lista de movimientos',
    games: {
      'red-blue': 'Rojo & Azul',
      yellow: 'Amarillo',
      'gold-silver': 'Oro & Plata',
      crystal: 'Cristal',
      'ruby-sapphire': 'Rubí & Zafiro',
      emerald: 'Esmeralda',
      'firered-leafgreen': 'Rojo Fuego & Verde Hoja',
      'diamond-pearl': 'Diamante & Perla',
      platinum: 'Platino',
      'heartgold-soulsilver': 'Oro HeartGold & Plata SoulSilver',
      'black-white': 'Negro & Blanco',
      'black-2-white-2': 'Negro 2 & Blanco 2',
      colosseum: 'Colosseum',
      xd: 'XD',
      'x-y': 'X & Y',
      'omega-ruby-alpha-sapphire': 'Rubí Omega & Zafiro Alfa',
      'sun-moon': 'Sol & Luna',
      'ultra-sun-ultra-moon': 'Ultra Sol & Ultra Luna',
      'lets-go-pikachu-lets-go-eevee': "Let's Go Pikachu & Let's Go Eevee",
      'sword-shield': 'Espada & Escudo',
      'brilliant-diamond-and-shining-pearl':
        'Diamante Brillante & Perla Reluciente',
      'legends-arceus': 'Leyendas: Arceus',
      'scarlet-violet': 'Escarlata & Púrpura',
      'legends-za': 'Leyendas: Z-A',
    },
  },
  effectiveness: {
    title: 'Tabla de Efectividad',
    subtitle: {
      single: 'Selecciona hasta 2 tipos para ver su efectividad (tipo único)',
      dual: 'Selecciona hasta 2 tipos para ver su efectividad (tipo dual)',
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
    title: 'Cadena Evolutiva',
    modalTitle: 'Cómo evolucionar a',
    modalDescription: 'Diferentes métodos disponibles en todos los juegos',
    footer:
      '¿Encontraste algo incorrecto, desactualizado o faltante? Reporta un problema aquí para que podamos mantener esta información precisa para todos 🙌',
    triggers: {
      'base-form': 'Forma Base',
      'level-up': 'Subir de Nivel',
      'use-item': 'Usar Objeto',
      trade: 'Intercambio o Cordón Unión',
      'three-critical-hits': 'Aterrizar tres golpes críticos en una batalla',
      'mega-evolution': 'Mega Evolución',
      gmax: 'Gigamax',
      default: 'Desconocido',
    },
    details: {
      gender: {
        female: 'Género: Femenino',
        male: 'Género: Masculino',
      },
      heldItem: 'Mientras sostiene',
      requiredItem: 'Objeto requerido',
      knownMove: 'Conoce movimiento',
      knownMoveType: 'Conoce algún movimiento de tipo',
      location: 'Ubicación',
      minAffection: 'Afecto mínimo',
      minBeauty: 'Belleza mínima',
      minHappiness: 'Felicidad mínima',
      minLevel: 'Nivel mínimo',
      needsOverworldRain: 'Clima',
      needsOverworldRainValue: 'Lluvia',
      needsOverworldRainNote:
        '(no durante batalla y no por movimientos como Danza Lluvia)',
      partySpecies: 'Ten en tu equipo',
      partyType: 'Ten en tu equipo algún Pokémon de tipo',
      relativePhysicalStats: 'Estadísticas físicas',
      relativePhysicalStatsValues: {
        attackGreater: 'Ataque > Defensa',
        attackLess: 'Ataque < Defensa',
        attackEqual: 'Ataque = Defensa',
      },
      timeOfDay: 'Hora',
      timeOfDayValues: {
        day: 'Día',
        night: 'Noche',
      },
      tradeSpecies: 'Intercambia por',
      turnUpsideDown: 'Mientras el dispositivo está',
      turnUpsideDownValue: 'volteado al revés',
      weather: 'Clima',
    },
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
      actionCard: {
        title: '¡Retomemos el rumbo!',
        goHome: 'Ir al inicio',
        followProgress: 'O sigue nuestros avances:',
      },
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
        'Nuestra hoja de ruta para Pokémon Stats después del lanzamiento oficial. Sigue nuestro progreso y descubre qué emocionantes características vienen a continuación.',
      backButton: 'Volver a Pokémon Stats',
      stats: {
        completed: 'Completado',
        inProgress: 'En Progreso',
        planned: 'Planeado',
      },
      status: {
        completed: 'Completado',
        inProgress: 'En Progreso',
        planned: 'Planeado',
        skipped: 'Omitido',
      },
      priority: {
        high: 'Prioridad alta',
        medium: 'Prioridad media',
        low: 'Prioridad baja',
      },
      categories: {
        qualityInsights: 'Calidad e Información',
        coreFeatures: 'Características Principales',
        effectivenessChart: 'Tabla de Efectividad',
        pokemonData: 'Datos de Pokémon',
        accessibility: 'Accesibilidad',
        competitive: 'Competitivo',
      },
      keyFeatures: 'Características Clave:',
      items: {
        analyticsInsights: {
          title: 'Analíticas',
          description:
            'Comprender cómo se usa la aplicación para mejorar características y experiencia.',
          estimatedCompletion: 'Q3 2025',
          features: [
            'Seguimiento de búsquedas',
            'Vistas de página',
            'Mapas de calor',
          ],
        },
        searchHistory: {
          title: 'Historial de Búsqueda de Pokémon',
          description:
            'Regresa rápidamente a tus últimas 5 búsquedas de Pokémon sin buscar nuevamente.',
          estimatedCompletion: 'Q1 2026',
          features: [
            'Historial de búsqueda persistente',
            'Sin Pokémon repetidos en la lista',
            'Botón flotante para acceso rápido',
          ],
        },
        advancedBattleModifiers: {
          title: 'Modificadores de Batalla Avanzados',
          description:
            'Efectividad de tipo precisa que incluye movimientos especiales, habilidades y nuevas reglas de batalla.',
          estimatedCompletion: 'Q1 2026',
          features: [
            'Movimientos especiales como Flying Press y Freeze Dry',
            'Soporte para batallas inversas',
            'Formas Tera y Stellar',
            'Habilidades de Pokémon que cambian la efectividad',
          ],
        },
        evolutionDetailsByGame: {
          title: 'Detalles de Evolución de Pokémon por Juego',
          description:
            'Filtra métodos de evolución según versiones específicas del juego para información precisa.',
          estimatedCompletion: 'Q2 2026',
          features: [
            'Reglas de evolución específicas por versión',
            'Ejemplos con Eevee',
          ],
        },
        generationsRegions: {
          title: 'Generaciones y Regiones de Pokémon',
          description:
            'Experiencia mejorada para Pokémon agrupados por generación, región, formas y variantes.',
          estimatedCompletion: 'Q3 2026',
          features: [
            'Resumen de generaciones',
            'Páginas de Pokédex regional',
            'Catálogo de formas y variantes',
          ],
        },
        multilingualSupport: {
          title: 'Soporte Multilingüe',
          description:
            'Usa Pokémon Stats en múltiples idiomas, comenzando con español.',
          estimatedCompletion: 'Q4 2025',
          features: ['Traducción al español', 'Marco de internacionalización'],
        },
        fullAccessibility: {
          title: 'Soporte de Accesibilidad Completo',
          description:
            'Haciendo la aplicación utilizable para todos con lectores de pantalla y navegación por teclado.',
          estimatedCompletion: 'Q4 2026',
          features: [
            'Soporte para lectores de pantalla',
            'Navegación amigable con teclado',
          ],
        },
        competitiveBattlingHub: {
          title: 'Centro de Batalla Competitiva',
          description:
            'Datos completos para batallas serias: movimientos, habilidades, objetos y más.',
          estimatedCompletion: 'No estimado',
          features: [
            'Lista de movimientos con detalles',
            'Habilidades y efectos',
            'Objetos equipados y naturalezas',
            'Base de datos de tipos Tera',
          ],
        },
        teamBuilder: {
          title: 'Creador de Equipos Pokémon',
          description:
            'Crea y analiza tu equipo soñado con tablas de efectividad y herramientas de sinergia.',
          estimatedCompletion: 'No estimado',
          features: [
            'Construye equipos personalizados',
            'Efectividad de tipo para equipos',
            'Resumen de fortalezas y debilidades',
          ],
        },
      },
      contribute: {
        title: '¿Quieres Contribuir?',
        description:
          '¡Pokémon Stats es un proyecto de código abierto! Damos la bienvenida a contribuciones de la comunidad. Ya seas desarrollador, diseñador o simplemente tengas grandes ideas, hay muchas maneras de ayudar.',
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
        backButton: 'Volver a Pokémon Stats',
        thanksButton: 'Ir a Créditos',
      },
    },
    thanks: {
      badge: 'Agradecimientos Especiales',
      title: '¡Gracias!',
      description:
        'Pokémon Stats no sería posible sin la increíble comunidad, los contribuidores, y las increíbles herramientas y recursos que nos inspiran cada día.',
      backButton: 'Volver a Pokémon Stats',
      inspirations: {
        title: 'Inspiraciones y Referencias',
        description:
          'Proyectos y recursos increíbles que inspiraron Pokémon Stats y ayudaron a dar forma a nuestra visión.',
      },
      tools: {
        title: 'Herramientas y Tecnologías',
        description:
          'Increíbles herramientas y tecnologías que hacen posible Pokémon Stats. ¡Gracias a todos los mantenedores de código abierto!',
      },
      cta: {
        title: '¿Quieres Ser Destacado Aquí?',
        description:
          'Hay muchas maneras de apoyar Pokémon Stats y unirte a nuestra increíble comunidad de contribuidores y patrocinadores.',
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
        backButton: 'Volver a Pokémon Stats',
        roadmapButton: 'Ver Hoja de Ruta del Proyecto',
      },
    },
    privacy: {
      badge: 'Privacidad y Seguridad',
      title: 'Política de Privacidad',
      backButton: 'Volver a Pokémon Stats',
      lastUpdated: 'Última actualización: Septiembre 2025',
      effective: 'Efectivo: Septiembre 2025',
      intro:
        '¡Hola! 👋 Quiero que todo sea simple y transparente. Pokémon Stats es un proyecto gratuito hecho por y para fans, creado por puro amor a Pokémon y diseñado para que los jugadores tengan una mejor experiencia.',
      databuddyIntro:
        'Como quiero seguir mejorando la app (interfaz, experiencia de usuario, funciones, rendimiento, etc.), uso Databuddy para entender cómo interactúan las personas con el sitio. No te preocupes, no se recolectan datos personales; todo es anónimo.',
      collect: {
        title: 'Información que Recopilamos',
        subtitle: 'Este es el tipo de datos que Databuddy recopila:',
        items: {
          pageViews: {
            label: 'Vistas de Página:',
            description:
              'URL, título de página, referente, marca de tiempo, ID de sesión',
          },
          session: {
            label: 'Sesión:',
            description:
              'duración, tiempos de inicio/fin, número de páginas visitadas, detección de rebote',
          },
          interactions: {
            label: 'Interacciones:',
            description:
              'clics en botones/enlaces, IDs/clases de elementos, envíos de formularios (éxito/fallo)',
          },
          outboundLinks: {
            label: 'Enlaces Salientes:',
            description:
              'URL de destino, texto del enlace, página donde ocurrió el clic',
          },
          engagement: {
            label: 'Compromiso:',
            description:
              'tiempo en página, profundidad de desplazamiento, movimientos del ratón, patrones de interacción',
          },
          performance: {
            label: 'Rendimiento:',
            description:
              'tiempo de carga de página, primer pintado, tiempo de recursos, contenido DOM cargado',
          },
          bounceRate: {
            label: 'Tasa de Rebote:',
            description:
              'sesiones de una sola página, tiempo transcurrido, umbral de compromiso',
          },
        },
        helpsTitle: 'Todo esto me ayuda a:',
        helps: {
          design: 'Mejorar el diseño y la usabilidad',
          painPoints: 'Encontrar puntos de dolor o áreas confusas',
          features: 'Agregar nuevas características basadas en el uso real',
          performance: 'Mantener el rendimiento fluido',
        },
        footer:
          'Sin anuncios, sin reventa, sin seguimiento oculto. Solo análisis honestos para mejorar el sitio para todos.',
      },
      security: {
        title: 'Seguridad y Protección de Datos',
        items: {
          noPersonalData:
            'No se almacenan direcciones IP, correos electrónicos o identificadores personales.',
          aggregated: 'Todos los análisis son agregados y anonimizados.',
          notIdentified:
            'No puedes ser identificado personalmente con estos datos.',
        },
      },
      contact: {
        title: '¿Preguntas Sobre Privacidad?',
        description:
          'Estamos comprometidos con la transparencia sobre cómo manejamos tus datos. Si tienes alguna pregunta o inquietud, no dudes en contactarnos.',
        cards: {
          email: {
            title: 'Envíanos un Correo',
          },
          updates: {
            title: 'Actualizaciones de Política',
            description: 'Te notificaremos de cualquier cambio',
          },
        },
        button: 'Contactar Equipo de Privacidad',
      },
    },
  },
  footer: {
    disclaimer: {
      title: 'Aviso Legal',
      text: 'Pokémon y todos los nombres respectivos son marcas comerciales de Nintendo, Game Freak y The Pokémon Company. Este proyecto es hecho por y para fans y no está afiliado con ellos.',
    },
    links: {
      roadmap: 'Qué sigue?',
      thanks: 'Créditos',
      github: 'Código Fuente',
      issues: 'Reportar Problema',
      support: 'Apoyar',
      pokeapi: 'PokéAPI Docs',
    },
    madeBy: 'Hecho con 💚 por ',
    copyright: '© 2021-{year} Pokémon Stats. Todos los derechos reservados.',
  },
};

export default translations;

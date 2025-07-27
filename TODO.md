# Done

- [x] Remove Bootstrap and React Bootstrap
- [x] Replace Bootstrap with Tailwind CSS and shadcn/ui
- [x] Remove all custom CSS and SASS support
- [x] Remove prop types
- [x] Replace axios with fetch
- [x] Hero section
    - [x] Add a link to buy me a coffee
- [x] Fix empty species or evolution chains in pokémon results
- [x] Fix pokémon card type colors
- [x] Fix all any and unknown types
- [x] Fix Evolution details
- [x] Fix Hero alignment
- [x] When searching for a pokémon, select the type in the effectiveness chart
- [x] Add sticky pokémon header for mobile devices
- [x] Change Pokémon fetch implementation to pass the whole data and not in two parts
- [x] Replace CTA for GitHub repo button with something like "Star this repo"
- [x] Implement a waitlist form with rate limiter and bot detection

# Bugs

- [ ] When navigating with the keyboard the suggestions items, it should scroll to the selected item for the items that
  overflows the container.
- [ ] Prevent searching the same Pokémon from the search bar

# Priority

- [x] Supports selecting two types and merge weakness and strengths (UI reference in v0).
    - [ ] Fix mobile view
- [ ] Divide the effectiveness chart into two sections (UI reference in v0).
    - [ ] One for attacks
    - [ ] One for defenses (https://pokemondb.net/type/fire)
- [ ] Add support for special modifiers in the effectiveness chart (UI reference in v0).
    - [ ] Flying Press move for Hawlucha
    - [ ] Thousand Arrows move for Zygarde
    - [ ] Freeze Dry move for ice type Pokémon
    - [ ] Inverse battles
    - [ ] Stellar type (?)
    - [ ] Tera forms (?)
    - [ ] Passive abilities that change the effectiveness of moves. Identify if the effect applies on attacker or
      defender and if it's a specific ability of a Pokémon.
        - **Attacker**
        - [ ] Scrappy
        - [ ] Tinted Lens
        - [ ] Electrify
        - **Defender**
        - [ ] Delta Stream
        - [ ] Dry Skin
        - [ ] Earth Eater
        - [ ] Filter
        - [ ] Flash Fire
        - [ ] Fluffy
        - [ ] Heatproof
        - [ ] Levitate
        - [ ] Lightning Rod
        - [ ] Motor Drive
        - [ ] Purifying Salt
        - [ ] Sap Sipper
        - [ ] Storm Drain
        - [ ] Tera Shell
        - [ ] Thick Fat
        - [ ] Volt Absorb
        - [ ] Water Absorb
        - [ ] Water Bubble
        - [ ] Well-Baked Body
        - [ ] Wonder Guard
- [ ] Add an X icon to the search bar to clear the input
- [ ] Add a tab to Pokémon card to show base stats (UI reference in v0).
- [ ] Configure again function to select a Pokémon from the evolution chain list
- [ ] Add an expandable list to show evolution details for Pokémon that goes beyond leveling up or using an evolutive
  stone (UI reference in v0).
    - [ ] Check if we can fetch more details when there are more than one item in the evolution details array, which
    - means that it has variations depending on the game ou are playing, so I would like to show those details as well.
- [ ] Add loading states while fetching pokémon data
- [ ] Add Analytics
    - [ ] Use Google Analytics
    - [ ] Track page views
    - [ ] Track search queries
    - [ ] Heat maps
- [ ] Add a "More" page to show the roadmap, contributors, special thanks and other information about the future of the
  project
- [ ] Add an element or page to give special thanks to:
    - [ ] All the people that are contributing to the project (check if I can get this list somewhere to display it
      dynamically)
    - [ ] All the people that are supporting the project with a coffee
    - [ ] [Pokemon Palette](https://github.com/yassenshopov/pokemonpalette-nextjs) for the inspiration and UI
      reference
    - [ ] PokeAPI
    - [ ] [pkmn.help](https://github.com/wavebeem/pkmn.help?tab=readme-ov-file) to verify the effectiveness calculations
      and special modifiers

# Final touches

- [ ] Double check and fix all mobile layout issues
- [ ] Fix all a11y issues
- [ ] Refactor all shitty code
    - [ ] Better use of hooks
    - [ ] Better use of context
    - [ ] Split components into smaller ones
    - [ ] Remove all unused code
    - [ ] Remove all unused dependencies
- [ ] Consider removing search query property from context. It's not too necessary
- [ ] Check the app against React scan https://github.com/aidenybai/react-scan#install and fix the performance issues
- [ ] Protect GitHub branches

# Nice to have

- [ ] If the user clicks on the sticky header, it should scroll to the search input
    - [ ] Add a floating button as well to scroll to the search input, placed in the bottom right corner of the screen.
- [ ] Add star count to the GitHub repo button on the Hero section
- [ ] Bring back theme provider
    - [ ] Add light and dark mode
- [ ] Include static images for all pokémon for searchbar and evolution chains
- [ ] Get a cool placeholder image when no pokémon image is available
- [ ] Support internationalization (i18n)
    - [ ] Use react-i18next
    - [ ] Add translations for Spanish

# Roadmap

- [ ] Support for all generations
    - [ ] Add a page to show all generations
    - [ ] Add a page to show all regions
    - [ ] Add a page to show all forms
    - [ ] Add a page to show all variants
- [ ] Support for competitive battling
    - [ ] Add a page to show all moves
    - [ ] Add a page to show all abilities
    - [ ] Add a page to show all items
    - [ ] Add a page to show all natures
    - [ ] Add a page to show all held items
    - [ ] Add a page to show all tera types
- [ ] Add a page to show all pokémon
    - [ ] Add pagination
    - [ ] Add filters
        - [ ] By type
        - [ ] By generation
        - [ ] By region
        - [ ] By evolution stage
- [ ] Team builder
    - [ ] Add a page to show all pokémon in a team
    - [ ] Add a page to show the effectiveness chart for a team
    - [ ] Add a page to show the weaknesses and resistances of a team
- [ ] TCG support
    - [ ] Add a page to show all TCG cards
    - [ ] Add a page to show the effectiveness chart for TCG cards
    - [ ] Add a page to show the weaknesses and resistances of TCG cards

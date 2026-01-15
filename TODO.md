# Bugs

- [ ] When navigating with the keyboard the suggestions items, it should scroll to the selected item for the items that
  overflows the container.
- [ ] Some suggestions are not shown completely on mobile devices.

# Performance Improvements

- [ ] Swap scrapped data with name indexes and create a Map[] to avoid using `array.find` and get quicker searches

# Refactors

- [ ] Split EffectivenessChart.tsx component into smaller pieces for readability

# Priority

- [ ] Add Pokémon history section (Up to 5)
    - [ ] Keep in a persistent state the Pokémon search history list to quickly go back to a previous search
    - [ ] Do not repeat Pokémon in the list
    - [ ] Floating button on the screen
- [ ] This is important for some features, fetch the Pokémon group that tells a bit more about belonging generation.
  This url is contained in the `forms` array from the main Pokémon data
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
- [ ] Try to add on which games the evolution variations are effective. (Take Eevee as example)
- [x] Add Analytics
    - [x] Use Data Buddy
    - [x] Track page views

# Nice to have

- [ ] If the user clicks on the sticky header, it should scroll to the search input
    - [ ] Add a floating button as well to scroll to the search input, placed in the bottom right corner of the screen.
- [x] Add star count to the GitHub repo button on the Hero section

# Roadmap

- [ ] Bring back theme provider
    - [ ] Add light and dark mode
- [ ] Support internationalization (i18n)
    - [ ] Use react-i18next
    - [ ] Add translations for Spanish
        - [ ] Translate games list to Spanish
        - [ ] Translate moves description
        - [ ] Translate evolution details
- [ ] Check the app against React scan https://github.com/aidenybai/react-scan#install and fix the performance issues
- [ ] Full a11y support
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

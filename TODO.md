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

# Priority

- [ ] Supports selecting two types and merge weakness and strengths (UI reference in v0).
- [ ] Divide the effectiveness chart into two sections (UI reference in v0).
    - [ ] One for attacks
    - [ ] One for defenses (https://pokemondb.net/type/fire)
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

# Final touches

- [ ] Fix all a11y issues
- [ ] Refactor all shitty code
    - [ ] Better use of hooks
    - [ ] Better use of context
    - [ ] Split components into smaller ones
    - [ ] Remove all unused code
    - [ ] Remove all unused dependencies
- [ ] Consider removing search query property from context. It's not too necessary
- [ ] Check the app against React scan https://github.com/aidenybai/react-scan#install and fix the performance issues

# Nice to have

- [ ] Bring back theme provider
    - [ ] Add light and dark mode
- [ ] Include static images for all pokémon for searchbar and evolution chains
- [ ] Get a cool placeholder image when no pokémon image is available
- [ ] Support internationalization (i18n)
    - [ ] Use react-i18next
    - [ ] Add translations for Spanish

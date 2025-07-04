'use client';

import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function SearchBar() {
  // const [field, setField] = useState<string>('');
  // const [showDropdown, setShowDropdown] = useState<boolean>(false);
  // const [dropdownList, setDropdownList] = useState<SuggestionType[]>([]);
  // const [activeItem, setActiveItem] = useState<SuggestionType>({
  //   name: '',
  //   id: '',
  // });
  // const { dispatch } = useContext(pokemon);
  //
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   const { value } = event.target;
  //
  //   setField(value);
  // };
  //
  // const handleDropdownItemClick: React.MouseEventHandler<HTMLButtonElement> = (
  //   event
  // ) => {
  //   const { id } = (event.target as HTMLButtonElement).dataset;
  //
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name: id ?? 0,
  //   });
  //   setField('');
  //   setShowDropdown(false);
  //   setDropdownList([]);
  //   setActiveItem({ name: '', id: '' });
  // };
  //
  // const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   const { key, target } = event;
  //   const { value } = target as HTMLInputElement;
  //   const sanitizedValue = value.toLowerCase().trim();
  //   const searchResults = matchStringInArray(POKEMON_LIST, sanitizedValue, 4);
  //   const activeItemIndex = searchResults.findIndex(
  //     (item) => item === activeItem?.name
  //   );
  //   const pokemonExceptionIndex = (item: string) =>
  //     POKEMON_EXCEPTIONS.findIndex(({ name }) => name === item);
  //
  //   switch (key) {
  //     case 'Escape':
  //       setActiveItem({ name: '', id: '' });
  //       setDropdownList([]);
  //       setShowDropdown(false);
  //       return;
  //
  //     case 'Enter':
  //       dispatch({
  //         type: 'CHANGE_INPUT',
  //         name: activeItem?.id ?? field.trim(),
  //       });
  //
  //       setField('');
  //       setActiveItem({ name: '', id: '' });
  //       setDropdownList([]);
  //       setShowDropdown(false);
  //       return;
  //
  //     case 'ArrowUp':
  //       if (activeItemIndex > 0)
  //         setActiveItem({
  //           name: searchResults[activeItemIndex - 1],
  //           id:
  //             POKEMON_EXCEPTIONS[
  //               pokemonExceptionIndex(searchResults[activeItemIndex - 1])
  //             ]?.id ?? searchResults[activeItemIndex - 1],
  //         });
  //       return;
  //
  //     case 'ArrowDown':
  //       if (activeItemIndex <= searchResults.length)
  //         setActiveItem({
  //           name: searchResults[activeItemIndex + 1] ?? activeItem.name,
  //           id:
  //             POKEMON_EXCEPTIONS[
  //               pokemonExceptionIndex(searchResults[activeItemIndex + 1])
  //             ]?.id ??
  //             searchResults[activeItemIndex + 1] ??
  //             activeItem.id,
  //         });
  //       return;
  //   }
  //
  //   if (sanitizedValue !== '') {
  //     const resultsObjectList: SuggestionType[] = searchResults.map(
  //       (result) => {
  //         const getPokemonException = POKEMON_EXCEPTIONS.find(
  //           ({ name }) => name === result
  //         );
  //
  //         return {
  //           name: result,
  //           id: getPokemonException ? getPokemonException.id : result,
  //         };
  //       }
  //     );
  //
  //     setDropdownList(resultsObjectList);
  //     setShowDropdown(true);
  //     setActiveItem(resultsObjectList[0]);
  //
  //     return;
  //   }
  //
  //   setActiveItem({ name: '', id: '' });
  //   setDropdownList([]);
  //   setShowDropdown(false);
  // };
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const pokemonSuggestions = [
    'pikachu',
    'charizard',
    'blastoise',
    'bulbasaur',
    'eevee',
  ];

  const filteredSuggestions = pokemonSuggestions
    .filter(
      (pokemon) =>
        pokemon.toLowerCase().includes(searchTerm.toLowerCase()) &&
        pokemon.toLowerCase() !== searchTerm.toLowerCase()
    )
    .slice(0, 5);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
    setSelectedSuggestionIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || filteredSuggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex((prev) =>
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestionIndex >= 0) {
          selectSuggestion(filteredSuggestions[selectedSuggestionIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedSuggestionIndex(-1);
        break;
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }, 150);
  };

  return (
    <>
      {/*<div>*/}
      {/*  <InputGroup>*/}
      {/*    <InputGroup.Text id="searchPokemon">Search</InputGroup.Text>*/}
      {/*    <FormControl*/}
      {/*      autoComplete="off"*/}
      {/*      placeholder="Type pokémon name"*/}
      {/*      aria-label="pokémon"*/}
      {/*      aria-describedby="searchPokémon"*/}
      {/*      value={field}*/}
      {/*      onChange={handleChange}*/}
      {/*      onKeyUp={handleKeyUp}*/}
      {/*    />*/}
      {/*  </InputGroup>*/}
      {/*  {showDropdown && (*/}
      {/*    <ListGroup>*/}
      {/*      {dropdownList.map(({ name, id }) => (*/}
      {/*        <ListGroupItem*/}
      {/*          key={`search-${name}-${id}`}*/}
      {/*          data-id={id}*/}
      {/*          action*/}
      {/*          onClick={handleDropdownItemClick}*/}
      {/*          active={activeItem.name === name}*/}
      {/*        >*/}
      {/*          {name}*/}
      {/*        </ListGroupItem>*/}
      {/*      ))}*/}
      {/*    </ListGroup>*/}
      {/*  )}*/}
      {/*</div>*/}
      <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
            <Input
              id="search-pokemon"
              name="search-pokemon"
              placeholder="Search Pokémon by name or number..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              onBlur={handleInputBlur}
              onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
              className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              aria-expanded={showSuggestions}
              aria-haspopup="listbox"
              aria-autocomplete="list"
              role="combobox"
            />
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div
                className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto z-[999]"
                role="listbox"
                aria-label="Pokemon suggestions"
              >
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={suggestion}
                    className={`w-full px-4 py-3 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors duration-150 flex items-center gap-3 ${
                      index === selectedSuggestionIndex
                        ? 'bg-blue-100 text-blue-900'
                        : 'text-gray-700 hover:text-blue-700'
                    } ${index === 0 ? 'rounded-t-xl' : ''} ${
                      index === filteredSuggestions.length - 1
                        ? 'rounded-b-xl'
                        : 'border-b border-gray-100'
                    }`}
                    onClick={() => selectSuggestion(suggestion)}
                    onMouseEnter={() => setSelectedSuggestionIndex(index)}
                    role="option"
                    aria-selected={index === selectedSuggestionIndex}
                    tabIndex={-1}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">🔍</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium capitalize">
                        {suggestion.split('').map((char, charIndex) => {
                          const isMatch = searchTerm
                            .toLowerCase()
                            .includes(char.toLowerCase());
                          return (
                            <span
                              key={charIndex}
                              className={
                                isMatch ? 'bg-yellow-200 text-yellow-900' : ''
                              }
                            >
                              {char}
                            </span>
                          );
                        })}
                      </div>
                      <div className="text-xs text-gray-500">Pokémon</div>
                    </div>
                    {index === selectedSuggestionIndex && (
                      <div className="text-blue-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
                <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 rounded-b-xl">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Use ↑↓ to navigate</span>
                    <span>Press Enter to select</span>
                  </div>
                </div>
              </div>
            )}

            {/* No results message */}
            {showSuggestions &&
              searchTerm.length > 0 &&
              filteredSuggestions.length === 0 && (
                <div
                  className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl p-4 text-center text-gray-500"
                  style={{ zIndex: 9999 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <SearchIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-medium">No Pokémon found</div>
                      <div className="text-sm">
                        Try searching for "pikachu" or "charizard"
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

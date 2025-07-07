'use client';

import React, { useContext, useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { POKEMON_EXCEPTIONS, POKEMON_LIST } from '@/common/constants';
import { pokemon } from '@/context';
import NoSuggestion from '@/components/SearchBar/NoSuggestion';
import { toPokeApiName } from '@/lib/utils';

export default function SearchBar() {
  const { state, dispatch } = useContext(pokemon);
  const [searchTerm, setSearchTerm] = useState<string>(state.name.toString());
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
    useState<number>(-1);

  const filteredSuggestions = POKEMON_LIST.filter((pokemon) =>
    pokemon.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 5);

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

    const getException = POKEMON_EXCEPTIONS.findIndex(
      ({ name }) => name === suggestion
    );
    const isMegaEvolution = suggestion.includes('Mega');

    dispatch({
      type: 'CHANGE_INPUT',
      name:
        getException >= 0
          ? POKEMON_EXCEPTIONS[getException].id
          : isMegaEvolution
          ? toPokeApiName(suggestion)
          : suggestion,
    });
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }, 150);
  };

  return (
    <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm relative z-[999]">
      <CardContent className="p-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
          <Input
            id="search-pokemon"
            name="search-pokemon"
            autoComplete={'off'}
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
              className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-60 overflow-y-auto"
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
          {showSuggestions &&
            searchTerm.length > 0 &&
            filteredSuggestions.length === 0 && <NoSuggestion />}
        </div>
      </CardContent>
    </Card>
  );
}

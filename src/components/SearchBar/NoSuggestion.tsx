import { SearchIcon } from 'lucide-react';
import React from 'react';

export default function NoSuggestion() {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl p-4 text-center text-gray-500">
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </div>
        <div>
          <div className="font-medium">No Pokémon found</div>
          <div className="text-sm">
            Try searching for &#34;pikachu&#34; or &ldquo;charizard&quot;
          </div>
        </div>
      </div>
    </div>
  );
}

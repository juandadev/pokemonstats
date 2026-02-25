import React from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { ImageZoom } from '@/components/kibo-ui/image-zoom';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getPokemon30ImageUrl } from '@/lib/pokemon30';
import { cn } from '@/lib/utils';

interface Pokemon30ImageProps {
  speciesId: number;
  pokemonName: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Pokemon30Image({
  speciesId,
  pokemonName,
  width = 100,
  height = 100,
  className,
}: Pokemon30ImageProps) {
  const imageUrl = getPokemon30ImageUrl(speciesId);
  const downloadUrl = `/api/download-pokemon30?id=${speciesId}&name=${encodeURIComponent(
    pokemonName
  )}`;

  return (
    <div className={cn('relative group/pkmn30 shrink-0', className)}>
      <ImageZoom>
        <Image
          src={imageUrl}
          alt={`${pokemonName} Pokémon 30th Anniversary`}
          width={width}
          height={height}
          className="object-contain cursor-zoom-in"
          unoptimized
        />
      </ImageZoom>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={downloadUrl}
            download={`${pokemonName}-30th-anniversary.png`}
            className={cn(
              'absolute bottom-0.5 right-0.5',
              'flex items-center justify-center h-7 w-7 rounded-full',
              'bg-black/30 hover:bg-black/55 text-white backdrop-blur-sm',
              'transition-all duration-150',
              'md:opacity-0 md:group-hover/pkmn30:opacity-100 focus-visible:opacity-100',
              'touch-manipulation'
            )}
            aria-label="Download 30th anniversary artwork"
          >
            <Download className="h-3.5 w-3.5" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom">Download artwork</TooltipContent>
      </Tooltip>
    </div>
  );
}

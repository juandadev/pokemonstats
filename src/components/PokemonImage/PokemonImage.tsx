import Image from 'next/image';
import { clsx } from 'clsx';

const DITTO_FALLBACK = '/ditto-fallback.webp';

type PokemonImageProps = {
  artUrl?: string | null;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export default function PokemonImage({
  artUrl,
  alt,
  width = 160,
  height = 160,
  priority = false,
  className = '',
}: PokemonImageProps) {
  if (artUrl) {
    return (
      <Image
        src={artUrl}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={clsx('object-contain', className)}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={`${alt} artwork missing, showing Ditto silhouette`}
      style={{ width, height, maskImage: `url(${DITTO_FALLBACK})` }}
      className={clsx(
        `bg-gray-500 mask-no-repeat mask-center mask-contain`,
        className
      )}
    />
  );
}

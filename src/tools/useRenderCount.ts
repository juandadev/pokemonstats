import { useRef } from 'react';

export default function useRenderCount(message = '') {
  const renders = useRef(0);
  console.log(`Renders ${message}: ${(renders.current += 1)}`);
}

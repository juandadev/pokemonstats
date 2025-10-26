// noinspection ExceptionCaughtLocallyJS

/**
 * Scraper to fetch ALL Pokémon items from PokéAPI
 * and store them locally as JSON.
 *
 * Run with:
 *    npx tsx scripts/fetchAllItems.ts
 */

import fs from 'fs/promises';
import { ItemData } from '@/types/items.types';
import { PaginatedResults } from '@/types';

const API_BASE = 'https://pokeapi.co/api/v2';
const OUTPUT_FILE = 'src/data/items.json';

const DELAY_MS = 500; // delay between requests
const RETRY_LIMIT = 3;
const ITEM_LIMIT = 10000;

/** Sleep helper */
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Fetch with retry */
async function safeFetch<T>(
  url: string,
  retries = RETRY_LIMIT
): Promise<T | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    if (retries > 0) {
      console.warn(`⚠️  Retry (${RETRY_LIMIT - retries + 1}) for ${url}`);
      await sleep(1000);
      return safeFetch(url, retries - 1);
    }
    console.error(`❌ Failed: ${url}`, err);
    return null;
  }
}

async function main() {
  console.log('🔍 Fetching item list from PokéAPI...');

  const listRes = await fetch(`${API_BASE}/item?limit=${ITEM_LIMIT}`);
  const listData: PaginatedResults = await listRes.json();

  const items = listData.results;
  console.log(`📦 Found ${items.length} items to fetch.\n`);

  const results: ItemData[] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    process.stdout.write(
      `(${i + 1}/${items.length}) Fetching ${item.name}... `
    );

    const data = await safeFetch<ItemData>(item.url);

    if (data) {
      results.push(data);
      process.stdout.write('✅\n');
    } else {
      process.stdout.write('❌\n');
    }

    // Save partial progress every 50 items
    if ((i + 1) % 50 === 0 || i === items.length - 1) {
      await fs.writeFile(OUTPUT_FILE, JSON.stringify(results, null, 2));
      console.log(`💾 Progress saved (${results.length} items)\n`);
    }

    await sleep(DELAY_MS); // be kind to the API
  }

  console.log('✅ Done! All items saved at', OUTPUT_FILE);
}

main().catch((err) => console.error('🚨 Error:', err));

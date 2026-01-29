export async function fetchStarCount(): Promise<number> {
  const token = process.env.GITHUB_TOKEN;

  const response = await fetch(
    'https://api.github.com/repos/juandadev/pokemonstats',
    {
      headers: {
        'User-Agent': 'pokemonstats-app',
        Accept: 'application/vnd.github+json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 604800 },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repo info (${response.status})`);
  }

  const data = (await response.json()) as { stargazers_count: number };

  return data.stargazers_count || 0;
}

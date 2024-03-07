'use server';

import { baseApiUrl } from '@/config';

export const fetchTrendingCoins = async () => {
  const res = await fetch(`${baseApiUrl}/search/trending`, {
    next: { revalidate: 10 * 60 },
  });
  const data = await res.json();
  const coins = await data.coins;

  return coins;
};

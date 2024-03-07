'use server';

import { baseApiUrl } from '@/config';

export const fetchCoinData = async (coinId: string) => {
  const res = await fetch(`${baseApiUrl}/coins/${coinId}`, {
    next: { revalidate: 10 * 60 },
  });
  const data = await res.json();

  return data;
};

export const fetchCoinPrice = async (id: string) => {
  const res = await fetch(
    `${baseApiUrl}/simple/price?ids=${id}&vs_currencies=inr%2Cusd&include_24hr_change=true`,
    {
      next: { revalidate: 10 * 60 },
    }
  );
  const data = await res.json();

  return data;
};

export const fetchTrendingCoins = async () => {
  const res = await fetch(`${baseApiUrl}/search/trending`, {
    next: { revalidate: 10 * 60 },
  });
  const data = await res.json();
  const coins = await data.coins;

  return coins;
};

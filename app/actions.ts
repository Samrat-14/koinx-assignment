'use server';

export const fetchTrendingCoins = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/search/trending', {
    next: { revalidate: 10 * 60 },
  });
  const data = await res.json();
  const coins = await data.coins;

  return coins;
};

'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-10 text-center p-4">
      <h2 className="text-xl font-semibold mb-2">Something went wrong!</h2>
      <p className="font-medium mb-10">
        Please make sure that the Coin or page you are trying to reach for is
        valid
      </p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#eff2f5',
        'fz-black': '#0F1629',
        'fz-gray': '#3E5765',
      },
    },
  },
  plugins: [],
};
export default config;

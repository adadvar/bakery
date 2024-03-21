import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'secondry': 'var(--secondry)',
        'font-color': 'var(--font-color)',
        'white-color': 'var(--white-color)',
        'gray-font': 'var(--gray-font)',
        'line': 'var(--line)',
        'br': 'var(--border)',
      }
    },
  },
  plugins: [],
};
export default config;

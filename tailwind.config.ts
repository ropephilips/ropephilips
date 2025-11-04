import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts.jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes:  {
                spinGradient: {
                    to: { transform: "rotate(360deg)" },
                },
                glow: {
                    '0%': { boxShadow: '0 0 10px 2px rgba(99,102,241,0.6), 0 0 20px 4px rgba(168,85,247,0.5)'},
                    '50%': {boxShadow: '0 0 20px 4px rgba(99,102,241,0.9), 0 0 20px 6px rgba(168,85,247,0.8)'},
                    '100%': { boxShadow: '0 0 10px 2px rgba(99,102,241,0.6), 0 0 20px 4px rgba(168,85,247,0.5)'},
                }
            },
            animation: {
                spinGradient: "spinGradient 4s linear infinite",
                glow: 'glow 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};

export default config;
// packages/tailwind-config/index.js
module.exports = {
  content: [
    // Arquivos do próprio app (serão adicionados depois)
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Componentes da UI
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
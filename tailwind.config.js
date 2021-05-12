module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue-gray": "#24292e",
        primary: "#0366d6",
        success: "#2ea44f",
      },
      fontSize: {
        xxs: ".5rem",
        "2.5xl": ["1.67rem", "2.25rem"],
      },
      boxShadow: {
        "focus-primary": "0 0 0 3px rgba(3, 102, 214, 0.3)",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      opacity: ["active"],
    },
  },
  plugins: [],
};

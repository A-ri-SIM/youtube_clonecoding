/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                brand: "#ff0000",
            },
            fontFamily: {
                roboto: "roboto",
                logo: "Oswald",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};

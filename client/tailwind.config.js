/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            'main': '#2980b9',
            'orange': '#f39c12',
            'red': '#e74c3c',
            'black': '#333',
            'white': '#fff',
            'light-color': '#666',
            'light-bg': '#eee',
        },
        screens: {
            'xl': {'max': '1200px'},
            'lg': {'max': '991px'},
            'md': {'max': '768px'},
            'sm': {'max': '450px'},
        },
        clipPath: {
            navbar: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            activeNavbar: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
    },
    plugins: [
        require('tailwind-clip-path'),
    ],
}


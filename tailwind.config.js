/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                darkBlue: '#333F70',
                green: '#26A688',
                lightGreen: '#D6F5EE',
                bgDarkBlue: '#192248',
                dark: '#000',
                white: '#fff',
            }
        },
    },
    plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/flowbite-react/lib/**/*.js"],
    theme: {
        extend: {
            colors: {
                "fikz-black": "#131313",
                "fikz-yellow": "#F6C61A",
                "fikz-bg": "#F5F5F5",
                "fikz-gray-strong": "#333333",
                "fikz-gray-light": "#828282",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
}

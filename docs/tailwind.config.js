"use strict";
module.exports = {
    purge: ["docs/*.html"],
    darkMode: false,
    theme: {
        extend: {},
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    variants: {
        extend: { textColor: ['visited'], },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
};
//# sourceMappingURL=tailwind.config.js.map
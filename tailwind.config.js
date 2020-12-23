module.exports = {
    purge: ["./src/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            serif: [
                "Century Gothic",
                "CenturyGothic",
                "AppleGothic",
                "sans-serif",
            ],
            sans: ["SF UI", "sans"],
        },
        colors: {
            dark: "#1C1F24",
            gray: "#707070",
            "gray-dark": "#2A2D33",
            primary: "#FFB61A",
            white: "#FFFFFF",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

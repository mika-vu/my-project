/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          "2xl": "1200px",
        },
      },
      spacing: {
        2.5: "10px",
        27: "108px",
        7.5: "30px",
        12.5: "50px",
      },
      colors: {
        neutral: {
          150: "#F4F4F4",
        },
        yellow: {
          350: "#F4B840",
        },
        gray: {
          150: "#727272",
        },
      },
      width: {
        14.5: "58px",
        12.5: "50px",
        25: "100px",
        30: "120px",
        58.75: "235px",
      },
      height: {
        14.5: "58px",
        12.5: "50px",
      },
      fontSize: {
        xl: ["21px", "31.5px"],
        xs: ["13px", "32px"],
        "5xl": ["45px", "67.5px"],
      },
      borderRadius: {
        lg: "10px",
        md: "5px",
        "2xl": "18px",
        "t-3xl": "25px",
        "3xl": "25px",
      },
      boxShadow: {
        sm: "0px 0px 27px rgba(0, 0, 0, 0.05);",
      },
      gap: {
        9.5: "38px",
      },
      borderWidth: {
        2.5: "3px",
      },
    },
  },
  plugins: [],
};

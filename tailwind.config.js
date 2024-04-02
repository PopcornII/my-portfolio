
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      pacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }

    },
    fontFamily:{
      signature: ["Great Vibes"],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      rubik: ["Rubik Lines"],
      henny:["Henny Penny"],
      bungee:["Bungee Shade"],

    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
  },
  plugins: [],
}


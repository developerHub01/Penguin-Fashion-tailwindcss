/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors:{
        'greenColor': '#85A019',
        'greenLightColor': '#A4BC46',
        'darkColor': '#363958',
        'yellowColor': '#FABE4C',
        'yellowLightColor': '#FFFBF0',
        'grayColor': '#3E3E3E',
        'whiteColor': '#ffffff',
        'lightColor': '#F1F1F1',
      }
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '50px'
      },
    }
  },
  plugins: [],
}


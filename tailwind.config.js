/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary--color': '#EFEADF',
        'backgroud-color': '#F7F5F1',
        '--font-color': '#676767',
        'primary-op': 'rgba(239 234 223, 0.3)',
        'body-font-color': '#242424',
        'secondary-color': '#CBC2B8',
      },
      height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
      borderWidth: {
        DEFAULT: '1px',
        '0.5': '0.5px',
      },
      backgroundImage: {
        'find-help': "linear-gradient(rgba(42, 42, 42, 0.5), rgba(0, 0, 0, 0.5)),url('../img/find-help.jpg');",
        'find-resource': "linear-gradient(rgba(42, 42, 42, 0.5), rgba(0, 0, 0, 0.5)),url('../img/main-box2-img.jpg');",
        'help-us': "linear-gradient(rgba(42, 42, 42, 0.5), rgba(0, 0, 0, 0.5)),url('../img/help-us.jpg');",
        'virtual-support': "linear-gradient(rgba(42, 42, 42, 0.5), rgba(0, 0, 0, 0.5)),url('../img/virtual-support.jpg');",
    },
  },
  plugins: [],
}
}
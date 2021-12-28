module.exports = {
	content: ['./index.html', './src/**/*.{tsx, ts, js, jsx}'],
	theme: {
		extend: {
			colors: {
				"light-sky": '#EDF6FF',
				"primary-sky": '#43AFFF',
				"dark-blue": '#1A253C',
				"not-dark-blue": '#303F60' ,
			}
		},
		fontFamily: {
			'helvetica': ["'helvetica nue'", 'sans-serif']
		}
	},
	plugins: [],
};

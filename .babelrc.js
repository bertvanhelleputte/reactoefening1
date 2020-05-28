const path = require('path')

module.exports = {
	presets: ['next/babel', '@zeit/next-typescript/babel'],
	plugins: [
		[
			require.resolve('babel-plugin-module-resolver'),
			{
				root: [__dirname],
				alias: {
					components: path.join(__dirname, './components'),
					static: path.join(__dirname, './static'),
				},
			},
		],
	],
}

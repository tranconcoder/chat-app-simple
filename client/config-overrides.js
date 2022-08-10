module.exports = function override(config, env) {
	config.module.rules.push({
		test: /\.scss$/,
		use: [
			{
				loader: 'sass-loader',
				options: {
					additionalData: `@import 'src/assets/scss/package/package.scss';`,
				},
			},
		],
	});

	return config;
};

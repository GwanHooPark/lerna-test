module.exports = {
	devServer: {
		overlay: false,
		port: process.env.VUE_APP_PORT || 8000,
		proxy: {
			'/api': {
				target: 'http://localhost:8080/',
				ws: true,
			},
		},
	},
};

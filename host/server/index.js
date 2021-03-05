import 'core-js';
import 'regenerator-runtime';
import Hapi from '@hapi/hapi';

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost',
	});

	server.route({
		method: 'GET',
		path: '/{path*}',
		handler: async (request, h) => {
			const renderThunk = require('./render-thunk').default;
			const renderer = renderThunk();
			return await renderer(request, h);
		},
	});

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();

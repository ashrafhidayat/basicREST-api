const hAPI = require('@hapi/hapi');
const routes = require('./route');

const init = async() => {
  const server = hAPI.server({
    port: 1199,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log('Server has started in address '+server.info.uri+'.....');
};

init();

const express = require('express');
const next = require('next');
const { parse } = require('url');

const DEV = process.env.ENVIRONMENT !== 'production';
const PORT = 4567;

const app = next({dir: '.', dev: DEV});
const handle = app.getRequestHandler();

const getRoutes = require('lib/routes');

getRoutes(false).then( (routes) => {
  app.prepare().then(() => {
    const server = express();
    server.get('/sitemap.xml', (req, res) => {
      return res.sendFile('static/sitemap.xml', { root: __dirname});
    });
    server.get('/robots.txt', (req, res) => {
      return res.sendFile('static/robots.txt', { root: __dirname});
    });
    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      const route = routes[pathname];
      if (route) {
        return app.render(req, res, route.page, route.query);
      }
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> READY FOR LIFOTFF http://localhost:${PORT}`);
    });
  });
})
.catch( (err) => {
  console.error(err);
  throw new Error(err);
});

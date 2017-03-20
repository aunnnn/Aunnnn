const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('texts', '/texts/:slug', 'texts_');
routes.add('editPost', '/editPost/:slug', 'editPost_');

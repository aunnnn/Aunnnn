const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('texts', '/texts/:slug', 'texts_');
routes.add('editPost', '/editPost/:slug', 'editPost_');
routes.add('categories', '/projects/tags/:tag', 'projects');
routes.add('projects', '/projects/:projectKeyword', 'projects_');

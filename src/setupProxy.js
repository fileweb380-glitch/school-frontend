const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // or whatever your API route prefix is
    createProxyMiddleware({
      target: 'https://school-backend-1pzt.onrender.com',
      changeOrigin: true,
    })
  );
};
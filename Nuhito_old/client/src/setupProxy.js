const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(App) {
  App.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: false,
    })
  );
    App.use(
      '/user',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      })
    );
};

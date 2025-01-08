const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();

const backendUrl = process.env.BACKEND_URL;
const frontendUrl = process.env.FRONTEND_URL;

app.use('/api/v1', createProxyMiddleware({
  target: backendUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/api/v1': '/api/v1',
  },
}));

app.use('/', createProxyMiddleware({
  target: frontendUrl,
  changeOrigin: true,
}));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Reverse proxy running on port ${PORT}`);
});

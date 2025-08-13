// server.js (LawinServer)
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// هنا يبدأ LawinServer
// ... كود LawinServer الحالي ...

// إضافة Proxy داخل نفس السيرفر
app.use("/ol.epicgames.com", createProxyMiddleware({
  target: "http://127.0.0.1:3551",
  changeOrigin: true,
  pathRewrite: {
    "^/ol.epicgames.com": ""
  }
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`LawinServer + Proxy running on port ${port}`);
});

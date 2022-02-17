const createProxyMiddleware = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCODE_HTTPS_PORT ? `https://localhost:${env.ASPNETCODE_HTTPS_PORT}` :
    env.ASPNETCODE_URLS ? env.ASPNETCODE_HTTPS_PORT.split(';')[0] : 'http://localhost:19733';

const context = [
    "/weatherforecast",
    "/categories"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: target,
        secure: false
    });

    app.use(appProxy);
}
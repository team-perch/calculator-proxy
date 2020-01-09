/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

const port = 3000;
app.listen(port, console.log(`listening on ${port}`));

// Home Payment Calculator Service
const options = {
  target: 'http://13.52.253.232:3001/',
  changeOrigin: true,
  ws: true,
};

const apiProxy = proxy(options);
app.use('/api/costHomeOwnership', apiProxy);


// Image Service
const optionsImages = {
  target: 'http://172.31.15.76:3003/',
  changeOrigin: true,
  ws: true,
};

const apiProxyImages = proxy(optionsImages);
app.use('/api/images', apiProxyImages);


// Graph Service
const optionsGraph = {
  target: 'http://54.67.110.125:3002/',
  changeOrigin: true,
  ws: true,
};

const apiProxyGraph = proxy(optionsGraph);
app.use('/api/estimates', apiProxyGraph);


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/article"
  },
  {
    "renderMode": 2,
    "route": "/result"
  },
  {
    "renderMode": 2,
    "route": "/team"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5527, hash: 'c50e9a234681a1a992947febf3745cb2f7a9b0b38c2196b389f4cf396aac06a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '9608e88dc128210c34b8c4dc35493d42d8b3fda93c1a54efbe06ddc3420d5fa4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'result/index.html': {size: 5853, hash: 'f906091f1a3c5e0ea7970aa217b895b6e6cdf3af5bfa79ae82342fda585e08a9', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 5847, hash: '98c3bb07abda104b1f6d8bc0a056952b6dcf2a09d4708d360a99249f3d94e394', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7475, hash: '1b7d689958b395015be34dc001e29552ff9e35f073ba93046109cdabee77b3af', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'article/index.html': {size: 11318, hash: '284f406addebfaf6c970bfee4a67f283e6233e34974585c1799a6fd77096521a', text: () => import('./assets-chunks/article_index_html.mjs').then(m => m.default)},
    'styles-HPC5DEEO.css': {size: 13077, hash: '00EofyU7TZI', text: () => import('./assets-chunks/styles-HPC5DEEO_css.mjs').then(m => m.default)}
  },
};

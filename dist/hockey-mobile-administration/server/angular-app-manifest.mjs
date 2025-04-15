
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
    'index.csr.html': {size: 5395, hash: 'd3fda498d3a3bc876cbd3928a5f37d4356560306f3918c7dcbdf6328622fdcfb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: 'd8136caad1d483a81f1a51c964a6eb6e8a3738385ff15464b67382e361eac7a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7349, hash: '7127510a655df0332c956f68b91ae9610fda7446ba52684bd9372a6cf83bec3f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 5711, hash: '172acfebdffd5b08d33fbbc0b6a0630e86fb6642dd5e8f9740d3932f6d11f258', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 5705, hash: 'b88e44a4f54d5b44e8b088b69f418827c048519a98434f5dcdd0e629f6693ea3', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'article/index.html': {size: 11176, hash: 'cb3e31c9435cabe0722dadc467f90a1d502443bc3cdec1ed52e92f5e23bbcb64', text: () => import('./assets-chunks/article_index_html.mjs').then(m => m.default)},
    'styles-AOVFPLQ6.css': {size: 12940, hash: 'v8pY9ln8zUc', text: () => import('./assets-chunks/styles-AOVFPLQ6_css.mjs').then(m => m.default)}
  },
};

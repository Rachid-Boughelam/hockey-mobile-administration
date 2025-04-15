
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
    'index.csr.html': {size: 5395, hash: '4daaa5ab80d62c3760e8164e6ccab6ce4ba8b1fd3f3372611220302e9f679eec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '5c106f8be511d11cd0943dd251767126a53b801027ec6da2ed72c9af05fe9fcd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7349, hash: '97118878d9477d0b73ce334afc1bd87dc6fd969c3c17839c106dbd96f8feda1e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 5705, hash: '3f80b928a85364a6884f3acb46f28f967de686ece0d1d90f00c4fd4cad98a424', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 5711, hash: '3c18f317000bdfd4fb874850ba4cc60ed454853d7195c0ffbfd41d6b6531dabe', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'article/index.html': {size: 11176, hash: '0c1a76435ddd9a995a89a34e22d60d9167fc0ff72a4a4fd9ad41b629ec1107fc', text: () => import('./assets-chunks/article_index_html.mjs').then(m => m.default)},
    'styles-AOVFPLQ6.css': {size: 12940, hash: 'v8pY9ln8zUc', text: () => import('./assets-chunks/styles-AOVFPLQ6_css.mjs').then(m => m.default)}
  },
};

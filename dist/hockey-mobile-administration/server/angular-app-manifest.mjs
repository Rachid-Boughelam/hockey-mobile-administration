
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
    'index.csr.html': {size: 5527, hash: '5f8940dda571afa392121f5739a04c1f2aa4ae04ae2ed8cc1c55ad5efede2f1e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: 'd0189738ab46898820e2110c71b55ceb9c7410eebe3ee616defbea0cd7e10054', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7491, hash: 'cf846f10c113044f62a60ae592c6bf5ade1b1b9783d3acaad309c058d48a5f8c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 5853, hash: 'fc21f26ce1c33f122002bb6453e073d34d4e588dbac2bf3cd8cf8543597ff8b5', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 5847, hash: 'a0b22b9bca80dc20c46100196ed323747ad4dcd8bda2cb27f4c0d5a58ec531fa', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'article/index.html': {size: 11318, hash: '474ba59b4455dba6fc52df9afae3e8783a6e2201e929715df163cb8bb5ff392e', text: () => import('./assets-chunks/article_index_html.mjs').then(m => m.default)},
    'styles-HPC5DEEO.css': {size: 13077, hash: '00EofyU7TZI', text: () => import('./assets-chunks/styles-HPC5DEEO_css.mjs').then(m => m.default)}
  },
};

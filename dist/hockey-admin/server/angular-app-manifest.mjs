
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
    'index.csr.html': {size: 5527, hash: 'cbe44e64cf1b3d9b856bc2e56cd871837fa1daaf72831bb9d35c026b67527544', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '47170e3369eb3662434e39834b37a2b1c371be31106a027e43e4d976e1b83eed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7475, hash: '454625e0c130e80b624baebbbf91af449c0a2d633923d139fc672f201c9f6cf3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 5847, hash: 'e478d50df40442796c952994f8dba7d788fe6e2a8688c6fe09038096d37fcc7d', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 5853, hash: '2283692d5f01bfd0a65ee601e853b5b4383cfdd53d43d797108e9d628ce5232e', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'article/index.html': {size: 11318, hash: '511e56c901e4f2975bf1e379a535a1d3b05474c7f29b7f4361e9342ce4fe30e6', text: () => import('./assets-chunks/article_index_html.mjs').then(m => m.default)},
    'styles-VCVKDVAX.css': {size: 13044, hash: 'aT6fY0vM16k', text: () => import('./assets-chunks/styles-VCVKDVAX_css.mjs').then(m => m.default)}
  },
};

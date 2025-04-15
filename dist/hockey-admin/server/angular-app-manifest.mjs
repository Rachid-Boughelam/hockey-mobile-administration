
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
    'index.csr.html': {size: 5527, hash: 'd2f3cb57f72be0ab0d31b4169e1120e12b80b21fdb2cdf634ea75add345046c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '16c8099632e1c0e53eaccd87f6c0a52b60f17cbe887332ea33278f427a3e222c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7475, hash: 'ae29d41748c30029ea5f08441c6292afa0fa08850d160aad295b752422415fb3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 5847, hash: 'c25210eea68077496858dabed5548160e619513e5a0f8f8dba1891b897c92324', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 5853, hash: 'df36ca0ca402efec25824e31eeada612ba98d85b514b903cbc57e06b0ff00632', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'article/index.html': {size: 11318, hash: '639c801363afd42d560d3999f2159788fb225b2b7d76e6460ae87648dde71104', text: () => import('./assets-chunks/article_index_html.mjs').then(m => m.default)},
    'styles-HPC5DEEO.css': {size: 13077, hash: '00EofyU7TZI', text: () => import('./assets-chunks/styles-HPC5DEEO_css.mjs').then(m => m.default)}
  },
};

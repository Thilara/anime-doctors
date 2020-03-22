// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-voluntary-voluntary-js": () => import("/home/thilara.araujo/Projects/thilara.github.io/src/templates/voluntary/voluntary.js" /* webpackChunkName: "component---src-templates-voluntary-voluntary-js" */),
  "component---src-templates-schedule-schedule-js": () => import("/home/thilara.araujo/Projects/thilara.github.io/src/templates/schedule/schedule.js" /* webpackChunkName: "component---src-templates-schedule-schedule-js" */),
  "component---cache-dev-404-page-js": () => import("/home/thilara.araujo/Projects/thilara.github.io/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/thilara.araujo/Projects/thilara.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/thilara.araujo/Projects/thilara.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/thilara.araujo/Projects/thilara.github.io/.cache/data.json")


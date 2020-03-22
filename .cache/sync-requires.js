const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-voluntary-voluntary-js": hot(preferDefault(require("/home/thilara.araujo/Projects/personal/src/templates/voluntary/voluntary.js"))),
  "component---src-templates-schedule-schedule-js": hot(preferDefault(require("/home/thilara.araujo/Projects/personal/src/templates/schedule/schedule.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/thilara.araujo/Projects/personal/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/thilara.araujo/Projects/personal/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/thilara.araujo/Projects/personal/src/pages/index.js")))
}


const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-voluntary-voluntary-js": hot(preferDefault(require("/home/thilara.araujo/Projects/thilara.github.io/src/templates/voluntary/voluntary.js"))),
  "component---src-templates-schedule-schedule-js": hot(preferDefault(require("/home/thilara.araujo/Projects/thilara.github.io/src/templates/schedule/schedule.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/thilara.araujo/Projects/thilara.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/thilara.araujo/Projects/thilara.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/thilara.araujo/Projects/thilara.github.io/src/pages/index.js")))
}


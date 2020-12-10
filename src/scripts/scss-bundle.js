const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const style = [
    "./projects/material-theme-util/src/globalizer/theme-utils/theme.definition.scss",
    "./projects/material-theme-util/src/globalizer/theme-utils/theme.functions.scss",
    "./projects/material-theme-util/src/globalizer/theme-utils/theme.assignment.scss",
    "./projects/material-theme-util/src/globalizer/theme-utils/theme.responsive.scss",
    "./projects/material-theme-util/src/globalizer/theme-utils/theme.scss",
  ];
  await fs.ensureDir("./dist/material-theme-util");
  await concat(style, "./dist/material-theme-util/theme-util.scss");
})();

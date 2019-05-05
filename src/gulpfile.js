const gulp = require("gulp");

// 转译JavaScript
gulp.task("webpack", done => {
  const webpack = require("webpack-stream");
  const config = require("./webpack.config.js")
  gulp.src("./js/**/*.js")
    .pipe(webpack(config))
    .pipe(gulp.dest("../www/js"));
  done()
})
// 编译 less -> css
gulp.task("less", done => {
  const less = require("gulp-less")
  gulp.src("./less/*.js")
    .pipe(less())
    .pipe(gulp.dest("../www/css"))
  done()
})
gulp.task("default", gulp.series("webpack", "less"))
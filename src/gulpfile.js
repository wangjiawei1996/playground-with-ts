const gulp = require("gulp")

// 转译JavaScript
gulp.task('webpack', done => {
    const webpack = require('webpack-stream')
    const config = require('./webpack.config')

    gulp.src('../src/js/**/*.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('../www/js'))

    done()
})

// 编译 less -> css
gulp.task('css', done => {
    const less = require('gulp-less')
    gulp.src('../src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('../www/css'))

    done()
})

// 顺序执行webpack、css两个任务
gulp.task('default', gulp.series('webpack', 'css'))
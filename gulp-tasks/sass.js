'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('../sources/scss/**/*.scss')
    //.pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('../build/css'));
});

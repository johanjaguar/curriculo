var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

//tarea de js concat and uglify
gulp.task('scripts', function(){
  return gulp.src(['sources/javascript/**/*.js'])
    .pipe(concat('final.js'))
      .pipe(gulp.dest('build/js'))
    .pipe(rename('final.min.js'))
    .pipe(uglify())
    .on('error', function (err) { util.log(util.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('build/js'));
});

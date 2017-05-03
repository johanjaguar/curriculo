var gulp = require('gulp');
var haml = require('gulp-haml');

//tarea de haml
gulp.task('haml', function () {
  gulp.src('sources/haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('build/html'));
});

//variables con los plugins que usaremos
var gulp = require('gulp');
var util = require('gulp-util');
var requireDir = require('require-dir');var gutil = require('gulp-util');


requireDir('./gulp-tasks');

gulp.task( 'default', ['browser-sync'], function(){
  gulp.watch('sources/scss/**/*.scss', ['sass','cssmin']);
	gulp.watch('sources/javascript/**/*.js', ['scripts']);
  gulp.watch([
    'sources/images/**/*.gif',
    'sources/images/**/*.png',
    'sources/images/**/*.jpg',
    'sources/images/**/*.jpeg']
    ,['imagesmin']
  );
});

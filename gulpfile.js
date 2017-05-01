//variables con los plugins que usaremos
var gulp = require('gulp');
var util = require('gulp-util');
var requireDir = require('require-dir');
var browserSync = require('browser-sync');
requireDir('./gulp-tasks');

//tarea default-watch
gulp.task( 'default', ['browser-sync'], function(){
  //accion que ejecuta y vigila el directorio con la tarea asociada

  gulp.watch('sources/scss/**/*.scss', ['sass']);
  gulp.watch('build/css/**/*.css', ['cssmin']);
  //cssgulp.watch('sources/haml/**/*.haml', ['haml']);
  //gulp.watch('sources/javascript/**/*.js', ['js']);
  //gulp.watch([
  //'sources/images/**/*.gif', 'sources/images/**/*.png', 'sources/images/**/*.jpg', 'sources/images/**/*.jpeg']
  //,['imagesmin']
  //);
  gulp.watch("**/*.html").on('change', browserSync.reload);
}

);


//BROWSERSYNC

var gulp = require('gulp');
var browserSync = require('browser-sync');

// Static server.
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

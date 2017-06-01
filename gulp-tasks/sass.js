var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

//tarea sass
gulp.task('sass', function(){

  //fuente de los archivos
  gulp.src('sources/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
    	sass({
	  		outputStyle: 'expanded',
	  		sourceComments: true
	    }).on('error', sass.logError)
	  )
    .pipe(sourcemaps.write())
	  //destino de los archivos
	  .pipe( gulp.dest('build/css/' ))
});

//tarea crear nuevo archivo min
gulp.task('cssmin', function () {
  gulp.src(['build/css/**/*.css', '!build/css/**/*.min.css'])
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css/'));
});

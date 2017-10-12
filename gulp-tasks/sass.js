var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

//tarea sass
gulp.task('sass', function () {
	//fuente de los archivos
	gulp.src('**/*.s+(a|c)ss', {
			cwd: 'src/scss'
		})
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				sourceComments: 'map',
				sourceMap: 'sass',
				outputStyle: 'expanded',
				errLogToConsole: true,
			}).on('error', sass.logError)
		)

		.pipe(sourcemaps.write('maps'))

		//destino de los archivos
		.pipe(gulp.dest('build/css/'))
		.pipe(cssmin())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('build/css/'))
		.pipe(reload({
			stream: true
		}))
});

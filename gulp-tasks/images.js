var gulp = require('gulp');
var imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

//optimizacion de imagenes
gulp.task('imagesmin', function(){
  gulp.src([
    'sources/images/**/*.gif',
    'sources/images/**/*.png',
    'sources/images/**/*.jpg',
    'sources/images/**/*.jpeg'
  ])
  	.pipe(imagemin(
      {
        progressive: true,
        use: [pngquant()]
      }
    ))
  	.pipe(gulp.dest('build/images-op'))
});

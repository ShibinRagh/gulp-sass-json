var jsonSass = require('gulp-json-sass'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src(['sass/example.json', 'sass/example.scss'])
    .pipe(jsonSass({
      sass: false 
    }))
    .pipe(concat('output.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('out/'));
});

gulp.task('default', ['sass']);
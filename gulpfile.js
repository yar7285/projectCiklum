
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    path = require('path');


gulp.task('default', ['watch']);

gulp.task('jshint', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['jshint']);
});

gulp.task('less', function () {
  return gulp.src('styles/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('publick/'));
});

var sourcemaps = require('gulp-sourcemaps');

gulp.src('styles/**/*.less')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('styles/'));

var concat = require('gulp-concat');
 gulp.src('js/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      //only uglify if gulp is ran with '--type production'
//      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(''));

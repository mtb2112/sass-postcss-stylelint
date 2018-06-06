var gulp = require('gulp')
var sass = require('gulp-sass')
var stylelint = require('gulp-stylelint')
var stylefmt = require('gulp-stylefmt')

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
  .pipe(sass())
  .pipe(stylefmt())
  .pipe(gulp.dest('./'))
})

gulp.task('lint:scss', function() {
  return gulp.src(['sass/**/*.scss'])
    .pipe(stylelint({
      failAfterError: false,
      reportOutputDir: 'reports/css-lint',
      reporters: [
        {formatter: 'string', save: 'css-lint-results.txt', console: true},
      ],
    }))
})

gulp.task('stylefmt', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(stylefmt())
    .pipe(gulp.dest('sass'));
})

gulp.task('default', function() {
  gulp.watch('sass/**/*.scss',['styles'])
})
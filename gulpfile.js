var gulp = require('gulp')
var sass = require('gulp-sass')
var stylelint = require('gulp-stylelint')

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
  .pipe(sass())
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

gulp.task('default', function() {
  gulp.watch('sass/**/*.scss',['styles'])
})
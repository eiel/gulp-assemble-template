var gulp = require('gulp');
var assemble = require('gulp-assemble');
var htmlmin = require('gulp-htmlmin');

var options = {
  data: 'data/*.json',
  partials: 'templates/partials/*.hbs',
  layoutdir: 'templates/layouts/'
};

gulp.task('assemble', function () {
  gulp.src('templates/pages/*.hbs')
    .pipe(assemble(options))
    .pipe(htmlmin())
    .pipe(gulp.dest('_gh_pages/'));
});

gulp.task('default', ['assemble']);

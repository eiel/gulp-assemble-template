var gulp = require('gulp');
var assemble = require('gulp-assemble');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var runSequence = require('gulp-run-sequence');
var watch = require('gulp-watch');

gulp.task('build', function(cb) {
  runSequence('build-clean', ['build-scripts', 'build-styles'], 'build-html', cb);
});

var options = {
  data: 'data/*.json',
  partials: 'templates/partials/*.hbs',
  layoutdir: 'templates/layouts/'
};

var dist = gulp.dest('dist');

gulp.task('watch', function () {
  watch('dist/**/*.html', function(files) {
    return files
      .pipe(browserSync.reload({stream:true}));
  });
  watch('templates/pages/*.hbs', function(files) {
    return files
      .pipe(assemble(options))
      .pipe(dist);
  });
});

gulp.task('assemble', function () {
  gulp.src('templates/pages/*.hbs')
    .pipe(assemble(options))
    .pipe(htmlmin())
    .pipe(dist);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "dist/"
    }
  });
});

gulp.task('default', function() {
  runSequence("assemble",['watch','browser-sync']);
});

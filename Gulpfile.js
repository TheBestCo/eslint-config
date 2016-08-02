const gulp = require('gulp');
const bump = require('gulp-bump');

gulp.task('default', function () {
  gulp.src('./package.json')
    .pipe(bump())
    .pipe((gulp.dest('./')));
});

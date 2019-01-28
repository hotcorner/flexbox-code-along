const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function(done) {
  gulp
    .src("styles/style.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
  done();
});
gulp.task("watch", function() {
  gulp.watch("styles/style.css", gulp.series("styles"));
});

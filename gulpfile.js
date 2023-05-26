var gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify")
  notify = require("gulp-notify")
  zip = require("gulp-zip")
  ;

//html task
gulp.task("html-task", function () {
  return gulp
    .src("stege/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist/"))
    // .pipe(notify("HTML Task Is Done!"))
    .pipe(livereload());
});

//css task
gulp.task("css-task", function () {
  return gulp
    .src(["stege/css/**/*.css","stege/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error",sass.logError))
    .pipe(prefixer("last 2 versions"))
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

//js task
gulp.task("js-task", function () {
  return gulp
    .src("stege/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

//Compress Files
gulp.task("comp-task",function(){
  return gulp.src('dist/**/*.*')
  .pipe(zip('website.zip'))
  .pipe(gulp.dest('.'))
  .pipe(notify('Compress Files Done!'));
})

//watch task
gulp.task("watch-task", function () {
  require("./server");
  livereload.listen();
  gulp.watch("stege/html/**/*.pug", gulp.series("html-task"));
  gulp.watch(["stege/css/**/*.css","stege/css/**/*.scss"], gulp.series("css-task"));
  gulp.watch("stege/js/*.js", gulp.series("js-task"));
  // gulp.watch("dist/**/*.*", gulp.series("comp-task"));
});

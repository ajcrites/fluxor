var gulp = require("gulp"),
    browserify = require("gulp-browserify"),
    concat = require("gulp-concat");

gulp.task("browserify", function () {
    gulp.src("src/main.js")
        .pipe(browserify({
            transform: "reactify",
        }))
        .pipe(concat("main.js"))
        .pipe(gulp.dest("dist"))
});

gulp.task("copy", function () {
    gulp.src("src/index.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["browserify", "copy"]);

gulp.task("watch", function () {
    gulp.watch("src/**/*.*", ["default"]);
});

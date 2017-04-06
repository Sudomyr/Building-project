var gulp = require("gulp"),
	less = require("gulp-less"),
	nano = require("gulp-cssnano"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	browserSync = require("browser-sync");

gulp.task("html", function() {
	return gulp.src("src/html/*.html")
		.pipe(gulp.dest("dist"));
});

gulp.task("app-css", function() {
	return gulp.src([
		"src/styles/main.less"
		])
		.pipe(less())
		.pipe(nano())
		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task("fonts", function() {
	return gulp.src([
		"src/vendor/bootstrap/dist/fonts/*.*",
		"src/vendor/font-awesome/fonts/*.*",
		"src/fonts/**/*.*"
		])
		.pipe(gulp.dest("dist/fonts"));
});

gulp.task("images", function() {
	return gulp.src("src/images/*.{jpg,png}")
		.pipe(gulp.dest("dist/images"));
});

gulp.task("vendor-css", function() {
	return gulp.src([
		"src/vendor/bootstrap/dist/css/bootstrap.css",
		"src/vendor/font-awesome/css/font-awesome.css",
		"src/libs/jquery.bxslider/jquery.bxslider.css"
		])
		.pipe(nano())
		.pipe(concat("vendor.min.css"))
		.pipe(gulp.dest("dist/css"));
});

gulp.task("vendor-js", function() {
	return gulp.src([
		"src/vendor/jquery/dist/jquery.js",
		"src/vendor/bootstrap/dist/js/bootstrap.js",
		"src/libs/jquery.bxslider/jquery.bxslider.js"
		])
		.pipe(concat("vendor.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

gulp.task("app-js", function() {
	return gulp.src("src/scripts/*.js")
		.pipe(gulp.dest("dist/js"));
});




gulp.task("default", ["html", "app-css", "fonts", "images", "vendor-css", "vendor-js", "app-js", "watch"]);

gulp.task("browser-sync", function() {
	browserSync({
		server: {
			baseDir: "dist"
		},
		notify: false
	});
});

gulp.task("watch", ["browser-sync"], function() {
	gulp.watch("src/styles/**/*.less", ["app-css"]);
	gulp.watch("src/**/*.html", ["html"]);
	gulp.watch("dist/**/*.html", browserSync.reload);
	gulp.watch("src/scripts/*.js", ["app-js"]);
	gulp.watch("dist/js/*.js", browserSync.reload);
});
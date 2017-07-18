const gulp = require('gulp');
const sass = require('gulp-sass');

const rootPath = {
	source: "./src/",
	dist: "./public",
};

const paths = {
	html: "**/*.html",
	sass: "assets/scss/**/*.scss",
	mainSass:"assets/scss/main.scss",
	js: "assets/js/app.js"
};

gulp.task("cargarINDEX",()=>{
	gulp.src(rootPath.source + paths.html)
		.pipe(gulp.dest(rootPath.dist));
});

gulp.task('cargarJS', () =>{
	gulp.src(rootPath.source + paths.js)
		.pipe(uglify())
		.pipe(obfuscate())
		.pipe(gulp.dest(rootPath.dist + '/assets/js'));
});

gulp.task('cargarCSS', () =>{
	gulp.src(rootPath.source + paths.mainSass)
		.pipe(sass({outputStyle: "compressed"})
			.on("error", sass.logError))
		.pipe(gulp.dest(rootPath.dist + '/assets/css'))
});

gulp.task('actualizar',['cargarCSS','cargarJS','cargarINDEX']);

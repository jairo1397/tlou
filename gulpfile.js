const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// utilidades css

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const paths = {
        imagenes: 'src/img/**/*',
        scss: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js'
    }
    //Función que compila SASS

function css() {
    return src(paths.scss)
        .pipe(sass())
        .pipe(postcss(cssnano()))
        .pipe(dest('./build/css'));
}

function javascript() {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'));
}

function minificarCSS() {
    return src(paths.scss)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('./build/css'));
}

function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javascript)
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        // .pipe(notify({ message: 'Imagen Minificada' }));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        // .pipe(notify({ message: 'Version webp lista' }));
}

exports.css = css;
exports.minificarCSS = minificarCSS;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);
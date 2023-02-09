const {src, dest, watch, parallel} = require("gulp");

//CSS
const plumber = require("gulp-plumber");
const sass = require('gulp-sass') (require('sass'));

//Imagenes


function css(done){
    src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/css'));

    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css)
    done();
}

exports.css = css;
exports.dev = dev;
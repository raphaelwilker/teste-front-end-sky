const { src, dest, series, watch, task } = require('gulp');
// const vueify = require('gulp-vueify2');
const concat = require('gulp-concat');
const uglify_es = require('gulp-uglify-es').default;
const browserify = require('gulp-browserify');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
            
function copyfonts() {
    return src('src/sass/fonts/*.ttf')
    .pipe(dest('dist/css/fonts'));
}
     
function copyimages() {
    return src([
        'src/img/*png',
        'src/img/*svg',
    ])
    .pipe(dest('dist/img'));
}

function cleaner() {
    return src('./dist/')
    .pipe(clean({force:true}));
}
            
function buildlib() {
    return src([
    'node_modules/vue/dist/vue.min.js',
    'node_modules/vue-resource/dist/vue-resource.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/swiper/swiper-bundle.min.js'
    ])
    .pipe(concat('vendor.min.js'))
    .pipe(dest('./dist/js'))
}

function javascriptfiles(){
    return src(['src/*.js','src/**/*.js'])
    .pipe(browserify({
        insertGlobals : true,
        debug : false
    }))
    .pipe(uglify_es({mangle: true}))
    .pipe(concat('index.min.js'))
    .pipe(dest('./dist/js'))
}

function build(){
    return src(['./dist/js/*.js'])
    .pipe(concat('index.min.js'))
    // .pipe(uglify({mangle: false}))
    .pipe(dest('./dist/js'))
}



function compilesass(){
    return src('./src/sass/**/*.sass')
    // 
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('index.min.css'))
    .pipe(dest('./dist/css/'));
}

function vendorcss(){
    return src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/swiper/swiper-bundle.min.css'
    ])
    .pipe(concat('vendor.min.css'))
    .pipe(dest('./dist/css'))    
}

function server(){
    browserSync.init({
        server: {
            baseDir: '../sky-test-front/'
        }
    });
    watch('src/**/*',series(cleaner, buildlib, javascriptfiles,compilesass, vendorcss, browserSync.reload)).on('change', browserSync.reload);
    watch('src/js/**/*.js').on('change', function(){
        series(cleaner, buildlib, javascriptfiles,compilesass, vendorcss, browserSync.reload)
        // task(cleaner, buildlib, javascriptfiles)
        browserSync.reload
    })
    watch('src/sass/**/*.sass').on('change', function(){
        series(cleaner, buildlib, javascriptfiles,compilesass, vendorcss, browserSync.reload)
        // task(compilesass, vendorcss)
        browserSync.reload
    })
}
task(server)


exports.default = series(cleaner, copyfonts, copyimages, buildlib, javascriptfiles, compilesass, vendorcss)

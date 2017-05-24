var gulp = require('gulp');
//gulp-uglify用于压缩js文件
var uglify = require('gulp-uglify');
//文件合并
var concat = require('gulp-concat');

//一、创建压缩任务
// 在命令行使用 gulp script 启动此任务
gulp.task('script',function () {
    //1、先找js文件
    gulp.src('src/js/*.js')
    //压缩文件
        .pipe(uglify())
    //3、另存压缩后的文件
        .pipe(gulp.dest('dist/js'))

});
// 检测代码修改自动执行任务
// 监听文件修改，当文件被修改则执行 script 任务
gulp.watch('src/js/*.js', ['script']);

//二、创建实时监听任务
// 在命令行使用 gulp auto 启动此任务 //先执行文件压缩在命令行执行gulp script,在执行gulp auto,此任务是实时监听js文件变化，并压缩，不需要每次都执行gulp script
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('src/js/*.js', ['script'])
})

//三、创建文件合并任务
gulp.task('concat',function () {
    gulp.src('src/js/*js').pipe(concat('main.js')).pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

//合并文件监听
gulp.watch('src/js/*.js', ['concat']);

//二、创建实时监听任务
// 在命令行使用 gulp auto 启动此任务 //先执行文件压缩在命令行执行gulp script,在执行gulp auto,此任务是实时监听js文件变化，并压缩，不需要每次都执行gulp script
gulp.task('concatWatch', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('src/js/*.js', ['concat'])
})



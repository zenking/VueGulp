var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var vue = require('vue-loader');
var appList = ['app'];
gulp.task('default', ['bundle'], function() {
	console.log('done');
})
gulp.task('bundle', function() {
	return gulp.src(mapFiles(appList, 'js'))
    	.pipe(named())
    	.pipe(webpack(getConfig('',vue)))
    	.pipe(gulp.dest('dist/'))
})
 
gulp.task('watch', function() {
  	return gulp.src(mapFiles(appList, 'js'))
    	.pipe(named())
    	.pipe(webpack(getConfig({watch: true},vue)))
    	.pipe(gulp.dest('dist/'))
})
//gulp-webpack原生写法
// gulp.task('watch', function() {
//     return gulp.src('src/app.js')
//       .pipe(named())
//       .pipe(webpack({ 
//         watch: true,
//         module:{
//           loaders:[{
//             test: /\.vue$/,
//             loader: vue.withLoaders({
//             	js: 'babel?optional[]=runtime'
//             })
//           }]
//         },
//         devtool: 'source-map'
//       }))
//       .pipe(gulp.dest('dist/'))
// })
function getConfig(opt,vue) {
  	var config = {
	    module: {
	      	loaders: [{ 
	      		test: /\.vue$/, 
	      		loader: vue.withLoaders({
         			js: 'babel?optional[]=runtime'
             	})
	      	}]
	    },
	    devtool: 'source-map'
	}
	if (!opt) {
		return config
	}
	for (var i in opt) {
		config[i] = opt[i]
	}
	return config
}
function mapFiles(list, extname) {
  return list.map(function (app) {return 'src/' + app + '.' + extname})
}
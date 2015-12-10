'use strict';
const gulp = require('gulp');
const electron = require('electron-connect').server.create();

gulp.task('start', function () {

  electron.start();

  gulp.watch(['public/server.js'], electron.restart);
  gulp.watch(['public/index.html', 'public/client.js', 'public/app.css'], electron.reload);
});

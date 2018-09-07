'use strict';

const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
    baseDir: './solution-3/'
  }
});
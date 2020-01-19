const fs = require('fs');
const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    DIRTREE: require('./dirtree'),
  }
}

// 注入当前工作目录的文件树到当前工作目录的README中
const markdownPath = path.resolve('README.md');
markdownMagic(markdownPath, config);

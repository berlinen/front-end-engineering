const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'animal-api.js',
    // 同时通过设置 library 和 libraryTarget 将 AnimalApi 作为公共库对外暴露的命名空间。
    library: 'AnimalApi',
    libraryTarget: 'var'
  }
}
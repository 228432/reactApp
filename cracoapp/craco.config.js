
const CracoLessPlugin = require('craco-less')
const pxtorem = require('postcss-pxtorem')
const path = require('path')
 
module.exports = {
    webpack: {
        alias: {
          // 使用 @ 表示 src 文件所在路径
          '@': path.resolve(__dirname, 'src')
        }
      },    
    plugins: [
        {
          plugin: CracoLessPlugin,
        },
      ],
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [[
            pxtorem({
              rootValue: 75,//根据ui提供的效果图修改  看是1x还是2x
              propList: ['*'],
              minPixelValue: 3,
              exclude: /node_modules/i,
            })]],
        },
      },
    },
  },
};
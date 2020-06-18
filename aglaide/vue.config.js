module.exports = {
  transpileDependencies: ["vuetify"],
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       sassOptions: {
  //         rules: [
  //           {
  //             test: /\.s(c|a)ss$/,
  //             use: [
  //               'vue-style-loader',
  //               'css-loader',
  //               {
  //                 loader: 'sass-loader',
  //                 // Requires sass-loader@^7.0.0
  //                 options: {
  //                   implementation: require('sass'),
  //                   fiber: require('fibers'),
  //                   indentedSyntax: false // optional
  //                 },
  //                 // Requires sass-loader@^8.0.0
  //                 options: {
  //                   implementation: require('sass'),
  //                   sassOptions: {
  //                     fiber: require('fibers'),
  //                     indentedSyntax: false // optional
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },
  publicPath: process.env.VUE_APP_BASE_ROUTE
};

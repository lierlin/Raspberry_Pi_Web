const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

const path = require("path");
function resolve(dir) {
  console.log(path.join(__dirname, dir));
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    disableHostCheck: true, // 取消验证 host
    proxy: {
      "/api": {
        target: "http://localhost:5000/api", // 本机nginx 中转
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          "^/api": "", // rewrite path
        },
      },
    },
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    /*    config.resolve.alias
      .set("@", resolve("src"))
      .set("config", resolve("src/config"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components")); */

    config.module
      .rule("ts")
      .use("ts-loader")
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory(
                {
                  libraryName: "vant",
                  libraryDirectory: "es",
                  style: true,
                },
                {
                  libraryName: "ant-design-vue",
                  libraryDirectory: "es",
                  style: true,
                }
              ),
            ],
          }),
          compilerOptions: {
            module: "es2015",
          },
        });
        return options;
      });
  },
};

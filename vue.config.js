/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");
const { GenerateSW } = require("workbox-webpack-plugin");
const PROD_ENVIRONMENTS = ["production", "stage"];
module.exports = {
  configureWebpack: (config) => {
    console.log(`Environment : ${process.env.NODE_ENV}`);

    if (!PROD_ENVIRONMENTS.includes(process.env.NODE_ENV)) {
      config.devtool = "eval-source-map";
      config.output.devtoolFallbackModuleFilenameTemplate =
        "webpack:///[resource-path]?[hash]";
      config.output.devtoolModuleFilenameTemplate = (info) => {
        const isVue = info.resourcePath.match(/\.vue$/);
        const isScript = info.query.match(/type=script/);
        const hasModuleId = info.moduleId !== "";

        // Detect generated files, filter as webpack-generated
        if (
          // Must result from vue-loader
          isVue &&
          // Must not be 'script' files (enough for chrome), or must have moduleId (firefox)
          (!isScript || hasModuleId)
        ) {
          let pathParts = info.resourcePath.split("/");
          const baseName = pathParts[pathParts.length - 1];
          // prepend 'generated-' to filename as well, so it's easier to find desired files via Ctrl+P
          pathParts.splice(-1, 1, `generated-${baseName}`);
          return `webpack-generated:///${pathParts.join("/")}?${info.hash}`;
        }

        // If not generated, filter as webpack-vue
        return `webpack-vue:///${info.resourcePath}`;
      };
    }
    if (
      process.env.NODE_ENV !== "production" &&
      process.env.NODE_ENV !== "development"
    ) {
      const swPlugin = new GenerateSW({
        cacheId: "courtcall-ui-v3",
        cleanupOutdatedCaches: true,
      });
      config.plugins.unshift(swPlugin);
    }
    config.output.filename = "[name].[hash].js";
    console.log("Webpack Config");
    const getEnvName = () => {
      if (process.env.NODE_ENV === "production") {
        return "environment.prod.ts";
      } else if (process.env.NODE_ENV === "remote-dev") {
        return "environment.dev.ts";
      } else if (process.env.NODE_ENV === "stage") {
        return "environment.stage.ts";
      } else {
        return "environment.ts";
      }
    };

    const normalModuleReplacementPlugin = new webpack.NormalModuleReplacementPlugin(
      /environments\/environment\.ts/gi,
      `./${getEnvName()}`
    );
    config.plugins.unshift(normalModuleReplacementPlugin);
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      let title = "CourtCall";
      if (process.env.NODE_ENV === "development") {
        title = "CourtCall Local";
      } else if (process.env.NODE_ENV === "remote-dev") {
        title = "Remote Dev";
      } else if (process.env.NODE_ENV === "stage") {
        title = "CourtCall Stage";
      }
      args[0].title = title;
      return args;
    });
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 1048576 }));
  },

  css: {
    sourceMap: !PROD_ENVIRONMENTS.includes(process.env.NODE_ENV),
  },

  productionSourceMap: !PROD_ENVIRONMENTS.includes(process.env.NODE_ENV),

  devServer: {
    port: 4200,
  },

  transpileDependencies: ["vuetify"],
};

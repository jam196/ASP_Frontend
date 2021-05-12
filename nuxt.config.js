const webpack = require("webpack");
const path = require("path");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");

export default {
  router: {
    middleware: ["auth"]
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Account",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/init-ui-plugins.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
      home: "/"
    },
    strategies: {
      laravelJWT: {
        provider: "laravel/jwt",
        url: "https://localhost:5001",
        endpoints: {},
        token: {
          property: "token",
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        cash: "cash-dom"
      })
      // new CKEditorWebpackPlugin({
      //   language: "en",
      //   translationsOutputFile: /app/
      // })
    ],
    // transpileDependencies: [/ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/],
    chainWebpack: config => {
      const svgRule = config.module.rule("svg");
      svgRule.exclude.add(path.join(__dirname, "node_modules", "@ckeditor"));
      config.module
        .rule("cke-svg")
        .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
        .use("raw-loader")
        .loader("raw-loader");

      config.module
        .rule("cke-css")
        .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
        .use("postcss-loader")
        .loader("postcss-loader")
        .tap(() => {
          return styles.getPostCssConfig({
            themeImporter: {
              themePath: require.resolve("@ckeditor/ckeditor5-theme-lark")
            },
            minify: true
          });
        });
    }
  }
};

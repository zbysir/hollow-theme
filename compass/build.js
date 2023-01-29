const esbuild = require("esbuild");
const autoprefixer = require("autoprefixer");
const tailwindcss = require('tailwindcss')
const stylePlugin = require('esbuild-style-plugin')
const variablesPrefixer = require('postcss-variables-prefixer')

esbuild
  .build({
    entryPoints: [
      // "app.css" 用于生成静态网页和前端 react 组件所有需要的 css
      "main.css",
    ],
    bundle: true,
    plugins: [
      stylePlugin({
        postcss: {
          plugins: [
            tailwindcss,
            autoprefixer,
            // https://github.com/saadeghi/daisyui/issues/1543
            variablesPrefixer({prefix: 'tw-'})
          ]
        },
      })
    ],
    external: ['@bysir/hollow'],
    metafile: true,
    outdir: "statics/theme",
    minify: true,
    sourcemap: true,
    treeShaking: true,
    target: ["chrome78"],
    watch: process.env.MODE !== 'prod' ? {
      onRebuild: function (e, result) {
        if (e) {
          console.error(e.message)
        } else {
          console.log("rebuild success")
        }
      }
    } : null,
    write: true,
  })
  .then((e) => {
    console.log("build success")
  })
  .catch((e) => console.error(e.message));

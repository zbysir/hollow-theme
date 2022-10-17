const esbuild = require("esbuild");
const autoprefixer = require("autoprefixer");
const tailwindcss = require('tailwindcss')
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");
const path = require("path");
const {Metafile} = require("esbuild");
const fs = require("fs-extra");

esbuild
  .build({
    entryPoints: [
      // "app.css" 用于生成静态网页和前端 react 组件所有需要的 css
      "main.css",
      // 前端组件
      "app/index.tsx",
      // index 是生成时的文件，只是用于收集依赖，当文件更改的时候 rebuild 生成 css（tailwindcss 需要从文件中收集依赖）
      // index 不会打包出文件
      "index.tsx"
    ],
    bundle: true,
    plugins: [
      {
        name: "remove",
        setup: function (options) {
          // 删不要的 index.tsx
          options.onEnd(function (args) {
            for (let outputsKey in args.metafile.outputs) {
              if (args.metafile.outputs[outputsKey].entryPoint === "index.tsx") {
                fs.rm(outputsKey)
              }
            }
            return null
          })
        }
      },

      postCssPlugin({
          plugins: [autoprefixer, tailwindcss],
        },
      ),
    ],
    external: ['@bysir/hollow'],
    metafile: true,
    outdir: "statics",
    minify: true,
    sourcemap: true,
    treeShaking: true,
    watch: {
      onRebuild: function (e, result) {
        if (e) {
          console.error(e.message)
        } else {
          console.log("rebuild success")
        }
      }
    },
    write: true,
  })
  .catch((e) => console.error(e.message));
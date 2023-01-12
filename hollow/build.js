const esbuild = require("esbuild");
const autoprefixer = require("autoprefixer");
const tailwindcss = require('tailwindcss')
const stylePlugin = require('esbuild-style-plugin')
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const fs = require("fs");

esbuild
  .build({
    entryPoints: [
      // "app.css" 用于生成静态网页和前端 react 组件所有需要的 css
      "main.css",
      // 前端组件
      "app/index.tsx",
    ],
    bundle: true,
    plugins: [
      stylePlugin({
        postcss: {
          plugins: [tailwindcss, autoprefixer]
        },
        cssModulesOptions: {
          getJSON: function (cssFileName, json, outputFileName) {
            const path = require("path");
            const cssName = path.basename(cssFileName, ".css");
            const jsonFileName = path.resolve("./statics/" + cssName + ".json");
            fs.writeFileSync(jsonFileName, JSON.stringify(json));
          },
        }
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

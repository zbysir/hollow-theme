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
          plugins: [tailwindcss({
            mode: 'jit',
            content: [
              './**/*.{jsx,tsx,html,ts,mdx}',
            ],
            // darkMode: "class",
            theme: {
              extend: {
                // fix neutral
                // https://github.com/saadeghi/daisyui/issues/683
                // colors: {
                //   neutral: colors.neutral,
                // },
              },
              fontFamily: {
                ...defaultTheme.fontFamily,
              }
            },
            variants: {},
            plugins: [
              require('@tailwindcss/typography')({
                // :where 在手机上兼容性不佳，不启用
                // https://github.com/tailwindlabs/tailwindcss-typography/pull/203
                target: 'legacy'
              }),
              require("daisyui")
            ],
            daisyui: {
              // themes: ['wireframe', 'dark']
              themes: [{
                light: {
                  "primary": "#adff77",
                  "secondary": "#8a89d6",
                  "accent": "#045c70",
                  "neutral": "#FFFFFF",
                  "base-100": "#fafafa",
                  "base-200": "#e5e5e5",
                  "info": "#5EA0D9",
                  "success": "#25B675",
                  "warning": "#BA6E03",
                  "error": "#F45D88",
                },
              }, {
                dark: {
                  "primary": "#6dff9b",
                  "secondary": "#6cd8d5",
                  "accent": "#d343a8",
                  "neutral": "#222222",
                  "base-100": "#000000",
                  "base-200": "#262626",
                  "info": "#3D59C7",
                  "success": "#5DEAA8",
                  "warning": "#F9A01A",
                  "error": "#EC556E",
                }
              }],
              darkTheme: "dark",
            },
            // 添加前缀让 source 中使用的 tailwind 与 theme 互不影响。
            prefix: 't-'
          }), autoprefixer]
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

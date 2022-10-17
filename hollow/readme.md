# Hollow Theme

Hollow 系统同名主题（也是第一款主题）。https://blog.bysir.top/

## Params

支持配置以下参数：

```yaml
theme_config:
  base: ''
  title: Bysir 的博客
  logo: "bysir"
  font: 
    family: "LXGW WenKai" # 支持 LXGW WenKai / noto
  stack: Tailwindcss + <a href="https://github.com/zbysir/hollow">Hollow</a> + <a href="https://github.com/zbysir/gojsx">Jsx</a>
  footer_links:
    - url: https://github.com/zbysir
      name: GitHub
      icon: GitHub
  links_page: 'pages/links.md'
  about_page: 'pages/about.md'

```

## 代码结构
- index.tsx：网站页面代码生成入口，不参与编译（但同时也配置到了编译入口是因为需要使用到 watch 特性，当模板文件更改时也能生成 tailwindcss）
- main.css：生成 tailwindcss
- app/index.tsx：前端 js 代码编译入口，编译生成 app.js

## 如何开发
- yarn
- yarn build
- hollow service (注意[配置 hollow 使用当前主题](TODO))

# Hollow Theme

Hollow 系统同名主题（也是第一款主题）。https://blog.bysir.top/

- 基于 tailwindcss + [daisyUI](https://github.com/saadeghi/daisyui)
- 支持自定义字体
- 支持搜索
- 支持 暗夜模式

![img.png](docs/img.png)
![img.png](docs/img4.png)
![img.png](docs/img2.png)
![img.png](docs/img3.png)

## Params

支持配置以下参数：

```yaml
theme_config:
  title: Bysir 的博客
  logo: "bysir"
  font: 
    body:
      family: "LXGW WenKai" # 支持 LXGW WenKai / noto
  stack: Tailwindcss + <a href="https://github.com/zbysir/hollow">Hollow</a> + <a href="https://github.com/zbysir/gojsx">Jsx</a>
  footer_links:
    - url: https://github.com/zbysir
      name: GitHub
      icon: GitHub
  links_page: 'pages/links.md'
  about_page: 'pages/about.md'
```

## Meta

主题会使用以下 Meta 来控制文章显示逻辑。

| key    | 类型     | 说明                                                                                                          |
|--------|--------|-------------------------------------------------------------------------------------------------------------|
| export | bool   | 是否导出，如果设置为 false 则不会显示任何页面，但你可以在 [MDX 中使用没有 export 的文章](https://gohollow.top/docs/advance/mdx/#hollowinmdx) |
| draft  | bool   | 是否是草稿，草稿不会显示在主页，但会显示在 Tag 页                                                                                 |
| slug   | string | Slug，文章的 URL 路径                                                                                             |
| title  | string | 标题，如果填写之后会覆盖文件名作为文章标题的逻辑                                                                                    |
| desc   | string | 描述，会显示在 tag 页面，建议 15 个字符以内                                                                                  |
| sort   | number | 排序值，小的在前                                                                                                    |

## 代码结构

- main.css：生成 tailwindcss
- app/index.tsx：前端 js 代码编译入口，编译生成 app.js

## 开发原则

### 为什么不使用 css module？

我认为 tailwind 和 css module 天生是不匹配的，写一串 class 已经很冗长了，如果在加上 css module，那么代码会变得更难写。就像这样：

```jsx
<div className={`${style['mt-0']} ${style['pl-0']}`}/>

// 就算用上工具类，也不见得好写到哪去。
<div className={clsx(style['mt-0'], style['pl-0'])}/>
```

## 预览主题

```bash
yarn preview
```

## 如何使用此主题

修改你博客项目下的 config.yml/ts 文件，将 theme 值改为 https://github.com/zbysir/hollow-theme/tree/master/hollow ，如下

```yaml
theme: https://github.com/zbysir/hollow-theme/tree/master/hollow
```

## 如何开发

- yarn
- yarn preview

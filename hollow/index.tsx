import Index from "./layout/Index"
import hollow, {getContents} from "@bysir/hollow"

// 懒加载文件
const Home = (args) => require("./page/Home").default()
const BlogDetail = (args) => require("./page/BlogDetail").default(args);
const TagPage = (args) => require("./page/TagPage").default(args);
const MarkDown = (args) => require("./page/Md").default(args);
const Gallery = (args) => require("./page/Gallery").default();

import {articleRoute} from "./util";
import {defaultConfig, defaultContents} from "./initial_data";

let contents = getContents('contents').list;
if (contents.length == 0) {
    contents = defaultContents
}
let params = hollow.getConfig() || defaultConfig;

let global = {
    title: params?.title,
    logo: params?.logo,
    stack: params?.stack,
    footer_links: params?.footer_links,
}

let tags = []
contents.forEach(i => {
    tags = tags.concat(i.meta?.tags)
})

// @ts-ignore
tags = Array.from(new Set(tags));

export default {
    pages: [
        {
            path: '',
            component: () => {
                return <Index {...global} activeHeader="Home">
                    <Home/>
                </Index>
            },
        },
        ...contents.map(b => {
            return {
                path: articleRoute(b),
                component: () => {
                    let content = b.getContent()
                    // 不能这样写，因为在 golang 中没有对应的 content 字段，不能赋值成功
                    // b.content = content
                    return <Index {...global} activeHeader="Home">
                        <BlogDetail {...b} content={content}></BlogDetail>
                    </Index>
                }
            }
        }),
        {
            path: 'tags',
            component: () => {
                return <Index {...global} activeHeader="Tags">
                    <TagPage></TagPage>
                </Index>
            }
        },
        ...tags.map(tag => ({
            path: 'tags/' + tag,
            component: () => {
                return <Index {...global} activeHeader="Tags">
                    <TagPage selectedTag={tag}></TagPage>
                </Index>
            }
        })),
        {
            path: 'links',
            component: () => {
                return <Index {...global} activeHeader="Links">
                    <MarkDown filepath={params.links_page} md={params.links_page_md}></MarkDown>
                </Index>
            }
        },
        {
            path: 'about',
            component: () => {
                return <Index {...global} activeHeader="About">
                    <MarkDown filepath={params.about_page} md={params.about_page_md}></MarkDown>
                </Index>
            }
        },
        {
          path:'gallery',
            component: () => {
                return <Index {...global} activeHeader="Gallery">
                    <Gallery></Gallery>
                </Index>
            }
        },
        {
            path: 'article.json',
            body: JSON.stringify(contents.map(i => ({
                ...i,
                content: i.getContent({pure: true})
            })))
        }
    ],

    // 将 public 文件下所有内容 copy 到 dist 下
    assets: ['statics'],

    // 用于得到预览某一个篇文章的地址
    articleRouter: articleRoute
}

import Index from "./layout/Index"
import hollow, {getContents} from "@bysir/hollow"
import {articleRoute} from "./util";
import {defaultConfig, defaultContents} from "./initial_data";

// 懒加载文件
const Home = (args) => require("./page/Home").default()
const BlogDetail = (args) => require("./page/BlogDetail").default(args);
const TagPage = (args) => require("./page/TagPage").default(args);
const MarkDown = (args) => require("./page/Md").default(args);
const Gallery = (args) => require("./page/Gallery").default();

let contents = getContents('contents', {
        filter: (a) => (a.meta?.export !== false)
    }
).list;
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
    if (i.meta?.tags) {
        tags = tags.concat(i.meta?.tags)
    }
})

// @ts-ignore
tags = Array.from(new Set(tags));

export default {
    pages: [
        {
            path: '',
            component: () => <Index {...global} activeHeader="Home">
                <Home/>
            </Index>,
        },
        ...contents.map(b => {
            return {
                path: articleRoute(b),
                component: () =>
                    <Index {...global} activeHeader="Home">
                        <BlogDetail {...b} content={b.getContent()}></BlogDetail>
                    </Index>
            }
        }),
        {
            path: 'tags',
            component: () => <Index {...global} activeHeader="Tags">
                <TagPage></TagPage>
            </Index>
        },
        ...tags.map(tag => ({
            path: 'tags/' + tag,
            component: () => <Index {...global} activeHeader="Tags">
                <TagPage selectedTag={tag}></TagPage>
            </Index>
        })),
        {
            path: 'links',
            component: () => <Index {...global} activeHeader="Links">
                <MarkDown filepath={params.links_page} md={params.links_page_md}></MarkDown>
            </Index>
        },
        {
            path: 'about',
            component: () => <Index {...global} activeHeader="About">
                <MarkDown filepath={params.about_page} md={params.about_page_md}></MarkDown>
            </Index>
        },
        {
            path: 'gallery',
            component: () => <Index {...global} activeHeader="Gallery">
                <Gallery></Gallery>
            </Index>
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

import Index from "./layout/Index"

import BlogDetail from "./page/BlogDetail";

import hollow, {Content, getContents} from "@bysir/hollow"
import {articleRoute, sortBlog} from "./util";
import Menu from "./particle/Menu";
import ArticlePage from "./page/Md";
import {defaultConfig, defaultContents} from "./initial_data";
import RawPage from "./page/Raw";

let params = hollow.getConfig() || defaultConfig;

const articles = getContents('contents',
    {
        sort: sortBlog,
        page: 1,
        size: 20,
        // filter: i => (i.meta?.draft !== true),
        tree: true
    }
);

if (articles.list.length === 0) {
    articles.list = defaultContents
}

// let first = null

let global = {
    title: params?.title,
    logo: params?.logo,
    stack: params?.stack,
    footer_links: params?.footer_links,
}

function flatArticles(as: Content[]): Content[] {
    let s = []
    as.forEach(i => {
        if (!i.is_dir) {
            s.push(i)
        }

        s.push(...flatArticles(i.children))
    })
    return s
}

let docs = flatArticles(articles.list)

// console.log('articles', JSON.stringify(articles))
// console.log('docs', JSON.stringify(docs))

// 第一个作为 doc 首页
const first = docs && docs[0]

let homepage = {}

if (params?.home_page) {
    homepage = {
        path: '',
        component() {
            return <Index {...global}>
                <RawPage filepath={params?.home_page}></RawPage>
            </Index>
        }
    }
} else if (first) {
    homepage = {
        path: '',
        component: () => {
            let content = first.getContent()
            let appendLink = function (b: Content): any {
                return {
                    ...b,
                    link: (b === first ? '' : (articleRoute(b, "/docs/"))),
                    children: b.children.map(appendLink)
                }
            }

            return <Index {...global}>
                <BlogDetail {...first} next={docs[1] || undefined} content={content} menu={
                    <Menu activityMenuLink={''} menu={articles.list.map(appendLink)}></Menu>
                }></BlogDetail>
            </Index>
        }
    }
} else {
    homepage = {
        component: () => {
            return <Index {...global}>
                Empty
            </Index>
        }
    }
}

let appendLink = function (b: Content): any {
    return {
        ...b,
        link: (b === first ? '/docs/' : articleRoute(b, "/docs/")),
        children: b.children.map(appendLink)
    }
}
const menu = articles.list.map(appendLink)

export default {
    pages: [
        homepage,
        ...docs.map((b, idx) => {
            let path = (b === first ? '/docs/' : articleRoute(b, "/docs/"))
            return {
                path: path,
                component: () => {
                    let content = b.getContent()

                    let prev = docs[idx - 1] || undefined
                    if (prev && prev == first) {
                        // clear url for first doc
                        prev = Object.assign(prev, {meta: {...prev.meta, slug: ''}})
                    }
                    return <Index {...global} activeHeader={"Docs"}>
                        <BlogDetail {...b} content={content}
                                    next={docs[idx + 1] || undefined} prev={prev} menu={
                            <Menu activityMenuLink={path} menu={menu}></Menu>
                        }></BlogDetail>
                    </Index>
                }
            }
        }),
    ],

    // 将 public 文件下所有内容 copy 到 dist 下
    assets: ['statics'],
}
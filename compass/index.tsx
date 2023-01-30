import Index from "./layout/Index"

import BlogDetail from "./page/BlogDetail";

import hollow, {Content, getContents} from "@bysir/hollow"
import {articleRoute, sortBlog} from "./utilx";
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
} else if (articles.list[0]) {
    homepage = {
        path: '',
        component: () => {
            let content = first.getContent()
            let appendLink = function (b: Content): any {
                return {
                    ...b,
                    link: (b === first ? '' : ('/docs/' + articleRoute(b))),
                    children: b.children.map(appendLink)
                }
            }

            return <Index {...global}>
                <BlogDetail {...first} content={content} menu={
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

export default {
    pages: [
        homepage,
        ...docs.map(b => {
            let path = '/docs/' + (b === first ? '' : articleRoute(b))
            return {
                path: path,
                component: () => {
                    let content = b.getContent()
                    let appendLink = function (b: Content): any {
                        return {
                            ...b,
                            link: '/docs/' + (b === first ? '' : articleRoute(b)),
                            children: b.children.map(appendLink)
                        }
                    }
                    return <Index {...global} activeHeader={"Docs"}>
                        <BlogDetail {...b} content={content} menu={
                            <Menu activityMenuLink={path} menu={articles.list.map(appendLink)}></Menu>
                        }></BlogDetail>
                    </Index>
                }
            }
        }),
    ],

    // 将 public 文件下所有内容 copy 到 dist 下
    assets: ['statics'],
}
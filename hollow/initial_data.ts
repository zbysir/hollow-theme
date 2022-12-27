import {Content} from "@bysir/hollow";

let pics = [
    {
        url: "https://images.pexels.com/photos/14208380/pexels-photo-14208380.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "Dior"
    },
    {
        url: "https://images.pexels.com/photos/5732095/pexels-photo-5732095.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "生日快乐"
    },

    {
        url: "https://images.pexels.com/photos/13458913/pexels-photo-13458913.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "Cat"
    },

    {
        url: "https://images.pexels.com/photos/14100684/pexels-photo-14100684.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "Tree"
    },

    {
        url: "https://images.pexels.com/photos/13960602/pexels-photo-13960602.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "Car auto-rows-auto auto-cols-auto photos photos photos photos photos photosgrid-flow-rowauto-rows-auto auto-cols-auto grid-flow-rowauto-rows-auto auto-cols-auto grid-flow-row"
    },
    {
        url: "https://images.pexels.com/photos/13915489/pexels-photo-13915489.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: ""
    },
];

export const defaultConfig = {
    logo: "Hollow Theme",
    stack: "Hollow",
    about_page_md: `# 关于 Hollow
Hollow 是一款自由度极高的静态博客生成器
`,
    links_page_md: `# 友链
- [Hollow](https://github.com/zbysir/hollow)`,
    gallery: {
        title: "照片与故事",
        items: pics
    },
    fonts: [
        {
            selector: "body",
            family: "Noto Serif SC"
        }
    ]
}

export const defaultContents: Content[] =
    [{
        name: "Demo",
        getContent: () => {
            return "<p>Hollow 主题的初始文章，这篇文章在你 新增 任意文章后就会消失。</p>"
        },
        meta: {
            tags: ["demo", "hello"],
            date: '2022-01-01',
            anchor: {
                "Hollow": {
                    title: "Hollow",
                    content_md: `### 相关文章
- [关于 Hollow](https://baidu.com)
`
                },
                "新增":{
                    title: "如何新增文章",
                    content_md: `[如何新增文章？](https://baidu.com)`
                }
            }
        },
        content: "",
        ext: "",
        is_dir: false,
    }]

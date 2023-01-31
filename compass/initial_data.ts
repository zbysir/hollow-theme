import {Content} from "@bysir/hollow";

export const defaultConfig = {
    logo: "Compass Theme",
    stack: "Hollow"
}

export const defaultContents: Content[] =
    [{
        name: "Demo",
        getContent: () => {
            return `<h1>开始使用</h1>
<h2>安装</h2>
<p>推荐使用 Docker</p>
<h1>疑难杂症</h1>
<p>这篇文章在你新增任意文章后就会消失。</p>`
        },
        meta: {
            tags: ["demo", "hello"],
            date: '2022-01-01'
        },
        content: "",
        ext: "",
        is_dir: false,
        children: [],
    }]


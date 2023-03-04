import Link from "../component/Link";
import BlogXS from "../component/BlogXS";

import hollow, {Content} from "@bysir/hollow"
import {sortBlog} from "../util";
import {defaultContents} from "../initial_data";
import Tag from "../component/Tag";

interface Props {
    selectedTag?: string
}

// 显示所有博客的页面
export default function TagPage(props: Props) {
    let contents = hollow.getContents('contents', {
        sort: sortBlog,
        page: 1,
        size: 20,
        filter: (a) => (a.meta?.export !== false)
    }).list;

    if (contents.length == 0) {
        contents = defaultContents
    }

    // tags 数量统计
    let tags = {}
    contents.forEach(i => {
        let items = i.meta?.tags;
        if (items) {
            items.forEach(i => {
                tags[i] = (tags[i] || 0) + 1
            })
        }
    })

    // 去重并生成 tag 数组并根据数量排序
    let tagArray = Array.from(new Set(Object.keys(tags))).map(i => ({
        name: i,
        count: tags[i],
    }))

    tagArray.sort(function (a, b) {
        return b.count - a.count
    })

    let showBlogs: Content[]

    if (props.selectedTag) {
        showBlogs = contents.filter(i => i.meta?.tags?.find(i => i === props.selectedTag))
    } else {
        // all
        showBlogs = contents
    }

    let byTime = {}

    showBlogs.forEach(i => {
        let date = i.meta?.date || '2022';
        let year = new Date(date).getFullYear()
        if (byTime[year]) {
            byTime[year].push(i)
        } else {
            byTime[year] = [i]
        }
    })
    let byTimes = []
    for (let byTimeKey in byTime) {
        byTimes.push({
            date: byTimeKey,
            blogs: byTime[byTimeKey]
        })
    }
    byTimes.sort((a, b) => {
        return b.date - a.date
    })

    return <div className="t-w-full t-px-5 t-py-6 t-max-w-6xl t-mx-auto t-space-y-5 sm:t-py-8 md:t-py-12 sm:t-space-y-8 md:t-space-y-8 ">
        <div className="t-flex t-flex-wrap t-space-x-3 t-justify-center t--mb-3">
            {
                tagArray.map(tag => (
                    <Link href={"/tags" + (tag.name === props.selectedTag ? '' : ('/' + tag.name))}
                          className={"t-mb-3"}>
                        <Tag text={tag.name} count={tag.count} active={tag.name === props.selectedTag}></Tag>
                    </Link>
                ))
            }
        </div>

        <div className="t-flex t-flex-col t-space-y-5">
            {
                byTimes.map(i => (
                    <div>
                        <h3 className="t-py-3 t-text-4xl xl:t-text-5xl t-font-bold dark:t-text-white t-text-center">{i.date}</h3>
                        <div className="t-flex t-flex-col t-space-y-4 t-py-3">
                            {i.blogs.map(i => <BlogXS blog={i}></BlogXS>)}
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
}

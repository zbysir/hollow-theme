import Container from "../component/Container";

interface Props {
    filepath?: string
    md?: string
}

import hollow from "@bysir/hollow"
import {anchor} from "../util/serviceside";

// 用来渲染 markdown，一般用在单页面
export default function MarkDown(props: Props) {
    let content = ""
    if (props.filepath) {
        const blog = hollow.getContentDetail(props.filepath)
        content = anchor(blog.content, blog.meta?.anchor)
    } else if (props.md) {
        content = hollow.md(props.md)
    }

    return <Container>
        <div className="prose dark:prose-invert min-w-full prose-p:my-1 prose-ul:my-1"
             dangerouslySetInnerHTML={{__html: content}}></div>
    </Container>

}
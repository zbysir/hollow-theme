import Container from "../component/Container";

interface Props {
    filepath: string
}

import hollow from "@bysir/hollow"

// 用来渲染 markdown，一般用在单页面
export default function MarkDown(props: Props) {
    const blog = hollow.getContentDetail(props.filepath)

    return <Container>
        <div className="prose dark:prose-invert min-w-full prose-p:my-1 prose-ul:my-1"
             dangerouslySetInnerHTML={{__html: blog.content}}></div>
    </Container>

}
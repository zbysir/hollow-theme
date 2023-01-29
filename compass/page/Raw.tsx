import Container from "../component/Container";

interface Props {
    filepath: string
}

import hollow from "@bysir/hollow"

// 用来渲染 markdown
export default function RawPage(props: Props) {
    const content = hollow.getContentDetail(props.filepath)

    return <Container>
        <div dangerouslySetInnerHTML={{__html: content.content}}></div>
    </Container>
}
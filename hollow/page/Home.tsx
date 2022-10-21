import BlogBig from "../component/BlogBig";
import Container from "../component/Container";

import {getArticles} from "@bysir/hollow"
import {sortBlog} from "../util";
import {defaultContents} from "../const";

let contents = getArticles('contents',
    {
        sort: sortBlog,
        page: 1,
        size: 20,
    }
).list


if (contents.length == 0) {
    contents = defaultContents
}
export default function Home() {
    return <section>
        <Container>
            <div className="space-y-4">
                {
                    contents.map(i => (<BlogBig blog={i}></BlogBig>))
                }
            </div>
        </Container>
    </section>
}

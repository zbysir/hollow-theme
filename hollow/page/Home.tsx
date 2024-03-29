import BlogBig from "../component/BlogBig";
import Container from "../component/Container";

import {getContents} from "@bysir/hollow"
import {sortBlog} from "../util";
import {defaultContents} from "../initial_data";

export default function Home() {
    let contents = getContents('contents',
        {
            sort: sortBlog,
            page: 1,
            size: 20,
            filter: a => (a.meta?.draft !== true && a.meta?.export !== false),
        }
    ).list

    if (contents.length == 0) {
        contents = defaultContents
    }

    return <section>
        <Container>
            <div className="t-space-y-4">
                {
                    contents.map(i => (<BlogBig blog={i}></BlogBig>))
                }
            </div>
        </Container>
    </section>
}

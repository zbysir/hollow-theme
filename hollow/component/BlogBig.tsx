import Link from "./Link";
import {articleRoute, dateFormat} from "../util";
import {Content} from "@bysir/hollow";

export default function BlogBig({blog}: { blog: Content }) {
    let link = articleRoute(blog)
    const name = blog.meta?.title || blog.name

    return <div className="t-relative t-group">
        <div className="
        t-relative
        t-flex t-flex-col t-w-full
        t-text-neutral-900 dark:t-text-neutral-100
        t-py-2 t-px-2 md:t-py-6 md:t-px-2
        t-text-center
    ">
            <div className="t-leading-relaxed ">
                <h1 className="t-text-xl xl:t-text-3xl t-font-bold" style={{lineHeight: '1.2'}}>
                    <Link href={link}>
                        {name}
                        {/*<p className="text-base	text-neutral-500 mt-2 opacity-0 hover:opacity-50">{blog.meta.desc}</p>*/}
                    </Link>
                </h1>
                <p className="t-pt-2 t-text-sm t-font-medium dark:t-text-neutral-300 t-text-neutral-700">
                    {
                        blog.meta?.featured ? <span>（置顶）</span> : null
                    }
                    <span className="mx-1">{dateFormat(new Date(blog.meta?.date), "mm-dd / YY")}</span>
                </p>
            </div>
        </div>

        {/* bg img */}

        {
            blog.meta?.img ? <div
                className="t-w-full t-h-full t-absolute t-inset-0 t-z-0
            t-bg-neutral-100 dark:t-bg-neutral-800
            t-rounded-lg
            t-shadow-md
            group-hover:t-opacity-50 t-opacity-0 t-transition-opacity t-duration-500"
            >
                {
                    <img className="t-object-cover t-w-full t-h-full t-rounded-lg t-max-h-64 t-shadow-md sm:t-max-h-96"
                         src={blog.meta?.img}/>
                }

            </div> : null
        }

    </div>


}

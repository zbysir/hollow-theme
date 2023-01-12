import Link from "./Link";
import {articleRoute, dateFormat} from "../util";
import {Content} from "@bysir/hollow";
import Tag from "./Tag";


export default function BlogXS({blog}: { blog: Content }) {
    let link = articleRoute(blog)
    let name = blog.meta?.title || blog.name

    return <div className="">
        <div className="t-flex t-items-center t-space-x-2 md:t-space-x-4">
            <div className="t-w-1/2 t-text-right">
                <h2 className="t-font-bold t-text-xl">
                    <Link href={link} className={""}>
                        <p><span>{name}</span></p>
                        <p className="t-mt-0.5 t-text-sm t-text-neutral-500">{dateFormat(new Date(blog.meta?.date), "mm-dd")}</p>
                    </Link>
                </h2>

            </div>
            <div className="t-w-1/2 t-flex t-flex-col t-space-y-1">
                <div className="t-flex t-space-x-1 t-items-center">
                    <p className="t-text-sm">{blog.meta.draft ? <span className="t-text-xs">[Draft]</span> : null} <Link
                        href={link} className={"t-text-neutral-500"}>{blog.meta.desc}</Link></p>
                </div>

                <div className="t-flex t-space-x-3">
                    {
                        (function () {
                            let tags = blog.meta?.tags
                            if (typeof tags === "string") {
                                tags = [tags]
                            }

                            return tags?.map(i => (
                                <Link href={"/tags/" + i}>
                                    <Tag text={i}/>
                                </Link>
                            ))
                        })()
                    }
                </div>
            </div>


        </div>


    </div>

}

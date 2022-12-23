import Link from "./Link";
import {articleRoute, dateFormat} from "../util";
import {Content} from "@bysir/hollow";


export default function BlogXS({blog}: { blog: Content }) {
    let link = articleRoute(blog)
    let name = blog.meta?.title || blog.name

    return <div className="">
        <div className="flex items-center space-x-2 md:space-x-4">
            <div className="w-1/2 text-right">
                <h2 className="font-bold text-xl">
                    <Link href={link} className={""}>
                        <p><span>{name}</span></p>
                        <p className="mt-0.5 text-sm text-gray-500">{dateFormat(new Date(blog.meta?.date), "mm-dd")}</p>
                    </Link>
                </h2>

            </div>
            <div className="w-1/2 flex flex-col space-y-1">
                <div className="flex space-x-1 items-center">
                    <p className="text-sm">{blog.meta.draft ? <span className="text-xs">[Draft]</span> : null} <Link
                        href={link} className={"text-gray-500"}>{blog.meta.desc}</Link></p>
                </div>

                <div className="flex space-x-3">
                    {
                        (function () {
                            let tags = blog.meta?.tags
                            if (typeof tags === "string") {
                                tags = [tags]
                            }

                            return tags?.map(i => (
                                <Link href={"/tags/" + i}>
                                    <div
                                        className="bg-gray-500 items-center px-1 py-1 leading-none rounded-full text-xs font-medium text-white ">
                                        <span>{i}</span>
                                    </div>
                                </Link>
                            ))
                        })()
                    }
                </div>
            </div>


        </div>


    </div>

}

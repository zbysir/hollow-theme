import { dateFormat} from "../util";
import {anchor} from "../util/serviceside";
import Tag from "../component/Tag";
import {Toc} from "../component/Toc";
import {Content} from "@bysir/hollow";

export default function BlogDetail(props: Content) {
    let tags = props.meta?.tags
    let name = props.meta?.title || props.name
    let content = anchor(props.content, props.meta?.anchor)

    return <div className="t-container t-mx-auto t-max-w-6xl t-py-6 t-px-5 md:t-py-12 hollow-content">
        <div className="t-flex">
            {/* content */}
            <div className="t-flex t-flex-1 t-justify-center t-max-w-full">
                <div className="
                    t-prose
                    prose-h1:t-text-3xl
                    prose-img:t-rounded-lg
                    prose-pre:t-text-xs
                    prose-code:t-text-xs prose-code:t-px-2 prose-code:t-py-1
                    t-max-w-2xl t-w-full
                    t-break-words">
                    <h1 className="t-inline-flex t-items-start t-space-x-1"><span>{name}</span> {props.meta?.draft ?
                        <span className="t-text-xs">[Draft]</span> : null}</h1>
                    <div className="t-leading-snug t-flex t-flex-wrap t-space-x-3 t-mb-6">
                        <div><span>{dateFormat(new Date(props.meta?.date), "mm-dd / YY")}</span></div>
                        {
                            tags?.map(i => <Tag text={i}></Tag>)
                        }
                    </div>

                    <div dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
            </div>

            {/* toc */}
            {props.toc?.length ?<div className="t-w-72 t-hidden md:t-block t-pl-4 t-relative">
                <div className="t-sticky t-top-0 t-py-5 t-max-h-screen t-overflow-auto t-overscroll-none">
                    <Toc items={props.toc} level={-1}/>
                </div>
            </div>:null}

        </div>

    </div>

}

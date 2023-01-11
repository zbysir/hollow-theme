import { dateFormat} from "../util";
import {anchor} from "../util/serviceside";

interface Props {
    name: string,
    content: string
    meta?: any
}

export default function BlogDetail(props: Props) {
    let tags = props.meta?.tags
    let name = props.meta?.title || props.name
    let content = anchor(props.content, props.meta?.anchor)

    return <div className="t-container t-mx-auto t-max-w-6xl t-py-6 t-px-5 md:t-py-12 hollow-content">
        <div className="t-flex t-justify-center	">
            <div className="
            t-prose dark:t-prose-invert
            prose-img:t-rounded-lg
            prose-pre:t-text-xs
            prose-code:t-text-xs prose-code:t-px-2 prose-code:t-py-1
            t-max-w-2xl t-w-full">
                <h2 className="t-inline-flex t-items-start t-space-x-1"> <span>{name}</span> {props.meta?.draft ? <span className="t-text-xs">[Draft]</span> : null}</h2>
                <div className="t-flex t-flex-wrap t-space-x-3 t-mb-8">
                    <div><span className="">{dateFormat(new Date(props.meta?.date), "mm-dd / YY")}</span></div>
                    {
                        tags?.map(i => (
                            <div
                                className="t-bg-neutral-600 t-flex t-items-center t-px-3 t-py-1.5 t-leading-none t-rounded-full t-text-xs t-font-medium t-text-white t-inline-block">
                                <span>{i}</span>
                            </div>
                        ))
                    }
                </div>

                <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        </div>
    </div>

}

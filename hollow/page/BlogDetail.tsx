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

    return <div className="container mx-auto max-w-6xl py-6 px-5 md:py-12 hollow-content">
        <div className="flex justify-center	">
            <div className="
            prose dark:prose-invert
            prose-img:rounded-lg
            prose-pre:text-xs
            prose-code:text-xs prose-code:px-2 prose-code:py-1
            max-w-2xl w-full">
                <h2 className="inline-flex items-start space-x-1"> <span>{name}</span> {props.meta?.draft ? <span className="text-xs">[Draft]</span> : null}</h2>
                <div className="flex flex-wrap space-x-3 mb-8">
                    <div><span className="">{dateFormat(new Date(props.meta?.date), "mm-dd / YY")}</span></div>
                    {
                        tags?.map(i => (
                            <div
                                className="bg-gray-600 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium text-white inline-block">
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

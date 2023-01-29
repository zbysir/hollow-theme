import {dateFormat} from "../utilx";
import {Toc} from "../component/Toc";
import {Content} from "@bysir/hollow";


export default function BlogDetail(props: Content & {menu: any}) {
    let tags = props.meta?.tags
    let name = props.meta?.title || props.name

    return <div className="tw-container tw-mx-auto tw-max-w-6xl tw-py-6 tw-px-5 md:tw-py-12">
        <div className="tw-flex">
            <div className="tw-w-60">
                {props.menu}
            </div>
            <div className="tw-flex-1">
                <div className="tw-flex tw-justify-center	">
                    <div className="tw-prose dark:tw-prose-invert tw-prose-img:rounded-lg tw-max-w-2xl">
                        <h2> {name} </h2>
                        <div className="tw-flex tw-flex-wrap tw-space-x-3 tw-mb-8">
                            {props.meta?.date ?
                                <div><span className="">{dateFormat(new Date(props.meta?.date), "mm-dd / YY")}</span>
                                </div> :
                                null
                            }
                            {
                                tags?.map(i => (
                                    <div
                                        className="tw-flex tw-items-center tw-text-gray-400">
                                        <span>#{i}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div dangerouslySetInnerHTML={{__html: props.content}}></div>
                    </div>
                </div>
            </div>

            <div className="tw-w-60 tw-hidden md:tw-block">
                <Toc items={props.toc}/>
            </div>
        </div>


    </div>

}
import {Toc} from "../component/Toc";
import {Content} from "@bysir/hollow";
import {articleRoute} from "../util";

interface Props extends Content {
    menu: any
    next?: Content
    prev?: Content
}

export default function BlogDetail(props: Props) {
    let name = props.meta?.title || props.name

    return <div x-data className="tw-container tw-mx-auto tw-max-w-6xl tw-py-6 tw-px-5 md:tw-py-12">
        {/* slide-overs */}
        {/*https://tailwindui.com/components/application-ui/overlays/slide-overs*/}

        {/* menu for mobile */}
        <div x-show="$store.isOpen" x-cloak className="tw-relative tw-z-10" aria-labelledby="slide-over-title"
             role="dialog"
             aria-modal="true">
            <div
                x-show="$store.isOpen"
                x-transition:enter="tw-ease-in-out tw-duration-500"
                x-transition:enter-start="tw-opacity-0"
                x-transition:enter-end="tw-opacity-100"
                x-transition:leave="tw-ease-in-out tw-duration-500"
                x-transition:leave-start="tw-opacity-100"
                x-transition:leave-end="tw-opacity-0"
                className="tw-fixed tw-inset-0 tw-bg-gray-500 tw-bg-opacity-50 tw-transition-opacity"></div>
            <div className="tw-fixed tw-inset-0 tw-overflow-hidden">
                <div className="tw-absolute tw-inset-0 tw-overflow-hidden">
                    <div
                        className="tw-pointer-events-none tw-fixed tw-inset-y-0 tw-right-0 tw-flex tw-max-w-full tw-pr-20">
                        {/* Slide-over panel */}
                        <div
                            x-show="$store.isOpen"
                            x-transition:enter="tw-transform tw-transition tw-ease-in-out tw-duration-500 sm:tw-duration-700"
                            x-transition:enter-start="-tw-translate-x-full"
                            x-transition:enter-end="tw-translate-x-0"
                            x-transition:leave="tw-transform tw-transition tw-ease-in-out tw-duration-500 sm:tw-duration-700"
                            x-transition:leave-start="tw-translate-x-0"
                            x-transition:leave-end="-tw-translate-x-full"
                            className="tw-pointer-events-auto tw-relative tw-w-screen">

                            {/* Close button */}
                            <div
                                className="tw-absolute tw-top-0 tw-right-0 tw--ml-8 tw-flex tw-pt-4 tw-pr-2 sm:tw--ml-10 sm:tw-pr-4">
                                <button
                                    x-on:click="$store.isOpen = !isOpen"
                                    type="button"
                                    className="tw-rounded-md hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white">
                                    <span className="tw-sr-only">Close panel</span>
                                    <svg className="tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                         aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                            <div
                                x-on:click__outside="$store.isOpen = false"
                                className="tw-flex tw-h-full tw-flex-col tw-overflow-y-scroll tw-bg-base-100 tw-py-6 tw-shadow-xl">

                                <div className="tw-relative tw-mt-6 tw-flex-1 tw-px-4 sm:tw-px-6">
                                    <div className="tw-w-60">
                                        {props.menu}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tw-flex">
            {/* menu for pc */}
            <div className="tw-w-60 tw-hidden md:tw-block tw-pr-4 tw-relative">
                <div className="tw-sticky tw-top-5">
                    {props.menu}
                </div>
            </div>

            {/* content */}
            <div className="tw-flex-1 tw-w-[0px]">
                <h1 className="tw-text-4xl tw-font-bold tw-mb-6"> {name} </h1>
                <div className="tw-prose prose-img:rounded-lg
                prose-h1:tw-text-3xl
                tw-max-w-2xl" dangerouslySetInnerHTML={{__html: props.content}}>
                </div>

                <div className="tw-border-b tw-border-base-200 tw-my-6"></div>

                <div className="tw-flex">
                    {
                        props.prev ? <a href={articleRoute(props.prev,"/docs/")} className="tw-group tw-w-1/2">
                            <div className="tw-text-left ">
                                <h3>上一篇</h3>
                                <h3 className="tw-text-lg group-hover:tw-text-primary tw-transition-colors">« {props.prev?.meta?.title}</h3>
                            </div>
                        </a> : <div className="tw-w-1/2"></div>
                    }
                    {
                        props.next ? <a href={articleRoute(props.next,"/docs/")} className="tw-group tw-w-1/2">
                            <div className="tw-text-right tw-text-lg">
                                <h3>下一篇</h3>
                                <h3 className="tw-text-lg group-hover:tw-text-primary tw-transition-colors">{props.next?.meta?.title} »</h3>
                            </div>
                        </a> : <div className="tw-w-1/2"></div>
                    }

                </div>
            </div>

            {/* toc */}
            <div className="tw-w-60 tw-hidden md:tw-block tw-pl-4 tw-relative">
                <div className="tw-sticky tw-top-5">
                    <Toc items={props.toc}/>
                </div>
            </div>
        </div>


    </div>

}

interface About {
    title: any
    desc: any
    content: string
}

interface Props {
    about: About[]
}

import hollow from "@bysir/hollow"
let params = hollow.getConfig();

export default function About() {
    const about = params.about
    return <div>
        <section>
            <div
                className="tw-max-w-6xl tw-mx-auto tw-w-full
                tw-px-5 tw-py-6 sm:tw-py-8 md:tw-py-12
                tw-space-y-8 md:tw-space-y-12
                dark:tw-text-white
                ">
                {
                    about.map(i => (
                        <div>
                            <div className="  ">
                                <h2 className="tw-text-2xl xl:tw-text-2xl tw-font-bold">{i.title}</h2>
                            </div>
                            <div className="mt-3 md:mt-4">
                                <p className="tw-text-lg tw-text-gray-700 dark:tw-text-gray-300">{i.desc}</p>
                            </div>
                            <div
                                className="
                                tw-prose dark:tw-prose-invert
                                tw-max-w-none tw-prose-p:my-1 tw-prose-ul:my-1 tw-prose-ul:list-outside
                                tw-mt-3 md:tw-mt-4"
                                dangerouslySetInnerHTML={{__html: hollow.md(i.content)}}>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
}
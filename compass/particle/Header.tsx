import Link from "../component/Link";

export default function Header(props: { name: string, active: string }) {
    const menus = [
        {href: '/docs', name: 'Docs'},
        {href: 'https://github.com/zbysir/hollow', name: 'GitHub'},
    ].map(i => ({
            ...i,
            active: i.name === props.active
        }
    ))

    let thin = false
    return <div
    >
        {/* copy from https://devdojo.com/tails/v1/app#_ */}
        <section className="tw-w-full
        tw-bg-white
        tw-border-b tw-border-base-200">
            <div
                className="
                tw-container tw-flex tw-flex-col tw-flex-wrap tw-items-center
                tw-mx-auto md:tw-flex-row tw-max-w-6xl tw-px-5 tw-py-1">
                <div className="tw-relative tw-flex tw-flex-col md:tw-flex-row tw-max-w-full">
                    <div className="tw-flex tw-items-center tw-justify-center
                     tw-pt-2 tw-pb-1 md:tw-pb-2 md:tw-my-0
                    ">
                        <Link href="/"
                              className="tw-flex tw-font-medium ">
                            <span
                                className={`tw-text-xl ${thin ? 'tw-font-extralight' : 'tw-font-black'} tw-leading-none tw-select-none`}>
                                {props.name}
                            </span>
                        </Link>
                    </div>

                    <div className="md:tw-py-3">
                        <div className="md:tw-pl-4 md:tw-ml-4 md:tw-border-l md:tw-border-neutral tw-h-full"></div>
                    </div>
                    <nav
                        className={`tw-flex tw-space-x-2 tw-overflow-x-auto tw-items-center tw-text-lg
                        tw-tracking-wide
                        md:tw-border-neutral
                        ${thin ? 'tw-font-extralight' : 'tw-font-medium'}`}>
                        {
                            menus.map(i => (
                                <Link
                                    href={i.href}
                                    className={`tw-p-2 tw-transition tw-duration-150
                                        ${i.active? "tw-opacity-100": "tw-opacity-75 hover:tw-opacity-100"}
                                `}>{i.name}</Link>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </section>
    </div>
}
